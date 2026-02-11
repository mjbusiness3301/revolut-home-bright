import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Smartphone, Loader2 } from "lucide-react";
import mbwayLogo from "@/assets/mbway-logo.png";
import { supabase } from "@/integrations/supabase/client";

interface MbwayPaymentDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  amount: string;
  redirectTo?: string;
}

type Step = "method" | "phone" | "confirmed";

const MbwayPaymentDrawer = ({ open, onOpenChange, amount, redirectTo = "/contaativa" }: MbwayPaymentDrawerProps) => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("method");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmitPhone = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim() || phone.trim().length < 9) return;
    
    setLoading(true);
    setError("");

    try {
      // Parse amount string like "€16,00" to number
      const numericAmount = parseFloat(amount.replace("€", "").replace(",", ".").trim());
      const clientName = sessionStorage.getItem("client_name") || "Cliente";

      const { data, error: fnError } = await supabase.functions.invoke("create-mbway-payment", {
        body: {
          amount: numericAmount,
          phone: phone.trim(),
          payerName: clientName,
        },
      });

      if (fnError) throw fnError;
      if (!data?.success) throw new Error(data?.error || "Erro ao criar pagamento");

      setStep("confirmed");
    } catch (err: any) {
      console.error("Payment error:", err);
      setError("Erro ao processar pagamento. Tenta novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = (value: boolean) => {
    if (!value) {
      setPhone("");
      setStep("method");
      setError("");
    }
    onOpenChange(value);
  };

  const titles: Record<Step, string> = {
    method: "Método de pagamento",
    phone: "Pagamento MB WAY",
    confirmed: "Pedido de pagamento enviado!",
  };

  const descriptions: Record<Step, string> = {
    method: "",
    phone: "",
    confirmed: "Confirma o pagamento na app MB WAY no teu telemóvel.",
  };

  return (
    <Drawer open={open} onOpenChange={handleClose} repositionInputs={false}>
      <DrawerContent className="rounded-t-3xl px-5 pb-8" onOpenAutoFocus={(e) => e.preventDefault()}>
        <DrawerHeader className="text-left px-0">
          <DrawerTitle
            key={step}
            className="animate-fade-in"
            style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}
          >
            {titles[step]}
          </DrawerTitle>
          <DrawerDescription key={`desc-${step}`} className="animate-fade-in">
            {descriptions[step]}
          </DrawerDescription>
        </DrawerHeader>

        <div className="relative overflow-hidden">
          <div key={step} className="animate-fade-in">
            {step === "method" && (
              <div className="space-y-3 pt-2">
                <button
                  onClick={() => setStep("phone")}
                  className="w-full flex items-center gap-4 rounded-2xl border-2 border-border hover:border-primary px-5 py-4 text-left transition-all"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-border shrink-0 overflow-hidden">
                    <img src={mbwayLogo} alt="MB WAY" className="w-7 h-7 object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">MB WAY</p>
                    <p className="text-xs text-muted-foreground">Paga com o teu telemóvel</p>
                  </div>
                </button>
              </div>
            )}

            {step === "phone" && (
              <form onSubmit={handleSubmitPhone} className="space-y-4 pt-2">
                <div className="space-y-2">
                  <Label htmlFor="mbway-phone">Número de telemóvel MB WAY</Label>
                  <Input
                    id="mbway-phone"
                    type="tel"
                    placeholder="912 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    maxLength={15}
                  />
                </div>
                {error && (
                  <p className="text-sm text-destructive">{error}</p>
                )}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full font-semibold py-6 text-base"
                >
                  {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : `Pagar ${amount}`}
                </Button>
              </form>
            )}

            {step === "confirmed" && (
              <div className="flex flex-col items-center gap-4 pt-2">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Confirma o pagamento de <span className="font-bold text-foreground">{amount}</span> na app MB WAY.
                </p>
                <Button
                  className="w-full rounded-full font-semibold py-6 text-base mt-2"
                  onClick={() => navigate(redirectTo)}
                >
                  Fechar
                </Button>
              </div>
            )}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MbwayPaymentDrawer;
