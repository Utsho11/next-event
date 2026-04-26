import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  CircleAlert,
  Home,
  Map,
  PartyPopper,
  Ticket,
  Users,
  X,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-140px)] items-center justify-center bg-[#f7f8ff] px-4 py-16">
      <section className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="relative mb-14 h-56 w-72 -rotate-3 rounded-xl border bg-white shadow-lg">
          <Ticket className="absolute left-10 top-10 h-8 w-8 text-slate-400" />
          <X className="absolute right-9 top-10 h-5 w-5 text-slate-400" />

          <div className="absolute left-10 right-10 top-24 border-t-2 border-dashed border-slate-100" />

          <div className="absolute left-10 top-32 h-2 w-36 rounded-full bg-slate-100" />
          <div className="absolute left-10 top-40 h-2 w-24 rounded-full bg-slate-100" />

          <div className="absolute bottom-10 right-8 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-400 text-xs font-bold text-white">
            !
          </div>
        </div>

        <h1 className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-8xl font-extrabold text-transparent md:text-9xl">
          404
        </h1>

        <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
          Oops! It looks like you&apos;ve wandered off the track.
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
          The event you&apos;re looking for might have reached capacity, changed
          its location, or simply moved to another time. Let&apos;s get you back
          to the main stage.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button asChild className="h-14 rounded-lg bg-linear-to-r from-indigo-600 to-purple-600 px-8 text-base shadow-lg hover:opacity-90">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="h-14 rounded-lg bg-white px-8 text-base text-indigo-600"
          >
            <Link href="/events">
              <CircleAlert className="mr-2 h-5 w-5" />
              Browse Events
            </Link>
          </Button>
        </div>

        <div className="mt-14 flex items-center gap-8 text-slate-300">
          <CalendarDays className="h-7 w-7" />
          <Users className="h-7 w-7" />
          <PartyPopper className="h-7 w-7" />
          <Map className="h-7 w-7" />
        </div>
      </section>
    </main>
  );
}