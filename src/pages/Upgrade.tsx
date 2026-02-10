import { useState } from "react";
import revolutLogo from "@/assets/revolut-logo.png";
import revolutPlusVideo from "@/assets/revolut-plus-video.mp4";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { CreditCard, Crown } from "lucide-react";

const Upgrade = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const clientName = sessionStorage.getItem("client_name") || "Cliente";
  const creditLimit = sessionStorage.getItem("credit_limit") || "5.134,80";
  const cardColor = sessionStorage.getItem("card_color") || "Black";

  const formattedLimit = typeof creditLimit === "string" && creditLimit.includes(",")
    ? creditLimit
    : parseFloat(creditLimit).toLocaleString("pt-PT", { minimumFractionDigits: 2 }) + "€";

  return (
    <div className="min-h-screen relative">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
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
          <h1 className="text-3xl font-bold leading-tight text-foreground" style={{ fontFamily: "'Aeonik Pro', Inter, sans-serif" }}>
            A conta com extras bancários
          </h1>
          <p className="text-foreground/70 text-sm leading-relaxed">
            Para o consumidor inteligente: aceda a mais benefícios, como limites superiores e seguro de compras.
          </p>

          <Button
            className="rounded-full text-sm font-semibold px-8 bg-foreground text-background hover:bg-foreground/90 shadow-lg"
            size="lg"
            onClick={() => setDrawerOpen(true)}
          >
            Aderir ao Plus
          </Button>
        </div>
      </div>

      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent className="rounded-t-3xl px-5 pb-8" onOpenAutoFocus={(e) => e.preventDefault()}>
          <DrawerHeader className="text-left px-0">
            <DrawerTitle style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}>
              Confirmar upgrade
            </DrawerTitle>
            <DrawerDescription>
              Revê os detalhes do teu upgrade para o Pacote Plus.
            </DrawerDescription>
          </DrawerHeader>

          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-4 rounded-2xl border border-border px-5 py-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 shrink-0">
                <Crown className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Nome</p>
                <p className="text-sm font-semibold text-foreground">{clientName}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-border px-5 py-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 shrink-0">
                <CreditCard className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Cartão selecionado</p>
                <p className="text-sm font-semibold text-foreground">Revolut {cardColor}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-border px-5 py-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 shrink-0">
                <span className="text-primary font-bold text-sm">€</span>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Limite de crédito</p>
                <p className="text-sm font-semibold text-foreground">{formattedLimit}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-border px-5 py-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 shrink-0">
                <Crown className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Tipo de conta</p>
                <p className="text-sm font-semibold text-foreground">Pacote Plus</p>
              </div>
            </div>

            <Button
              className="w-full rounded-full font-semibold py-6 text-base mt-4 pulse"
            >
              Realizar upgrade
            </Button>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Upgrade;
