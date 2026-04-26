import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

export default function DashboardHighlight() {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-[#8A1238] to-[#3525CD] text-white shadow-sm">
        <CardContent className="p-7">
          <p className="text-xs font-bold uppercase tracking-[0.25em]">
            Next Feature
          </p>
          <h3 className="mt-4 text-2xl font-semibold">
            Host Hybrid Networking Events
          </h3>
          <p className="mt-3 text-sm text-white/80">
            New tools for virtual engagement and event management are coming
            soon.
          </p>

          <Button
            asChild
            variant="secondary"
            className="mt-6 bg-white text-indigo-700 hover:bg-white/90"
          >
            <Link href="/events/add">Create Event</Link>
          </Button>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-sm">
        <CardContent className="space-y-5 p-6">
          <h3 className="font-bold text-slate-950">Quick Stats</h3>

          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-slate-500">Engagement</span>
              <span className="font-semibold text-indigo-600">82%</span>
            </div>
            <Progress value={82} />
          </div>

          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-slate-500">Ticket Retention</span>
              <span className="font-semibold text-purple-600">94%</span>
            </div>
            <Progress value={94} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}