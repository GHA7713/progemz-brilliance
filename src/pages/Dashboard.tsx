import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Upload, FileText, Download, Clock, CheckCircle2, AlertCircle, LogOut } from "lucide-react";

const submissions = [
  { name: "March Bank Statement.pdf", date: "12 Mar 2026", status: "processed" },
  { name: "Q1 Sales Invoices.csv", date: "10 Mar 2026", status: "processing" },
  { name: "Receipts Feb 2026.jpg", date: "28 Feb 2026", status: "processed" },
  { name: "Payroll Details.pdf", date: "20 Feb 2026", status: "pending" },
];

const reports = [
  { name: "Q4 2025 Accounts Summary", date: "15 Jan 2026" },
  { name: "Annual VAT Report 2025", date: "05 Jan 2026" },
];

const statusConfig: Record<string, { icon: typeof CheckCircle2; label: string; className: string }> = {
  processed: { icon: CheckCircle2, label: "Processed", className: "text-secondary" },
  processing: { icon: Clock, label: "Processing", className: "text-primary" },
  pending: { icon: AlertCircle, label: "Pending", className: "text-accent" },
};

const DashboardPage = () => (
  <div className="flex flex-col">
    <section className="border-b border-border bg-muted/30 py-6">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Welcome back! Here's an overview of your account.</p>
        </div>
        <Link to="/login">
          <Button variant="outline" size="sm"><LogOut className="mr-2 h-4 w-4" />Sign Out</Button>
        </Link>
      </div>
    </section>

    <section className="py-10">
      <div className="container mx-auto px-4 space-y-8">
        {/* Quick Actions */}
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { icon: Upload, label: "Upload Documents", to: "/upload", variant: "default" as const },
            { icon: FileText, label: "View Submissions", to: "#submissions", variant: "outline" as const },
            { icon: Download, label: "Download Reports", to: "#reports", variant: "outline" as const },
          ].map((action) => (
            <Link key={action.label} to={action.to}>
              <motion.div whileHover={{ y: -2 }} className="flex items-center gap-3 rounded-xl border border-border bg-card p-5 shadow-card transition-shadow hover:shadow-card-hover cursor-pointer">
                <div className="rounded-lg bg-primary/10 p-2">
                  <action.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-heading text-sm font-semibold text-foreground">{action.label}</span>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Submissions */}
        <div id="submissions" className="rounded-xl border border-border bg-card shadow-card">
          <div className="border-b border-border p-5">
            <h2 className="font-heading text-lg font-semibold text-foreground">Recent Submissions</h2>
          </div>
          <div className="divide-y divide-border">
            {submissions.map((s) => {
              const cfg = statusConfig[s.status];
              return (
                <div key={s.name} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{s.name}</p>
                      <p className="text-xs text-muted-foreground">{s.date}</p>
                    </div>
                  </div>
                  <div className={`flex items-center gap-1 text-xs font-medium ${cfg.className}`}>
                    <cfg.icon className="h-4 w-4" />
                    {cfg.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Reports */}
        <div id="reports" className="rounded-xl border border-border bg-card shadow-card">
          <div className="border-b border-border p-5">
            <h2 className="font-heading text-lg font-semibold text-foreground">Available Reports</h2>
          </div>
          <div className="divide-y divide-border">
            {reports.map((r) => (
              <div key={r.name} className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.date}</p>
                  </div>
                </div>
                <Button variant="outline" size="sm"><Download className="mr-1 h-4 w-4" />Download</Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default DashboardPage;
