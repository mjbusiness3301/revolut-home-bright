import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Smartphone } from "lucide-react";

interface MbwayPaymentDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  amount: string;
}

const MbwayPaymentDrawer = ({ open, onOpenChange, amount }: MbwayPaymentDrawerProps) => {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone.trim() || phone.trim().length < 9) return;
    setSubmitted(true);
  };

  const handleClose = (value: boolean) => {
    if (!value) {
      setPhone("");
      setSubmitted(false);
    }
    onOpenChange(value);
  };

  return (
    <Drawer open={open} onOpenChange={handleClose} repositionInputs={false}>
      <DrawerContent className="rounded-t-3xl px-5 pb-8" onOpenAutoFocus={(e) => e.preventDefault()}>
        <DrawerHeader className="text-left px-0">
          <DrawerTitle style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}>
            {submitted ? "Pedido de pagamento enviado!" : "Pagamento MB WAY"}
          </DrawerTitle>
          <DrawerDescription>
            {submitted
              ? "Confirma o pagamento na app MB WAY no teu telemóvel."
              : `Valor a pagar: ${amount}. Insere o teu número MB WAY.`}
          </DrawerDescription>
        </DrawerHeader>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 pt-2">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Confirma o pagamento de <span className="font-bold text-foreground">{amount}</span> na app MB WAY.
            </p>
            <Button
              className="w-full rounded-full font-semibold py-6 text-base mt-2"
              onClick={() => handleClose(false)}
            >
              Fechar
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="space-y-2">
              <Label htmlFor="mbway-phone">Número de telemóvel MB WAY</Label>
              <Input
                id="mbway-phone"
                type="tel"
                placeholder="912 345 678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                maxLength={15}
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-full font-semibold py-6 text-base"
            >
              Pagar {amount}
            </Button>
          </form>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default MbwayPaymentDrawer;
