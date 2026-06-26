import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [{ title: "Privacy Policy — Global Numedia" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <main className="container-pro py-32 md:py-40">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-4xl leading-tight md:text-5xl">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink-soft md:text-base">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>
            At Global Numedia Digital, we take your privacy seriously. We only
            collect the information necessary to deliver our growth services and
            improve our website experience.
          </p>
          <p>
            When you contact us for a strategy call or audit, we collect your
            name, email, and company details. This data is strictly used for
            internal diagnostics and is never sold to third parties.
          </p>
        </div>
      </div>
    </main>
  );
}
