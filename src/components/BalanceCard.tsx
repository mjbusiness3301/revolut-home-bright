import { Eye, ChevronDown } from "lucide-react";

const BalanceCard = () => {
  return (
    <section className="px-5 py-6">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-sm text-muted-foreground font-medium">Saldo total</span>
        <Eye size={16} className="text-muted-foreground" />
      </div>
      <div className="flex items-baseline gap-1">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">R$ 12.450,00</h1>
      </div>
      <button className="mt-3 flex items-center gap-1 text-sm font-medium text-accent">
        Ver detalhes <ChevronDown size={14} />
      </button>
    </section>
  );
};

export default BalanceCard;
