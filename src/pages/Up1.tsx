import revolutLogo from "@/assets/revolut-logo.png";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Up1 = () => {
  const handleUpgrade = () => {
    window.open("https://www.revolut.com/pt-PT/pricing/", "_blank");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-6 py-10">
      <img src={revolutLogo} alt="Revolut" className="h-12 mb-10" />
      
      <div className="max-w-sm text-center space-y-4">
        <div className="flex justify-center mb-2">
          <AlertTriangle className="h-10 w-10 text-yellow-500 animate-[pulse_1.5s_ease-in-out_infinite]" />
        </div>
        <h1 className="text-2xl font-bold" style={{ fontFamily: "'Aeonik Pro', Inter, sans-serif" }}>
          Upgrade necessário
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Para utilizares o teu cartão de crédito emitido, é necessário realizares o upgrade para a conta <span className="font-semibold text-foreground">Pacote Plus</span>.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Sem o upgrade, o cartão de crédito não será emitido e enviado.
        </p>

        <Button
          className="w-full rounded-full text-sm font-semibold mt-6 pulse"
          size="lg"
          onClick={handleUpgrade}
        >
          Fazer upgrade agora
        </Button>
      </div>
    </div>
  );
};

export default Up1;
