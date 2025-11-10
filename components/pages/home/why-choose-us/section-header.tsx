import CodeIcon from "@/components/assets/svgs/code";
import { Button } from "@/components/ui/button";

const SectionHeader = () => {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-4 py-10 space-y-2">
        <Button className="bg-white text-title-text border shadow">
          <CodeIcon />
          Why choose us?
        </Button>
        <h2 className="text-4xl font-bold text-title-text max-w-xl">
          Smart, Collaborative, and Built for Modern Designers
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
          From smart components to real-time updates, everything works together
          to keep your team in sync.
        </p>
      </div>

      {/* Making extra spaces */}
      <div></div>
    </div>
  );
};

export default SectionHeader;
