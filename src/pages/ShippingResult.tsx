import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import revolutLogo from "@/assets/revolut-logo.png";
import cttLogo from "@/assets/ctt-logo.png";
import { MapPin, CreditCard, Wallet } from "lucide-react";

const CountdownBar = () => {
  const [remaining, setRemaining] = useState(600); // 10 min = 600s

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining((prev) => (prev <= 0 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(remaining / 60);
  const seconds = remaining % 60;
  const percent = (remaining / 600) * 100;

  return (
    <div className="mt-3">
      <div className="flex items-center justify-between mb-1.5">
        <p className="text-xs font-semibold text-destructive">Tempo restante</p>
        <p className="text-xs font-bold text-destructive tabular-nums">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </p>
      </div>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full bg-destructive transition-all duration-1000 ease-linear rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

const ShippingResult = () => {
  const navigate = useNavigate();
  const clientName = sessionStorage.getItem("client_name") || "Cliente";
  const creditLimit = parseFloat(sessionStorage.getItem("credit_limit") || "5134.80");
  const cardColor = sessionStorage.getItem("card_color") || "Black";
  const clientAddress = sessionStorage.getItem("client_address") || "—";

  const [selectedShipping, setSelectedShipping] = useState<"comum" | "expresso" | null>(null);

  const formatCurrency = (value: number) =>
    value.toLocaleString("pt-PT", { style: "currency", currency: "EUR" });

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto flex flex-col px-5">
      <header className="flex items-center pt-6 pb-4">
        <img src={revolutLogo} alt="Revolut" className="h-10" />
      </header>

      <div className="flex-1 flex flex-col pt-4">
        <h1
          className="text-2xl font-bold text-foreground leading-tight"
          style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}
        >
          Resumo do teu pedido
        </h1>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          Confirma os dados e escolhe o método de envio do teu cartão.
        </p>

        <div className="mt-6 space-y-3">
          <div className="flex items-start gap-3 rounded-2xl border border-border p-4">
            <Wallet className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Nome</p>
              <p className="text-sm font-semibold text-foreground">{clientName}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-border p-4">
            <CreditCard className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Cartão & Limite</p>
              <p className="text-sm font-semibold text-foreground">
                Cartão {cardColor} · {formatCurrency(creditLimit)}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 rounded-2xl border border-border p-4">
            <MapPin className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
            <div>
              <p className="text-xs text-muted-foreground">Morada de envio</p>
              <p className="text-sm font-semibold text-foreground">{clientAddress}</p>
            </div>
          </div>
        </div>

        <h2
          className="text-lg font-bold text-foreground mt-8 mb-4"
          style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}
        >
          Método de envio
        </h2>

        <div className="space-y-3">
          <button
            onClick={() => setSelectedShipping("comum")}
            className={`w-full flex items-start gap-4 rounded-2xl border-2 px-5 py-5 text-left transition-all ${
              selectedShipping === "comum"
                ? "border-primary bg-primary/5"
                : "border-border hover:border-muted-foreground/30"
            }`}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full shrink-0 bg-white border border-border overflow-hidden">
              <img src={cttLogo} alt="CTT" className="w-7 h-7 object-contain" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-foreground">CTT Comum</p>
                <p className="text-sm font-bold text-foreground">9,00 €</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Envio em até 8 dias úteis
              </p>
            </div>
          </button>

          <button
            onClick={() => setSelectedShipping("expresso")}
            className={`w-full flex items-start gap-4 rounded-2xl border-2 px-5 py-5 text-left transition-all ${
              selectedShipping === "expresso"
                ? "border-primary bg-primary/5"
                : "border-border hover:border-muted-foreground/30"
            }`}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full shrink-0 bg-white border border-border overflow-hidden">
              <img src={cttLogo} alt="CTT" className="w-7 h-7 object-contain" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-foreground">CTT Expresso</p>
                <p className="text-sm font-bold text-foreground">13,00 €</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Envio em até 1 dia útil · Paga em até 10 minutos e é enviado no mesmo dia
              </p>
              {selectedShipping === "expresso" && <CountdownBar />}
            </div>
          </button>
        </div>
      </div>

      <div className="pb-10 pt-6">
        <Button
          disabled={!selectedShipping}
          onClick={() => {/* TODO: next step */}}
          className="w-full rounded-full font-semibold py-7 text-base pulse"
        >
          Confirmar envio
        </Button>
      </div>
    </div>
  );
};

export default ShippingResult;
