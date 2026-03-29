// Design: Craftsman Warmth — dark forest green nav, clean white content, Playfair Display headings
// This is a static legal page. Keep styling minimal and readable.

import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="bg-[#1a2e1a] px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-amber-400 font-bold text-lg font-serif hover:text-amber-300 transition-colors">
          Mike's Mowing and More
        </Link>
        <Link href="/" className="text-white text-sm hover:text-amber-400 transition-colors">
          ← Back to Home
        </Link>
      </nav>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold font-serif text-[#1a2e1a] mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last Updated: March 29, 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <p>
            At Mike's Mowing and More, we respect your privacy and are committed to protecting the personal
            information you share with us. This Privacy Policy explains what information we collect, how we
            use it, and your rights regarding that information.
          </p>

          <section>
            <h2 className="text-2xl font-bold font-serif text-[#1a2e1a] mb-3">Information We Collect</h2>
            <p>
              When you fill out the contact or quote request form on our website, we collect the following
              information: your first and last name, phone number, email address, and street address. We
              collect this information solely to respond to your service inquiry.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif text-[#1a2e1a] mb-3">How We Use Your Information</h2>
            <p>
              We use the information you provide only to contact you about your service request and to
              determine whether your property is within our service area. We do not use your information for
              marketing, we do not sell your information to anyone, and we do not share your information with
              third parties except as described below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif text-[#1a2e1a] mb-3">Third-Party Services</h2>
            <p>
              Our contact form is processed by Formspree, a third-party form handling service. When you
              submit the form, your information is transmitted through Formspree's infrastructure to our
              email inbox. Formspree has its own privacy policy available at{" "}
              <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900">
                formspree.io
              </a>
              . Our website is also protected by Cloudflare, which may process your IP address and browser
              information as part of its security and performance services. Cloudflare's privacy policy is
              available at{" "}
              <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900">
                cloudflare.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif text-[#1a2e1a] mb-3">How Long We Keep Your Information</h2>
            <p>
              We retain form submissions for up to 12 months. After that period, submissions are deleted
              from our records.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif text-[#1a2e1a] mb-3">Your Rights</h2>
            <p>
              You have the right to request that we delete any personal information you have submitted
              through our contact form. To make a deletion request, email us at{" "}
              <a href="mailto:michaelspears72@gmail.com" className="text-amber-700 underline hover:text-amber-900">
                michaelspears72@gmail.com
              </a>{" "}
              with the subject line "Delete My Information" and we will process your request within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif text-[#1a2e1a] mb-3">Cookies and Tracking</h2>
            <p>
              Our website does not use cookies or tracking technologies beyond what is standard in
              Cloudflare's security and performance services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif text-[#1a2e1a] mb-3">Children's Privacy</h2>
            <p>
              Our website is not directed at children under the age of 13 and we do not knowingly collect
              information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif text-[#1a2e1a] mb-3">Governing Law</h2>
            <p>
              This Privacy Policy is governed by the laws of the State of Tennessee.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif text-[#1a2e1a] mb-3">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at{" "}
              <a href="mailto:michaelspears72@gmail.com" className="text-amber-700 underline hover:text-amber-900">
                michaelspears72@gmail.com
              </a>{" "}
              or call{" "}
              <a href="tel:+19313269806" className="text-amber-700 underline hover:text-amber-900">
                (931) 326-9806
              </a>
              .
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a2e1a] text-white py-8 px-6 text-center text-sm">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Mike's Mowing and More. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-3">
          <Link href="/privacy-policy" className="text-gray-400 hover:text-amber-400 transition-colors">Privacy Policy</Link>
          <Link href="/terms-of-service" className="text-gray-400 hover:text-amber-400 transition-colors">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
}
