import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Cuidado Médico
                <span className="block text-primary-light">
                  de Excelência
                </span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
                Hospital Israelita St. James oferece atendimento médico de qualidade 
                com tecnologia avançada e equipe especializada para cuidar da sua saúde.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg">
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Consulta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                <Shield className="mr-2 h-5 w-5" />
                Planos de Saúde
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-6 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">25+</div>
                <div className="text-sm text-primary-foreground/80">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">50+</div>
                <div className="text-sm text-primary-foreground/80">Especialidades</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-foreground">24h</div>
                <div className="text-sm text-primary-foreground/80">Pronto Socorro</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary-foreground/10 backdrop-blur-sm rounded-3xl"></div>
            <div className="relative bg-gradient-card rounded-3xl p-8 shadow-glow">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Agendamento Online</h3>
                    <p className="text-muted-foreground">Agende sua consulta em poucos cliques</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Convênios Aceitos</h3>
                    <p className="text-muted-foreground">Verificação instantânea de cobertura</p>
                  </div>
                </div>

                <Button className="w-full" variant="medical">
                  Acesse Nossos Serviços
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-dark/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default HeroSection;