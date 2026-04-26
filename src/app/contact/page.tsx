import ContactCards from "@/components/contact/ContactCards";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactMap from "@/components/contact/ContactMap";


export default function ContactSection() {
  return (
    <section className="bg-[#f7f9ff] px-4 py-12 md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            We&apos;d love to hear from you. Our team is here to help with any
            questions about your events.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_0.95fr]">
          <ContactForm/>

          <div className="space-y-6">
            <ContactInfo />
            <ContactMap/>
          </div>
        </div>

        <ContactCards />
      </div>
    </section>
  );
}