import revolutLogo from "@/assets/revolut-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center px-5 py-4 bg-background">
      <img src={revolutLogo} alt="Revolut" className="h-8" />
    </header>
  );
};

export default Header;
