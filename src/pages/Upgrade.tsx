import revolutLogo from "@/assets/revolut-logo.png";
import revolutPlusVideo from "@/assets/revolut-plus-video.mp4";
import { Button } from "@/components/ui/button";

const Upgrade = () => {
  return (
    <div className="min-h-screen bg-[hsl(220,60%,96%)]">
      <header className="flex items-center justify-between px-5 py-4">
        <img src={revolutLogo} alt="Revolut" className="h-12" />
      </header>

      <div className="px-5 pt-8 space-y-6">
        <h1 className="text-3xl font-bold leading-tight" style={{ fontFamily: "'Aeonik Pro', Inter, sans-serif" }}>
          A conta com extras bancários
        </h1>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Para o consumidor inteligente: aceda a mais benefícios, como limites superiores e seguro de compras.
        </p>
      </div>

      <div className="relative mt-8">
        <div className="absolute top-0 left-0 right-0 z-10 flex justify-center pt-4">
          <Button
            className="rounded-full text-sm font-semibold px-8 bg-foreground text-background hover:bg-foreground/90 shadow-lg"
            size="lg"
          >
            Aderir ao Plus
          </Button>
        </div>
        <video
          className="w-full rounded-t-3xl"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={revolutPlusVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Upgrade;
