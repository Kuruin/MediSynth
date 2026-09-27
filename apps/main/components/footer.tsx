import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="font-secondary relative w-full overflow-hidden border-t border-neutral-200/70 bg-white px-6 pt-16 pb-6 sm:px-8 sm:pt-20 sm:pb-8 selection:bg-footer-selection selection:text-footer-blue">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 sm:flex-row md:px-8">
        <div className="flex flex-col">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-base font-semibold tracking-tight text-neutral-900"
          >
            <img
              src="/assets/logo.svg"
              alt="MediSynth logo"
              width={24}
              height={24}
              className="h-6 w-6 object-contain select-none"
            />
            <span>MediSynth</span>
          </Link>
          <div className="text-[14px] text-neutral-500 mt-6">
            © copyright MediSynth {new Date().getFullYear()}. All rights
            reserved.
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-10">
          <div className="flex flex-col space-y-5">
            <p className="text-sm font-bold font-secondary text-neutral-600">
              Pages
            </p>
            <ul className="space-y-3.5 text-sm text-neutral-600 list-none p-0 m-0">
              <li>
                <Link
                  href="#features"
                  className="transition-colors hover:text-neutral-900"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="transition-colors hover:text-neutral-900"
                >
                  Solution
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="transition-colors hover:text-neutral-900"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="transition-colors hover:text-neutral-900"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-neutral-900"
                >
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-5">
            <p className="text-sm font-bold font-secondary text-neutral-600">
              Socials
            </p>
            <ul className="space-y-3.5 text-sm text-neutral-600 list-none p-0 m-0">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-neutral-900"
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-neutral-900"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-neutral-900"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-neutral-900"
                >
                  Discord Community
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-5">
            <p className="text-sm font-bold font-secondary text-neutral-600">
              Legal
            </p>
            <ul className="space-y-3.5 text-sm text-neutral-600 list-none p-0 m-0">
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-neutral-900"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-neutral-900"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-neutral-900"
                >
                  HIPAA & Security
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-neutral-900"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-5">
            <p className="text-sm font-bold font-secondary text-neutral-600">
              Account
            </p>
            <ul className="space-y-3.5 text-sm text-neutral-600 list-none p-0 m-0">
              <li>
                <Link
                  href="#signin"
                  className="transition-colors hover:text-neutral-900"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  href="#signup"
                  className="transition-colors hover:text-neutral-900"
                >
                  Get Started
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-neutral-900"
                >
                  Book a Demo
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="transition-colors hover:text-neutral-900"
                >
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="inset-x-0 mt-20 bg-linear-to-b from-neutral-50 to-neutral-200 bg-clip-text text-center text-5xl font-bold text-transparent md:text-9xl lg:text-[12rem] xl:text-[13rem] "
      >
        MediSynth
      </div>
    </footer>
  );
};
