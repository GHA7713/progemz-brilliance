import { Resend } from "npm:resend@4.1.2";

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

    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

    const { error } = await resend.emails.send({
      from: "ProGemz Enquiry <onboarding@resend.dev>",
      to: ["hello@progemz.com"],
      subject: `New Enquiry from ${name}`,
      html: htmlBody,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

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
