
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Search, ShieldCheck, Ship, Banknote, ChevronRight } from "lucide-react"
import Container from "@/components/ui/container";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '@/firebase/firebase';

export default function Home() {
    const [featuredCars, setFeaturedCars] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeaturedCars = async () => {
            try {
                // Get all cars from Firestore
                const querySnapshot = await getDocs(collection(firestore, "cars"));
                const allCars = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                // Select 6 cars that will rotate daily
                const today: any = new Date();
                const dayOfYear = Math.floor(
                    (today - new Date(today.getFullYear(), 0, 0)) / 86400000
                );
                const startIndex = dayOfYear % Math.max(1, allCars.length - 6);
                const selectedCars = allCars.slice(startIndex, startIndex + 6);

                // If we don't have 6 cars, fill with whatever we have
                setFeaturedCars(selectedCars.length >= 6 ? selectedCars : allCars.slice(0, 6));
            } catch (error) {
                console.error("Error fetching featured cars:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFeaturedCars();
    }, []);

    return (
        <>
            <div className="h-auto w-full bg-white mb-1 py-7 shadow-md">
                <Container>
                    <h1 className="text-[30px] font-bold">Home</h1>
                </Container>
            </div>

            <div className="flex min-h-screen flex-col">
                <main className="flex-1">
                    {/* Hero Section */}
                    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
                        <div className="container px-4 md:px-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                                <div className="space-y-4">
                                    <div className="inline-block rounded-lg bg-[#e6edf7] px-3 py-1 text-sm text-[#0b305e]">
                                        Premium Japanese Imports
                                    </div>
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Quality Japanese Cars Delivered To Your Door
                                    </h1>
                                    <p className="max-w-[600px] text-gray-500 md:text-xl">
                                        Discover high-quality, low-mileage Japanese vehicles at unbeatable prices. Direct imports with full
                                        transparency and hassle-free delivery.
                                    </p>
                                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                        <Link to="/store">
                                            <Button className="bg-[#0b305e] hover:bg-[#0a2a54]">Browse Inventory</Button>
                                        </Link>
                                        <Button variant="outline" onClick={() => {
                                            const element = document.getElementById('how-it-works');
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}>
                                            How It Works
                                        </Button>                                    </div>
                                </div>
                                <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden">
                                    <img
                                        src='src/assets/images/HomePagePicture.jpg'
                                        alt="Japanese sports car"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Search Section */}
                    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
                        <div className="container px-4 md:px-6">
                            <div className="mx-auto max-w-[800px] space-y-4">
                                <div className="text-center space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Find Your Dream Car</h2>
                                    <p className="text-gray-500 md:text-xl">Search our extensive inventory of quality Japanese vehicles</p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <div className="flex-1">
                                        <Input placeholder="Make, Model, or Keyword" className="h-12" />
                                    </div>
                                    <Button size="lg" className="h-12 bg-[#0b305e] hover:bg-[#0a2a54]">
                                        <Search className="mr-2 h-4 w-4" /> Search
                                    </Button>
                                </div>
                                <div className="flex flex-wrap gap-2 justify-center pt-2">
                                    <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                                        Toyota
                                    </Badge>
                                    <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                                        Honda
                                    </Badge>
                                    <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                                        Nissan
                                    </Badge>
                                    <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                                        Mazda
                                    </Badge>
                                    <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                                        Subaru
                                    </Badge>
                                    <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                                        Mitsubishi
                                    </Badge>
                                    <Badge variant="outline" className="cursor-pointer hover:bg-gray-100">
                                        Lexus
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Why Choose Us */}
                    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                        Why Choose CarsFromJapan
                                    </h2>
                                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        We make importing quality Japanese vehicles simple, transparent, and affordable
                                    </p>
                                </div>
                            </div>
                            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                                <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                                    <div className="rounded-full bg-[#e6edf7] p-3">
                                        <ShieldCheck className="h-6 w-6 text-[#0b305e]" />
                                    </div>
                                    <h3 className="text-xl font-bold">Quality Assurance</h3>
                                    <p className="text-center text-gray-500">
                                        Every vehicle undergoes a rigorous 120-point inspection before shipping
                                    </p>
                                </div>
                                <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                                    <div className="rounded-full bg-[#e6edf7] p-3">
                                        <Ship className="h-6 w-6 text-[#0b305e]" />
                                    </div>
                                    <h3 className="text-xl font-bold">Direct Imports</h3>
                                    <p className="text-center text-gray-500">
                                        We import directly from Japanese auctions, cutting out middlemen and saving you money
                                    </p>
                                </div>
                                <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                                    <div className="rounded-full bg-[#e6edf7] p-3">
                                        <Banknote className="h-6 w-6 text-[#0b305e]" />
                                    </div>
                                    <h3 className="text-xl font-bold">Transparent Pricing</h3>
                                    <p className="text-center text-gray-500">
                                        No hidden fees or surprises - see the full cost breakdown before you commit
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Featured Cars */}
                    <section id="inventory" className="w-full py-12 md:py-24 lg:py-32 bg-white">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Vehicles</h2>
                                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Browse our daily featured selection of quality Japanese imports
                                    </p>
                                </div>
                            </div>

                            {loading ? (
                                <div className="flex justify-center py-12">
                                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0b305e]"></div>
                                </div>
                            ) : (
                                <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                                    {featuredCars.map((car) => (
                                        <Card key={car.id} className="overflow-hidden">
                                            <div className="relative h-48">
                                                <img
                                                    src={car.imgURL || "/placeholder.svg"}
                                                    alt={car.name}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute top-2 right-2">
                                                    <Badge className="bg-[#0b305e]">{car.year}</Badge>
                                                </div>
                                            </div>
                                            <CardContent className="p-4">
                                                <div className="space-y-2">
                                                    <h3 className="font-bold">{car.name}</h3>
                                                    <div className="flex justify-between">
                                                        <span className="text-xl font-bold text-[#0b305e]">
                                                            ${car.price?.toLocaleString()}
                                                        </span>
                                                        <span className="text-gray-500">{car.km} km</span>
                                                    </div>
                                                    <Link to={car.route || `/store/${car.id}`}>
                                                        <Button variant="outline" className="w-full mt-2">
                                                            View Details
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            )}

                            <div className="flex justify-center">
                                <Link to="/store">
                                    <Button className="bg-[#0b305e] hover:bg-[#0a2a54]">
                                        View All Inventory <ChevronRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </section>
                    {/* How It Works */}
                    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Our simple 4-step process makes importing your dream car easy
                                    </p>
                                </div>
                            </div>
                            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
                                {[
                                    {
                                        step: "1",
                                        title: "Browse & Select",
                                        description: "Browse our inventory or request a specific vehicle",
                                        icon: Search,
                                    },
                                    {
                                        step: "2",
                                        title: "Purchase",
                                        description: "Secure your vehicle with a deposit and complete paperwork",
                                        icon: Banknote,
                                    },
                                    {
                                        step: "3",
                                        title: "Shipping",
                                        description: "We handle all logistics and keep you updated throughout",
                                        icon: Ship,
                                    },
                                    {
                                        step: "4",
                                        title: "Delivery",
                                        description: "Receive your vehicle at your specified location",
                                        icon: Car,
                                    },
                                ].map((step, index) => (
                                    <div key={index} className="flex flex-col items-center space-y-4">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0b305e] text-white">
                                            {step.step}
                                        </div>
                                        <div className="space-y-2 text-center">
                                            <h3 className="text-xl font-bold">{step.title}</h3>
                                            <p className="text-gray-500">{step.description}</p>
                                        </div>
                                        {index < 3 && (
                                            <div className="hidden lg:block w-full border-t border-dashed border-gray-300 mt-8"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Testimonials */}
                    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
                                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Don't just take our word for it - hear from our satisfied customers
                                    </p>
                                </div>
                            </div>
                            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                                {[
                                    {
                                        name: "Alex Thompson",
                                        location: "California, USA",
                                        quote:
                                            "The Nissan Skyline I imported through CarsFromJapan exceeded all my expectations. The process was smooth and the car arrived in perfect condition.",
                                        image: "src/assets/images/CustomerLuffy.jpg",
                                    },
                                    {
                                        name: "Sarah Johnson",
                                        location: "Ontario, Canada",
                                        quote:
                                            "I was nervous about importing a car from Japan, but the team at CarsFromJapan made it so easy. My Toyota Supra is a dream come true!",
                                        image: "src/assets/images/CustomerNami.jpg",
                                    },
                                    {
                                        name: "Michael Rodriguez",
                                        location: "Texas, USA",
                                        quote:
                                            "The transparency throughout the process was refreshing. No hidden fees, no surprises - just a beautiful Mazda RX-7 delivered to my door.",
                                        image: "src/assets/images/CustomerAce.jpeg",
                                    },
                                ].map((testimonial, index) => (
                                    <Card key={index} className="overflow-hidden">
                                        <CardContent className="p-6">
                                            <div className="space-y-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="relative h-12 w-12 rounded-full overflow-hidden">
                                                        <img
                                                            src={testimonial.image || "/placeholder.svg"}
                                                            alt={testimonial.name}
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold">{testimonial.name}</h4>
                                                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                                                    </div>
                                                </div>
                                                <p className="italic text-gray-600">"{testimonial.quote}"</p>
                                                <div className="flex text-yellow-400">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg
                                                            key={i}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 24 24"
                                                            fill="currentColor"
                                                            className="h-5 w-5"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    ))}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-[#0b305e] text-white">
                        <div className="container px-4 md:px-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                                <div className="space-y-4">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                        Ready to Find Your Dream Car?
                                    </h2>
                                    <p className="max-w-[600px] md:text-xl/relaxed">
                                        Join thousands of satisfied customers who have imported their dream Japanese cars. Our team is ready
                                        to help you every step of the way.
                                    </p>
                                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                        <Link to="/store">
                                            <Button className="bg-white text-[#0b305e] hover:bg-gray-100">Browse Inventory</Button>
                                        </Link>
                                        <Button variant="outline" className="text-white border-white hover:bg-[#0a2a54]">
                                            Contact Us
                                        </Button>
                                    </div>
                                </div>
                                <div className="space-y-4 rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                                    <h3 className="text-xl font-bold">Request More Information</h3>
                                    <div className="grid gap-4">
                                        <Input
                                            placeholder="Name"
                                            className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                                        />
                                        <Input
                                            placeholder="Email"
                                            className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                                        />
                                        <Input
                                            placeholder="Phone (optional)"
                                            className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                                        />
                                        <Input
                                            placeholder="Car you're interested in"
                                            className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                                        />
                                        <Button className="bg-white text-[#0b305e] hover:bg-gray-100">Submit Request</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="w-full border-t bg-background py-6 md:py-12">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <Car className="h-6 w-6 text-[#0b305e]" />
                                    <span className="text-xl font-bold">CarsFromJapan</span>
                                </div>
                                <p className="text-sm text-gray-500">
                                    Importing quality Japanese vehicles since 2005. Trusted by thousands of customers worldwide.
                                </p>
                                <div className="flex gap-4">
                                    <a href="#" className="text-gray-500 hover:text-gray-900">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5"
                                        >
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-900">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5"
                                        >
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-900">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5"
                                        >
                                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-900">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5"
                                        >
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                            <rect x="2" y="9" width="4" height="12"></rect>
                                            <circle cx="4" cy="4" r="2"></circle>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-sm font-bold uppercase tracking-wider">Quick Links</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a href="/" className="text-gray-500 hover:text-gray-900">
                                            Home
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900">
                                            Inventory
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900">
                                            How It Works
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900">
                                            Testimonials
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-sm font-bold uppercase tracking-wider">Popular Makes</h4>
                                <ul className="space-y-2 text-sm">
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900">
                                            Toyota
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900">
                                            Honda
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900">
                                            Nissan
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900">
                                            Mazda
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-500 hover:text-gray-900">
                                            Subaru
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-sm font-bold uppercase tracking-wider">Contact Us</h4>
                                <ul className="space-y-2 text-sm">
                                    <li className="flex items-start space-x-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5 text-gray-500"
                                        >
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                        </svg>
                                        <span className="text-gray-500">+1 (888) 123-4567</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5 text-gray-500"
                                        >
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                            <polyline points="22,6 12,13 2,6"></polyline>
                                        </svg>
                                        <span className="text-gray-500">info@carsfromjapan.com</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-5 w-5 text-gray-500"
                                        >
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        <span className="text-gray-500">
                                            123 Import Drive, Suite 456
                                            <br />
                                            Los Angeles, CA 90001
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
                            <p className="text-xs text-gray-500">
                                &copy; {new Date().getFullYear()} CarsFromJapan. All rights reserved.
                            </p>
                            <div className="flex gap-4 mt-4 md:mt-0">
                                <a href="#" className="text-xs text-gray-500 hover:text-gray-900">
                                    Privacy Policy
                                </a>
                                <a href="#" className="text-xs text-gray-500 hover:text-gray-900">
                                    Terms of Service
                                </a>
                                <a href="#" className="text-xs text-gray-500 hover:text-gray-900">
                                    Cookie Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

