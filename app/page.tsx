"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Phone, Mail, Award, Shield, Zap, Users, CheckCircle, ArrowRight, Play, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function HomePage() {
  const [videoError, setVideoError] = useState(false)

  const handleVideoClick = () => {
    window.open("https://drive.google.com/file/d/1dAapCwyUeYNnsE7ahvmR5emTF1Dt2_T1/view?usp=sharing", "_blank")
  }

  const testimonials = [
    {
      name: "LC ELÉTRICA",
      company: "Empresa Parceira",
      text: "Estou satisfeito e têm atendedido todas as necessidades",
      rating: 5,
    },
    {
      name: "Vex Serviços",
      company: "Empresa Parceira",
      text: "Sempre muito pratico e rápido devido ao seus projetos serem 100% personalizado e elaborando conforme a instalação. Chegar pra instalar e saber de que forma será instalado é uma grande vantagem, tendo em vista que atendo mais de 10 empresas hoje com prestação de serviço é somente com a SC que temos todo suporte e projeto 100% personalizado.",
      rating: 5,
    },
  ]

  const services = [
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: "Projetos de Microgeração",
      description: "Projetos residenciais e comerciais até 75kW com foco total em segurança",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Projetos de Minigeração",
      description: "Projetos de grande porte de 75kW a 5MW com estudos detalhados",
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "Consultorias Técnicas",
      description: "Análise especializada e otimização de sistemas fotovoltaicos",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Projetos de Subestações",
      description: "Desenvolvimento completo de subestações para energia solar",
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
              <Link href="/projetos" className="text-gray-700 hover:text-green-600 font-medium">
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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Formado pela UNESP</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Projetos de Energia Solar com Foco em Segurança</h1>
              <p className="text-xl mb-8 text-blue-100">
                Mais de 5 anos de experiência e +3500 projetos executados. Especialista em microgeração, minigeração e
                projetos executivos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <Phone className="mr-2 h-5 w-5" />
                  (14) 99142-7870
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
                  asChild
                >
                  <Link href="/projetos">
                    Ver Projetos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold">+3500</div>
                    <div className="text-blue-100">Projetos Executados</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">5+</div>
                    <div className="text-blue-100">Anos de Experiência</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-blue-100">Foco em Segurança</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">UNESP</div>
                    <div className="text-blue-100">Formação</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Serviços Especializados</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas em energia solar, sempre priorizando a segurança e qualidade técnica em cada
              projeto executado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Por que Escolher a SC Soluções Energéticas?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Formação UNESP</h3>
                    <p className="text-gray-600">Sólida formação acadêmica garantindo excelência técnica</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Especialista em layouts executivos e distribuidoras de energia
                    </h3>
                    <p className="text-gray-600">
                      Projetos executivos sempre priorizando a segurança, diferencial no mercado
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Experiência Comprovada</h3>
                    <p className="text-gray-600">Mais de 3500 projetos executados com sucesso</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Serviços Completos</h3>
                    <p className="text-gray-600">
                      Consultorias, projetos, subestações, estudos de proteção e simulações 3D
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8">
                <div
                  className="relative w-full h-96 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg shadow-lg cursor-pointer group overflow-hidden"
                  onClick={handleVideoClick}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=500')] bg-cover bg-center"></div>
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-12 w-12 text-white" fill="currentColor" />
                    </div>

                    <h3 className="text-2xl font-bold text-center mb-3">
                      "Não é sobre fazer projetos,
                      <br />é sobre realizar sonhos!"
                    </h3>

                    <p className="text-blue-100 text-center mb-4 max-w-sm">
                      Assista nosso vídeo 3D e descubra nossa paixão por energia solar
                    </p>

                    <div className="flex items-center space-x-2 text-sm text-blue-100 group-hover:text-white transition-colors">
                      <ExternalLink className="h-4 w-4" />
                      <span>Clique para assistir</span>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="text-center mt-4">
                  <p className="text-gray-600 text-sm">Vídeo demonstrativo da nossa filosofia e qualidade técnica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">O que Nossos Clientes Dizem</h2>
            <p className="text-xl text-gray-600">Depoimentos reais de clientes satisfeitos com nossos projetos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para Seu Projeto de Energia Solar?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Entre em contato conosco e receba uma consultoria especializada. Projetos seguros e eficientes para sua
            residência ou empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              Ligar Agora: (14) 99142-7870
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              asChild
            >
              <Link href="/contato">Solicitar Orçamento</Link>
            </Button>
          </div>
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
                <li>Estudos de Proteção</li>
                <li>Simulações 3D</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(14) 99142-7870</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>engjoaovictor@yahoo.com</span>
                </div>
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
