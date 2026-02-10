import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const options = [
  { label: "A", text: "Trabalho formal com contrato" },
  { label: "B", text: "Negócio próprio / Empreendedorismo" },
  { label: "C", text: "Trabalho informal" },
  { label: "D", text: "Reforma ou pensão / Sem rendimentos fixos" },
];

const Quiz = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative flex flex-col">
      <header className="flex items-center px-5 pt-6 pb-4">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-muted transition-colors">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <span className="ml-2 text-sm text-muted-foreground">1 / 5</span>
      </header>

      <div className="flex-1 px-5 pb-8 flex flex-col">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Informação Pessoal</p>
        <h1 className="text-2xl font-bold text-foreground leading-tight mb-1" style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}>
          Tipo de Rendimento
        </h1>
        <p className="text-base text-muted-foreground mb-8">
          Qual é a principal fonte dos seus rendimentos?
        </p>

        <div className="space-y-3 flex-1">
          {options.map((opt) => (
            <button
              key={opt.label}
              onClick={() => setSelected(opt.label)}
              className={`w-full flex items-center gap-4 rounded-2xl border-2 px-5 py-4 text-left transition-all ${
                selected === opt.label
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-muted-foreground/30"
              }`}
            >
              <span className={`flex items-center justify-center w-9 h-9 rounded-full text-sm font-bold shrink-0 ${
                selected === opt.label
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}>
                {opt.label}
              </span>
              <span className="text-sm font-medium text-foreground">{opt.text}</span>
            </button>
          ))}
        </div>

        <Button
          disabled={!selected}
          className="rounded-full font-semibold py-6 text-base w-full mt-6"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default Quiz;
