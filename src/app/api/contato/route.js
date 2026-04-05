import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { nome, email, mensagem } = await req.json();

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Recebemos sua mensagem!",
    html: `<p>Olá ${nome}</p><p>${mensagem}</p>`,
  });

  return Response.json({ ok: true });
} 