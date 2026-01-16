import React, { useState } from "react";

const FormArea = () => {
  const [tab, setTab] = useState("rewards");
  const [submitting, setSubmitting] = useState(false);

  return (
    <div className="text-black">
      {/* Tabs */}
      <div className="flex mb-6 rounded-full bg-black/5 p-1">
        {["rewards", "careers"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                tab === t
                  ? "bg-black text-white shadow-md"
                  : "text-black hover:bg-black/10"
              }`}
          >
            {t === "rewards" ? "Rewards Sign-Up" : "Careers"}
          </button>
        ))}
      </div>

      {/* Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitting(true);
          setTimeout(() => setSubmitting(false), 900);
        }}
        className="space-y-4"
      >
        <input
          placeholder="Full name"
          className="w-full rounded-xl border border-black/20 bg-transparent px-4 py-3 focus:outline-none focus:border-black"
          required
        />

        <input
          type="email"
          placeholder="Email address"
          className="w-full rounded-xl border border-black/20 bg-transparent px-4 py-3 focus:outline-none focus:border-black"
          required
        />

        {tab === "rewards" && (
          <input
            type="password"
            placeholder="Create password"
            className="w-full rounded-xl border border-black/20 bg-transparent px-4 py-3 focus:outline-none focus:border-black"
            required
          />
        )}

        {tab === "careers" && (
          <textarea
            rows="4"
            placeholder="Why do you want to work with us?"
            className="w-full rounded-xl border border-black/20 bg-transparent px-4 py-3 focus:outline-none focus:border-black"
          />
        )}

        <button
          type="submit"
          disabled={submitting}
          className="w-full rounded-xl bg-black py-3 text-white font-medium tracking-wide hover:scale-[1.02] transition-all duration-300 disabled:opacity-60"
        >
          {submitting ? "Submitting…" : "Continue"}
        </button>

        <p className="text-xs text-black/60 text-center">
          We respect your privacy. No spam. Ever.
        </p>
      </form>
    </div>
  );
};

const More = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-black">
      <div className="grid lg:grid-cols-2 gap-10 rounded-3xl p-10 backdrop-blur-xl bg-white/40 border border-black/10 shadow-2xl">
        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 rounded-full border border-black/20 px-4 py-1 text-xs tracking-wider">
            STARBREW MEMBERSHIP
          </span>

          <h1 className="text-4xl font-semibold leading-tight mb-6">
            Coffee isn’t just a drink. <br />
            <span className="opacity-70">It’s a culture.</span>
          </h1>

          <p className="text-black/70 mb-8 max-w-md">
            Join Starbrew rewards or become part of our growing team.
            Crafted coffee, sustainable sourcing, and a global community.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            {[
              "Free drinks",
              "Early access",
              "Ethical beans",
              "Career growth",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-black/10 p-4 hover:bg-black/5 transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="rounded-2xl bg-white/70 p-8 shadow-lg">
          <FormArea />
        </div>
      </div>
    </section>
  );
};

export default More;
