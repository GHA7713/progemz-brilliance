import { Link } from "react-router-dom";
import { Gem, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-[#1f2937]">
    <div className="container mx-auto px-4 py-20 md:py-24">
      <div className="grid gap-12 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-3 opacity-80">
            <Gem className="h-6 w-6 text-primary" />
            <div>
              <span className="font-heading text-lg font-bold text-white">Pro<span className="text-primary">Gemz</span></span>
              <span className="block text-[11px] font-normal text-[#94a3b8] leading-tight">Finance &amp; Business Support</span>
            </div>
          </Link>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4 text-white">Services</h4>
          <ul className="space-y-2.5 text-sm text-[#cbd5e1]">
            <li><Link to="/services" className="hover:text-primary transition-colors">Bookkeeping</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">VAT & MTD</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">CIS</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Payroll</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Property Accounting</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Service Charge Reconciliations</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-[#cbd5e1]">
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4 text-white">Contact</h4>
          <ul className="space-y-2.5 text-sm text-[#cbd5e1]">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@progemz.co.uk</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 border-t border-[rgba(255,255,255,0.08)] pt-6 text-center text-xs text-[#94a3b8]">
        © {new Date().getFullYear()} ProGemz Business Services. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
