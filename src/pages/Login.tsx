import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Gem, LogIn } from "lucide-react";
import { toast } from "sonner";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Welcome back!");
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <motion.div className="w-full max-w-sm" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="mb-8 text-center">
          <Gem className="mx-auto h-10 w-10 text-primary" />
          <h1 className="mt-3 font-heading text-2xl font-bold text-foreground">Client Login</h1>
          <p className="mt-1 text-sm text-muted-foreground">Access your ProGemz dashboard</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-card">
          <div className="space-y-2">
            <Label htmlFor="login-email">Email</Label>
            <Input id="login-email" type="email" placeholder="you@business.co.uk" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="login-pass">Password</Label>
            <Input id="login-pass" type="password" placeholder="••••••••" required />
          </div>
          <Button type="submit" className="w-full shadow-button" disabled={loading}>
            <LogIn className="mr-2 h-4 w-4" />
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
