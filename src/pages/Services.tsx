import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Receipt, HardHat, Users, Building2, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const services = [
  {
    icon: BookOpen, title: "Bookkeeping & Bank Reconciliations", color: "text-primary", bg: "bg-primary/10",
    desc: "We keep your books accurate and up to date, reconciling every transaction so you always know where your money stands.",
    who: "Sole traders, freelancers and small businesses who want someone reliable to manage their day-to-day finances.",
    provide: "Bank statements, sales invoices, purchase receipts and access to your accounting software (if applicable).",
  },
  {
    icon: Receipt, title: "VAT & Making Tax Digital (MTD)", color: "text-secondary", bg: "bg-secondary/10",
    desc: "We prepare and submit your VAT returns on time, fully compliant with HMRC's Making Tax Digital requirements.",
    who: "VAT-registered businesses looking for accurate, hassle-free returns and MTD compliance.",
    provide: "Sales and purchase invoices, bank statements and details of any expenses for the quarter.",
  },
  {
    icon: HardHat, title: "CIS (Construction Industry Scheme)", color: "text-accent", bg: "bg-accent/10",
    desc: "We manage CIS deductions, monthly returns and verification for contractors and subcontractors in the construction industry.",
    who: "Construction contractors and subcontractors who need CIS returns filed correctly and on time.",
    provide: "Subcontractor payment details, UTRs and any CIS statements received from contractors.",
  },
  {
    icon: Users, title: "Payroll & Payslips", color: "text-primary", bg: "bg-primary/10",
    desc: "We run your payroll, calculate tax and NI, issue payslips and file Real Time Information (RTI) submissions with HMRC.",
    who: "Small employers, from one employee up, who need reliable and compliant payroll processing.",
    provide: "Employee details, salary information, hours worked and any changes such as starters or leavers.",
  },
  {
    icon: Building2, title: "Property Accounting & Service Charges", color: "text-secondary", bg: "bg-secondary/10",
    desc: "We provide full property finance support including service charge reconciliations, backlog clearance, landlord income and expense reporting, rent invoicing, credit control and accounts payable processing — ensuring accurate, compliant and well-managed property accounts.",
    who: "Landlords, property managers and management companies who need structured property accounts, improved cashflow control and reliable financial reporting.",
    provide: "Tenancy agreements, rental income records, maintenance invoices and service charge budgets.",
  },
];

const ServicesPage = () => (
  <div className="flex flex-col">
    {/* Hero */}
    <section className="gradient-hero py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Our Services
        </motion.h1>
        <motion.p className="mt-3 text-muted-foreground max-w-lg mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Practical accounting support tailored to small businesses, contractors and property owners.
        </motion.p>
      </div>
    </section>

    {/* Service Sections */}
    <section className="py-16">
      <div className="container mx-auto px-4 space-y-16">
        {services.map((s, i) => (
          <motion.div key={s.title} className={`flex flex-col gap-8 md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""} items-start`}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
          >
            <div className="flex-1">
              <div className={`mb-4 inline-flex rounded-xl p-3 ${s.bg}`}>
                <s.icon className={`h-7 w-7 ${s.color}`} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-foreground">{s.title}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>

              <div className="mt-6 space-y-4">
                <div className="rounded-lg bg-muted/60 p-4">
                  <h4 className="font-heading text-sm font-semibold text-foreground mb-1">Who is this for?</h4>
                  <p className="text-sm text-muted-foreground">{s.who}</p>
                </div>
              </div>

              <div className="mt-6">
                <Link to="/contact">
                  <Button>Enquire <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default ServicesPage;
