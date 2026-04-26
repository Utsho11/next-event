import Link from "next/link";
import {  FileChartPie, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardHeader() {
  return (
    <section className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">
          Welcome back!
        </h1>
        <p className="mt-2 text-sm text-slate-500 md:text-base">
          Here&apos;s what&apos;s happening with your events today.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button variant="outline" asChild>
          <Link href="/events/manage">
            <FileChartPie className="mr-2 h-4 w-4" />
            Manage Events
          </Link>
        </Button>

        <Button className="bg-linear-to-r from-[#3525CD] to-[#831ADA] text-white" asChild>
          <Link href="/events/add">
            <Plus className="mr-2 h-4 w-4" />
            Create Event
          </Link>
        </Button>
      </div>
    </section>
  );
}
