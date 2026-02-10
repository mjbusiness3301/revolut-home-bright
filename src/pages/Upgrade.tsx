import revolutLogo from "@/assets/revolut-logo.png";
import revolutPlusVideo from "@/assets/revolut-plus-video.mp4";
import { Button } from "@/components/ui/button";

const Upgrade = () => {
  return (
    <div className="min-h-screen relative">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={revolutPlusVideo} type="video/mp4" />
      </video>

      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="flex items-center justify-between px-5 py-4">
          <img src={revolutLogo} alt="Revolut" className="h-12" />
        </header>

        <div className="px-5 pt-8 space-y-6">
          <h1 className="text-3xl font-bold leading-tight text-white" style={{ fontFamily: "'Aeonik Pro', Inter, sans-serif" }}>
            A conta com extras bancários
          </h1>
          <p className="text-white/80 text-sm leading-relaxed">
            Para o consumidor inteligente: aceda a mais benefícios, como limites superiores e seguro de compras.
          </p>

          <Button
            className="rounded-full text-sm font-semibold px-8 bg-white text-black hover:bg-white/90 shadow-lg"
            size="lg"
          >
            Aderir ao Plus
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Upgrade;
