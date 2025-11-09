import { ArrowRight } from "lucide-react";

export default function HeroBadge() {
  return (
    <div className="flex items-center gap-3 mb-8 animation-fade-in">
      {/* Avatar Stack */}
      <div className="flex -space-x-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-blue-400 border-2 border-white flex items-center justify-center text-xs font-bold text-white"
          >
            {String.fromCharCode(65 + i)}
          </div>
        ))}
      </div>

      {/* Text */}
      <p className="text-sm font-medium text-slate-700">
        Used by{" "}
        <span className="font-bold text-slate-900">65,000+ Designers</span>{" "}
        worldwide <ArrowRight className="inline w-4 h-4 ml-1" />
      </p>
    </div>
  );
}
