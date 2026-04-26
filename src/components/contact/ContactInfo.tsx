import { Mail, MapPin, Phone } from "lucide-react";

const info = [
  {
    icon: Mail,
    title: "Email Address",
    value: "support@nextevent.com",
  },
  {
    icon: Phone,
    title: "Phone Number",
    value: "+1 (555) 000-0000",
  },
  {
    icon: MapPin,
    title: "Office Address",
    value: "123 Event Plaza, San Francisco, CA 94103",
  },
];

export default function ContactInfo() {
  return (
    <div className="rounded-xl border border-blue-200 bg-blue-100/70 p-6">
      <h2 className="text-2xl font-semibold text-slate-900">
        Contact Information
      </h2>

      <div className="mt-6 space-y-5">
        {info.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white">
                <Icon className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm text-slate-600">{item.title}</p>
                <p className="text-sm font-semibold text-indigo-700">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}