import { useNavigate } from "react-router-dom";
import { TopBar } from "../components/TopBar";

export default function Home() {

    const navigate = useNavigate()

    return (
        <>
            <div className="bg-gray-100 min-h-screen">
                {/* Navbar */}
                <TopBar />

                {/* Hero Section */}
                <section className="bg-purple-500 text-white py-20">
                    <div className="container mx-auto text-center px-6">
                        <h2 className="text-4xl font-bold mb-4">Send Money Anytime, Anywhere</h2>
                        <p className="text-lg mb-6">
                            Experience seamless and secure money transfers with Pay-DM.
                        </p>
                        <button className="bg-white text-blue-600 px-6 py-2 rounded-lg shadow-lg hover:bg-gray-100"
                        onClick={()=>{
                            navigate("../dashboard")
                        }}
                        >
                            Get Started
                        </button>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-20 bg-gray-100">
                    <div className="container mx-auto text-center px-6">
                        <h3 className="text-3xl font-semibold mb-8">Features</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white shadow-lg p-6 rounded-lg">
                                <h4 className="text-xl font-bold mb-4">Secure Transfers</h4>
                                <p>Implemented transaction management,<br/> your money is safe.</p>
                            </div>
                            <div className="bg-white shadow-lg p-6 rounded-lg">
                                <h4 className="text-xl font-bold mb-4">Transaction History</h4>
                                <p>Implemented Transaction History for user convenience</p>
                            </div>
                            <div className="bg-white shadow-lg p-6 rounded-lg">
                                <h4 className="text-xl font-bold mb-4">Instant Processing</h4>
                                <p>Enjoy quick and efficient transfers in real-time.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="py-20 bg-blue-600 text-white">
                    <div className="container mx-auto px-6 text-center">
                        <h3 className="text-3xl font-semibold mb-8">About Pay-DM</h3>
                        <p>
                            Pay-DM is a money transfer demo platform designed to make financial
                            transactions easy, secure, and accessible for everyone.
                        </p>
                    </div>
                </section>

                {/* Footer */}
                <footer id="contact" className="bg-gray-800 text-white py-6">
                    <div className="container mx-auto text-center px-6">
                        <p>Contact us at darshan98solanki@gmail.com</p>
                        <p>&copy; 2024 Darshan Solanki. All Rights Reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    )
}