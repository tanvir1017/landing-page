import { Button } from "@/components/ui/button";
import { CodeIcon } from "lucide-react";

function TemplateShowCaseHeader() {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-4 py-10 space-y-2">
        <Button className="bg-white text-title-text border shadow">
          <CodeIcon />
          Templates
        </Button>
        <h2 className="text-4xl font-bold text-title-text max-w-xl">
          Ready-to-use Figma templates for building websites faster.
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
          Design and explore stunning website layouts with our{" "}
          <span className="font-semibold">ready-made templates</span>.
        </p>
      </div>

      {/* Making extra spaces */}
      <div></div>
    </div>
  );
}

export default TemplateShowCaseHeader;
