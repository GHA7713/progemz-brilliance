import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Upload as UploadIcon, FileUp, CheckCircle2, X } from "lucide-react";

const UploadPage = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const removeFile = (index: number) => setFiles((prev) => prev.filter((_, i) => i !== index));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0) {
      toast.error("Please attach at least one document.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Documents uploaded successfully!");
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <motion.div className="text-center" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
          <CheckCircle2 className="mx-auto h-16 w-16 text-secondary" />
          <h2 className="mt-4 font-heading text-2xl font-bold text-foreground">Upload Complete!</h2>
          <p className="mt-2 text-muted-foreground">We've received your documents and will be in touch shortly.</p>
          <Button className="mt-6" onClick={() => { setSubmitted(false); setFiles([]); }}>Upload More</Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <section className="gradient-hero py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 className="font-heading text-4xl font-bold text-foreground" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            Upload Your Documents
          </motion.h1>
          <motion.p className="mt-3 text-muted-foreground" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Securely send us your invoices, bank statements and receipts.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto max-w-xl px-4">
          <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-border bg-card p-8 shadow-card">
            <div className="space-y-2">
              <Label htmlFor="up-name">Full Name</Label>
              <Input id="up-name" placeholder="Jane Smith" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="up-email">Email</Label>
              <Input id="up-email" type="email" placeholder="jane@business.co.uk" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="up-business">Business Name</Label>
              <Input id="up-business" placeholder="Smith Consulting Ltd" required />
            </div>
            <div className="space-y-2">
              <Label>Service Required</Label>
              <Select required>
                <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="bookkeeping">Bookkeeping</SelectItem>
                  <SelectItem value="vat">VAT & MTD</SelectItem>
                  <SelectItem value="cis">CIS</SelectItem>
                  <SelectItem value="payroll">Payroll</SelectItem>
                  <SelectItem value="property">Property Accounting</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <Label>Documents (PDF, JPG, CSV)</Label>
              <div
                onClick={() => fileRef.current?.click()}
                className="flex cursor-pointer flex-col items-center gap-2 rounded-lg border-2 border-dashed border-border bg-muted/30 p-8 text-center transition-colors hover:border-primary/40 hover:bg-primary/5"
              >
                <FileUp className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">Click to browse or drag & drop</p>
                <p className="text-xs text-muted-foreground">PDF, JPG, PNG, CSV up to 10MB each</p>
              </div>
              <input ref={fileRef} type="file" className="hidden" multiple accept=".pdf,.jpg,.jpeg,.png,.csv" onChange={handleFiles} />
              {files.length > 0 && (
                <div className="mt-3 space-y-2">
                  {files.map((f, i) => (
                    <div key={i} className="flex items-center justify-between rounded-md bg-muted/60 px-3 py-2 text-sm">
                      <span className="truncate text-foreground">{f.name}</span>
                      <button type="button" onClick={() => removeFile(i)} className="text-muted-foreground hover:text-destructive">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Button type="submit" className="w-full shadow-button" disabled={loading}>
              <UploadIcon className="mr-2 h-4 w-4" />
              {loading ? "Uploading..." : "Submit Documents"}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UploadPage;
