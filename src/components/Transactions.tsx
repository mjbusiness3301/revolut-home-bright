import TransactionItem from "./TransactionItem";
import { ChevronRight } from "lucide-react";

const transactions = [
  { icon: "🛒", name: "Supermercado Extra", category: "Compras", amount: "R$ 234,50" },
  { icon: "☕", name: "Starbucks", category: "Alimentação", amount: "R$ 28,90" },
  { icon: "💰", name: "Salário", category: "Receita", amount: "R$ 8.500,00", positive: true },
  { icon: "🏠", name: "Aluguel", category: "Moradia", amount: "R$ 2.100,00" },
  { icon: "🚗", name: "Uber", category: "Transporte", amount: "R$ 45,00" },
];

const Transactions = () => {
  return (
    <section className="px-5 py-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-bold text-foreground">Transações recentes</h2>
        <button className="flex items-center gap-0.5 text-sm font-medium text-accent">
          Ver todas <ChevronRight size={16} />
        </button>
      </div>
      <div className="bg-card rounded-2xl px-4 divide-y divide-border">
        {transactions.map((t, i) => (
          <TransactionItem key={i} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Transactions;
