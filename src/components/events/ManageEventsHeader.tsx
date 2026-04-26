import { CalendarCheck, Download, Filter, Ticket, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SeedButton from "../FakeDataSeeder";
import type { EventData } from "@/services/event-services";
import { downloadEventsCSV } from "@/lib/export-events-csv";

const stats = [
  {
    title: "Total Events",
    value: "42",
    icon: CalendarCheck,
    badge: "+12%",
    badgeClass: "bg-emerald-50 text-emerald-600",
    iconClass: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Total Attendees",
    value: "12,840",
    icon: Users,
    badge: "+8%",
    badgeClass: "bg-emerald-50 text-emerald-600",
    iconClass: "bg-purple-50 text-purple-600",
  },
  {
    title: "Total Revenue",
    value: "$84,200",
    icon: Ticket,
    badge: "Stable",
    badgeClass: "bg-slate-100 text-slate-500",
    iconClass: "bg-amber-50 text-orange-500",
  },
];

export default function ManageEventsHeader({
  events,
}: {
  events: EventData[];
}) {
  return (
    <section className="px-4 py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Manage Events
            </h1>
            <p className="mt-1 text-sm font-medium text-slate-500 md:text-base">
              Overview and management of your hosted networking events.
            </p>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              className="gap-2 text-violet-600"
              onClick={() => downloadEventsCSV(events)}
            >
              <Download className="h-4 w-4" />
              Export Events
            </Button>

            <SeedButton />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <Card
                key={stat.title}
                className="rounded-xl bg-[#ffffff] shadow-sm"
              >
                <CardContent className="p-6">
                  <div className="mb-5 flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg ${stat.iconClass}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${stat.badgeClass}`}
                    >
                      {stat.badge}
                    </span>
                  </div>

                  <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                    {stat.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                    {stat.value}
                  </h2>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
