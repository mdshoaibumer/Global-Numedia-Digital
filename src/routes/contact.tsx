import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  Check,
  Calendar,
  Shield,
  Clock,
  Users2,
  Star,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { COMPANY, STATS } from "@/lib/constants";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Global Numedia" },
      {
        name: "description",
        content:
          "Book a free 30-minute strategy call, WhatsApp our team, or send a message. We reply within 2 business hours.",
      },
      { property: "og:title", content: "Contact — Global Numedia" },
      {
        property: "og:description",
        content: "Book a free strategy call with a senior growth strategist.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const channels = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: COMPANY.phone,
    href: COMPANY.whatsapp,
    sub: "Replies in under 2 minutes",
    accent: "text-success",
    bg: "bg-success/15",
  },
  {
    icon: Phone,
    label: "Call us",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phoneRaw}`,
    sub: "Mon–Fri, 9:30am–7pm IST",
    accent: "text-accent",
    bg: "bg-accent/15",
  },
  {
    icon: Mail,
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    sub: "We reply within 2 business hours",
    accent: "text-foreground",
    bg: "bg-foreground/10",
  },
  {
    icon: Calendar,
    label: "Schedule a Call",
    value: "Book on Calendly",
    href: COMPANY.calendly,
    sub: "30-min · Free · No obligation",
    accent: "text-violet-500",
    bg: "bg-violet-500/10",
  },
];

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Let's talk"
        title={
          <>
            Tell us what you want to{" "}
            <span className="italic gradient-text">grow.</span>
          </>
        }
        description="Pick the channel you prefer. A senior strategist — not a sales rep — will get back to you within two business hours."
      />

      <section className="container-pro pb-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="space-y-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-foreground/20 hover:shadow-soft"
                >
                  <span
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${c.bg} ${c.accent}`}
                  >
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="font-display text-lg text-foreground">
                      {c.value}
                    </div>
                    <div className="text-xs text-ink-soft">{c.sub}</div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-ink-soft transition group-hover:rotate-45 group-hover:text-foreground" />
                </a>
              ))}

              <div className="rounded-2xl border border-border bg-surface p-5">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span className="text-foreground">
                    Bengaluru · Mumbai · Dubai · Singapore
                  </span>
                </div>
              </div>

              {/* Trust signals */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 rounded-xl border border-border bg-background p-3">
                  <Shield className="h-4 w-4 text-emerald-500" />
                  <span className="text-xs font-medium text-foreground">
                    NDA-Friendly
                  </span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-border bg-background p-3">
                  <Clock className="h-4 w-4 text-emerald-500" />
                  <span className="text-xs font-medium text-foreground">
                    Reply in 2hrs
                  </span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-border bg-background p-3">
                  <Users2 className="h-4 w-4 text-emerald-500" />
                  <span className="text-xs font-medium text-foreground">
                    Senior Strategist
                  </span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-border bg-background p-3">
                  <Star className="h-4 w-4 text-amber-400" />
                  <span className="text-xs font-medium text-foreground">
                    4.9/5 on Clutch
                  </span>
                </div>
              </div>

              {/* Social proof */}
              <div className="mt-6 rounded-2xl border border-border bg-background p-5">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 ring-2 ring-background"
                      />
                    ))}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {STATS.brandsServed} businesses
                    </span>{" "}
                    have run their free growth audit with us
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl border border-border bg-card p-7 md:p-9"
            >
              {!sent ? (
                <>
                  <h2 className="font-display text-2xl md:text-3xl">
                    Book a free strategy call
                  </h2>
                  <p className="mt-2 text-sm text-ink-soft">
                    Tell us a little about your business. We'll come back with
                    availability.
                  </p>

                  {/* What to expect */}
                  <div className="mt-5 rounded-xl border border-border bg-surface p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
                      What happens on the call
                    </p>
                    <ul className="mt-2 space-y-1.5 text-xs text-ink-soft">
                      <li className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-accent" /> 30
                        minutes, no fluff — purely diagnostic
                      </li>
                      <li className="flex items-center gap-2">
                        <Users2 className="h-3.5 w-3.5 text-accent" /> You speak
                        with a senior strategist (8+ yrs exp)
                      </li>
                      <li className="flex items-center gap-2">
                        <Shield className="h-3.5 w-3.5 text-accent" /> We audit
                        your current channels &amp; find quick wins
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-3.5 w-3.5 text-accent" /> You leave
                        with 2-3 actionable insights, even if we don't work
                        together
                      </li>
                    </ul>
                    <p className="mt-3 text-xs text-muted-foreground italic">
                      Tip: Have your Google Ads or Analytics access ready for a
                      faster audit.
                    </p>
                  </div>

                  <div className="mt-7 grid gap-4 sm:grid-cols-2">
                    <Field label="Full name" name="name" required />
                    <Field
                      label="Work email"
                      name="email"
                      type="email"
                      required
                    />
                    <Field label="Company" name="company" />
                    <Field
                      label="Monthly marketing budget"
                      name="budget"
                      placeholder="e.g. ₹5L–₹15L"
                    />
                  </div>
                  <Field
                    label="What would you like to grow?"
                    name="message"
                    textarea
                    className="mt-4"
                  />
                  <button
                    type="submit"
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-foreground px-6 py-4 text-sm font-medium text-background transition hover:opacity-90 sm:w-auto"
                  >
                    Request a call <ArrowUpRight className="h-4 w-4" />
                  </button>
                  <p className="mt-3 text-xs text-muted-foreground">
                    By submitting, you agree to be contacted by our team. We
                    never share your details.
                  </p>
                </>
              ) : (
                <div className="py-10 text-center">
                  <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-success/15 text-success">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl">
                    Thanks — message received.
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft">
                    A senior strategist will email you within 2 business hours.
                  </p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
  placeholder,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
  className?: string;
}) {
  const id = `field-${name}`;
  return (
    <div className={`block ${className ?? ""}`}>
      <label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-wide text-ink-soft"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          required={required}
          placeholder={placeholder}
          rows={4}
          autoComplete={name === "message" ? "off" : undefined}
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground focus:ring-1 focus:ring-foreground/10"
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          autoComplete={
            name === "email"
              ? "email"
              : name === "name"
                ? "name"
                : name === "company"
                  ? "organization"
                  : undefined
          }
          className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground focus:ring-1 focus:ring-foreground/10"
        />
      )}
    </div>
  );
}
