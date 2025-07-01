import { Heart, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/0ba2d5a1-6c07-47bb-a568-0c817e8c1a68.png" 
                alt="Hospital Israelita St. James" 
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              Hospital Israelita St. James - Excelência em atendimento médico 
              com tecnologia avançada e cuidado humanizado.
            </p>
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm">Cuidando de você há mais de 25 anos</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Serviços</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Pronto Socorro 24h</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Centro Cirúrgico</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Exames Diagnósticos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Internação</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Check-up Executivo</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Teleconsulta</a></li>
            </ul>
          </div>

          {/* Specialties */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Especialidades</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#" className="hover:text-primary transition-colors">Cardiologia</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ortopedia</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Neurologia</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Oncologia</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pediatria</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ginecologia</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/80">
                  Rua das Palmeiras, 123<br />
                  Jarinu - SP, 13240-000
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">(11) 4016-8000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-background/80">contato@hospitalistjames.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-background/80">
                  <div>Pronto Socorro: 24h</div>
                  <div>Ambulatório: 7h às 19h</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-background/60">
              © 2024 Hospital Israelita St. James. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Ouvidoria
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;