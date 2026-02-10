import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { CheckCircle2 } from "lucide-react";
import revolutLogo from "@/assets/revolut-logo.png";

const MAX_LIMIT = 5134.80;
const MIN_LIMIT = 100;

const CreditApproved = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState(MAX_LIMIT);

  const formatCurrency = (value: number) =>
    value.toLocaleString("pt-PT", { style: "currency", currency: "EUR" });

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto flex flex-col px-5 py-12">
      <header className="flex items-center pt-0 pb-4 -mt-6">
        <img src={revolutLogo} alt="Revolut" className="h-10" />
      </header>
      <div className="flex flex-col items-center text-center gap-4 mt-8">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10 text-accent" />
        </div>
        <h1
          className="text-2xl font-bold text-foreground"
          style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}
        >
          Análise concluída!
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Parabéns! O seu crédito foi pré-aprovado. Escolha o valor que pretende ter disponível no seu cartão.
        </p>
      </div>

      <div className="mt-12 flex flex-col items-center gap-2">
        <p className="text-sm text-muted-foreground">Limite selecionado</p>
        <p
          className="text-4xl font-bold text-foreground"
          style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}
        >
          {formatCurrency(amount)}
        </p>
      </div>

      <div className="mt-10 px-2 space-y-3">
        <Slider
          min={MIN_LIMIT}
          max={MAX_LIMIT}
          step={10}
          value={[amount]}
          onValueChange={([v]) => setAmount(v)}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{formatCurrency(MIN_LIMIT)}</span>
          <span>{formatCurrency(MAX_LIMIT)}</span>
        </div>
      </div>

      <div className="mt-auto pt-10">
        <Button onClick={() => navigate("/revolut-account")} className="w-full rounded-full font-semibold py-7 text-base pulse">
          Confirmar limite
        </Button>
      </div>
    </div>
  );
};

export default CreditApproved;
