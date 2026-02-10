import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface RequestCardDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RequestCardDialog = ({ open, onOpenChange }: RequestCardDialogProps) => {
  const [name, setName] = useState("");
  const [nif, setNif] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !nif.trim()) return;
    setSubmitted(true);
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
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-sm rounded-2xl">
        <DialogHeader>
          <DialogTitle style={{ fontFamily: "'Aeonik Pro', 'Inter', sans-serif" }}>
            {submitted ? "Pedido enviado!" : "Solicitar o meu cartão"}
          </DialogTitle>
          <DialogDescription>
            {submitted
              ? "Entraremos em contacto consigo brevemente."
              : "Preencha os seus dados para iniciar o processo."}
          </DialogDescription>
        </DialogHeader>

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
                placeholder="O seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nif">NIF</Label>
              <Input
                id="nif"
                placeholder="O seu NIF"
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
      </DialogContent>
    </Dialog>
  );
};

export default RequestCardDialog;
