import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { nome, email, telefone, mensagem } = await req.json();

     const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
    rejectUnauthorized: false,
      }
    });

    // Email para a magic
    await transporter.sendMail({
      from: `"${nome}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: "Novo contato recebido pelo site da Magic",
      text: `Olá,

Você recebeu uma nova mensagem através do formulário de contato do site.

Nome: ${nome}
E-mail: ${email}
Telefone: ${telefone}

Mensagem:
${mensagem}`,
    });

    // Email para o cliente
    await transporter.sendMail({
      from: `"Magic Eventos" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Recebemos sua mensagem!",
      text: `Olá ${nome},

Recebemos sua mensagem com sucesso! 

Nossa equipe da Magic Eventos entrará em contato com você em breve.

Mensagem: ${mensagem}

Se precisar, é só responder este email.

Atenciosamente,  
Equipe Magic Eventos`,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error(error);
    return Response.json({ success: false }, { status: 500 });
  }
}