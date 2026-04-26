import Image from "next/image";

export default function StorySection() {
  return (
    <section className="px-4 py-16 md:px-8 lg:px-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        
        {/* Image */}
        <div className="rounded-xl overflow-hidden shadow-md">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAK0feLw7U44xR0oUxGICf6xmddg6V8Te1tO50a72Yzb0-ILqvzKmcVlaULANRDHMvHhZgygpEKMlZOOJwb0EA1aeatJ_lbNZPbXO18qRMzax7WkyqT_cSzcLh1WRhqptyhDw_b3davDia1wcCjSi0FQn1mVL7lpBa7vfn0Ds4FAGYiQtze20V33DuAaMRVuAaVuuvKpPm7PmAy-jsDuc2F6rdvp78u8dEwQviU-8laMYKYmhbKEAV8xn2Aaa_hl0saNoogNHVnxGQ"
            alt="Team"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            Our Story
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            Founded in 2024, NextEvent was born out of a simple observation:
            the tools used to manage premium professional gatherings were
            lagging behind the events themselves.
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            What started as a small team of three developers has evolved into
            a global ecosystem. Today, we support organizers across five
            continents with infrastructure for everything from executive
            roundtables to international trade shows.
          </p>

          <p className="mt-4 text-sm leading-6 text-slate-600">
            Our journey is driven by excellence and a commitment to the idea
            that every event is an opportunity to change a career, a business,
            or an industry.
          </p>

          {/* Quote */}
          <blockquote className="mt-6 border-l-4 border-blue-600 pl-4 italic text-blue-700">
            “We don’t just sell tickets; we facilitate the intersections of the
            world’s brightest minds.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}