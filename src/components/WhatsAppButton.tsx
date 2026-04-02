import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/2290155496155?text=Bonjour%2C%20je%20viens%20de%20visiter%20votre%20site%20web%20et%20je%20souhaite%20discuter%20de%20mon%20projet%20de%20construction."
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float"
    aria-label="Contacter HENA BTP sur WhatsApp"
  >
    <MessageCircle className="h-7 w-7 text-primary-foreground" />
  </a>
);

export default WhatsAppButton;
