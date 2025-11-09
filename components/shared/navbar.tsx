import Image from "next/image";
import { Navigation } from "../pages/home/navbar";

const Navbar = () => {
  return (
    <div className="border h-[83px] mt-2 w-full">
      <div className="max-w-full mx-[150px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start space-x-11">
            <div>
              <Image
                src="/assets/Logo.svg"
                alt="logo"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>
            <Navigation />
          </div>

          <div>Other actions</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
