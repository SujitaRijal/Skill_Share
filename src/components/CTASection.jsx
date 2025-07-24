import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-12 overflow-hidden bg-gradient-to-br from-purple-600 via-fuchsia-400 to-pink-600">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none"></div>
      <div className="absolute rounded-full top-20 left-20 w-72 h-72 bg-white/10 blur-3xl"></div>
      <div className="absolute rounded-full bottom-20 right-20 w-96 h-96 bg-pink-500/20 blur-3xl"></div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-16 h-16 text-yellow-300 animate-pulse" />
          </div>

          <h2 className="mb-8 text-2xl font-bold leading-tight text-white lg:text-6xl">
            Ready to Transform
            <span className="block text-transparent bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text">
              Your Learning Journey?
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-9 lg:text-xl text-white/90">
            Join thousands of learners who are already exchanging skills and
            growing together. Your next breakthrough is just one skill away.
          </p>

          <div className="flex flex-col justify-center gap-6 mb-4 sm:flex-row">
            <Button
              onClick={() => navigate("/signup")}
              variant="outline"
              size="lg"
              className="px-6 py-4 text-xl text-purple-600 bg-white hover:bg-white/90"
            >
              Start Your Journey
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
