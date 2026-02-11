import { useState } from "react";
import revolutLogo from "@/assets/revolut-logo.png";
import revolutPlusVideo from "@/assets/contas-conjuntas.mp4";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { useNavigate } from "react-router-dom";
import MbwayPaymentDrawer from "@/components/MbwayPaymentDrawer";

const Up1 = () => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mbwayOpen, setMbwayOpen] = useState(false);
  

  const clientName = sessionStorage.getItem("client_name") || "Cliente";
  const creditLimit = sessionStorage.getItem("credit_limit") || "5134.80";
  const cardColor = sessionStorage.getItem("card_color") || "Black";

  const formattedLimit = "€" + parseFloat(creditLimit).toLocaleString("pt-PT", { minimumFractionDigits: 2 });

  return (
    <div className="min-h-screen bg-background flex flex-col">
    <div className="relative flex flex-col min-h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover top-20"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src={revolutPlusVideo} type="video/mp4" />
        </video>
        

        <div className="px-6 pt-10 pb-16 flex flex-col items-center relative z-10">
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
              onClick={() => setDrawerOpen(true)}
            >
              Fazer upgrade agora
            </Button>
          </div>
        </div>
      </div>

      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
        <DrawerContent className="rounded-t-3xl px-5 pb-8" onOpenAutoFocus={(e) => e.preventDefault()}>
          <DrawerHeader className="text-left px-0">
            <DrawerTitle style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}>
              Pacote Plus
            </DrawerTitle>
          </DrawerHeader>

          <div className="space-y-5 pt-2">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Para o consumidor inteligente: aceda a benefícios bancários adicionais, como melhores limites para gastos no estrangeiro e seguro para as suas compras, na nossa conta pacote acessível.
            </p>

            <div className="rounded-2xl border border-border px-5 py-4">
              <p className="text-xs text-muted-foreground">Limite de crédito e cartão assegurado</p>
              <p className="text-2xl font-bold text-foreground mt-1" style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}>€16,00</p>
            </div>

            <Button
              className="w-full rounded-full font-semibold py-6 text-base pulse"
              onClick={() => { setDrawerOpen(false); setMbwayOpen(true); }}
            >
              Pagar agora
            </Button>
          </div>
        </DrawerContent>
      </Drawer>

      <MbwayPaymentDrawer open={mbwayOpen} onOpenChange={setMbwayOpen} amount="€16,00" />

    </div>
  );
};

export default Up1;
