import revolutLogo from "@/assets/revolut-logo.png";

const Up1 = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-6 py-10">
      <img src={revolutLogo} alt="Revolut" className="h-12 mb-10" />
      
      <div className="max-w-sm text-center space-y-4">
        <h1 className="text-2xl font-bold" style={{ fontFamily: "'Aeonik Pro', Inter, sans-serif" }}>
          Upgrade necessário
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Para utilizares o teu cartão de crédito emitido, é necessário realizares o upgrade para a conta <span className="font-semibold text-foreground">Pacote Plus</span>.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Sem o upgrade, o cartão de crédito não será ativado.
        </p>
      </div>
    </div>
  );
};

export default Up1;
