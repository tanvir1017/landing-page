import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const NewsLetter = () => {
  return (
    <div className="mt-20 border-y">
      <div className="container mx-auto bg-[#030712]">
        <div className="py-20">
          <div className="grid grid-cols-5 border-y">
            <div className="col-span-1 border-r">
              <h4 className="text-white">Newsletter</h4>
            </div>
            <div className="col-span-2 border-r">
              <p className="text-white">
                Get fresh updates, free resources, exclusive offers, and product
                news—straight to your inbox.
              </p>
            </div>
            <div className="col-span-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
                <Input
                  placeholder="Enter your password"
                  className="pl-10 bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 "
                  required
                />

                <Button
                  type="button"
                  className="
                 shadow-[inset_2px_2px_2px_0px_rgba(255,255,255,0.5),7px_7px_20px_0px_rgba(0,0,0,0.1),4px_4px_5px_0px_rgba(0,0,0,0.1)] outline-none text-[15px] bg-primary border-blue-700 border-2 rounded-[12px] py-6 hover:bg-none cursor-pointer
                 font-medium absolute right-2 top-1/2 transform -translate-y-1/2"
                >
                  Get Offers
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
