import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const { name, surname, email, message } = await req.json();
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: 'Your Name <onboarding@resend.dev>',
      to: "peturwj@gmail.com",
      subject: message,
      html: `<p>Nafn: ${name} ${surname}</p><p>Netfang: ${email}</p><p>Skilaboð: ${message}</p>`,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}