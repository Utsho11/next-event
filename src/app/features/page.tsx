import { CalendarDays, Ticket, Users, Shield } from "lucide-react";

const features = [
  {
    title: "Event Creation",
    desc: "Create and manage events easily with a user-friendly interface.",
    icon: CalendarDays,
  },
  {
    title: "Ticket Booking",
    desc: "Allow users to book tickets quickly and securely.",
    icon: Ticket,
  },
  {
    title: "User Management",
    desc: "Manage attendees and track participation in real-time.",
    icon: Users,
  },
  {
    title: "Secure Authentication",
    desc: "Login and signup powered by Firebase authentication.",
    icon: Shield,
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#f5f7ff] px-4 py-10 md:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="text-center">
          <h1 className="text-3xl font-bold md:text-4xl">
            Platform Features
          </h1>
          <p className="mt-2 text-muted-foreground">
            Everything you need to manage and attend events.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => {
            const Icon = f.icon;

            return (
              <div
                key={f.title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                  <Icon />
                </div>

                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}