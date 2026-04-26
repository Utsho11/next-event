import Link from "next/link";
import Logo from "../shared/Logo";

export default function Footer() {
  return (
    <footer className="border-t px-4 md:px-8">
      <div className="mx-auto max-w-7xl px-4 py-4 md:py-8 md:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Logo + Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="text-2xl font-bold text-indigo-600">
                <Logo />
              </Link>
            </div>

            <p className="text-sm text-slate-500 leading-6">
              Empowering organizers through innovative design and reliable
              technology.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <Link href="/events" className="hover:text-indigo-600">
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Utsho11/next-event"
                  className="hover:text-indigo-600"
                >
                  Github
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-indigo-600">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <Link href="/about" className="hover:text-indigo-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-indigo-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <Link href="/privacy" className="hover:text-indigo-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-indigo-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} NextEvent. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
