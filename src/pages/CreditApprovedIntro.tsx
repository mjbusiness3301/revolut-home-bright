import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import revolutLogo from "@/assets/revolut-logo.png";

const CreditApprovedIntro = () => {
  const navigate = useNavigate();
  const clientName = sessionStorage.getItem("client_name") || "Cliente";
  const firstName = clientName.split(" ")[0];

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto flex flex-col px-5">
      <header className="flex items-center pt-6 pb-4">
        <img src={revolutLogo} alt="Revolut" className="h-10" />
      </header>

      <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 px-4">
        <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center">
          <CheckCircle2 className="w-12 h-12 text-accent" />
        </div>

        <div className="space-y-3">
          <h1
            className="text-2xl font-bold text-foreground"
            style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}
          >
            Análise concluída!
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            Parabéns, <span className="font-semibold text-foreground">{firstName}</span>! O teu crédito foi aprovado.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Tens um limite pré-aprovado de até <span className="font-semibold text-foreground">€5.134,80</span>. No próximo passo, podes escolher o valor que pretendes ter disponível no teu cartão.
          </p>
        </div>
      </div>

      <div className="pb-10 pt-6">
        <Button
          onClick={() => navigate("/credit-limit-loading")}
          className="w-full rounded-full font-semibold py-7 text-base pulse"
        >
          Escolher o meu limite
        </Button>
      </div>
    </div>
  );
};

export default CreditApprovedIntro;
