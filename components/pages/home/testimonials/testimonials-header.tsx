import { Button } from "@/components/ui/button";
import { CodeIcon } from "lucide-react";

const TestimonialHeader = () => {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-4 py-10 space-y-2">
        <Button className="bg-white text-title-text border shadow">
          <CodeIcon />
          Templates
        </Button>
        <h2 className="text-4xl font-bold text-title-text max-w-xl">
          Our Wall of Love - Words from Happy Customers
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
          Trusted by{" "}
          <span className="font-semibold">design professionals </span> and{" "}
          <span className="font-semibold">loved by creators </span> worldwide.
          ready-made templates
        </p>
      </div>

      {/* Making extra spaces */}
      <div></div>
    </div>
  );
};

export default TestimonialHeader;
