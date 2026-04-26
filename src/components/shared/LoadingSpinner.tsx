import { Bell, CircleUserRound } from "lucide-react";

export default function LoadingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f9ff]">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-purple-300/40 blur-3xl" />

      <header className="relative z-10 flex h-14 items-center justify-between border-b bg-white/70 px-6 backdrop-blur">
        <h1 className="text-2xl font-bold text-violet-600">Nexus</h1>

        <div className="flex items-center gap-6 text-slate-600">
          <Bell className="h-5 w-5" />
          <CircleUserRound className="h-6 w-6" />
        </div>
      </header>

      <section className="relative z-10 flex min-h-[calc(100vh-56px)] flex-col items-center justify-center px-4 pb-16">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-violet-200 bg-white/60 shadow-sm">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-violet-600" />
          <span className="text-4xl font-extrabold text-violet-600">N</span>
        </div>

        <h2 className="mt-12 text-center text-3xl font-bold text-slate-950 md:text-4xl">
          Preparing your experience
        </h2>

        <p className="mt-4 max-w-lg text-center text-lg leading-8 text-slate-600">
          Curating the best events and professional networks for you.
        </p>

        <div className="mt-12 grid w-full max-w-5xl gap-5 md:grid-cols-3">
          <SkeletonCard />
          <SkeletonCard variant="middle" />
          <SkeletonCard variant="profile" />
        </div>

        <div className="mt-16 w-full max-w-sm">
          <div className="h-1.5 overflow-hidden rounded-full bg-blue-100">
            <div className="h-full w-[65%] animate-pulse rounded-full bg-gradient-to-r from-indigo-600 to-purple-600" />
          </div>

          <div className="mt-3 flex justify-between text-sm">
            <span className="text-slate-500">Synchronizing data...</span>
            <span className="font-semibold text-indigo-700">65%</span>
          </div>
        </div>
      </section>
    </main>
  );
}

function SkeletonCard({
  variant = "default",
}: {
  variant?: "default" | "middle" | "profile";
}) {
  if (variant === "profile") {
    return (
      <div className="h-48 rounded-xl border bg-white/70 p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 animate-pulse rounded-full bg-indigo-100" />
          <div className="space-y-2">
            <div className="h-3 w-24 animate-pulse rounded-full bg-indigo-100" />
            <div className="h-3 w-16 animate-pulse rounded-full bg-indigo-100" />
          </div>
        </div>
        <div className="mt-7 h-20 animate-pulse rounded-lg bg-indigo-100" />
      </div>
    );
  }

  return (
    <div className="h-48 rounded-xl border bg-white/70 p-3 shadow-sm">
      {variant === "middle" && (
        <div className="mb-4 h-4 animate-pulse rounded-full bg-indigo-100" />
      )}

      <div className="h-28 animate-pulse rounded-lg bg-indigo-100" />

      <div className="mt-5 space-y-2">
        <div className="h-3 w-3/4 animate-pulse rounded-full bg-indigo-100" />
        <div className="h-3 w-1/2 animate-pulse rounded-full bg-indigo-100" />
      </div>
    </div>
  );
}
