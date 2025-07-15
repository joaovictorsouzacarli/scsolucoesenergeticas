"use server"

import { Resend } from "resend"

// Use a variável de ambiente para a chave da API do Resend
// Certifique-se de configurar RESEND_API_KEY no Vercel
const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(formData: FormData) {
  // Simular delay de processamento
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Extrair dados do formulário
  const name = formData.get("name") as string
  const phone = formData.get("phone") as string
  const email = formData.get("email") as string
  const projectType = formData.get("projectType") as string
  const message = formData.get("message") as string

  // Validação básica
  if (!name || !phone || !email || !message) {
    return {
      success: false,
      message: "Por favor, preencha todos os campos obrigatórios.",
    }
  }

  // Validação de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Por favor, insira um email válido.",
    }
  }

  // Mapear tipo de projeto para texto legível
  const projectTypeMap: { [key: string]: string } = {
    microgeracao: "Microgeração (Residencial/Comercial até 75kW)",
    minigeracao: "Minigeração (75kW a 5MW)",
    consultoria: "Consultoria Técnica",
    subestacao: "Projeto de Subestação",
    protecao: "Estudo de Proteção",
    simulacao: "Simulação 3D",
  }

  const projectTypeName = projectType ? projectTypeMap[projectType] || projectType : "Não especificado"

  try {
    // Enviar email para o engenheiro
    await resend.emails.send({
      // IMPORTANTE: Substitua 'contato@scsolucoes.com' pelo seu domínio verificado no Resend.
      // Se você ainda não verificou um domínio, pode usar 'onboarding@resend.dev' temporariamente.
      from: "SC Soluções Energéticas <contato@scsolucoes.com>",
      to: ["engjoaovictor@yahoo.com"],
      subject: `🔋 Nova Solicitação de Orçamento - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #16a34a, #2563eb); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #16a34a; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #16a34a; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            .urgent { background: #fef3c7; border-left-color: #f59e0b; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🔋 Nova Solicitação de Orçamento</h1>
              <p>Recebido em: ${new Date().toLocaleString("pt-BR")}</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">👤 Nome Completo:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">📱 Telefone:</div>
                <div class="value">${phone}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">${email}</div>
              </div>
              
              <div class="field">
                <div class="label">⚡ Tipo de Projeto:</div>
                <div class="value ${projectType === "minigeracao" ? "urgent" : ""}">${projectTypeName}</div>
              </div>
              
              <div class="field">
                <div class="label">💬 Mensagem:</div>
                <div class="value">${message.replace(/\n/g, "<br>")}</div>
              </div>
              
              <div style="margin-top: 30px; padding: 20px; background: #e0f2fe; border-radius: 8px;">
                <h3 style="color: #0369a1; margin-top: 0;">🚀 Ações Recomendadas:</h3>
                <ul style="color: #0369a1;">
                  <li>Responder em até 2 horas para leads quentes</li>
                  <li>Ligar diretamente: <strong>${phone}</strong></li>
                  <li>Enviar WhatsApp: <a href="https://wa.me/55${phone.replace(/\D/g, "")}" target="_blank">Clique aqui</a></li>
                  <li>Preparar proposta personalizada</li>
                </ul>
              </div>
            </div>
            
            <div class="footer">
              <p>Este email foi enviado automaticamente pelo site SC Soluções Energéticas</p>
              <p>Para dúvidas técnicas, contate o administrador do sistema</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    // Enviar email de confirmação para o cliente
    await resend.emails.send({
      // IMPORTANTE: Substitua 'contato@scsolucoes.com' pelo seu domínio verificado no Resend.
      // Se você ainda não verificou um domínio, pode usar 'onboarding@resend.dev' temporariamente.
      from: "SC Soluções Energéticas <contato@scsolucoes.com>",
      to: [email],
      subject: "✅ Solicitação Recebida - SC Soluções Energéticas",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #16a34a, #2563eb); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .highlight { background: #dcfce7; padding: 15px; border-radius: 8px; border-left: 4px solid #16a34a; margin: 20px 0; }
            .contact-info { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ Solicitação Recebida com Sucesso!</h1>
              <p>Obrigado pelo seu interesse, ${name}!</p>
            </div>
            
            <div class="content">
              <p>Olá <strong>${name}</strong>,</p>
              
              <p>Recebemos sua solicitação de orçamento para <strong>${projectTypeName}</strong> e agradecemos pelo interesse em nossos serviços!</p>
              
              <div class="highlight">
                <h3>🚀 Próximos Passos:</h3>
                <ul>
                  <li><strong>Análise Técnica:</strong> Nossa equipe está analisando suas necessidades</li>
                  <li><strong>Contato Rápido:</strong> Entraremos em contato em até 2 horas úteis</li>
                  <li><strong>Proposta Personalizada:</strong> Prepararemos um orçamento sob medida</li>
                  <li><strong>Consultoria Gratuita:</strong> Esclareceremos todas suas dúvidas</li>
                </ul>
              </div>
              
              <div class="contact-info">
                <h3>📞 Contato Direto:</h3>
                <p><strong>Telefone/WhatsApp:</strong> (14) 99142-7870</p>
                <p><strong>Email:</strong> engjoaovictor@yahoo.com</p>
                <p><strong>Horário:</strong> Segunda a Sexta, 8h às 18h</p>
              </div>
              
              <p><strong>Por que escolher a SC Soluções Energéticas?</strong></p>
              <ul>
                <li>✅ Formação pela UNESP</li>
                <li>✅ +3500 projetos executados</li>
                <li>✅ 5+ anos de experiência</li>
                <li>✅ Especialista em layouts executivos</li>
                <li>✅ Foco total em segurança</li>
              </ul>
              
              <p>Estamos ansiosos para transformar seu projeto em realidade!</p>
              
              <p>Atenciosamente,<br>
              <strong>Equipe SC Soluções Energéticas</strong></p>
            </div>
            
            <div class="footer">
              <p>SC Soluções Energéticas - Energia Solar Profissional</p>
              <p>Este é um email automático, mas você pode responder diretamente para engjoaovictor@yahoo.com</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    return {
      success: true,
      message: `Obrigado, ${name}! Sua solicitação foi enviada com sucesso. Você receberá um email de confirmação e entraremos em contato em breve através do telefone ${phone}.`,
    }
  } catch (error) {
    console.error("Erro ao enviar email:", error)

    // Fallback: Log dos dados mesmo se o email falhar
    console.log("Dados do formulário (fallback):", {
      name,
      phone,
      email,
      projectType: projectTypeName,
      message,
      timestamp: new Date().toISOString(),
    })

    return {
      success: false,
      message:
        "Houve um problema ao enviar sua solicitação. Por favor, entre em contato diretamente pelo WhatsApp (14) 99142-7870.",
    }
  }
}
