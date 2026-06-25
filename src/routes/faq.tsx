import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { PageHero, CTAStrip } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Global Numedia" },
      {
        name: "description",
        content:
          "Pricing, timelines, contracts, team structure — everything you might want to know before booking a call.",
      },
      { property: "og:title", content: "FAQ — Global Numedia" },
      {
        property: "og:description",
        content: "Answers on pricing, contracts, timelines and team.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQ,
});

const groups = [
  {
    title: "Engagements",
    items: [
      {
        q: "Do you require long contracts?",
        a: "No. We start with a 90-day growth sprint, then go month-to-month so the work earns the renewal.",
      },
      {
        q: "What does pricing look like?",
        a: "Programs typically run $5k–$50k/month in services, plus your media spend. We share scoped proposals after a discovery call.",
      },
      {
        q: "Who will I work with day-to-day?",
        a: "A senior strategist leads every engagement, supported by a tight pod of specialists. No junior account managers.",
      },
      {
        q: "Do you white-label?",
        a: "Yes, we partner with a small group of agencies under NDA for SEO, paid media and development.",
      },
    ],
  },
  {
    title: "Process & timing",
    items: [
      {
        q: "How fast can we start?",
        a: "Most engagements kick off within 2 weeks of signing.",
      },
      {
        q: "When will I see results?",
        a: "Paid media in 2–4 weeks, SEO and brand systems in 90–180 days. Weekly dashboards from day one.",
      },
      {
        q: "How do you report?",
        a: "Live dashboards, weekly written updates, and a monthly executive review tied to revenue.",
      },
    ],
  },
  {
    title: "Tools & ownership",
    items: [
      {
        q: "Who owns the work?",
        a: "You. Always. Accounts, content, design files, code — everything is yours.",
      },
      {
        q: "Do you work with our existing tools?",
        a: "Yes. We're tool-agnostic and integrate with what you already use.",
      },
      {
        q: "Can you replace our in-house team?",
        a: "We can augment or replace. Most clients run a hybrid model.",
      },
    ],
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
      >
        <span className="font-display text-lg md:text-xl">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-ink-soft transition ${open ? "rotate-180" : ""}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-[15px] text-ink-soft">{a}</p>
      </motion.div>
    </div>
  );
}

function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title={
          <>
            Questions, <span className="italic">answered.</span>
          </>
        }
        description="Everything you might want to know before booking a call — pricing, timelines, contracts, team."
      />
      <section className="container-pro space-y-16 pb-24">
        {groups.map((g) => (
          <Reveal key={g.title}>
            <div>
              <h2 className="font-display text-2xl text-foreground md:text-3xl">
                {g.title}
              </h2>
              <div className="mt-6 space-y-3">
                {g.items.map((i) => (
                  <Item key={i.q} {...i} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </section>
      <CTAStrip />
    </>
  );
}
