export default function VelocitySection() {
  return (
    <section className="px-4 py-16 md:px-8 lg:px-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
          Our Velocity
        </h2>
      </div>

      <div className="relative mx-auto mt-12 max-w-3xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-slate-300" />

        <div className="space-y-16">
          
          {/* Item 1 */}
          <div className="relative flex flex-col items-center md:flex-row md:justify-between">
            
            <div className="md:w-1/2 md:pr-10 text-right">
              <p className="text-sm font-semibold text-blue-600">2024</p>
              <p className="mt-2 text-sm text-slate-600">
                The vision launched. Released beta platform to select partners.
              </p>
            </div>

            {/* Dot */}
            <div className="z-10 h-4 w-4 rounded-full bg-blue-600 border-4 border-white shadow" />

            <div className="hidden md:block md:w-1/2" />
          </div>

          {/* Item 2 */}
          <div className="relative flex flex-col items-center md:flex-row md:justify-between">
            
            <div className="hidden md:block md:w-1/2" />

            {/* Dot */}
            <div className="z-10 h-4 w-4 rounded-full bg-purple-600 border-4 border-white shadow" />

            <div className="md:w-1/2 md:pl-10 text-left">
              <p className="text-sm font-semibold text-purple-600">Present</p>
              <p className="mt-2 text-sm text-slate-600">
                Global expansion. Thousands of organizers across 30+ countries.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}