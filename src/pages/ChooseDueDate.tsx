import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import revolutLogo from "@/assets/revolut-logo.png";

const dueDays = [1, 5, 10, 15, 20, 25] as const;

const ChooseDueDate = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<number | null>(null);

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
          Escolhe a data de vencimento
        </h1>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          Em que dia do mês preferes que a fatura do teu cartão de crédito seja cobrada?
        </p>

        <div className="grid grid-cols-3 gap-3 mt-8">
          {dueDays.map((day) => (
            <button
              key={day}
              onClick={() => setSelected(day)}
              className={`flex flex-col items-center justify-center rounded-2xl border-2 px-4 py-5 transition-all ${
                selected === day
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-muted-foreground/30"
              }`}
            >
              <span
                className={`text-2xl font-bold ${
                  selected === day ? "text-primary" : "text-foreground"
                }`}
                style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}
              >
                {day}
              </span>
              <span className="text-xs text-muted-foreground mt-1">
                de cada mês
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="pb-10 pt-6">
        <Button
          disabled={!selected}
          onClick={() => navigate("/address")}
          className="w-full rounded-full font-semibold py-7 text-base pulse"
        >
          Confirmar data
        </Button>
      </div>
    </div>
  );
};

export default ChooseDueDate;
