import { Button } from "@/components/ui/button";
import { ChevronDown, Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-12 left-0 right-0 z-40 bg-white border-b border-slate-200">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center">
            <span className="text-white text-sm font-bold">▶</span>
          </div>
          <span className="font-bold text-slate-900">TailGrids</span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button className="flex items-center gap-1 text-slate-700 hover:text-slate-900 font-medium text-sm">
            Components <ChevronDown className="w-4 h-4" />
          </button>
          <button className="text-slate-700 hover:text-slate-900 font-medium text-sm">
            Templates
          </button>
          <button className="text-slate-700 hover:text-slate-900 font-medium text-sm">
            Docs
          </button>
          <button className="text-slate-700 hover:text-slate-900 font-medium text-sm">
            Products
          </button>
          <button className="text-slate-700 hover:text-slate-900 font-medium text-sm">
            Resources
          </button>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden lg:flex items-center bg-slate-100 rounded-xl px-3 py-2 w-48">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent ml-2 text-sm outline-none w-full text-slate-900 placeholder-slate-500"
            />
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <button className="text-slate-600 hover:text-slate-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Sign in */}
          <button className="text-slate-700 hover:text-slate-900 font-medium text-sm">
            Sign in
          </button>

          {/* Pricing button */}
          <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 text-sm">
            Pricing & FAQ
          </Button>
        </div>
      </div>
    </nav>
  );
}
