import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const QuizResult = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      // TODO: navigate to final result page
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto flex flex-col items-center justify-center gap-6 px-5">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-muted" />
        <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" />
      </div>
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}>
          A analisar o seu crédito
        </h2>
        <p className="text-sm text-muted-foreground">
          Aguarde um momento enquanto analisamos a sua informação
        </p>
      </div>
    </div>
  );
};

export default QuizResult;
