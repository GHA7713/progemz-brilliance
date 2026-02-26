import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Heart, MessageCircle, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const values = [
  { icon: ShieldCheck, title: "Compliance Made Easy", desc: "We keep you on the right side of HMRC, Companies House and MTD – so you never miss a deadline." },
  { icon: Heart, title: "We Actually Care", desc: "Your business is personal to you. We treat it that way too, with genuine support and honest advice." },
  { icon: MessageCircle, title: "Plain English, Always", desc: "No accountancy jargon. We explain things in a way that makes sense, so you always know where you stand." },
];

const AboutPage = () => (
  <div className="flex flex-col">
    <section className="gradient-hero py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          About ProGemz
        </motion.h1>
        <motion.p className="mt-3 text-muted-foreground max-w-lg mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          We're a UK-based accounting and business support service helping small businesses stay organised, compliant and stress-free.
        </motion.p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto max-w-3xl px-4 space-y-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Who we are</h2>
          <p className="text-muted-foreground leading-relaxed">
            ProGemz Business Services was founded with one simple goal: to take the stress out of accounting for small businesses, freelancers, contractors and property owners across the UK. We know that dealing with numbers, tax deadlines and HMRC can feel overwhelming — that's why we handle it all for you.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Whether you need monthly bookkeeping, VAT returns, CIS management, payroll or property accounting, we provide practical, reliable support so you can focus on what you do best — running your business.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">What we stand for</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {values.map((v, i) => (
              <motion.div key={v.title} className="rounded-xl border border-border bg-card p-6 shadow-card text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-sm font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className="text-center pt-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}>
          <Link to="/contact">
            <Button size="lg" className="shadow-button">
              Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default AboutPage;
