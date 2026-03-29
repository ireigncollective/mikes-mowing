// Design: Craftsman Warmth — dark forest green nav, clean white content, Playfair Display headings
// This is a static legal page. Keep styling minimal and readable.

import { Link } from "wouter";

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold font-serif text-[#1a2e1a] mb-2">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-10">Last Updated: March 29, 2026</p>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
          <p>
            By accessing or using the Mike's Mowing and More website at{" "}
            <a href="https://mikesmowingnmore.com" className="text-amber-700 underline hover:text-amber-900">
              mikesmowingnmore.com
            </a>
            , you agree to these Terms of Service. Please read them carefully.
          </p>

          <section>
            <h2 className="text-2xl font-bold font-serif text-[#1a2e1a] mb-3">Use of This Website</h2>
            <p>
              This website is provided for informational purposes and to allow potential customers to request
              service estimates. You agree to use this website only for lawful purposes and in a manner that
              does not infringe the rights of others.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif text-[#1a2e1a] mb-3">Service Estimates</h2>
            <p>
              Submitting the contact or quote request form on this website does not constitute a binding
              service agreement. All estimates are subject to an in-person property walk-through. Pricing is
              confirmed at the time of the walk-through and may differ from any preliminary expectations.
              Mike's Mowing and More reserves the right to decline any service request.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif text-[#1a2e1a] mb-3">Service Area</h2>
            <p>
              Mike's Mowing and More serves properties within our defined service area surrounding
              Clarksville, Tennessee, including Clarksville TN, Oak Grove KY, and Fort Campbell. Properties
              outside this area may not be eligible for service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif text-[#1a2e1a] mb-3">No Guarantee of Availability</h2>
            <p>
              Submitting a service request does not guarantee availability. Service scheduling is subject to
              existing commitments, weather conditions, and other factors beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif text-[#1a2e1a] mb-3">Accuracy of Information</h2>
            <p>
              We make reasonable efforts to keep the information on this website accurate and up to date.
              However, we do not warrant that the content is complete, accurate, or current. Service
              offerings, pricing, and availability are subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif text-[#1a2e1a] mb-3">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Mike's Mowing and More shall not be liable for any
              indirect, incidental, or consequential damages arising from your use of this website or
              reliance on any information contained herein. Our total liability for any claim arising from
              your use of this website shall not exceed one hundred dollars ($100).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif text-[#1a2e1a] mb-3">Intellectual Property</h2>
            <p>
              All content on this website including text, images, and the overall design is the property of
              Mike's Mowing and More and may not be reproduced without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif text-[#1a2e1a] mb-3">Governing Law</h2>
            <p>
              These Terms of Service are governed by the laws of the State of Tennessee. Any disputes shall
              be resolved in the courts of Montgomery County, Tennessee.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif text-[#1a2e1a] mb-3">Changes to These Terms</h2>
            <p>
              We may update these Terms of Service from time to time. The most current version will always
              be posted on this page with the updated date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold font-serif text-[#1a2e1a] mb-3">Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, contact us at{" "}
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
