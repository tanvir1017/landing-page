export default function MacBookMockup() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12">
      {/* Outer frame */}
      <div className="relative bg-gradient-to-b from-slate-900 to-black rounded-2xl p-2 shadow-2xl">
        {/* Screen bezel */}
        <div className="bg-slate-800 rounded-lg p-4 relative">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-6 bg-black rounded-b-2xl"></div>

          {/* Content - showing file browser mockup */}
          <div className="bg-white rounded overflow-hidden">
            {/* Top bar */}
            <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-xs text-slate-600 ml-auto">
                TailGrids — Figma
              </span>
            </div>

            {/* File Browser Content */}
            <div className="flex bg-slate-50 min-h-96">
              {/* Left Sidebar */}
              <div className="w-48 border-r border-slate-200 p-4 bg-white">
                <p className="text-xs font-bold text-slate-900 mb-3">
                  PROJECTS
                </p>
                <div className="space-y-2">
                  {["Components", "Templates", "UI Kits", "Icons"].map(
                    (item) => (
                      <div
                        key={item}
                        className="text-sm text-slate-600 py-1 px-2 hover:bg-slate-100 rounded cursor-pointer"
                      >
                        📁 {item}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-6">
                <p className="text-2xl font-bold text-slate-900 mb-4">
                  600+ UI Components
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="bg-slate-200 rounded h-24 animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="w-32 border-l border-slate-200 p-4 bg-slate-50">
                <p className="text-xs font-bold text-slate-900 mb-3">DESIGN</p>
                <div className="space-y-3">
                  <div className="text-xs">
                    <p className="text-slate-600 font-medium mb-1">Fill</p>
                    <div className="w-full h-6 bg-indigo-600 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MacBook base */}
        <div className="h-2 bg-gradient-to-b from-slate-800 to-slate-900 rounded-b-2xl"></div>
      </div>
    </div>
  );
}
