import { Home, CreditCard, BarChart3, Wallet, User } from "lucide-react";

const tabs = [
  { icon: Home, label: "Início", active: true },
  { icon: CreditCard, label: "Cartões", active: false },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: Wallet, label: "Crypto", active: false },
  { icon: User, label: "Perfil", active: false },
];

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border px-2 pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-around py-2">
        {tabs.map((tab) => (
          <button key={tab.label} className="flex flex-col items-center gap-0.5 py-1 px-3">
            <tab.icon
              size={22}
              className={tab.active ? "text-accent" : "text-muted-foreground"}
            />
            <span
              className={`text-[10px] font-medium ${tab.active ? "text-accent" : "text-muted-foreground"}`}
            >
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
