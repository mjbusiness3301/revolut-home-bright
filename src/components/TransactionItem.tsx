interface TransactionItemProps {
  icon: string;
  name: string;
  category: string;
  amount: string;
  positive?: boolean;
}

const TransactionItem = ({ icon, name, category, amount, positive }: TransactionItemProps) => {
  return (
    <div className="flex items-center gap-3 py-3">
      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-lg">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-foreground truncate">{name}</p>
        <p className="text-xs text-muted-foreground">{category}</p>
      </div>
      <span className={`text-sm font-semibold ${positive ? "text-green-600" : "text-foreground"}`}>
        {positive ? "+" : "-"} {amount}
      </span>
    </div>
  );
};

export default TransactionItem;
