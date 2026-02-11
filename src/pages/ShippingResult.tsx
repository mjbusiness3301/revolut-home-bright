import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import revolutLogo from "@/assets/revolut-logo.png";
import cttLogo from "@/assets/ctt-logo.png";
import cardBanner from "@/assets/revolut-card-banner.jpg";
import { MapPin, CreditCard, Wallet, Truck } from "lucide-react";
import MbwayPaymentDrawer from "@/components/MbwayPaymentDrawer";

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

  const [selectedShipping, setSelectedShipping] = useState<"comum" | "expresso">("comum");
  const [paymentOpen, setPaymentOpen] = useState(false);

  const shippingPrice = selectedShipping === "expresso" ? "€13,00" : "€9,00";

  const formatCurrency = (value: number) =>
    "€" + value.toLocaleString("pt-PT", { minimumFractionDigits: 2 });

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto flex flex-col px-5">
      <header className="flex items-center pt-6 pb-4">
        <img src={revolutLogo} alt="Revolut" className="h-10" />
      </header>

      <div className="flex-1 overflow-y-auto pb-4">
        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-6 px-2">
          <div className="flex flex-col items-center gap-1.5 z-10">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center animate-scale-in">
              <CreditCard className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-[10px] font-semibold text-primary text-center leading-tight w-16">Cartão e limite aprovado</span>
          </div>
          <div className="flex-1 h-1 bg-secondary mx-1 -mt-6 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full"
              style={{
                animation: "progress-fill 1.2s ease-out 0.3s forwards",
                width: "0%",
              }}
            />
          </div>
          <div
            className="flex flex-col items-center gap-1.5 z-10"
          >
            <div className="w-10 h-10 rounded-full bg-muted border-2 border-dashed border-muted-foreground/40 flex items-center justify-center">
              <Truck className="w-5 h-5 text-muted-foreground" />
            </div>
            <span className="text-[10px] font-semibold text-muted-foreground text-center leading-tight w-16">Método de envio</span>
          </div>
        </div>

        <style>{`
          @keyframes progress-fill {
            from { width: 0%; }
            to { width: 50%; }
          }
        `}</style>

        <div className="rounded-2xl overflow-hidden mb-6">
          <img src={cardBanner} alt="Revolut Card" className="w-full h-32 object-cover" />
        </div>

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
                <p className="text-sm font-bold text-foreground">€9,00</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                1 dia de produção + 7 dias de envio
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
                <p className="text-sm font-bold text-foreground">€13,00</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                1 dia de produção + 1 dia de envio · Paga em até 10 minutos e é enviado no mesmo dia
              </p>
              <CountdownBar />
            </div>
          </button>
        </div>
      </div>

      <div className="sticky bottom-0 bg-background pb-8 pt-4">
        <Button
          disabled={!selectedShipping}
          onClick={() => setPaymentOpen(true)}
          className="w-full rounded-full font-semibold py-7 text-base pulse"
        >
          Confirmar envio
        </Button>
      </div>

      <MbwayPaymentDrawer
        open={paymentOpen}
        onOpenChange={setPaymentOpen}
        amount={shippingPrice}
      />
    </div>
  );
};

export default ShippingResult;
