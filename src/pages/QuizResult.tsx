import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const phrases = [
  "A verificar os seus dados...",
  "A analisar o seu perfil financeiro...",
  "A calcular o limite disponível...",
  "A preparar a sua proposta...",
  "Quase pronto...",
];

const TOTAL_DURATION = 6000;
const PHRASE_INTERVAL = TOTAL_DURATION / phrases.length;

const QuizResult = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / TOTAL_DURATION) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(interval);
        // TODO: navigate to final result
      }
    }, 50);
    return () => clearInterval(interval);
  }, [navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => Math.min(prev + 1, phrases.length - 1));
    }, PHRASE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto flex flex-col items-center justify-center gap-8 px-5">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}>
          A analisar o seu crédito
        </h2>
        <p className="text-sm text-muted-foreground">
          Aguarde um momento enquanto analisamos a sua informação
        </p>
      </div>

      <div className="w-full max-w-xs space-y-3">
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-muted-foreground text-center animate-fade-in" key={phraseIndex}>
          {phrases[phraseIndex]}
        </p>
      </div>
    </div>
  );
};

export default QuizResult;
