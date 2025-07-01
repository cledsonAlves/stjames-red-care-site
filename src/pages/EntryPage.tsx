import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Linkedin, Mail, Code, Smartphone, Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const EntryPage = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Email enviado!",
        description: "Redirecionando para o site...",
      });
      // Navigate to the main site after successful email submission
      setTimeout(() => {
        navigate("/hospital");
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <img 
            src="/lovable-uploads/0ba2d5a1-6c07-47bb-a568-0c817e8c1a68.png" 
            alt="Hospital Israelita St. James" 
            className="h-16 w-auto mx-auto mb-6"
          />
          <h1 className="text-2xl font-bold text-foreground">
            Validação e Orçamento
          </h1>
          <p className="text-muted-foreground">
            Site desenvolvido pela <span className="font-semibold text-primary">IaraHub</span>
          </p>
        </div>

        {/* Email Form */}
        <Card className="shadow-medical">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Acesso ao Sistema
            </CardTitle>
            <CardDescription>
              Informe seu email para acessar nossa plataforma de validação e orçamento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" variant="medical">
                Continuar
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Services Card */}
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              IaraHub - Desenvolvimento
            </CardTitle>
            <CardDescription>
              Desenvolvemos aplicativos e sites personalizados
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Smartphone className="h-5 w-5 text-primary" />
              <span className="text-sm">Aplicativos Mobile</span>
            </div>
            <div className="flex items-center gap-3">
              <Code className="h-5 w-5 text-primary" />
              <span className="text-sm">Desenvolvimento Web</span>
            </div>
            <div className="flex items-center gap-3">
              <Bot className="h-5 w-5 text-primary" />
              <span className="text-sm">Chats com atendimento no WhatsApp 24/7</span>
            </div>
            <div className="pt-2 border-t">
              <a 
                href="https://www.linkedin.com/in/cledson-alves-98219a2b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span className="text-sm font-medium">Conecte-se no LinkedIn</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EntryPage;