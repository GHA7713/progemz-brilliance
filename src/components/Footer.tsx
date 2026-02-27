import { Link } from "react-router-dom";
import { Gem, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-muted/40">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-heading text-lg font-bold text-foreground mb-3">
            <Gem className="h-6 w-6 text-primary" />
            Pro<span className="text-primary">Gemz</span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Simple, stress-free accounting for small businesses and property owners across the UK.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3 text-foreground">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-primary transition-colors">Bookkeeping</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">VAT & MTD</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">CIS</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Payroll</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Property Accounting</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3 text-foreground">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            <li><Link to="/login" className="hover:text-primary transition-colors">Client Dashboard</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3 text-foreground">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@progemz.co.uk</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +44 20 1234 5678</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> London, United Kingdom</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ProGemz Business Services. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
