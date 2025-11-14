import Link from "next/link";
import Container from "../components/shared/container";
import { StyledButtons } from "../components/style-componenets/styled-buttons";

const NotFound = () => {
  return (
    <Container>
      <div className="max-w-full bg-slate-100 min-h-dvh flex-col flex items-center justify-center">
        <div className="flex flex-col items-center gap-8 px-6 py-12">
          <svg
            className="w-36 h-36 text-primary"
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Compass icon"
          >
            <circle
              cx="60"
              cy="60"
              r="58"
              stroke="currentColor"
              strokeWidth="4"
              opacity="0.12"
            />
            <path
              d="M60 30L74 74L40 50L60 30Z"
              fill="currentColor"
              opacity="0.95"
            />
            <circle cx="60" cy="60" r="4" fill="currentColor" />
          </svg>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md max-w-xl w-full text-center px-8 py-10">
            <h1 className="text-6xl font-extrabold text-slate-800 tracking-tight">
              404
            </h1>
            <h2 className="mt-3 text-2xl font-semibold text-slate-700">
              You seem to be off the map
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              The page you're looking for doesn't exist or has moved. Try
              returning home or check the URL.
            </p>

            <div className="mt-6 flex justify-center gap-3">
              <StyledButtons.PrimaryCTA className="h-[42px]">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-4 py-2 focus:outline-none "
                >
                  ← Back to home
                </Link>
              </StyledButtons.PrimaryCTA>
              <StyledButtons.PrimaryNeviBlue>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-4 py-2 focus:outline-none "
                >
                  Contact support
                </Link>
              </StyledButtons.PrimaryNeviBlue>
            </div>
          </div>

          <p className="text-xs text-slate-400">
            If you reached this page from another link, please let us know.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default NotFound;
