import { useState } from "react";
import { Button } from "@/components/ui/button";
import revolutLogo from "@/assets/revolut-logo.png";

const questions = [
  {
    category: "Informação Pessoal",
    title: "Tipo de Rendimento",
    subtitle: "Qual é a principal fonte dos seus rendimentos?",
    options: [
      { label: "A", text: "Trabalho formal com contrato" },
      { label: "B", text: "Negócio próprio / Empreendedorismo" },
      { label: "C", text: "Trabalho informal" },
      { label: "D", text: "Reforma ou pensão / Sem rendimentos fixos" },
    ],
  },
  {
    category: "Situação Financeira",
    title: "Dívidas Atuais",
    subtitle: "Atualmente, tem:",
    options: [
      { label: "A", text: "Nenhuma dívida" },
      { label: "B", text: "Dívidas controladas (até 30% dos meus rendimentos)" },
      { label: "C", text: "Dívidas elevadas (mais de 30% dos meus rendimentos)" },
      { label: "D", text: "Não tenho clareza sobre as minhas dívidas" },
    ],
  },
  {
    category: "Último Passo",
    title: "Finalidade do Crédito",
    subtitle: "Qual será o principal destino do crédito solicitado?",
    options: [
      { label: "A", text: "Capital de trabalho / Negócio" },
      { label: "B", text: "Pagamento ou consolidação de dívidas" },
      { label: "C", text: "Compra de bens ou despesas pessoais" },
      { label: "D", text: "Emergências, educação ou outros" },
    ],
  },
];

const Quiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));

  const current = questions[step];
  const selected = answers[step];

  const handleSelect = (label: string) => {
    const next = [...answers];
    next[step] = label;
    setAnswers(next);
  };

  const handleContinue = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative flex flex-col">
      <header className="flex items-center px-5 pt-6 pb-4">
        <img src={revolutLogo} alt="Revolut" className="h-10" />
      </header>

      <div className="flex-1 px-5 pb-8 flex flex-col">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{current.category}</p>
        <h1 className="text-2xl font-bold text-foreground leading-tight mb-1" style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}>
          {current.title}
        </h1>
        <p className="text-base text-muted-foreground mb-8">
          {current.subtitle}
        </p>

        <div className="space-y-3 flex-1">
          {current.options.map((opt) => (
            <button
              key={opt.label}
              onClick={() => handleSelect(opt.label)}
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
          onClick={handleContinue}
          className="rounded-full font-semibold py-6 text-base w-full mt-6"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default Quiz;
