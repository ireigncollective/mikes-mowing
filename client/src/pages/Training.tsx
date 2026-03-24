// Mike's Mowing and More — Zoom Meeting Training Guide
// Designed for Francine to walk Mike through during the 10am Zoom call
// Covers: Gmail setup, Facebook Business Page, Website overview, Contact form

export default function Training() {
  return (
    <div style={{ fontFamily: "'Georgia', serif", backgroundColor: "#f9f7f2", minHeight: "100vh", padding: "0 0 60px 0" }}>

      {/* Header */}
      <div style={{ backgroundColor: "#1a2e1a", color: "white", padding: "32px 40px", marginBottom: "40px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ fontSize: "13px", color: "#d4a017", fontFamily: "sans-serif", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>Zoom Meeting Guide</div>
          <h1 style={{ fontSize: "32px", fontWeight: "bold", margin: "0 0 8px 0" }}>Mike's Mowing and More</h1>
          <p style={{ color: "rgba(255,255,255,0.7)", margin: 0, fontFamily: "sans-serif", fontSize: "15px" }}>Step-by-step walkthrough for today's onboarding call — prepared by Francine Harris, The iREIGN Collective</p>
        </div>
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 24px" }}>

        {/* Meeting Agenda */}
        <Section color="#1a2e1a" title="📋 Today's Meeting Agenda" light>
          <AgendaItem num="1" title="Review your new website" time="5 min" />
          <AgendaItem num="2" title="Set up your business Gmail account" time="5 min" />
          <AgendaItem num="3" title="Update your Facebook Business Page" time="5 min" />
          <AgendaItem num="4" title="Test the contact form" time="3 min" />
          <AgendaItem num="5" title="Review your monthly maintenance plan" time="5 min" />
          <AgendaItem num="6" title="Next steps & questions" time="7 min" />
        </Section>

        {/* Section 1 — Website */}
        <SectionCard num="1" title="Your New Website" color="#1a2e1a">
          <p style={bodyText}>Your website is live right now at the link below. Here is a quick tour of what is on it:</p>
          <LinkBox url="https://mikesmowin-nkcjppgu.manus.space" label="Your Live Website" />
          <FeatureList items={[
            "Hero section with rotating photos of your real work",
            "Services: Lawn Care and Home Projects with full list",
            "Meet Mike section with your photo and bio",
            "Photo gallery with 23 real project photos",
            "Service area map centered on Barkers Mill Rd",
            "Contact form that sends leads directly to your email",
            "Your phone number and Facebook page linked",
          ]} />
          <Note>When someone fills out the contact form, you will get an email AND a text message notification.</Note>
        </SectionCard>

        {/* Section 2 — Gmail */}
        <SectionCard num="2" title="Setting Up Your Business Gmail" color="#2a4a2a">
          <p style={bodyText}>We are going to create a professional Gmail address for your business. This will be used for your website contact form, Google Business Profile, and client communications.</p>

          <StepBlock step="1" title="Open Gmail on your phone or computer">
            <p style={stepText}>Go to <strong>gmail.com</strong> and click <strong>"Create account"</strong> at the bottom of the sign-in screen.</p>
          </StepBlock>

          <StepBlock step="2" title="Choose your new email address">
            <p style={stepText}>Try one of these options (in order of preference):</p>
            <ul style={listStyle}>
              <li><code style={code}>mikesmowingmore@gmail.com</code></li>
              <li><code style={code}>mikespearsmowing@gmail.com</code></li>
              <li><code style={code}>mikes.mowing.more@gmail.com</code></li>
              <li><code style={code}>mikesmowingclarksville@gmail.com</code></li>
            </ul>
          </StepBlock>

          <StepBlock step="3" title="Verify with your phone number">
            <p style={stepText}>Google will ask to verify your identity. Enter <strong>Mike's cell phone number</strong> — Google will send a 6-digit code by text. Enter that code to continue.</p>
          </StepBlock>

          <StepBlock step="4" title="Complete the setup">
            <p style={stepText}>Fill in your name, birthday (any date is fine), and agree to the terms. Your new Gmail is ready!</p>
          </StepBlock>

          <StepBlock step="5" title="Add Gmail to your phone">
            <p style={stepText}>On your phone, go to <strong>Settings → Accounts → Add Account → Google</strong> and sign in with the new email. Now you will get notifications on your phone.</p>
          </StepBlock>

          <Note>Write down the new email address and password somewhere safe — you will need it for your Google Business Profile too.</Note>
        </SectionCard>

        {/* Section 3 — Facebook */}
        <SectionCard num="3" title="Updating Your Facebook Business Page" color="#1a3a2a">
          <p style={bodyText}>Your Facebook page is already live. We are going to make sure it looks professional and matches your new website.</p>

          <StepBlock step="1" title="Go to your Facebook Business Page">
            <p style={stepText}>Open Facebook and navigate to your business page:</p>
            <LinkBox url="https://www.facebook.com/profile.php?id=100057515355020" label="Mike's Mowing Facebook Page" />
          </StepBlock>

          <StepBlock step="2" title="Update your profile photo">
            <p style={stepText}>Click on your profile photo and select <strong>"Update profile picture"</strong>. Upload a clear, professional photo of yourself — ideally the same one on your website.</p>
          </StepBlock>

          <StepBlock step="3" title="Add a cover photo">
            <p style={stepText}>Click <strong>"Edit cover photo"</strong> at the top of your page. Upload one of your best work photos — a beautiful lawn or completed project. Recommended size: <strong>820 x 312 pixels</strong>.</p>
          </StepBlock>

          <StepBlock step="4" title="Update your About section">
            <p style={stepText}>Click <strong>"Edit Page Info"</strong> and make sure these are filled in:</p>
            <ul style={listStyle}>
              <li><strong>Business name:</strong> Mike's Mowing and More</li>
              <li><strong>Phone:</strong> (618) 306-1760</li>
              <li><strong>Email:</strong> your new business Gmail</li>
              <li><strong>Website:</strong> mikesmowingnmore.com (once domain is purchased)</li>
              <li><strong>Category:</strong> Lawn Care Service</li>
              <li><strong>Location:</strong> Clarksville, TN</li>
            </ul>
          </StepBlock>

          <StepBlock step="5" title="Add your website link to the page">
            <p style={stepText}>In your Page settings, add your website URL so visitors can click straight from Facebook to your website.</p>
          </StepBlock>

          <Note>Consistent branding across your website and Facebook page builds trust with potential customers. The more complete your Facebook page, the better you show up in local searches.</Note>
        </SectionCard>

        {/* Section 4 — Contact Form Test */}
        <SectionCard num="4" title="Testing Your Contact Form" color="#1a2e1a">
          <p style={bodyText}>Let's do a live test right now so Mike can see exactly what his customers will experience — and what he will receive.</p>

          <StepBlock step="1" title="Open the website contact form">
            <p style={stepText}>Go to your website and click the <strong>"Start the Conversation"</strong> button.</p>
          </StepBlock>

          <StepBlock step="2" title="Fill out the form with test info">
            <ul style={listStyle}>
              <li><strong>First Name:</strong> Test</li>
              <li><strong>Last Name:</strong> Customer</li>
              <li><strong>Phone:</strong> (931) 555-1234</li>
              <li><strong>Address:</strong> 1230 Little Bobcat Lane, Clarksville, TN 37042</li>
              <li><strong>Message:</strong> I need my lawn mowed weekly</li>
            </ul>
          </StepBlock>

          <StepBlock step="3" title="Click Send My Request">
            <p style={stepText}>You should see a green <strong>"Thank You!"</strong> confirmation screen. Within 1-2 minutes, check Mike's Gmail — the submission should arrive there.</p>
          </StepBlock>

          <Note>Once we know Mike's phone carrier, we will also set up a text notification so he gets an instant text every time someone submits the form.</Note>
        </SectionCard>

        {/* Section 5 — Monthly Maintenance */}
        <SectionCard num="5" title="Your Monthly Maintenance Plan" color="#2a3a1a">
          <p style={bodyText}>To keep your website current, secure, and working properly, we offer two simple maintenance options:</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "20px" }}>
            <PlanCard
              name="Starter Plan"
              price="$50/mo"
              features={[
                "Up to 3 content updates per month",
                "Photo additions or swaps",
                "Text and pricing updates",
                "Contact info changes",
                "Monthly check-in",
              ]}
            />
            <PlanCard
              name="Growth Plan"
              price="$75/mo"
              features={[
                "Up to 6 content updates per month",
                "Everything in Starter",
                "New service additions",
                "Seasonal promotions",
                "Priority response",
              ]}
              highlight
            />
          </div>

          <Note>Most clients start with the Starter Plan. You can upgrade anytime. Updates are requested by text or email — no tech knowledge needed on your end.</Note>
        </SectionCard>

        {/* Section 6 — Next Steps */}
        <SectionCard num="6" title="Next Steps After Today's Call" color="#1a2e1a">
          <FeatureList items={[
            "Purchase domain: mikesmowingnmore.com ($11.28/year on Namecheap)",
            "Connect custom domain to your website (Francine handles this)",
            "Set up Google Business Profile to appear in local search",
            "Add real customer testimonials to the website (send 3-5 quotes to Francine)",
            "Set up text notifications once we confirm your phone carrier",
            "Brand your Facebook cover photo with a work photo",
          ]} />
        </SectionCard>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: "48px", padding: "24px", borderTop: "2px solid #d4a017" }}>
          <p style={{ color: "#1a2e1a", fontFamily: "sans-serif", fontSize: "14px", margin: "0 0 4px 0" }}>Prepared by <strong>Francine Harris</strong> — The iREIGN Collective</p>
          <p style={{ color: "#888", fontFamily: "sans-serif", fontSize: "13px", margin: 0 }}>When clarity reigns, so do you.</p>
        </div>

      </div>
    </div>
  );
}

// ── Sub-components ──────────────────────────────────────────────

function Section({ children, color, title, light }: { children: React.ReactNode; color: string; title: string; light?: boolean }) {
  return (
    <div style={{ backgroundColor: color, borderRadius: "12px", padding: "28px 32px", marginBottom: "32px" }}>
      <h2 style={{ color: light ? "#d4a017" : "white", fontFamily: "sans-serif", fontSize: "18px", fontWeight: "bold", marginBottom: "20px", marginTop: 0 }}>{title}</h2>
      {children}
    </div>
  );
}

function AgendaItem({ num, title, time }: { num: string; title: string; time: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
      <div style={{ width: "28px", height: "28px", borderRadius: "50%", backgroundColor: "#d4a017", color: "#1a2e1a", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "13px", fontFamily: "sans-serif", flexShrink: 0 }}>{num}</div>
      <div style={{ flex: 1, color: "white", fontFamily: "sans-serif", fontSize: "15px" }}>{title}</div>
      <div style={{ color: "#d4a017", fontFamily: "sans-serif", fontSize: "13px", whiteSpace: "nowrap" }}>{time}</div>
    </div>
  );
}

function SectionCard({ num, title, color, children }: { num: string; title: string; color: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "36px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
        <div style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: color, color: "#d4a017", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "16px", fontFamily: "sans-serif", flexShrink: 0 }}>{num}</div>
        <h2 style={{ color: color, fontFamily: "sans-serif", fontSize: "22px", fontWeight: "bold", margin: 0 }}>{title}</h2>
      </div>
      <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "28px 32px", boxShadow: "0 2px 12px rgba(0,0,0,0.07)", borderLeft: `4px solid ${color}` }}>
        {children}
      </div>
    </div>
  );
}

function StepBlock({ step, title, children }: { step: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "20px", paddingLeft: "16px", borderLeft: "3px solid #d4a017" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
        <div style={{ backgroundColor: "#d4a017", color: "#1a2e1a", borderRadius: "4px", padding: "2px 8px", fontSize: "12px", fontWeight: "bold", fontFamily: "sans-serif" }}>STEP {step}</div>
        <strong style={{ fontFamily: "sans-serif", fontSize: "15px", color: "#1a2e1a" }}>{title}</strong>
      </div>
      {children}
    </div>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: "12px 0" }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "6px 0", fontFamily: "sans-serif", fontSize: "14px", color: "#333", borderBottom: "1px solid #f0ede6" }}>
          <span style={{ color: "#d4a017", fontSize: "16px", flexShrink: 0, marginTop: "1px" }}>✦</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: "#f0f7f0", border: "1px solid #c8e0c8", borderRadius: "8px", padding: "12px 16px", marginTop: "16px", fontFamily: "sans-serif", fontSize: "13px", color: "#2a4a2a" }}>
      <strong>💡 Note:</strong> {children}
    </div>
  );
}

function LinkBox({ url, label }: { url: string; label: string }) {
  return (
    <div style={{ backgroundColor: "#1a2e1a", borderRadius: "8px", padding: "12px 16px", marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <span style={{ color: "#d4a017", fontFamily: "sans-serif", fontSize: "14px", fontWeight: "bold" }}>{label}</span>
      <a href={url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "sans-serif", fontSize: "13px", textDecoration: "none", backgroundColor: "#d4a017", color: "#1a2e1a", padding: "6px 14px", borderRadius: "6px", fontWeight: "bold" }}>Open →</a>
    </div>
  );
}

function PlanCard({ name, price, features, highlight }: { name: string; price: string; features: string[]; highlight?: boolean }) {
  return (
    <div style={{ backgroundColor: highlight ? "#1a2e1a" : "#f9f7f2", border: highlight ? "2px solid #d4a017" : "2px solid #e0ddd6", borderRadius: "10px", padding: "20px" }}>
      <div style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "16px", color: highlight ? "#d4a017" : "#1a2e1a", marginBottom: "4px" }}>{name}</div>
      <div style={{ fontFamily: "sans-serif", fontSize: "28px", fontWeight: "bold", color: highlight ? "white" : "#1a2e1a", marginBottom: "16px" }}>{price}</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", padding: "5px 0", fontFamily: "sans-serif", fontSize: "13px", color: highlight ? "rgba(255,255,255,0.85)" : "#444" }}>
            <span style={{ color: "#d4a017", flexShrink: 0 }}>✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const bodyText: React.CSSProperties = { fontFamily: "sans-serif", fontSize: "15px", color: "#444", lineHeight: "1.6", marginBottom: "16px" };
const stepText: React.CSSProperties = { fontFamily: "sans-serif", fontSize: "14px", color: "#555", lineHeight: "1.6", margin: "4px 0 0 0" };
const listStyle: React.CSSProperties = { fontFamily: "sans-serif", fontSize: "14px", color: "#444", lineHeight: "1.8", paddingLeft: "20px", margin: "8px 0" };
const code: React.CSSProperties = { backgroundColor: "#f0ede6", padding: "2px 6px", borderRadius: "4px", fontSize: "13px", fontFamily: "monospace" };
