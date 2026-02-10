import { useState } from "react";
import revolutLogo from "@/assets/revolut-logo.png";
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
      <div className="flex-1 flex flex-col items-center px-6 py-10 mb-96">
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

      <footer className="bg-[hsl(220,13%,18%)] py-10 px-5 text-xs text-muted-foreground leading-relaxed space-y-4">
        <p className="font-semibold text-white text-sm">© 2026 Revolut Bank UAB</p>
        <p>Se quiser saber mais sobre a entidade Revolut que lhe fornece serviços, aceda à nossa página de Perguntas Frequentes. Se tiver outras questões, contacte-nos através do chat na app da Revolut.</p>
        <p>Revolut Bank UAB - Sucursal em Portugal, registado no Banco de Portugal com o número 3560, e no Registo Comercial de Lisboa com o número de registo único e o número de contribuinte 980752019, com sede registada em Fábrica 390, Rua Heróis de França, números 415 e 417, 4450-155 Matosinhos, Portugal. Revolut Bank UAB - Sucursal em Portugal é uma sucursal do Revolut Bank, UAB, uma empresa constituída na República da Lituânia com o número 304580906, registada no Registo de Entidades Jurídicas da República da Lituânia com o número da empresa referido, com o código de autorização LB002119.</p>
        <p>O Revolut Bank UAB fornece crédito em Portugal ao abrigo da Liberdade de Prestação Serviços, estando registado no Banco de Portugal com o número 3504 e no Registo Nacional de Pessoas Coletivas com um registo único e o número de contribuinte 980827280.</p>
        <p>O serviço de distribuição de seguros é prestado pela Revolut Insurance Europe UAB, autorizada pelo Banco da Lituânia como corretor de seguros e registada pela Autoridade de Supervisão dos Seguros e Fundos de Pensões (ASF) para exercer atividades em Portugal.</p>
        <p>Os serviços de investimento são fornecidos pela Revolut Securities Europe UAB (código da empresa 305799582), uma empresa de investimento autorizada e regulada pelo Banco da Lituânia.</p>
        <p>A morada registada do Revolut Bank UAB, da Revolut Insurance Europe UAB e da Revolut Securities Europe UAB é na avenida Konstitucijos, 21B, Vilnius, 08130, República da Lituânia.</p>
        <p>Os serviços de commodities são prestados pela Revolut Ltd e não são regulados pela Financial Conduct Authority. A Revolut Ltd (n.º 08804411) tem a sua morada registada em 30 South Colonnade, Londres E14 5HX, Reino Unido.</p>
        <p>Os produtos de criptomoedas são fornecidos por:</p>
        <p>(i) Revolut Digital Assets Europe Ltd (RDAEL), uma empresa privada registada na República de Chipre (n.º HE430310) com morada registada em Omonoias, 13, Soho Office (Embassy), 3052, Limassol, Chipre. A RDAEL é licenciada pela Comissão de Valores Mobiliários do Chipre (Licença n.º 001/2025) como Fornecedor de Serviços de Cripto (CASP) ao abrigo do Regulamento da UE 2023/1114 sobre mercados de ativo de cripto (MiCA); ou</p>
        <p>(ii) Revolut Ltd (n.º 08804411), uma empresa autorizada pela Financial Conduct Authority ao abrigo dos Regulamentos relativos à Moeda Eletrónica de 2011 (referência da empresa 900562) e registada na Financial Conduct Authority para oferecer serviços de criptomoedas ao abrigo dos Regulamentos de 2017 relativos ao branqueamento de capitais, financiamento de terrorismo e transferências de fundos (informações sobre o pagador). Morada registada: 30 South Colonnade, Londres E14 5HX, Reino Unido.</p>
        <p>Dependente de os clientes terem aceite os Termos e Condições da RDAEL durante a criação da sua conta de criptomoeda ou durante a migração de clientes do EEE da Revolut Ltd para a RDAEL.</p>
      </footer>
    </div>
  );
};

export default Up1;
