import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const businessTypes = [
  "Property Manager",
  "Landlord",
  "Small Business",
  "Contractor / Sole Trader",
  "Other",
];

const services = [
  "Bookkeeping",
  "VAT & MTD",
  "CIS",
  "Payroll",
  "Property Accounting",
  "Service Charge Reconciliations",
];

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const formData = {
      name: (form.querySelector("#c-name") as HTMLInputElement).value,
      email: (form.querySelector("#c-email") as HTMLInputElement).value,
      phone: (form.querySelector("#c-phone") as HTMLInputElement).value,
      company: (form.querySelector("#c-company") as HTMLInputElement).value,
      message: (form.querySelector("#c-message") as HTMLTextAreaElement).value,
      businessType: selectedBusiness,
      services: selectedServices,
    };

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      toast.success("Enquiry submitted! We'll be in touch shortly.");
      form.reset();
      setSelectedBusiness(null);
      setSelectedServices([]);
    } catch (err: any) {
      console.error("Submit error:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <section className="gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="font-heading text-4xl font-bold text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="mt-3 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Tell us about your business and what support you need.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-2xl px-4">
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Section 1: Business Type */}
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                What type of business are you?
              </h2>
              <div className="flex flex-wrap gap-3">
                {businessTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedBusiness(type)}
                    className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                      selectedBusiness === type
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-muted"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Section 2: Support Needed */}
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                What do you need help with?
              </h2>
              <div className="flex flex-wrap gap-3">
                {services.map((service) => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => toggleService(service)}
                    className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                      selectedServices.includes(service)
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-muted"
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            {/* Section 3: Your Details */}
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                Your Details
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="c-name">Name</Label>
                  <Input id="c-name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-email">Email</Label>
                  <Input id="c-email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-phone">Phone</Label>
                  <Input id="c-phone" type="tel" placeholder="+44 7..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-company">Company</Label>
                  <Input id="c-company" placeholder="Your company name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-message">Message</Label>
                <Textarea
                  id="c-message"
                  placeholder="Tell us a bit more about your business and what you're looking for."
                  rows={5}
                />
              </div>
            </div>

            <Button type="submit" className="w-full shadow-button" disabled={loading}>
              <Send className="mr-2 h-4 w-4" />
              {loading ? "Sending..." : "Submit Enquiry"}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
