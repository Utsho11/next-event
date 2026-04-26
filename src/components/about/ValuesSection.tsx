import { Zap, Users, CheckCircle2, Globe } from "lucide-react";

export default function ValuesSection() {
  return (
    <section className="bg-[#eef4ff] px-4 py-16 md:px-8 lg:px-20">
      <div className="mx-auto max-w-6xl">
        
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            Why We Do It
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Our core values drive every line of code we write.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          
          {/* Card 1 */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <Zap className="h-5 w-5 text-blue-600" />
            <h3 className="mt-4 font-semibold">Next-Gen Innovation</h3>
            <p className="mt-2 text-sm text-slate-600">
              AI-driven matchmaking and real-time analytics ensure every event
              stays ahead of the curve.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <Users className="h-5 w-5 text-purple-600" />
            <h3 className="mt-4 font-semibold">Community First</h3>
            <p className="mt-2 text-sm text-slate-600">
              We prioritize accessibility and human-centric design in every
              feature we build.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl bg-white p-6 shadow-sm">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <h3 className="mt-4 font-semibold">Seamless UX</h3>
            <p className="mt-2 text-sm text-slate-600">
              Intuitive dashboards and zero-latency check-ins create a flawless
              experience.
            </p>
          </div>

          {/* Card 4 (highlight) */}
          <div className="rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 p-6 text-white shadow-lg">
            <Globe className="h-5 w-5" />
            <h3 className="mt-4 font-semibold">Global Reach</h3>
            <p className="mt-2 text-sm opacity-90">
              From San Francisco to Singapore, our platform powers global events
              with local experience.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}