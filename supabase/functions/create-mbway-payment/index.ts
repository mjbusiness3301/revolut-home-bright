import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const WAYMB_API_URL = "https://api.waymb.com";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const CLIENT_ID = Deno.env.get("WAYMB_CLIENT_ID");
    if (!CLIENT_ID) throw new Error("WAYMB_CLIENT_ID is not configured");

    const CLIENT_SECRET = Deno.env.get("WAYMB_CLIENT_SECRET");
    if (!CLIENT_SECRET) throw new Error("WAYMB_CLIENT_SECRET is not configured");

    const ACCOUNT_EMAIL = Deno.env.get("WAYMB_ACCOUNT_EMAIL");
    if (!ACCOUNT_EMAIL) throw new Error("WAYMB_ACCOUNT_EMAIL is not configured");

    const { amount, phone, payerName, payerDocument, payerEmail, utmParams, method = "mbway" } = await req.json();

    if (!amount) {
      return new Response(
        JSON.stringify({ error: "amount is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (method === "mbway" && !phone) {
      return new Response(
        JSON.stringify({ error: "phone is required for MB WAY" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const body: Record<string, unknown> = {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      account_email: ACCOUNT_EMAIL,
      amount: parseFloat(amount),
      method: method,
      currency: "EUR",
      payer: {
        email: payerEmail || "cliente@email.com",
        name: payerName || "Cliente",
        document: payerDocument || "000000000",
      },
    };

    if (method === "mbway" && phone) {
      (body.payer as Record<string, string>).phone = phone;
    }

    console.log("Creating WayMB payment:", JSON.stringify({ amount, phone, method, utmParams }));

    const response = await fetch(`${WAYMB_API_URL}/transactions/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("WayMB API error:", JSON.stringify(data));
      throw new Error(`WayMB API error [${response.status}]: ${JSON.stringify(data)}`);
    }

    console.log("WayMB full response:", JSON.stringify(data));

    const result: Record<string, unknown> = {
      success: true,
      transactionId: data.transactionID || data.id,
      amount: data.amount,
    };

    if (method === "multibanco") {
      result.entity = data.referenceData?.entity || data.entity || data.generatedMultibanco?.entity;
      result.reference = data.referenceData?.reference || data.reference || data.generatedMultibanco?.reference;
    }

    if (method === "mbway") {
      result.generatedMBWay = data.generatedMBWay;
    }

    return new Response(
      JSON.stringify(result),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("Error creating payment:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
