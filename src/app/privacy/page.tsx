export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f5f7ff] px-4 py-10 md:px-8">
      <div className="mx-auto max-w-4xl space-y-6">
        <h1 className="text-3xl font-bold md:text-4xl">Privacy Policy</h1>

        <p className="text-muted-foreground">
          Your privacy is important to us. This policy explains how NextEvent
          collects, uses, and protects your information.
        </p>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p>
            We collect personal information such as your name, email address,
            and profile data when you create an account or interact with our
            platform.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">2. How We Use Your Data</h2>
          <p>
            We use your data to provide services, manage events, process
            bookings, and improve user experience.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">3. Data Protection</h2>
          <p>
            We implement industry-standard security measures to protect your
            information from unauthorized access.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">4. Third-Party Services</h2>
          <p>
            We may use third-party services like Firebase for authentication and
            data storage.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">5. Your Rights</h2>
          <p>
            You can update or delete your personal data anytime through your
            account settings.
          </p>
        </section>

        <p className="text-sm text-muted-foreground">
          Last updated: {new Date().toDateString()}
        </p>
      </div>
    </main>
  );
}
