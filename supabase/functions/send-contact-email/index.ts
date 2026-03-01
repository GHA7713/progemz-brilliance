import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company, message, businessType, services } =
      await req.json();

    const smtpUser = Deno.env.get("ZOHO_SMTP_USER");
    const smtpPass = Deno.env.get("ZOHO_SMTP_PASS");

    if (!smtpUser || !smtpPass) {
      throw new Error("ZOHO_SMTP_USER or ZOHO_SMTP_PASS not configured");
    }

    const servicesList = services?.length
      ? services.join(", ")
      : "Not specified";

    const htmlBody = `
      <h2>New Enquiry from ${name}</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;font-weight:bold">Name</td><td style="padding:8px">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px">${email}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Phone</td><td style="padding:8px">${phone || "Not provided"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Company</td><td style="padding:8px">${company || "Not provided"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Business Type</td><td style="padding:8px">${businessType || "Not specified"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Services Needed</td><td style="padding:8px">${servicesList}</td></tr>
        <tr><td style="padding:8px;font-weight:bold">Message</td><td style="padding:8px">${message || "No message"}</td></tr>
      </table>
    `;

    const client = new SMTPClient({
      connection: {
        hostname: "smtp.zoho.com",
        port: 465,
        tls: true,
        auth: {
          username: smtpUser,
          password: smtpPass,
        },
      },
    });

    await client.send({
      from: smtpUser,
      to: "hello@progemz.com",
      subject: `New Enquiry from ${name}`,
      content: "auto",
      html: htmlBody,
      replyTo: email,
    });

    await client.close();

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Error:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
