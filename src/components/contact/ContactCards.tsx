import { HelpCircle, MessageSquare, Radio } from "lucide-react";

const cards = [
  {
    icon: HelpCircle,
    title: "FAQ Center",
    desc: "Find quick answers to common questions about ticketing and hosting.",
    link: "Browse FAQs",
  },
  {
    icon: MessageSquare,
    title: "Community",
    desc: "Join our Discord server to connect with other event organizers.",
    link: "Join Discord",
  },
  {
    icon: Radio,
    title: "Press Inquiries",
    desc: "For media assets and interview requests, contact our PR team.",
    link: "Media Kit",
  },
];

export default function ContactCards() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-xl border border-blue-200 bg-blue-100/60 p-6 text-center"
          >
            <Icon className="mx-auto h-6 w-6 text-purple-600" />

            <h3 className="mt-4 text-lg font-medium text-slate-900">
              {card.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {card.desc}
            </p>

            <button className="mt-4 text-sm font-medium text-indigo-600 hover:underline">
              {card.link}
            </button>
          </div>
        );
      })}
    </div>
  );
}