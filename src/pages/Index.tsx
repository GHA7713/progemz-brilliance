import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  BookOpen, Receipt, HardHat, Users, Building2,
  FileCheck, BarChart3, ArrowRight, MessageSquare, ClipboardList, Briefcase, Home, User } from
"lucide-react";
import heroImage from "@/assets/hero-illustration.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } })
};

const services = [
{ icon: BookOpen, title: "Bookkeeping", desc: "Accurate records, reconciled accounts, and organised finances every month.", color: "text-primary", bg: "bg-primary/10" },
{ icon: Receipt, title: "VAT & MTD", desc: "Making Tax Digital compliant VAT returns filed on time, every time.", color: "text-secondary", bg: "bg-secondary/10" },
{ icon: HardHat, title: "CIS", desc: "CIS deductions, returns and statements handled for contractors and subcontractors.", color: "text-accent", bg: "bg-accent/10" },
{ icon: Users, title: "Payroll", desc: "Pay your team on time with RTI-compliant payroll and professional payslips.", color: "text-primary", bg: "bg-primary/10" },
{ icon: Building2, title: "Property Accounting", desc: "Service charge management, landlord accounts and property financials sorted.", color: "text-secondary", bg: "bg-secondary/10" },
{ icon: FileCheck, title: "Service Charge Reconciliations", desc: "Transparent reconciliations and backlog clearance for property managers.", color: "text-accent", bg: "bg-accent/10" }];


const steps = [
{ icon: MessageSquare, title: "Enquire", desc: "Tell us about your business, your workload and the support you need. We'll review your requirements and confirm how we can help." },
{ icon: ClipboardList, title: "We Organise & Manage", desc: "We categorise, reconcile and manage your financial records accurately — keeping everything structured, compliant and up to date." },
{ icon: BarChart3, title: "Clear Reports & Ongoing Support", desc: "You receive easy-to-understand reports and practical support, so you always know where your business stands." }];


const audiences = [
{ icon: Briefcase, title: "Small Businesses", desc: "Support for growing companies needing structured bookkeeping and VAT compliance.", color: "text-primary", bg: "bg-primary/10" },
{ icon: HardHat, title: "Contractors", desc: "CIS returns, deductions and compliance handled clearly and on time.", color: "text-secondary", bg: "bg-secondary/10" },
{ icon: Home, title: "Property Owners", desc: "Service charge reconciliations and landlord financial management.", color: "text-accent", bg: "bg-accent/10" },
{ icon: User, title: "Freelancers & Sole Traders", desc: "Simple bookkeeping and tax support without complexity.", color: "text-primary", bg: "bg-primary/10" }];


const Index = () =>
<div className="flex flex-col">
    {/* ── Hero ── */}
    <section className="relative overflow-hidden gradient-hero">
      {/* Floating decorative circle */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-primary/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[320px] w-[320px] rounded-full bg-secondary/[0.04] blur-3xl" />

      <div className="container mx-auto flex flex-col-reverse items-center gap-12 px-4 py-20 md:flex-row md:py-[120px]">
        {/* Left */}
        <motion.div
        className="flex-1 text-center md:text-left"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={0}>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.12] tracking-tight text-foreground md:text-5xl lg:text-[60px]">
            Simple, stress-free accounting for{" "}
            <span className="text-primary">small businesses</span> &{" "}
            <span className="text-secondary">property owners</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl">
            Bookkeeping, VAT, CIS, payroll and property finance support — structured, clear and reliable.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start">
            <Link to="/contact">
              <Button size="lg" className="shadow-button transition-transform duration-200 hover:-translate-y-0.5">
                Enquire Now <MessageSquare className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="transition-transform duration-200 hover:-translate-y-0.5">
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right — Image */}
        <motion.div
        className="relative flex-1"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}>

          {/* Radial glow */}
          <div className="pointer-events-none absolute inset-0 -z-10 mx-auto h-full w-[90%] rounded-full bg-primary/[0.06] blur-[60px]" />
          <img

          alt="ProGemz Business Services illustration"
          className="mx-auto w-full max-w-lg rounded-xl shadow-lg" src="/lovable-uploads/9cc293ff-ce6c-4bee-a8ae-e31ca1d44d0e.png" />

        </motion.div>
      </div>
    </section>

    {/* ── Who We Support ── */}
    <section className="bg-muted/40 py-24">
      <div className="container mx-auto px-4">
        <motion.div className="mb-14 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Who We Support</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">Supporting businesses and property owners across the UK.</p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {audiences.map((a, i) =>
        <motion.div
          key={a.title}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={i}
          className="group rounded-xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">

              <div className={`mb-4 inline-flex rounded-lg p-3 ${a.bg} transition-colors duration-300 group-hover:bg-primary/20`}>
                <a.icon className={`h-5 w-5 ${a.color} transition-colors duration-300 group-hover:text-primary`} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
            </motion.div>
        )}
        </div>
      </div>
    </section>

    {/* Divider */}
    <div className="section-divider mx-auto w-2/3" />

    {/* ── Services ── */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div className="mb-14 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">Our Services</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">Everything you need to keep your business finances in order.</p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) =>
        <motion.div key={s.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}>
              <Link
            to="/services"
            className="group flex h-full flex-col rounded-xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">

                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${s.bg}`}>
                  <s.icon className={`h-6 w-6 ${s.color}`} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <span className="mt-5 inline-flex items-center text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </motion.div>
        )}
        </div>
      </div>
    </section>

    {/* Divider */}
    <div className="section-divider mx-auto w-2/3" />

    {/* ── How It Works ── */}
    <section className="bg-muted/30 py-24">
      <div className="container mx-auto px-4">
        <motion.div className="mb-14 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">How It Works</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">Three simple steps to structured, stress-free finance support.</p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Connecting line */}
          <div className="pointer-events-none absolute left-1/2 top-8 hidden h-[1px] w-[60%] -translate-x-1/2 bg-border md:block" />

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) =>
          <motion.div
            key={step.title}
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={i}>

                <div className="group mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary transition-transform duration-300 hover:scale-105">
                  <step.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Step {i + 1}
                </span>
                <h3 className="font-heading text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </motion.div>
          )}
          </div>
        </div>
      </div>
    </section>

    {/* ── Final CTA ── */}
    <section className="gradient-hero-cta py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-[42px]">
            Ready to simplify your finances?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            No commitment, no jargon — just clear, practical support.
          </p>
          <div className="mt-10 flex justify-center">
            <Link to="/contact">
              <Button
              size="lg"
              className="glow-button px-10 py-6 text-base transition-transform duration-200 hover:-translate-y-1">

                <MessageSquare className="mr-2 h-5 w-5" /> Enquire Now
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </div>;


export default Index;