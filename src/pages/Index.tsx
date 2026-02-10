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
        <p className="text-sm italic text-muted-foreground mb-2">O que está à espera?</p>
        <h2 className="text-3xl font-bold text-white leading-tight" style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}>
          Revolucione a sua vida financeira
        </h2>
      </section>
    </div>
  );
};

export default Index;
