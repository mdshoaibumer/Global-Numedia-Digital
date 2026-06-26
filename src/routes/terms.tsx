import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [{ title: "Terms of Service — Global Numedia" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <main className="container-pro py-32 md:py-40">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl leading-tight md:text-5xl">
          Terms of Service
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-soft md:text-base">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            By accessing and using Global Numedia Digital's website and
            services, you agree to be bound by these Terms of Service.
          </p>
          <p>
            All content, frameworks, and methodologies shared on this site are
            the intellectual property of Global Numedia. Our free audits are
            provided "as is" without warranty, and any implementations of our
            advice are at your own risk.
          </p>
        </div>
      </div>
    </main>
  );
}
