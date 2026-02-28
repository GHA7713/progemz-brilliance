import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  BookOpen, Receipt, HardHat, Users, Building2,
  FileCheck, BarChart3, Star, ArrowRight, PhoneCall, MessageSquare, ClipboardList } from
"lucide-react";
import heroImage from "@/assets/hero-illustration.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } })
};

const services = [
{ icon: BookOpen, title: "Bookkeeping & Bank Reconciliations", desc: "Accurate records, reconciled accounts, and organised finances every month.", color: "text-primary", bg: "bg-primary/10" },
{ icon: Receipt, title: "VAT & MTD Support", desc: "Making Tax Digital compliant VAT returns filed on time, every time.", color: "text-secondary", bg: "bg-secondary/10" },
{ icon: HardHat, title: "CIS (Construction Tax)", desc: "CIS deductions, returns and statements handled for contractors and subcontractors.", color: "text-accent", bg: "bg-accent/10" },
{ icon: Users, title: "Payroll & Payslips", desc: "Pay your team on time with RTI-compliant payroll and professional payslips.", color: "text-primary", bg: "bg-primary/10" },
{ icon: Building2, title: "Property Accounting", desc: "Service charge management, landlord accounts and property financials sorted.", color: "text-secondary", bg: "bg-secondary/10" }];


const steps = [
{ icon: MessageSquare, title: "Get in touch", desc: "Tell us about your business and what support you need." },
{ icon: ClipboardList, title: "We organise & process", desc: "Our team categorises everything and prepares your accounts accurately." },
{ icon: BarChart3, title: "Clear reports & support", desc: "You get easy-to-read reports and ongoing support whenever you need it." }];


const testimonials = [
{ name: "Sarah M.", role: "Freelance Designer", text: "ProGemz made my bookkeeping so simple. I actually understand my finances now!" },
{ name: "James T.", role: "Construction Contractor", text: "CIS used to give me headaches. These guys handle everything, no fuss." },
{ name: "Priya K.", role: "Property Landlord", text: "Finally, an accountant who speaks my language. Professional and friendly." }];


const Index = () =>
<div className="flex flex-col">
    {/* Hero */}
    <section className="gradient-hero">
      <div className="container mx-auto flex flex-col-reverse items-center gap-8 px-4 py-16 md:flex-row md:py-24">
        <motion.div className="flex-1 text-center md:text-left" initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Simple, stress-free business support for{" "}
            <span className="text-primary">small businesses</span> &{" "}
            <span className="text-secondary">property owners</span>
          </h1>
          <p className="mt-4 max-w-lg text-lg text-muted-foreground md:text-xl">
            Bookkeeping for businesses and freelancers, property financial management, service charge reconciliations, VAT returns, CIS support and payroll — structured, clear and reliable.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Link to="/contact">
              <Button size="lg" className="shadow-button">
                Book a Free Call <PhoneCall className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline">
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div className="flex-1" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <img src={heroImage} alt="ProGemz Business Services illustration" className="mx-auto w-full max-w-lg animate-float" />
        </motion.div>
      </div>
    </section>

    {/* Services */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Our Services</h2>
          <p className="mt-3 text-muted-foreground">Everything you need to keep your business finances in order.</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) =>
        <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <Link to="/services" className="group block rounded-xl border border-border bg-card p-6 shadow-card transition-all hover:shadow-card-hover hover:-translate-y-1">
                <div className={`mb-4 inline-flex rounded-lg p-3 ${s.bg}`}>
                  <s.icon className={`h-6 w-6 ${s.color}`} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </motion.div>
        )}
        </div>
      </div>
    </section>

    {/* How It Works */}
    <section className="bg-muted/50 py-20">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">How It Works</h2>
          <p className="mt-3 text-muted-foreground">Three simple steps to stress-free accounting.</p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) =>
        <motion.div key={step.title} className="text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary">
                <step.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <div className="mb-2 text-sm font-bold text-primary">Step {i + 1}</div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
        )}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">What Our Clients Say</h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) =>
        <motion.div key={t.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
        className="rounded-xl border border-border bg-card p-6 shadow-card">

              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-sm text-muted-foreground italic leading-relaxed">"{t.text}"</p>
              <div className="mt-4 border-t border-border pt-3">
                <p className="font-heading text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
        )}
        </div>
      </div>
    </section>

    {/* Final CTA */}
    <section className="gradient-hero py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Ready to simplify your finances?</h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Book a free 15-minute call. No commitment, no jargon.
          </p>
          <div className="mt-8 flex justify-center">
            <Link to="/contact">
              <Button size="lg" className="shadow-button">
                <PhoneCall className="mr-2 h-4 w-4" /> Book a Free Call
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </div>;


export default Index;