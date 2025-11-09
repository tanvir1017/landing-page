export default function BackgroundTexture() {
  return (
    <>
      {/* Main background pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-3 pointer-events-none"
        width="100%"
        height="100%"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="diagonal-lines"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="40"
              stroke="#ffffff"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
      </svg>

      {/* Left sidebar with texture */}
      <div className="fixed left-0 top-0 w-20 md:w-32 h-screen bg-linear-to-r from-slate-100 to-slate-50 border-r border-slate-500 opacity-50 pointer-events-none hidden md:block">
        <svg
          className="absolute inset-0 w-full h-full opacity-8"
          width="100%"
          height="100%"
          viewBox="0 0 200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="sidebar-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="40"
                stroke="#000000"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sidebar-pattern)" />
        </svg>
      </div>

      {/* Right sidebar with texture */}
      <div className="fixed right-0 top-0 w-20 md:w-32 h-screen bg-linear-to-l from-slate-100 to-slate-50 border-l border-slate-200 opacity-50 pointer-events-none hidden md:block">
        <svg
          className="absolute inset-0 w-full h-full opacity-8"
          width="100%"
          height="100%"
          viewBox="0 0 200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="sidebar-pattern-right"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="40"
                stroke="#000000"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sidebar-pattern-right)" />
        </svg>
      </div>

      {/* Radial gradient spotlight */}
      <div className="absolute -top-96 -right-96 w-screen h-screen bg-radial opacity-20 pointer-events-none blur-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-transparent to-transparent opacity-30"></div>
      </div>
    </>
  );
}
