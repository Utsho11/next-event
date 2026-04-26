import { ShieldCheck, WandSparkles, Zap } from "lucide-react";

const data = [
  {
    title: "Easy Management",
    description:
      "Intuitive dashboard designed for high- speed event configuration and attendee tracking.",
    icon: <WandSparkles />,
  },
  {
    title: "Secure Auth",
    description:
      "Enterprise-grade security with encrypted data and seamless single sign-on options.",
    icon: <ShieldCheck />,
  },
  {
    title: "Fast Performance",
    description:
      "Optimized for scale. Manage thousands of attendees without missing a single heartbeat.",
    icon: <Zap />,
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-[#0F172A] my-4 md:my-8 px-4 md:px-8 md:py-12 py-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-white">
          Why Choose NextEvent?
        </h1>
        <h4 className="text-[#94A3B8]">
          Streamlining logistics so you can focus on the experience.
        </h4>
      </div>
      <div className="p-6 md:p-12 grid md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div key={index} className="bg-[#334155] p-10 rounded-lg">
            <div className="text-[#3525CD] bg-[#3625cd3c] rounded p-1 w-fit  mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {item.title}
            </h3>
            <p className="text-[#94A3B8] text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
