// Mike's Mowing and More — Owner Reference Guide
// Written for Mike Spears — plain language, visual, white background
// Covers: website, service area, form notifications, Blinq, Google Business, maintenance

const BLINQ_QR = "https://d2xsxph8kpxj0f.cloudfront.net/310519663375111780/nkcjppguA9oxAReMTDaKiJ/blinq_qr_code_383b1d79.png";
const BLINQ_URL = "https://blinq.me/OuQbZ6FU8K1V?bs=db";
const WEBSITE_URL = "https://mikesmowin-nkcjppgu.manus.space";

export default function Training() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#ffffff", minHeight: "100vh", padding: "0 0 80px 0", color: "#222" }}>

      {/* Header */}
      <div style={{ backgroundColor: "#ffffff", borderBottom: "5px solid #d4a017", padding: "32px 40px 24px" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "12px" }}>
            <div style={{ width: "48px", height: "48px", borderRadius: "50%", backgroundColor: "#1a2e1a", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#d4a017", fontSize: "22px" }}>🌿</span>
            </div>
            <div>
              <div style={{ fontSize: "12px", color: "#d4a017", letterSpacing: "2px", textTransform: "uppercase", fontWeight: "bold" }}>Owner Reference Guide</div>
              <h1 style={{ fontSize: "26px", fontWeight: "bold", margin: 0, color: "#1a2e1a" }}>Mike's Mowing and More</h1>
            </div>
          </div>
          <p style={{ color: "#555", fontSize: "15px", margin: 0 }}>
            Hi Mike! This guide covers everything you need to know about your new website and digital tools. Keep this handy — it is your go-to reference whenever you have questions.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "820px", margin: "0 auto", padding: "40px 24px 0" }}>

        {/* ── SECTION 1: Your Website ── */}
        <Card num="1" emoji="💻" title="Your Website">
          <p style={body}>Your new website is live and ready for customers. Share this link anywhere — text it to people, put it on your truck, add it to your Facebook page.</p>

          <LinkButton url={WEBSITE_URL} label="mikesmowin-nkcjppgu.manus.space" />

          <p style={body}>Here is what customers will find when they visit:</p>
          <FeatureRow items={[
            { icon: "📸", text: "Photos of your real work — lawn care, fences, concrete, gates" },
            { icon: "🛠️", text: "Your full list of services — Lawn Care and Home Projects" },
            { icon: "👤", text: "Your photo and bio — who you are and why you do this work" },
            { icon: "📍", text: "A map showing your service area around Clarksville, TN" },
            { icon: "📬", text: "A contact form so customers can request an estimate" },
          ]} />
        </Card>

        {/* ── SECTION 2: The 8-Mile Service Area ── */}
        <Card num="2" emoji="📍" title="Your 8-Mile Service Area">
          <p style={body}>Your website is smart — it knows where you work. When a customer fills out the contact form, it automatically checks their address.</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", margin: "20px 0" }}>
            <StatusBox
              color="#e8f5e9"
              border="#4caf50"
              icon="✅"
              title="Inside 8 Miles"
             text="The form goes through and you get notified. The customer sees a green message: Great news - we serve your area!"
            />
            <StatusBox
              color="#fff3e0"
              border="#ff9800"
              icon="⚠️"
              title="Outside 8 Miles"
              text="The form is blocked and the customer is told to call you directly at (618) 306-1760. You do not get a notification."
            />
          </div>

          <Note>Your service area is centered on the Barkers Mill area in Clarksville, TN. If you ever expand your service area, just let Francine know and she will update it.</Note>
        </Card>

        {/* ── SECTION 3: Getting Notified ── */}
        <Card num="3" emoji="🔔" title="When Someone Submits the Form">
          <p style={body}>Every time a customer fills out the contact form on your website, you will be notified in two ways:</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", margin: "20px 0" }}>
            <NotifyBox
              icon="📱"
              title="Text Message"
              text="You will get a text to your phone right away. It will show the customer's name, phone number, address, and what they need."
              color="#e8f0fe"
              border="#4285f4"
            />
            <NotifyBox
              icon="📧"
              title="Email"
              text="The full submission also goes to your Gmail inbox, labeled Mike's Mowing - Website Leads so it is easy to find."
              color="#e8f5e9"
              border="#34a853"
            />
          </div>

          <div style={{ backgroundColor: "#fffde7", border: "1px solid #f9a825", borderRadius: "10px", padding: "20px", marginTop: "8px" }}>
            <p style={{ fontWeight: "bold", color: "#1a2e1a", margin: "0 0 10px 0", fontSize: "15px" }}>📋 What the notification includes:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", lineHeight: "2", color: "#333", fontSize: "14px" }}>
              <li><strong>Customer's name</strong></li>
              <li><strong>Their phone number</strong></li>
              <li><strong>Their address</strong></li>
              <li><strong>What they need done</strong></li>
            </ul>
          </div>

          <div style={{ backgroundColor: "#1a2e1a", borderRadius: "10px", padding: "20px", marginTop: "16px" }}>
            <p style={{ color: "#d4a017", fontWeight: "bold", margin: "0 0 8px 0", fontSize: "15px" }}>⚡ What to do when you get the notification:</p>
            <p style={{ color: "white", margin: 0, fontSize: "14px", lineHeight: "1.7" }}>
              Call or text the customer back within <strong style={{ color: "#d4a017" }}>24 hours</strong>. The faster you respond, the better your chances of landing the job. Most customers contact multiple companies — being first matters.
            </p>
          </div>
        </Card>

        {/* ── SECTION 4: Blinq Digital Business Card ── */}
        <Card num="4" emoji="💳" title="Your Digital Business Card (Blinq)">
          <p style={body}>Your Blinq card is your digital business card. Instead of handing someone a paper card they might lose, you share a link or let them scan a QR code — and your contact info saves right to their phone.</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "24px", alignItems: "center", margin: "20px 0" }}>
            <div>
              <p style={{ fontWeight: "bold", color: "#1a2e1a", margin: "0 0 12px 0" }}>How to share your Blinq card:</p>
              <StepItem num="1" text="Open your Blinq link on your phone" />
              <StepItem num="2" text="Let the customer scan the QR code with their camera" />
              <StepItem num="3" text="Or text them the link directly" />
              <StepItem num="4" text="They tap it and your contact info saves to their phone" />
              <div style={{ marginTop: "16px" }}>
                <LinkButton url={BLINQ_URL} label="Open Your Blinq Card" />
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <img src={BLINQ_QR} alt="Blinq QR Code" style={{ width: "140px", height: "140px", border: "3px solid #d4a017", borderRadius: "10px" }} />
              <p style={{ fontSize: "11px", color: "#888", margin: "6px 0 0 0", fontFamily: "sans-serif" }}>Scan to open your card</p>
            </div>
          </div>

          <Note>Save this QR code image to your phone so you always have it ready. You can also print it and put it on your truck or leave-behind materials.</Note>
        </Card>

        {/* ── SECTION 5: Google Business Profile ── */}
        <Card num="5" emoji="🔍" title="Your Google Business Profile">
          <p style={body}>Your Google Business Profile is what makes you show up when someone in Clarksville searches for <strong>"lawn care near me"</strong> or <strong>"mowing service Clarksville TN"</strong> on Google. It is one of the most powerful free tools for getting local customers.</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", margin: "20px 0" }}>
            <BenefitBox icon="🗺️" title="Google Maps" text="You show up on the map when people search nearby" />
            <BenefitBox icon="⭐" title="Reviews" text="Customers can leave you Google reviews that build trust" />
            <BenefitBox icon="📞" title="Direct Calls" text="People can call you directly from the Google search result" />
          </div>

          <div style={{ backgroundColor: "#f0f7f0", border: "1px solid #c8e0c8", borderRadius: "10px", padding: "20px", marginTop: "8px" }}>
            <p style={{ fontWeight: "bold", color: "#1a2e1a", margin: "0 0 10px 0" }}>What your Google Business Profile will show:</p>
            <ul style={{ margin: 0, paddingLeft: "20px", lineHeight: "2", color: "#333", fontSize: "14px" }}>
              <li>Your business name — Mike's Mowing and More</li>
              <li>Your phone number — (618) 306-1760</li>
              <li>Your service area — Clarksville, TN</li>
              <li>Your website link</li>
              <li>Photos of your work</li>
              <li>Customer reviews and your star rating</li>
            </ul>
          </div>

          <Note>Francine will set up your Google Business Profile for you. Once it is live, ask every happy customer to leave you a Google review — it is the fastest way to build your reputation online.</Note>
        </Card>

        {/* ── SECTION 6: Monthly Maintenance ── */}
        <Card num="6" emoji="🔧" title="Your Monthly Maintenance Plan">
          <p style={body}>Your website is not a one-time thing — it needs to stay current as your business grows. Francine handles all updates for you. You never have to touch the website yourself.</p>

          <div style={{ backgroundColor: "#1a2e1a", borderRadius: "12px", padding: "24px", margin: "20px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
              <div>
                <div style={{ color: "#d4a017", fontWeight: "bold", fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>Starter Plan</div>
                <div style={{ color: "white", fontSize: "32px", fontWeight: "bold" }}>$50<span style={{ fontSize: "16px", fontWeight: "normal", color: "rgba(255,255,255,0.6)" }}>/month</span></div>
              </div>
              <div style={{ flex: 1, minWidth: "200px" }}>
                <ul style={{ margin: 0, paddingLeft: "0", listStyle: "none", color: "rgba(255,255,255,0.85)", fontSize: "14px", lineHeight: "2" }}>
                  {["Up to 3 content updates per month", "Add or swap photos", "Update services or pricing", "Change contact information", "Monthly check-in with Francine"].map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: "8px" }}><span style={{ color: "#d4a017" }}>✓</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div style={{ backgroundColor: "#fffde7", border: "1px solid #f9a825", borderRadius: "10px", padding: "16px" }}>
            <p style={{ fontWeight: "bold", color: "#1a2e1a", margin: "0 0 8px 0" }}>How to request an update:</p>
            <p style={{ color: "#333", margin: 0, fontSize: "14px", lineHeight: "1.7" }}>
              Just text or email Francine at any time. Tell her what you want changed and she will take care of it. No tech knowledge needed on your end — that is what the plan is for.
            </p>
          </div>
        </Card>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: "48px", padding: "24px 0", borderTop: "2px solid #d4a017" }}>
          <p style={{ color: "#1a2e1a", fontSize: "14px", margin: "0 0 4px 0", fontWeight: "bold" }}>Prepared by Francine Harris — The iREIGN Collective</p>
          <p style={{ color: "#888", fontSize: "13px", margin: 0 }}>When clarity reigns, so do you.</p>
        </div>

      </div>
    </div>
  );
}

// ── Sub-components ──────────────────────────────────────────────

function Card({ num, emoji, title, children }: { num: string; emoji: string; title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "40px", borderRadius: "14px", border: "1px solid #e8e8e8", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
      <div style={{ backgroundColor: "#1a2e1a", padding: "16px 24px", display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "#d4a017", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "14px", color: "#1a2e1a", flexShrink: 0 }}>{num}</div>
        <span style={{ fontSize: "18px" }}>{emoji}</span>
        <h2 style={{ color: "white", margin: 0, fontSize: "18px", fontWeight: "bold" }}>{title}</h2>
      </div>
      <div style={{ padding: "24px" }}>{children}</div>
    </div>
  );
}

function LinkButton({ url, label }: { url: string; label: string }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#d4a017", color: "#1a2e1a", padding: "10px 20px", borderRadius: "8px", fontWeight: "bold", fontSize: "14px", textDecoration: "none", marginBottom: "16px" }}>
      🔗 {label}
    </a>
  );
}

function FeatureRow({ items }: { items: { icon: string; text: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "12px" }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", padding: "10px 14px", backgroundColor: "#f9f9f9", borderRadius: "8px", fontSize: "14px" }}>
          <span style={{ fontSize: "18px", flexShrink: 0 }}>{item.icon}</span>
          <span style={{ color: "#333" }}>{item.text}</span>
        </div>
      ))}
    </div>
  );
}

function StatusBox({ color, border, icon, title, text }: { color: string; border: string; icon: string; title: string; text: string }) {
  return (
    <div style={{ backgroundColor: color, border: `2px solid ${border}`, borderRadius: "10px", padding: "16px" }}>
      <div style={{ fontSize: "20px", marginBottom: "6px" }}>{icon}</div>
      <div style={{ fontWeight: "bold", color: "#1a2e1a", marginBottom: "6px", fontSize: "14px" }}>{title}</div>
      <div style={{ fontSize: "13px", color: "#444", lineHeight: "1.5" }}>{text}</div>
    </div>
  );
}

function NotifyBox({ icon, title, text, color, border }: { icon: string; title: string; text: string; color: string; border: string }) {
  return (
    <div style={{ backgroundColor: color, border: `2px solid ${border}`, borderRadius: "10px", padding: "16px" }}>
      <div style={{ fontSize: "28px", marginBottom: "8px" }}>{icon}</div>
      <div style={{ fontWeight: "bold", color: "#1a2e1a", marginBottom: "6px", fontSize: "15px" }}>{title}</div>
      <div style={{ fontSize: "13px", color: "#444", lineHeight: "1.6" }}>{text}</div>
    </div>
  );
}

function StepItem({ num, text }: { num: string; text: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
      <div style={{ width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "#d4a017", color: "#1a2e1a", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "12px", flexShrink: 0 }}>{num}</div>
      <span style={{ fontSize: "14px", color: "#333" }}>{text}</span>
    </div>
  );
}

function BenefitBox({ icon, title, text }: { icon: string; title: string; text: string }) {
  return (
    <div style={{ backgroundColor: "#f9f9f9", border: "1px solid #e8e8e8", borderRadius: "10px", padding: "16px", textAlign: "center" }}>
      <div style={{ fontSize: "28px", marginBottom: "8px" }}>{icon}</div>
      <div style={{ fontWeight: "bold", color: "#1a2e1a", marginBottom: "6px", fontSize: "14px" }}>{title}</div>
      <div style={{ fontSize: "12px", color: "#666", lineHeight: "1.5" }}>{text}</div>
    </div>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: "#f0f7f0", border: "1px solid #c8e0c8", borderRadius: "8px", padding: "12px 16px", marginTop: "16px", fontSize: "13px", color: "#2a4a2a", lineHeight: "1.6" }}>
      <strong>💡 Good to know:</strong> {children}
    </div>
  );
}

const body: React.CSSProperties = { fontSize: "15px", color: "#444", lineHeight: "1.7", marginBottom: "16px" };
