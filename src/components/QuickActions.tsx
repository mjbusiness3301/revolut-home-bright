import { ArrowUpRight, ArrowDownLeft, Repeat, Plus } from "lucide-react";

const actions = [
  { icon: ArrowUpRight, label: "Enviar", color: "bg-accent" },
  { icon: ArrowDownLeft, label: "Receber", color: "bg-foreground" },
  { icon: Repeat, label: "Trocar", color: "bg-foreground" },
  { icon: Plus, label: "Adicionar", color: "bg-foreground" },
];

const QuickActions = () => {
  return (
    <section className="px-5 py-4">
      <div className="flex justify-between">
        {actions.map((action) => (
          <button key={action.label} className="flex flex-col items-center gap-2">
            <div className={`w-14 h-14 rounded-2xl ${action.color} flex items-center justify-center transition-transform active:scale-95`}>
              <action.icon size={22} className="text-primary-foreground" />
            </div>
            <span className="text-xs font-medium text-foreground">{action.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;
