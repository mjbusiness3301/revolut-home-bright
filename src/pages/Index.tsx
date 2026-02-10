import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import creditCard from "@/assets/credit-card.png";

const Index = () => {
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
        <h2 className="text-white text-4xl font-bold mt-10 leading-tight tracking-tight text-left" style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}>
          Junte-se aos mais de 70 milhões que já utilizam a Revolut
        </h2>
      </section>
    </div>
  );
};

export default Index;
