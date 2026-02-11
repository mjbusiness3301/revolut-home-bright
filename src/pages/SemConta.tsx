import revolutLogo from "@/assets/revolut-logo.png";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const SemConta = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="px-6 pt-10 pb-16 flex flex-col items-center">
        <img src={revolutLogo} alt="Revolut" className="h-12 mb-10" />

        <div className="max-w-sm text-center space-y-4">
          <div className="flex justify-center mb-2">
            <X className="h-10 w-10 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "'Aeonik Pro', Inter, sans-serif" }}>
            Erro ao prosseguir com o pedido
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Para utilizares o teu cartão de crédito emitido, é necessário realizares o upgrade para a conta <span className="font-semibold text-foreground">Pacote Plus</span>.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Sem o upgrade, o cartão de crédito não será emitido e enviado.
          </p>

          <Button
            className="w-full rounded-full text-sm font-semibold mt-6"
            size="lg"
          >
            Fazer upgrade agora
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SemConta;
