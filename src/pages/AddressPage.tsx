import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import revolutLogo from "@/assets/revolut-logo.png";
import { CheckCircle2, Loader2 } from "lucide-react";

interface AddressData {
  rua: string;
  localidade: string;
  concelho: string;
  distrito: string;
  designacao: string;
}

const AddressPage = () => {
  const navigate = useNavigate();
  const clientName = sessionStorage.getItem("client_name") || "Cliente";
  const firstName = clientName.split(" ")[0];

  const [postalCode, setPostalCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [addressData, setAddressData] = useState<AddressData | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [manual, setManual] = useState(false);
  const [manualAddress, setManualAddress] = useState("");
  const [error, setError] = useState("");

  const formatPostalCode = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 7);
    if (digits.length > 4) {
      return `${digits.slice(0, 4)}-${digits.slice(4)}`;
    }
    return digits;
  };

  const handlePostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPostalCode(e.target.value);
    setPostalCode(formatted);
    setAddressData(null);
    setConfirmed(false);
    setManual(false);
    setError("");
  };

  useEffect(() => {
    const digits = postalCode.replace(/\D/g, "");
    if (digits.length !== 7) {
      setAddressData(null);
      return;
    }

    const controller = new AbortController();
    const fetchAddress = async () => {
      setLoading(true);
      setError("");
      try {
        const cp4 = digits.slice(0, 4);
        const cp3 = digits.slice(4, 7);
        const res = await fetch(
          `https://json.geoapi.pt/cp/${cp4}-${cp3}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("not found");
        const data = await res.json();
        const rua = data.partes?.[0]?.["Artéria"] || data.partes?.[0]?.Artéria || "";
        setAddressData({
          rua,
          localidade: data.Localidade || data.localidade || "",
          concelho: data.Concelho || data.concelho || "",
          distrito: data.Distrito || data.distrito || "",
          designacao: data["Designação Postal"] || "",
        });
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError("Código postal não encontrado. Preenche a morada manualmente.");
          setManual(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchAddress();
    return () => controller.abort();
  }, [postalCode]);

  const fullAddress = addressData
    ? `${addressData.rua ? addressData.rua + ", " : ""}${addressData.localidade}, ${addressData.concelho}, ${addressData.distrito}`
    : "";

  const canProceed = confirmed || (manual && manualAddress.trim().length > 5);

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto flex flex-col px-5">
      <header className="flex items-center pt-6 pb-4">
        <img src={revolutLogo} alt="Revolut" className="h-10" />
      </header>

      <div className="flex-1 flex flex-col pt-6">
        <h1
          className="text-2xl font-bold text-foreground leading-tight"
          style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}
        >
          {firstName}, qual é a tua morada?
        </h1>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          Introduz o teu código postal para encontrarmos a tua morada. É para lá que vamos enviar o teu cartão de crédito.
        </p>

        <div className="mt-8 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="postal-code">Código Postal</Label>
            <Input
              id="postal-code"
              placeholder="0000-000"
              value={postalCode}
              onChange={handlePostalCodeChange}
              maxLength={8}
              className="text-lg tracking-wider"
            />
          </div>

          {loading && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="w-4 h-4 animate-spin" />
              A procurar morada...
            </div>
          )}

          {addressData && !manual && (
            <div className="rounded-2xl border-2 border-border p-4 space-y-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Morada encontrada
              </p>
              <p className="text-sm text-foreground leading-relaxed">{fullAddress}</p>
              <p className="text-sm text-foreground">{postalCode}</p>

              {!confirmed ? (
                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    className="rounded-full text-xs font-semibold"
                    onClick={() => setConfirmed(true)}
                  >
                    Está correto
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="rounded-full text-xs font-semibold"
                    onClick={() => setManual(true)}
                  >
                    Não está correto
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-sm text-accent font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  Morada confirmada
                </div>
              )}
            </div>
          )}

          {error && !addressData && (
            <p className="text-sm text-destructive">{error}</p>
          )}

          {manual && (
            <div className="space-y-2">
              <Label htmlFor="manual-address">Morada completa</Label>
              <Input
                id="manual-address"
                placeholder="Rua, número, andar, localidade"
                value={manualAddress}
                onChange={(e) => setManualAddress(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>

      <div className="pb-10 pt-6">
        <Button
          disabled={!canProceed}
          onClick={() => {/* TODO: next step */}}
          className="w-full rounded-full font-semibold py-7 text-base pulse"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default AddressPage;
