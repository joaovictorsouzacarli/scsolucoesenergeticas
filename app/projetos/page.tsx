import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Zap, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ProjetosPage() {
  const minigeracao = [
    {
      titulo: "Usina 1 MW",
      localizacao: "Iranduba - AM",
      potencia: "1 MW",
      tipo: "Minigeração",
      image: "/images/minigeracao-01.png",
      descricao: "Projeto de grande porte com layout otimizado e sistema de strings detalhado",
    },
    {
      titulo: "Usina 150 kW",
      localizacao: "Macapá - AP",
      potencia: "150 kW",
      tipo: "Minigeração",
      image: "/images/minigeracao-02.png",
      descricao: "Sistema com bay de inversores e layout técnico especializado",
    },
    {
      titulo: "Usina 100 kW",
      localizacao: "Caruaru - PE",
      potencia: "100 kW",
      tipo: "Minigeração",
      image: "/images/minigeracao-03.png",
      descricao: "Projeto completo com diagramas elétricos e especificações técnicas",
    },
    {
      titulo: "Usina 1,3 MW",
      localizacao: "Pinhal de São Bento - PR",
      potencia: "1,3 MW",
      tipo: "Minigeração",
      image: "/images/minigeracao-04.png",
      descricao: "Grande usina com vista aérea e layout de transformadores",
    },
    {
      titulo: "Usina 300 kW",
      localizacao: "Unaí - MG",
      potencia: "300 kW",
      tipo: "Minigeração",
      image: "/images/minigeracao-05.png",
      descricao: "Sistema com roteamento detalhado de cabos CA e conexões",
    },
  ]

  const microgeracao = [
    {
      titulo: "Usina 8 kW",
      localizacao: "Estância - SE",
      potencia: "8 kW",
      tipo: "Microgeração",
      image: "/images/microgeracao-01.png",
      descricao: "Projeto residencial com diagramas completos e planta de situação",
    },
    {
      titulo: "Usina 5 kW",
      localizacao: "Piracicaba - SP",
      potencia: "5 kW",
      tipo: "Microgeração",
      image: "/images/microgeracao-02.png",
      descricao: "Sistema residencial com layout de strings e especificações técnicas",
    },
    {
      titulo: "Usina 9 kW",
      localizacao: "São Paulo - SP",
      potencia: "9 kW",
      tipo: "Microgeração",
      image: "/images/microgeracao-03.png",
      descricao: "Layout elétrico-estrutural com conexão detalhada das strings",
    },
    {
      titulo: "Usina 8,50 kW",
      localizacao: "Niterói - RJ",
      potencia: "8,50 kW",
      tipo: "Microgeração",
      image: "/images/microgeracao-04.png",
      descricao: "Projeto completo com diagramas elétricos e planta de localização",
    },
    {
      titulo: "Usina 18 kW",
      localizacao: "Piraí - RJ",
      potencia: "18 kW",
      tipo: "Microgeração",
      image: "/images/microgeracao-05.png",
      descricao: "Sistema com layout linear e especificações técnicas detalhadas",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image src="/logo.png" alt="SC Soluções Energéticas" width={60} height={60} />
              <div>
                <h1 className="text-xl font-bold text-gray-900">SC Soluções Energéticas</h1>
                <p className="text-sm text-gray-600">Energia Solar Profissional</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">
                Início
              </Link>
              <Link href="/projetos" className="text-green-600 font-medium">
                Projetos
              </Link>
              <Link href="/contato" className="text-gray-700 hover:text-green-600 font-medium">
                Contato
              </Link>
            </nav>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <Link href="/contato">Solicitar Orçamento</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-green-600">
              Início
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">Projetos</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos Projetos Executados</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Projetos reais de Microgeração e Minigeração executados em diversos estados do Brasil, sempre com foco em
              segurança e qualidade técnica excepcional.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600">+3500</div>
              <div className="text-gray-600">Projetos Executados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">+5MW</div>
              <div className="text-gray-600">Potência Instalada</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">15+</div>
              <div className="text-gray-600">Estados Atendidos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">+90%</div>
              <div className="text-gray-600">Aprovação 1º Envio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Minigeração Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projetos de Minigeração</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistemas de grande porte de 75kW a 5MW com projetos executivos detalhados e foco em segurança
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {minigeracao.map((projeto, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative">
                  <Image
                    src={projeto.image || "/placeholder.svg"}
                    alt={`${projeto.titulo} - ${projeto.localizacao}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-600">{projeto.tipo}</Badge>
                  <Badge className="absolute top-4 right-4 bg-green-600">{projeto.potencia}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{projeto.titulo}</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{projeto.localizacao}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4" />
                      <span>Potência: {projeto.potencia}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{projeto.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Microgeração Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projetos de Microgeração</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sistemas residenciais e comerciais até 75kW com projetos personalizados e executivos detalhados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microgeracao.map((projeto, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative">
                  <Image
                    src={projeto.image || "/placeholder.svg"}
                    alt={`${projeto.titulo} - ${projeto.localizacao}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-600">{projeto.tipo}</Badge>
                  <Badge className="absolute top-4 right-4 bg-blue-600">{projeto.potencia}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{projeto.titulo}</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{projeto.localizacao}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Zap className="h-4 w-4" />
                      <span>Potência: {projeto.potencia}</span>
                    </div>
                  </div>
                  <p className="text-gray-600">{projeto.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Excellence Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Excelência Técnica em Cada Projeto</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Todos os projetos incluem documentação técnica completa, diagramas elétricos, layouts executivos e
              especificações detalhadas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Layouts Executivos</h3>
              <p className="text-gray-600">Plantas detalhadas com posicionamento preciso dos módulos e equipamentos</p>
            </Card>

            <Card className="border-0 shadow-lg text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Diagramas Elétricos</h3>
              <p className="text-gray-600">Esquemas unifilares, funcionais e de blocos completos</p>
            </Card>

            <Card className="border-0 shadow-lg text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Plantas de Situação</h3>
              <p className="text-gray-600">Localização precisa com coordenadas e referências geográficas</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Seu Projeto Pode Ser o Próximo!</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Entre em contato conosco e faça parte dos nossos cases de sucesso. Projetos seguros, detalhados e aprovados
            em primeira análise.
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
            <Link href="/contato">Solicitar Projeto Personalizado</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/logo.png" alt="SC Soluções Energéticas" width={40} height={40} />
                <div>
                  <h3 className="font-bold">SC Soluções Energéticas</h3>
                  <p className="text-sm text-gray-400">Energia Solar Profissional</p>
                </div>
              </div>
              <p className="text-gray-400">
                Especialistas em projetos de energia solar com foco em segurança e qualidade técnica.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Serviços</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Projetos de Microgeração</li>
                <li>Projetos de Minigeração</li>
                <li>Consultorias Técnicas</li>
                <li>Projetos de Subestações</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <div>(14) 99142-7870</div>
                <div>engjoaovictor@yahoo.com</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SC Soluções Energéticas. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
