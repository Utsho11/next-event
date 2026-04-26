import { CalendarDays, Star, Ticket, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "Total Events",
    value: "12",
    icon: CalendarDays,
    badge: "+12%",
    iconClass: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Ticket Sales",
    value: "$45,280",
    icon: Ticket,
    badge: "+8.4%",
    iconClass: "bg-purple-100 text-purple-600",
  },
  {
    title: "Attendees",
    value: "1,240",
    icon: Users,
    badge: "+24%",
    iconClass: "bg-blue-100 text-blue-600",
  },
  {
    title: "Average Rating",
    value: "4.8/5",
    icon: Star,
    badge: "Stable",
    iconClass: "bg-yellow-100 text-yellow-600",
  },
];

export default function DashboardStats() {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card key={stat.title} className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <div className="mb-5 flex items-center justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.iconClass}`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                  {stat.badge}
                </span>
              </div>

              <p className="text-sm font-semibold text-slate-500">
                {stat.title}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950">
                {stat.value}
              </h3>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}