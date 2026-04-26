export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f5f7ff] px-4 py-10 md:px-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <h1 className="text-3xl font-bold md:text-4xl">
          Terms of Service
        </h1>

        <p className="text-muted-foreground">
          By using NextEvent, you agree to the following terms and conditions.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Use of Service</h2>
          <p>
            You agree to use the platform only for lawful purposes and not to
            misuse the system.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. Account Responsibility</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Event Management</h2>
          <p>
            Organizers are responsible for the accuracy of event details and
            ticket information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Payments</h2>
          <p>
            All ticket purchases are final unless otherwise specified by the
            event organizer.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Termination</h2>
          <p>
            We reserve the right to suspend or terminate accounts that violate
            our policies.
          </p>
        </section>

        <p className="text-sm text-muted-foreground">
          Last updated: {new Date().toDateString()}
        </p>
      </div>
    </main>
  );
}