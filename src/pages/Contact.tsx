import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! We'll be in touch shortly.");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <div className="flex flex-col">
      <section className="gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 className="font-heading text-4xl font-bold text-foreground" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            Contact Us
          </motion.h1>
          <motion.p className="mt-3 text-muted-foreground" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            We'd love to hear from you. Get in touch or book a free call.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto grid max-w-4xl gap-12 px-4 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="c-name">Name</Label>
                <Input id="c-name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-email">Email</Label>
                <Input id="c-email" type="email" placeholder="you@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-phone">Phone (optional)</Label>
                <Input id="c-phone" type="tel" placeholder="+44 7..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-message">Message</Label>
                <Textarea id="c-message" placeholder="How can we help?" rows={5} required />
              </div>
              <Button type="submit" className="w-full shadow-button" disabled={loading}>
                <Send className="mr-2 h-4 w-4" />
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Get in touch</h2>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "hello@progemz.co.uk" },
                  { icon: Phone, label: "+44 20 1234 5678" },
                  { icon: MapPin, label: "London, United Kingdom" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 rounded-lg bg-muted/60 p-4">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Book a free 15-minute call</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Not sure what you need? Let's have a quick chat – no commitment, no jargon.
              </p>
              <Button variant="outline" className="w-full">Book a Call</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
