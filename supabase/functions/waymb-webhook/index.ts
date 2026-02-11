import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const WEBHOOK_SECRET = Deno.env.get("WAYMB_WEBHOOK_SECRET");
    if (!WEBHOOK_SECRET) throw new Error("WAYMB_WEBHOOK_SECRET is not configured");

    // Validate webhook API key from query param or header
    const url = new URL(req.url);
    const apiKey = url.searchParams.get("api_key") || req.headers.get("x-api-key");

    if (apiKey !== WEBHOOK_SECRET) {
      console.error("Webhook auth failed: invalid api_key");
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const payload = await req.json();
    console.log("WayMB Webhook received:", JSON.stringify(payload));

    const event = payload.event || payload.type || payload.status;
    const transactionId = payload.transactionID || payload.transaction_id || payload.id;
    const amount = payload.amount;
    const status = payload.status;

    console.log(`Event: ${event}, Transaction: ${transactionId}, Status: ${status}, Amount: ${amount}`);

    if (status === "COMPLETED" || event === "deposit.paid") {
      console.log(`✅ Payment COMPLETED for transaction ${transactionId}`);
    } else if (status === "PENDING" || event === "deposit.created") {
      console.log(`⏳ Payment PENDING/CREATED for transaction ${transactionId}`);
    } else if (status === "EXPIRED" || status === "FAILED") {
      console.log(`❌ Payment ${status} for transaction ${transactionId}`);
    } else {
      console.log(`ℹ️ Unhandled event/status: ${event}/${status}`);
    }

    return new Response(
      JSON.stringify({ received: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    console.error("Webhook error:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
