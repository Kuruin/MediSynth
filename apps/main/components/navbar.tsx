import { cn } from "@/lib/utils";

export const NavBar = () => {
  return (
    <div>
      <header
        className={cn("fixed inset-x-0 top-4 z-50 flex justify-center px-4")}
      >
        <nav
          className={cn(
            "flex items-center gap-1 rounded-full border border-neutral-200/80 bg-white/85 p-1.5 pl-3.5 shadow-lg shadow-neutral-900/5 backdrop-blur-md",
          )}
        >
          <a
            href="#"
            className={cn(
              "flex items-center gap-2 pr-2 text-sm font-semibold tracking-tight text-neutral-900",
            )}
          >
            <img
              src="/assets/logo.svg"
              alt="MediSynth logo"
              width={22}
              height={22}
              className={cn("h-5.5 w-5.5 object-contain select-none")}
            />
            <span>MediSynth</span>
          </a>
          <span
            className={cn("mx-1 hidden h-4 w-px bg-neutral-200 md:block")}
          ></span>
          <div className={cn("hidden items-center gap-0.5 text-sm md:flex")}>
            <a
              href="#how-it-works"
              className={cn(
                "rounded-full px-3.5 py-1.5 text-neutral-600 transition-colors duration-150 hover:bg-neutral-100/80 hover:text-neutral-900",
              )}
            >
              Solution
            </a>
            <a
              href="#features"
              className={cn(
                "rounded-full px-3.5 py-1.5 text-neutral-600 transition-colors duration-150 hover:bg-neutral-100/80 hover:text-neutral-900",
              )}
            >
              Features
            </a>
            <a
              href="#security"
              className={cn(
                "rounded-full px-3.5 py-1.5 text-neutral-600 transition-colors duration-150 hover:bg-neutral-100/80 hover:text-neutral-900",
              )}
            >
              Security
            </a>
            <a
              href="#pricing"
              className={cn(
                "rounded-full px-3.5 py-1.5 text-neutral-600 transition-colors duration-150 hover:bg-neutral-100/80 hover:text-neutral-900",
              )}
            >
              Pricing
            </a>
          </div>
          <a
            href="#signin"
            className={cn(
              "ml-1 rounded-full bg-charcoal-900 px-4 py-1.5 text-sm font-medium text-white transition-all duration-150 hover:bg-neutral-800 active:scale-[0.97]",
            )}
          >
            Sign in
          </a>
        </nav>
      </header>
    </div>
  );
};
