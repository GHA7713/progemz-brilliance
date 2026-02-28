import { Link } from "react-router-dom";
import { Gem, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-muted/40">
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-3">
            <Gem className="h-6 w-6 text-primary" />
            <div>
              <span className="font-heading text-lg font-bold text-foreground">Pro<span className="text-primary">Gemz</span></span>
              <span className="block text-[11px] font-normal text-muted-foreground leading-tight">Finance &amp; Business Support</span>
            </div>
          </Link>
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
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3 text-foreground">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@progemz.co.uk</li>
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
