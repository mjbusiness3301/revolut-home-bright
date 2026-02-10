import revolutLogo from "@/assets/revolut-logo.png";
import { Button } from "@/components/ui/button";

const Upgrade = () => {
  return (
    <div className="min-h-screen bg-[hsl(220,60%,96%)]">
      <header className="flex items-center justify-between px-5 py-4">
        <img src={revolutLogo} alt="Revolut" className="h-12" />
      </header>

      <div className="px-5 pt-8 pb-16 space-y-6">
        <p className="text-muted-foreground text-sm">Plus por 3,99 €/mês</p>
        <h1 className="text-3xl font-bold leading-tight" style={{ fontFamily: "'Aeonik Pro', Inter, sans-serif" }}>
          A conta com extras bancários
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Para o consumidor inteligente: aceda a mais benefícios, como limites superiores e seguro de compras. Aplicam-se os{" "}
          <a href="#" className="text-foreground underline">Termos do Plano Pago</a>.
        </p>

        <Button
          className="rounded-full text-sm font-semibold px-8 bg-foreground text-background hover:bg-foreground/90"
          size="lg"
        >
          Aderir ao Plus
        </Button>
      </div>
    </div>
  );
};

export default Upgrade;
