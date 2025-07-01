import { Button } from "@/components/ui/button";
import { Menu, Search, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/0ba2d5a1-6c07-47bb-a568-0c817e8c1a68.png" 
              alt="Hospital Israelita St. James" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Nossos Serviços
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Agendamentos
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Corpo Clínico
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Convênios
            </a>
            <div className="flex items-center space-x-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Buscar</span>
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="hidden md:flex">
              <Phone className="h-4 w-4 mr-2" />
              Central de Atendimento
            </Button>
            <Button variant="default" size="sm">
              Portal do Paciente
            </Button>
            
            {/* Mobile Menu */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;