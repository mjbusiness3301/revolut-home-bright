import revolutLogo from "@/assets/revolut-logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-5 py-4 bg-background">
      <img src={revolutLogo} alt="Revolut" className="h-12" />
      <Button size="sm" className="rounded-full text-xs font-semibold px-4">
        Solicitar o meu cartão
      </Button>
    </header>
  );
};

export default Header;
