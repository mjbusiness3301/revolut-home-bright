import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import revolutLogo from "@/assets/revolut-logo.png";
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

const ChooseCard = () => {
  const navigate = useNavigate();
  const [selectedCard, setSelectedCard] = useState<CardColor>("Black");

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto flex flex-col px-5">
      <header className="flex items-center pt-6 pb-4">
        <img src={revolutLogo} alt="Revolut" className="h-10" />
      </header>

      <div className="flex-1 flex flex-col pt-6">
        <h1
          className="text-2xl font-bold text-foreground leading-tight"
          style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}
        >
          Escolhe a cor do teu cartão
        </h1>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          Seleciona o cartão metálico que mais combina contigo.
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

        <div className="mt-6 flex justify-center">
          <img
            src={metalCards[selectedCard]}
            alt={`Cartão ${selectedCard}`}
            className="w-full rounded-2xl"
          />
        </div>
      </div>

      <div className="pb-10 pt-6">
        <Button
          onClick={() => { sessionStorage.setItem("card_color", selectedCard); navigate("/choose-due-date"); }}
          className="w-full rounded-full font-semibold py-7 text-base"
        >
          Confirmar cartão
        </Button>
      </div>
    </div>
  );
};

export default ChooseCard;
