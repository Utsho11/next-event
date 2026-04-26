import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="px-4 pb-20 md:px-8 lg:px-20">
      <div className="mx-auto max-w-5xl rounded-2xl bg-linear-to-r from-indigo-600 to-purple-600 p-10 text-center text-white shadow-lg">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Ready to build the future of events?
        </h2>

        <p className="mt-3 text-sm opacity-90">
          Join thousands of world-class organizers who trust NextEvent.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link href="/events/add">
            <Button className="bg-white text-indigo-600 hover:bg-slate-100">
              Create Your Event
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant={"outline"} className="bg-transparent">
              Talk to Sales
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
