import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

interface RequestCardDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RequestCardDialog = ({ open, onOpenChange }: RequestCardDialogProps) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [nif, setNif] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !nif.trim()) return;
    onOpenChange(false);
    navigate("/quiz");
  };

  const handleClose = (value: boolean) => {
    if (!value) {
      setName("");
      setNif("");
      setSubmitted(false);
    }
    onOpenChange(value);
  };

  return (
    <Drawer open={open} onOpenChange={handleClose} repositionInputs={false}>
      <DrawerContent className="rounded-t-3xl px-5 pb-8" onOpenAutoFocus={(e) => e.preventDefault()}>
        <DrawerHeader className="text-left px-0">
          <DrawerTitle style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}>
            {submitted ? "Pedido enviado!" : "Solicitar o meu cartão"}
          </DrawerTitle>
          <DrawerDescription>
            {submitted
              ? "Entraremos em contacto consigo brevemente."
              : "Preencha os seus dados para iniciar o processo."}
          </DrawerDescription>
        </DrawerHeader>

        {submitted ? (
          <div className="flex justify-center pt-2">
            <Button
              className="rounded-full font-semibold px-8 py-6"
              onClick={() => handleClose(false)}
            >
              Fechar
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                placeholder="O teu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nif">NIF</Label>
              <Input
                id="nif"
                placeholder="O teu NIF"
                value={nif}
                onChange={(e) => setNif(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full rounded-full font-semibold py-6 text-base"
            >
              Iniciar
            </Button>
          </form>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default RequestCardDialog;
