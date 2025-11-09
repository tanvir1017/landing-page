import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-16">
      {/* Preview Figma Button */}
      <Button
        variant="outline"
        className="border-slate-200 border hover:bg-slate-50 rounded-lg px-6 py-3 h-auto bg-transparent"
      >
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 5a4 4 0 014-4h6a4 4 0 014 4v6a4 4 0 01-4 4h-6a4 4 0 01-4-4V5z" />
        </svg>
        Preview → Figma
      </Button>

      {/* Buy Now Button */}
      <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-6 py-3 h-auto font-medium flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow">
        Buy now – One-time
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
}
