import Header from "@/components/Header";
import BalanceCard from "@/components/BalanceCard";
import QuickActions from "@/components/QuickActions";
import Transactions from "@/components/Transactions";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative pb-20">
      <Header />
      <BalanceCard />
      <QuickActions />
      <Transactions />
      <BottomNav />
    </div>
  );
};

export default Index;
