import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import revolutLogo from "@/assets/revolut-logo.png";

const RevolutAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto flex flex-col px-5">
      <header className="flex items-center pt-6 pb-4">
        <img src={revolutLogo} alt="Revolut" className="h-10" />
      </header>

      <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 px-4">
        <h1
          className="text-2xl font-bold text-foreground"
          style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}
        >
          Já tens conta na Revolut?
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Precisamos saber se já és cliente Revolut para prosseguir com a ativação do teu cartão de crédito.
        </p>

        <div className="w-full space-y-3 mt-4">
          <Button
            onClick={() => {/* TODO: next step */}}
            className="w-full rounded-full font-semibold py-7 text-base"
          >
            Sim, já tenho conta
          </Button>
          <Button
            variant="outline"
            onClick={() => {/* TODO: next step */}}
            className="w-full rounded-full font-semibold py-7 text-base"
          >
            Não, ainda não tenho
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RevolutAccount;
