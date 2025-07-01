import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CreditCard, Users, Activity, Clock, Shield, Heart, Stethoscope } from "lucide-react";

const services = [
  {
    icon: Calendar,
    title: "Agendamento Online",
    description: "Agende consultas e exames com facilidade através do nosso sistema online.",
    color: "bg-primary"
  },
  {
    icon: CreditCard,
    title: "Convênios e Particulares",
    description: "Verificação de cobertura e atendimento para todas as modalidades de pagamento.",
    color: "bg-primary-light"
  },
  {
    icon: Activity,
    title: "Exames Diagnósticos",
    description: "Centro completo de diagnósticos com equipamentos de última geração.",
    color: "bg-primary-dark"
  },
  {
    icon: Heart,
    title: "Pronto Socorro 24h",
    description: "Atendimento de emergência disponível 24 horas por dia, todos os dias.",
    color: "bg-primary"
  },
  {
    icon: Users,
    title: "Internação",
    description: "Quartos privativos e semi-privativos com estrutura hoteleira de qualidade.",
    color: "bg-primary-light"
  },
  {
    icon: Stethoscope,
    title: "Centro Cirúrgico",
    description: "Salas cirúrgicas modernas com tecnologia avançada e equipe especializada.",
    color: "bg-primary-dark"
  },
  {
    icon: Clock,
    title: "Teleconsulta",
    description: "Consultas médicas online com segurança e praticidade.",
    color: "bg-primary"
  },
  {
    icon: Shield,
    title: "Check-up Executivo",
    description: "Programa completo de avaliação médica preventiva personalizada.",
    color: "bg-primary-light"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Serviços do Hospital
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços médicos com excelência, 
            tecnologia avançada e atendimento humanizado.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-medical transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300`}>
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-background rounded-3xl p-8 shadow-card-custom border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Precisa de Atendimento?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para atendê-lo com o cuidado que você merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="medical" size="lg">
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Consulta
              </Button>
              <Button variant="outline" size="lg">
                <Users className="mr-2 h-5 w-5" />
                Conhecer Especialistas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;