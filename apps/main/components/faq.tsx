import { cn } from "../lib/utils";

export const FAQ = () => {
  return (
    <section
      className={cn(
        "w-full",
        "px-4 py-20 sm:px-6 lg:px-8 lg:py-28",
        "border-t border-neutral-100 bg-white",
        "text-neutral-900",
      )}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-7xl",
          "grid grid-cols-1 lg:grid-cols-12",
          "gap-12 lg:gap-16",
          "items-start",
        )}
      >
        <div
          className={cn(
            "lg:col-span-4",
            "lg:sticky lg:top-28 lg:self-start",
          )}
        >
          <h2
            className={cn(
              "text-2xl sm:text-3xl",
              "font-semibold tracking-tight",
              "text-neutral-900",
            )}
          >
            Questions &amp; answers
          </h2>
          <p
            className={cn(
              "mt-3",
              "text-sm leading-relaxed",
              "text-neutral-500",
            )}
          >
            Everything you need to know before getting started.
          </p>
          <a
            href="mailto:support@medisynth.health"
            className={cn(
              "mt-5 inline-flex items-center gap-1.5",
              "font-secondary text-sm font-semibold",
              "text-neutral-900",
            )}
          >
            <span
              className={cn(
                "hover:underline hover:underline-offset-3",
              )}
            >
              Still stuck? Contact support
            </span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div
          className={cn(
            "lg:col-span-8",
            "space-y-8 sm:space-y-10",
          )}
        >
          <div>
            <h3
              className={cn(
                "text-base font-semibold",
                "text-neutral-900",
              )}
            >
              What payment methods do you accept?
            </h3>
            <p
              className={cn(
                "mt-2 max-w-2xl",
                "text-sm sm:text-[15px] leading-relaxed",
                "text-neutral-500",
              )}
            >
              All major credit cards, and invoicing on annual plans.
            </p>
          </div>
          <div>
            <h3
              className={cn(
                "text-base font-semibold",
                "text-neutral-900",
              )}
            >
              Can I change plans later?
            </h3>
            <p
              className={cn(
                "mt-2 max-w-2xl",
                "text-sm sm:text-[15px] leading-relaxed",
                "text-neutral-500",
              )}
            >
              Upgrade or downgrade anytime; changes are prorated automatically.
            </p>
          </div>
          <div>
            <h3
              className={cn(
                "text-base font-semibold",
                "text-neutral-900",
              )}
            >
              Do you offer discounts for nonprofits?
            </h3>
            <p
              className={cn(
                "mt-2 max-w-2xl",
                "text-sm sm:text-[15px] leading-relaxed",
                "text-neutral-500",
              )}
            >
              Yes — reach out and we'll set you up with a nonprofit rate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
