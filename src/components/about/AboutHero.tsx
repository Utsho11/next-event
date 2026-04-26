import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="bg-[#eef4ff] px-4 py-16 md:px-8 lg:px-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <span className="rounded-full bg-purple-100 px-4 py-1 text-sm font-medium text-purple-600">
            Empowering Connections
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            About NextEvent
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-600">
            Our mission is to empower event organizers with seamless technology
            while connecting people through high-tier professional networking
            and unforgettable experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              <span>5,000+ Events Hosted</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              <span>1M+ Monthly Attendees</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-2 shadow-xl">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlUgPyVsDcbnuFgyQSIDEmW9yz2Ih-8CxqBFFZtL_xb_U-rKdriISYCfUQ1xU8zHGkJ9dN4ou02TaeeglJuydouBzHGZW49j7LOsS-naiB2AT4rNhWyWp1WSHxiPzqwLVRTFJnz31KRkp5Fv_nGFLYA_xgkjUaZfZN4sYuU-PmKhHhHYaftT0oKRiBLln0YfTKvC5AqeGuVJhTdGrYEgbU-O-0WQ0ilaq4BdngZipcjUul2nNo26z0HZ3JpzZauqyYh3Ud84m6HgE"
            alt="Professional event audience"
            width={700}
            height={500}
            className="h-65 w-full rounded-lg object-cover md:h-97.5"
            priority
          />
        </div>
      </div>
    </section>
  );
}
