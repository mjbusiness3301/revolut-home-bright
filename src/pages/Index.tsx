import Header from "@/components/Header";
import creditCard from "@/assets/credit-card.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background max-w-md mx-auto">
      <Header />
      <section className="px-5 pt-10 pb-8">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground" style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}>
          Limite de crédito até <span className="text-accent">5.000 euros</span>
        </h1>
        <p className="text-base text-muted-foreground mt-4 leading-relaxed" style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}>
          Mesmo que tenha tido dificuldades financeiras no passado, o seu acesso ao crédito pode não estar perdido. Fazemos uma avaliação individual e responsável, focada na sua realidade atual, mesmo com registo de incumprimento na CRC.
        </p>
        <div className="mt-8 flex justify-center">
          <img src={creditCard} alt="Cartão de crédito" className="w-full max-w-xs" />
        </div>
      </section>
    </div>
  );
};

export default Index;
