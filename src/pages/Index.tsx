import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import creditCard from "@/assets/credit-card.png";
import revolutVideo from "@/assets/revolut-video.mp4";
import revolutCards from "@/assets/revolut-cards.png";
import cardBlack from "@/assets/card-black.png";
import cardSilver from "@/assets/card-silver.png";
import cardGold from "@/assets/card-gold.png";
import cardBronze from "@/assets/card-bronze.png";

const metalCards = {
  Black: cardBlack,
  Silver: cardSilver,
  Gold: cardGold,
  Bronze: cardBronze,
} as const;

type CardColor = keyof typeof metalCards;

const Index = () => {
  const [selectedCard, setSelectedCard] = useState<CardColor>("Black");
  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative">
      <Header />
      <section className="px-5 pt-10 pb-0 relative z-10">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground" style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}>
          Limite de crédito até <span className="text-accent">5.000 euros</span>
        </h1>
        <p className="text-base text-muted-foreground mt-4 leading-relaxed" style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}>
          Mesmo que tenha tido dificuldades financeiras no passado, o seu acesso ao crédito pode não estar perdido. Fazemos uma avaliação individual e responsável, focada na sua realidade atual, mesmo com registo de incumprimento na CRC.
        </p>
        <div className="mt-8 flex justify-center relative z-10">
          <img src={creditCard} alt="Cartão de crédito" className="w-56 relative z-10" />
        </div>
      </section>
      <section className="bg-black -mt-28 pt-28 pb-16 px-5 rounded-t-3xl flex flex-col items-center">
        <Button className="bg-white text-black hover:bg-white/90 rounded-full font-semibold px-10 py-7 text-lg pulse">
          Solicitar o meu cartão
        </Button>
        <div className="relative mt-10 w-full">
          <video
            src={revolutVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-2xl"
          />
          <h2 className="absolute top-4 left-4 right-4 text-white text-4xl font-bold leading-tight tracking-tight" style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}>
            Junte-se aos mais de 70 milhões que já utilizam a Revolut
          </h2>
        </div>
      </section>
      <section className="bg-background py-16 px-5">
        <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground" style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}>
          Eleve o seu modo de gastar
        </h2>
        <p className="text-base text-muted-foreground mt-4 leading-relaxed" style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}>
          Faça compras em mais de 30 moedas e em mais de 130 países. Tudo como um local!
        </p>
        <div className="mt-6 flex justify-center">
          <img src={revolutCards} alt="Cartões Revolut" className="w-full rounded-2xl" />
        </div>
        <div className="mt-8">
          <Button className="rounded-full font-semibold px-8 py-6 text-base">
            Solicitar o meu cartão
          </Button>
        </div>
        <h2 className="text-4xl font-bold leading-tight tracking-tight text-foreground mt-12" style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}>
          Um cartão metálico exclusivo
        </h2>
        <p className="text-base text-muted-foreground mt-4 leading-relaxed" style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}>
          Os exclusivos cartões Metal de aço são ideais para viagens e negociações. Escolha entre quatro cores elegantes e encontre a que mais se adequa a si.
        </p>
        <div className="flex gap-2 mt-6">
          {(Object.keys(metalCards) as CardColor[]).map((color) => (
            <Button
              key={color}
              variant={selectedCard === color ? "default" : "outline"}
              size="sm"
              className="rounded-full text-xs font-semibold"
              onClick={() => setSelectedCard(color)}
            >
              {color}
            </Button>
          ))}
        </div>
        <div className="mt-4 flex justify-center">
          <img src={metalCards[selectedCard]} alt={`Cartão ${selectedCard}`} className="w-full rounded-2xl" />
        </div>
      </section>
      <section className="bg-[hsl(220,13%,18%)] py-16 px-5">
        <p className="text-sm text-muted-foreground mb-2">O que está à espera?</p>
        <h2 className="text-3xl font-bold text-white leading-tight" style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}>
          Revolucione a sua vida financeira
        </h2>
        <div className="mt-6">
          <Button className="bg-white text-black hover:bg-white/90 rounded-full font-semibold px-10 py-7 text-lg pulse">
            Solicitar o meu cartão
          </Button>
        </div>
      </section>
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

export default Index;
