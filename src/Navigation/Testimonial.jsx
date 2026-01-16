import React from 'react'

const Testimonial = () => {
  return (
    <div>
    <section className="mx-auto max-w-6xl px-6 py-12">
        <header className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-700 flex items-center justify-center text-white shadow-lg">
                    {/* simple coffee cup icon (not a brand logo) */}
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M3 8h14v6a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M16 8v1a3 3 0 003 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div>
                    <h1 className="text-lg font-semibold">Coffee Gift Cards</h1>
                    <p className="text-sm text-slate-800">A thoughtful, delicious surprise</p>
                </div>
            </div>

            <button className="hidden md:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition-transform transform hover:-translate-y-1 shadow">
                Buy a Gift Card
            </button>
        </header>

        <main className="grid gap-10 lg:grid-cols-2 items-center">
            {/* Left column: description + CTA */}
            <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                    Give the joy of a great cup
                </h2>
                <p className="text-gray-800 mb-6">
                    Send a digital or physical gift card they can use for coffee, snacks, and cozy moments. Fully customizable amounts and instant delivery make it perfect for any occasion.
                </p>

                <ul className="grid gap-3 sm:grid-cols-2 mb-6">
                    <li className="flex items-start gap-3">
                        <div className="w-9 h-9 bg-emerald-300 rounded-md flex items-center justify-center text-emerald-700">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M12 8v4l3 3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="12" cy="12" r="9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div>
                            <div className="font-medium">Instant delivery</div>
                            <div className="text-sm text-slate-800">Send via email the same day.</div>
                        </div>
                    </li>

                    <li className="flex items-start gap-3">
                        <div className="w-9 h-9 bg-emerald-300 rounded-md flex items-center justify-center text-emerald-700">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M3 7h18M6 7v13a2 2 0 002 2h8a2 2 0 002-2V7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div>
                            <div className="font-medium">Physical & digital</div>
                            <div className="text-sm text-slate-800">Choose a card or send instantly online.</div>
                        </div>
                    </li>

                    <li className="flex items-start gap-3">
                        <div className="w-9 h-9 bg-emerald-300 rounded-md flex items-center justify-center text-emerald-700">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M12 5v14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5 12h14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div>
                            <div className="font-medium">Flexible amounts</div>
                            <div className="text-sm text-slate-800">Pick any value that fits your gift.</div>
                        </div>
                    </li>

                    <li className="flex items-start gap-3">
                        <div className="w-9 h-9 bg-emerald-300 rounded-md flex items-center justify-center text-emerald-700">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M12 2l2 5 5 .5-4 3 1 5-4-2-4 2 1-5-4-3L10 7 12 2z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div>
                            <div className="font-medium">Personalize it</div>
                            <div className="text-sm text-slate-800">Add a note and choose delivery time.</div>
                        </div>
                    </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                    <button className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-lg shadow-lg transition transform hover:-translate-y-1">
                        Buy a Gift Card
                        <span className="inline-block w-2 h-2 rounded-full bg-white/30 animate-pulse" />
                    </button>

                    <button className="inline-flex items-center gap-3 border border-slate-200 text-slate-700 px-5 py-3 rounded-lg hover:shadow-md transition">
                        Learn more
                    </button>
                </div>
            </div>

            {/* Right column: animated gift card preview */}
            <div className="flex items-center justify-center">
                <div className="relative w-[320px] h-[200px] sm:w-[380px] sm:h-[240px]">
                    {/* background decorative circle */}
                    <div className="absolute -left-6 -top-8 w-40 h-40 bg-emerald-200 rounded-full filter blur-xl opacity-40 animate-pulse" />
                    {/* stacked cards */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* back card */}
                        <div className="absolute w-64 sm:w-72 h-40 sm:h-44 bg-emerald-800 rounded-xl transform rotate-3 translate-x-4 translate-y-4 shadow-2xl opacity-90" />

                        {/* middle card */}
                        <div className="absolute w-64 sm:w-72 h-40 sm:h-44 bg-emerald-600 rounded-xl transform -rotate-3 -translate-x-4 -translate-y-3 shadow-2xl opacity-95" />

                        {/* front card */}
                        <div className="relative group w-64 sm:w-72 h-40 sm:h-44 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl shadow-2xl text-white overflow-hidden transform transition-all duration-500 hover:-translate-y-4 hover:scale-105">
                            <div className="absolute inset-0 p-5 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <div className="text-xs uppercase tracking-widest opacity-90">Gift Card</div>
                                        <div className="mt-2 text-2xl font-bold leading-none">$25</div>
                                    </div>

                                    {/* spinning badge */}
                                    <div className="flex flex-col items-end">
                                        <div
                                            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white"
                                            style={{ animationDuration: '6s' }}
                                        >
                                            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path d="M12 2v4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M12 18v4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M4.9 4.9l2.8 2.8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M16.3 16.3l2.8 2.8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M2 12h4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M18 12h4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M4.9 19.1l2.8-2.8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M16.3 7.7l2.8-2.8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        {/* chip */}
                                        <div className="w-9 h-6 bg-white/30 rounded-sm" />
                                        <div>
                                            <div className="text-xs opacity-90">To: Recipient</div>
                                            <div className="text-xs opacity-80">From: You</div>
                                        </div>
                                    </div>

                                    {/* barcode-esque lines */}
                                    <div className="flex flex-col gap-1">
                                        <div className="w-20 h-1 bg-white/60 rounded" />
                                        <div className="w-14 h-1 bg-white/60 rounded" />
                                        <div className="w-10 h-1 bg-white/60 rounded" />
                                    </div>
                                </div>
                            </div>

                            {/* subtle floating animation for the front card */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="w-full h-full transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer className="mt-12 text-center text-sm text-slate-800">
            This little Starbucks reward isn’t just about coffee — it’s about slowing down, taking a breath, and enjoying a moment that’s entirely yours. May every sip remind you that you’re appreciated more than words can say, and that even small moments of comfort can make a day brighter.
        </footer>
    </section>
    </div>
  )
}

export default Testimonial
