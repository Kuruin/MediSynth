export const FAQ = () => {
  return (
    <section className="w-full bg-white text-neutral-900 border-t border-neutral-100 py-20 lg:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
            Questions &amp; answers
          </h2>
          <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
            Everything you need to know before getting started.
          </p>
          <a
            href="mailto:support@medisynth.health"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold font-secondary text-neutral-900"
          >
            <span className="hover:underline hover:underline-offset-3">
              Still stuck? Contact support
            </span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <div className="lg:col-span-8 space-y-8 sm:space-y-10">
          <div>
            <h3 className="text-base font-semibold text-neutral-900">
              What payment methods do you accept?
            </h3>
            <p className="mt-2 text-sm sm:text-[15px] text-neutral-500 leading-relaxed max-w-2xl">
              All major credit cards, and invoicing on annual plans.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-neutral-900">
              Can I change plans later?
            </h3>
            <p className="mt-2 text-sm sm:text-[15px] text-neutral-500 leading-relaxed max-w-2xl">
              Upgrade or downgrade anytime; changes are prorated automatically.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold text-neutral-900">
              Do you offer discounts for nonprofits?
            </h3>
            <p className="mt-2 text-sm sm:text-[15px] text-neutral-500 leading-relaxed max-w-2xl">
              Yes — reach out and we'll set you up with a nonprofit rate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
