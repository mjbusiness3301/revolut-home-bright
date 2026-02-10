import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background max-w-md mx-auto">
      <Header />
      <section className="px-5 pt-10 pb-8">
        <h1 className="text-4xl font-medium leading-tight tracking-tight text-foreground" style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}>
          Limite de crédito até <span className="text-accent">5.000 euros</span>
        </h1>
      </section>
    </div>
  );
};

export default Index;
