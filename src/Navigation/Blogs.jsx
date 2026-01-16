import React from 'react'


const Blogs = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900">
            
            <section
                className="bg-cover bg-center py-12 lg:py-20"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(6,95,70,0.65), rgba(6,95,70,0.25)), url('https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1500&q=60')",
                }}
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="w-full lg:w-1/2 text-white">
                            <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight">
                                Starbucks Rewards
                            </h2>
                            <p className="mt-4 text-lg lg:text-xl max-w-xl">
                                Earn Stars, get free drinks, personalized offers, and more.
                                Join today and start earning with every sip.
                            </p>

                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <button className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-green-800 font-semibold shadow hover:opacity-95">
                                    Join Rewards
                                </button>
                                <button className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-transparent border border-white text-white font-medium hover:bg-white/10">
                                    Order
                                </button>
                            </div>

                            <div className="mt-6 max-w-sm bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm opacity-90">Your Stars</p>
                                        <p className="text-2xl font-bold">240</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm opacity-90">Level</p>
                                        <p className="font-semibold">Green</p>
                                    </div>
                                </div>
                                <div className="mt-3 bg-white/30 h-2 rounded-full overflow-hidden">
                                    <div className="h-2 bg-yellow-300" style={{ width: '40%' }} />
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <div className="rounded-xl overflow-hidden shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=1200&q=60"
                                    alt="Assorted Starbucks drinks"
                                    className="w-full h-64 lg:h-80 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="container mx-auto px-4 py-10 lg:py-16">
                <h3 className="text-2xl lg:text-3xl font-bold text-center">How it works</h3>
                <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
                    Simple steps to earn Stars and redeem rewards — designed to be quick and rewarding.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
                            1
                        </div>
                        <h4 className="mt-4 font-semibold">Join</h4>
                        <p className="mt-2 text-sm text-gray-600">
                            Create an account or sign in to start earning Stars every time you purchase.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
                            2
                        </div>
                        <h4 className="mt-4 font-semibold">Earn Stars</h4>
                        <p className="mt-2 text-sm text-gray-600">
                            Pay in the app, scan your barcode, or use a registered card — Stars add up quickly.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
                            3
                        </div>
                        <h4 className="mt-4 font-semibold">Redeem</h4>
                        <p className="mt-2 text-sm text-gray-600">
                            Use Stars for free drinks, food, and exclusive experiences.
                        </p>
                    </div>
                </div>
            </section>

           
            <section className="bg-white/60 py-10 lg:py-16">
                <div className="container mx-auto px-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-center">Member benefits</h3>
                    <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
                        Rewards members enjoy exclusive perks and offers.
                    </p>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-lg shadow p-4 flex flex-col">
                            <img
                                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=60"
                                alt="Free drink"
                                className="rounded-md h-36 w-full object-cover"
                            />
                            <h5 className="mt-3 font-semibold">Free Drink Rewards</h5>
                            <p className="mt-2 text-sm text-gray-600">Redeem Stars for handcrafted drinks and favorites.</p>
                        </div>

                        <div className="bg-white rounded-lg shadow p-4 flex flex-col">
                            <img
                                src="https://images.unsplash.com/photo-1610360655260-decd32e267aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxzdGFyYnVja3xlbnwwfHwwfHx8MA%3D%3D"
                                alt="Order ahead"
                                className="rounded-md h-36 w-full object-cover"
                            />
                            <h5 className="mt-3 font-semibold">Order & Pay Ahead</h5>
                            <p className="mt-2 text-sm text-gray-600">Skip the line with mobile order and pay in the app.</p>
                        </div>

                        <div className="bg-white rounded-lg shadow p-4 flex flex-col">
                            <img
                                src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=60"
                                alt="Exclusive offers"
                                className="rounded-md h-36 w-full object-cover"
                            />
                            <h5 className="mt-3 font-semibold">Exclusive Offers</h5>
                            <p className="mt-2 text-sm text-gray-600">Personalized deals and early access for members.</p>
                        </div>

                        <div className="bg-white rounded-lg shadow p-4 flex flex-col">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1677221924410-0d27f4940396?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmlydGhkYXl8ZW58MHx8MHx8fDA%3D"
                                alt="Birthday reward"
                                className="rounded-md h-36 w-full object-cover"
                            />
                            <h5 className="mt-3 font-semibold">Birthday Reward</h5>
                            <p className="mt-2 text-sm text-gray-600">A little something special on your birthday, on us.</p>
                        </div>
                    </div>
                </div>
            </section>

            
            <section className="container mx-auto px-4 py-8 lg:py-12">
                <div className="bg-green-50 border border-green-100 rounded-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                        <h4 className="text-lg font-semibold">Ready to start earning Stars?</h4>
                        <p className="text-sm text-gray-600">Join Starbucks Rewards and enjoy member benefits today.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-5 py-2 rounded-md bg-green-700 text-white font-semibold hover:opacity-95">
                            Join now
                        </button>
                        <button className="px-5 py-2 rounded-md bg-white border border-green-700 text-green-700 font-medium">
                            Learn more
                        </button>
                    </div>
                </div>
            </section>

            <footer className="py-8">
                <div className="container mx-auto px-4 text-center text-sm text-gray-500">
We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked terms 
right over here
                </div>
            </footer>
        </div>
    )
}

export default Blogs



