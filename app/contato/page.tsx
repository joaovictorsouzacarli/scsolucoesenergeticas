"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MessageCircle, Clock, Award, CheckCircle, AlertCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useActionState } from "react"
import { submitContactForm } from "../actions/contact"

export default function ContatoPage() {
  const [state, action, isPending] = useActionState(submitContactForm, null)

  const whatsappNumber = "5514991427870"
  const whatsappMessage = "Olá! Gostaria de solicitar um orçamento para projeto de energia solar."

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    window.open(url, "_blank")
  }

  const servicos = [
    "Projeto de Microgeração (até 75kW)",
    "Projeto de Minigeração (75kW a 5MW)",
    "Consultoria Técnica Especializada",
    "Projeto de Subestações",
    "Estudos de Proteção",
    "Simulações 3D",
    "Análise de Viabilidade Técnica",
    "Acompanhamento de Aprovação",
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
              <Link href="/contato" className="text-green-600 font-medium">
                Contato
              </Link>
            </nav>
            <Button onClick={handleWhatsAppClick} className="bg-green-600 hover:bg-green-700">
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
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
            <span className="text-gray-900">Contato</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em Contato Conosco</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Solicite seu orçamento personalizado e tire todas suas dúvidas sobre energia solar. Atendimento
              especializado e resposta rápida garantida.
            </p>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-12 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <MessageCircle className="h-16 w-16 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Fale Conosco Diretamente no WhatsApp</h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Atendimento personalizado e resposta imediata. Clique no botão abaixo e seja direcionado diretamente para
              nosso WhatsApp.
            </p>
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-4"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Conversar no WhatsApp: (14) 99142-7870
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Informações de Contato</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telefone</h3>
                    <p className="text-gray-600">(14) 99142-7870</p>
                    <p className="text-sm text-gray-500">Atendimento de segunda a sexta, 8h às 18h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">E-mail</h3>
                    <p className="text-gray-600">engjoaovictor@yahoo.com</p>
                    <p className="text-sm text-gray-500">Resposta em até 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <p className="text-gray-600">(14) 99142-7870</p>
                    <p className="text-sm text-gray-500">Atendimento rápido e personalizado</p>
                  </div>
                </div>
              </div>

              {/* Credentials */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-6 w-6 text-green-600" />
                    <span>Credenciais Profissionais</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>Formação pela UNESP</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>+3500 projetos executados</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span>5+ anos de experiência</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span>Especialista em layouts executivos e distribuidoras</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Solicite seu Orçamento</CardTitle>
                  <p className="text-gray-600">Preencha o formulário abaixo e entraremos em contato em breve</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Success/Error Message */}
                  {state && (
                    <div
                      className={`p-4 rounded-lg flex items-start space-x-3 ${
                        state.success ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
                      }`}
                    >
                      {state.success ? (
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      )}
                      <p className={`text-sm ${state.success ? "text-green-800" : "text-red-800"}`}>{state.message}</p>
                    </div>
                  )}

                  <form action={action} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                        <Input name="name" placeholder="Seu nome completo" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
                        <Input name="phone" placeholder="(00) 00000-0000" required />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
                      <Input name="email" type="email" placeholder="seu@email.com" required />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Projeto</label>
                      <select
                        name="projectType"
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Selecione o tipo de projeto</option>
                        <option value="microgeracao">Microgeração (Residencial/Comercial até 75kW)</option>
                        <option value="minigeracao">Minigeração (75kW a 5MW)</option>
                        <option value="consultoria">Consultoria Técnica</option>
                        <option value="subestacao">Projeto de Subestação</option>
                        <option value="protecao">Estudo de Proteção</option>
                        <option value="simulacao">Simulação 3D</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem *</label>
                      <Textarea
                        name="message"
                        placeholder="Descreva seu projeto, localização, potência desejada e outras informações relevantes..."
                        rows={4}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isPending}
                      className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
                      size="lg"
                    >
                      {isPending ? "Enviando..." : "Enviar Solicitação"}
                    </Button>
                  </form>

                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-3">Ou entre em contato diretamente:</p>
                    <Button
                      onClick={handleWhatsAppClick}
                      variant="outline"
                      className="border-green-600 text-green-600 hover:bg-green-50 bg-transparent"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp: (14) 99142-7870
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Serviços Especializados</h2>
            <p className="text-xl text-gray-600">Soluções completas em energia solar com foco em segurança</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicos.map((servico, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="w-3 h-3 bg-green-600 rounded-full mx-auto mb-3"></div>
                <p className="text-gray-700 font-medium">{servico}</p>
              </div>
            ))}
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
              <h4 className="font-semibold mb-4">Contato Rápido</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(14) 99142-7870</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>engjoaovictor@yahoo.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp disponível</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Horário de Atendimento</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Segunda a Sexta: 8h às 18h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp: 24h</span>
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
