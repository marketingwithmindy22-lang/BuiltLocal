const { useState } = React;

function App() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    industry: "",
    location: "",
    goal: "",
    value: "",
    budget: "",
    headline: "Welcome to our business!",
    subhead: "We are here to serve you.",
    offer: "20% off your first visit",
    cta: "Call Now",
    phone: "123-456-7890",
  });

  const update = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <div>
      <header><h1>Small Biz Campaign Builder</h1></header>
      <div className="container">
        {step === 1 && (
          <div>
            <h2>Step 1: Business Info</h2>
            <input placeholder="Business Name" value={form.name} onChange={e => update("name", e.target.value)} />
            <input placeholder="Industry" value={form.industry} onChange={e => update("industry", e.target.value)} />
            <input placeholder="Location" value={form.location} onChange={e => update("location", e.target.value)} />
            <input placeholder="Goal (Sales/Leads)" value={form.goal} onChange={e => update("goal", e.target.value)} />
            <input placeholder="Avg. Transaction Value" value={form.value} onChange={e => update("value", e.target.value)} />
            <input placeholder="Monthly Budget" value={form.budget} onChange={e => update("budget", e.target.value)} />
            <button onClick={() => setStep(2)}>Generate Campaign</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2>Step 2: Edit Landing Page</h2>
            <input placeholder="Headline" value={form.headline} onChange={e => update("headline", e.target.value)} />
            <input placeholder="Subhead" value={form.subhead} onChange={e => update("subhead", e.target.value)} />
            <input placeholder="Offer" value={form.offer} onChange={e => update("offer", e.target.value)} />
            <input placeholder="CTA Button Text" value={form.cta} onChange={e => update("cta", e.target.value)} />
            <input placeholder="Phone Number" value={form.phone} onChange={e => update("phone", e.target.value)} />
            <div className="preview">
              <h3>{form.headline}</h3>
              <p>{form.subhead}</p>
              <p><strong>{form.offer}</strong></p>
              <button>{form.cta}</button>
              <p>📞 {form.phone}</p>
            </div>
            <button onClick={() => setStep(1)} className="secondary">Back</button>
            <button onClick={() => setStep(3)}>Preview & Publish</button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2>Step 3: Publish Campaign</h2>
            <p><strong>Business:</strong> {form.name}</p>
            <p><strong>Industry:</strong> {form.industry}</p>
            <p><strong>Location:</strong> {form.location}</p>
            <p><strong>Goal:</strong> {form.goal}</p>
            <p><strong>Budget:</strong> ${form.budget}</p>
            <div className="preview">
              <h3>{form.headline}</h3>
              <p>{form.subhead}</p>
              <p><strong>{form.offer}</strong></p>
              <button>{form.cta}</button>
              <p>📞 {form.phone}</p>
            </div>
            <button onClick={() => setStep(2)} className="secondary">Edit</button>
            
            {/* Stripe Checkout */}
            <button onClick={() => window.location.href = "https://buy.stripe.com/test_fZubJ1cGQ8Lzg9x6lFbo400"}>
              Pay & Publish Campaign ($49)
            </button>

            {/* PayPal Checkout */}
            <a href="https://www.paypal.com/ncp/payment/YOUR-LINK" target="_blank">
              <button>Pay with PayPal</button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
