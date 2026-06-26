import { createFileRoute } from "@tanstack/react-router";
import {
  Blocks,
  ShieldCheck,
  FileCode2,
  Coins,
  Network,
  BarChart3,
} from "lucide-react";
import { ServicePage } from "@/components/layout/ServicePage";

export const Route = createFileRoute("/services/blockchain")({
  head: () => ({
    meta: [
      { title: "Blockchain Development — Global Numedia" },
      {
        name: "description",
        content:
          "Custom blockchain solutions — smart contracts, dApps, token development and Web3 integrations for your business.",
      },
      {
        property: "og:title",
        content: "Blockchain Development — Global Numedia",
      },
      {
        property: "og:description",
        content: "Blockchain solutions that drive real business value.",
      },
      { property: "og:url", content: "/services/blockchain" },
    ],
    links: [{ rel: "canonical", href: "/services/blockchain" }],
  }),
  component: () => (
    <ServicePage
      eyebrow="Blockchain Development"
      title="Build trust with decentralized technology."
      description="From smart contracts to full-scale decentralized applications, we help businesses leverage blockchain for transparency, security and new revenue streams."
      bullets={[
        "Smart contract development and auditing",
        "Decentralized application (dApp) development",
        "Token creation and tokenomics strategy",
        "NFT marketplace and platform development",
        "Web3 integration with existing systems",
        "Blockchain consulting and strategy",
      ]}
      deliverables={[
        {
          icon: FileCode2,
          title: "Smart contracts",
          desc: "Secure, audited smart contracts on Ethereum, Solana and more.",
        },
        {
          icon: Blocks,
          title: "dApp development",
          desc: "Full-stack decentralized applications with modern UX.",
        },
        {
          icon: Coins,
          title: "Token development",
          desc: "Custom token creation with sound tokenomics design.",
        },
        {
          icon: ShieldCheck,
          title: "Security audits",
          desc: "Thorough code audits to protect against vulnerabilities.",
        },
        {
          icon: Network,
          title: "Web3 integration",
          desc: "Connect your existing platforms to blockchain networks.",
        },
        {
          icon: BarChart3,
          title: "Strategy & consulting",
          desc: "Identify where blockchain adds real value to your business.",
        },
      ]}
      metrics={[
        { value: "50+", label: "smart contracts deployed" },
        { value: "$2M+", label: "in token launches managed" },
        { value: "100%", label: "audit pass rate" },
        { value: "12+", label: "blockchain networks supported" },
      ]}
      faq={[
        {
          q: "Which blockchains do you work with?",
          a: "We work across major networks including Ethereum, Solana, Polygon, BNB Chain and others based on your needs.",
        },
        {
          q: "Do I need blockchain for my business?",
          a: "Not every business does. We'll give an honest assessment of whether blockchain adds value to your specific use case.",
        },
        {
          q: "How long does smart contract development take?",
          a: "Simple contracts take 2-4 weeks. Complex DeFi protocols or marketplaces can take 2-3 months including audits.",
        },
        {
          q: "Are your smart contracts audited?",
          a: "Yes. Every contract goes through internal review and we coordinate third-party audits for production deployments.",
        },
      ]}
    />
  ),
});
