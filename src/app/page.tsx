"use client"
import { useState, useEffect } from "react"
import { Star, MapPin, Shield, Clock, Users, CheckCircle, Play, Wrench, Car, Battery, Phone, ChevronRight, Calendar, Award, DollarSign } from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HomePage() {
  const [zipCode, setZipCode] = useState("")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative text-white min-h-[100vh] lg:min-h-[600px] flex items-center w-screen ml-[calc(-50vw+50%)] overflow-hidden"
        style={{
          backgroundImage: `url('/hero-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Animated overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 transition-all duration-1000 ease-in-out"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />

        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-red-500/20 animate-pulse"></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
          <div className="max-w-full lg:max-w-2xl">
            {/* Animated main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white drop-shadow-2xl leading-tight animate-fade-in-up">
              <span className="block animate-slide-in-left">Peace of Mind</span>
              <span className="block animate-slide-in-right animation-delay-300">Delivered</span>
            </h1>

            {/* Animated subtitle */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-8 text-white drop-shadow-lg animate-fade-in-up animation-delay-600">
              Mobile Mechanics At Your Door
            </h2>

            {/* Quote Form */}
            <div className="mb-6 sm:mb-8 animate-fade-in-up animation-delay-900">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white drop-shadow-lg">Get A Free Quote</h3>
              <div className="  max-w-md">
                {/* <input
                  type="text"
                  placeholder="Enter Zip Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="bg-white/95 backdrop-blur-sm text-gray-900 border-0 h-12 sm:h-12 px-4 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-white"
                /> */}
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 sm:px-8 h-12 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold">
                  <a href="https://api.whatsapp.com/send/?phone=2347010009558&text&type=phone_number&app_absent=0">Get Quote</a>
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-center text-white animate-fade-in-up animation-delay-1200">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 transform transition-all duration-300 hover:bg-white/20 hover:scale-105">
                <p className="text-sm sm:text-base font-semibold drop-shadow-lg">Auto repair on YOUR schedule</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 transform transition-all duration-300 hover:bg-white/20 hover:scale-105">
                <p className="text-sm sm:text-base font-semibold drop-shadow-lg">Full-Time Certified Mechanics</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 transform transition-all duration-300 hover:bg-white/20 hover:scale-105">
                <p className="text-sm sm:text-base font-semibold drop-shadow-lg">1 year / 12,000 mile warranty</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Check Out What Our Customers Have To Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              {
                name: "Adebayo O",
                location: "VICTORIA ISLAND, LAGOS",
                mechanic: "Engnr. Opeyemi",
                review: "Excellent service! Engnr. Opeyemi came to my office and fixed my car battery issue quickly. Very professional and affordable. Highly recommended!",
                rating: 5
              },
              {
                name: "Funmi K",
                location: "IKEJA, LAGOS",
                mechanic: "Engnr. Faud",
                review: "Engnr. Faud was fantastic! He diagnosed my brake problem and fixed it on the spot at my home. No more going to unreliable mechanics. Thank you Realone Auto!",
                rating: 5
              },
              {
                name: "Chidi M",
                location: "LEKKI, LAGOS",
                mechanic: "Engnr. Qudus",
                review: "Outstanding service! Engnr. Qudus replaced my alternator in my compound. Fair pricing, quality work, and saved me the stress of Lagos traffic. Will definitely use again.",
                rating: 5
              },
              {
                name: "Sarah A",
                location: "AJAH, LAGOS",
                mechanic: "Engnr. Sherif",
                review: "Engnr. Sherif is a lifesaver! My car broke down at night and he came within 30 minutes. Fixed my starter motor professionally. 24/7 service is amazing!",
                rating: 5
              },
              {
                name: "Kemi D",
                location: "SURULERE, LAGOS",
                mechanic: "Engnr. Opeyemi",
                review: "Engnr. Opeyemi handled my brake system perfectly. He explained everything clearly and the work was top-notch. My car feels brand new now!",
                rating: 5
              },
              {
                name: "Tunde B",
                location: "MARYLAND, LAGOS",
                mechanic: "Engnr. Faud",
                review: "Engnr. Faud's diagnostic skills are incredible! Found the root cause of my engine problem that other mechanics missed. Fair pricing and honest service.",
                rating: 5
              },
              {
                name: "Grace O",
                location: "YABA, LAGOS",
                mechanic: "Engnr. Qudus",
                review: "Engnr. Qudus replaced my water pump and timing belt. The job was done efficiently and he cleaned up after himself. Very impressed with the quality!",
                rating: 5
              },
              {
                name: "Emeka C",
                location: "GRA, LAGOS",
                mechanic: "Engnr. Sherif",
                review: "Engnr. Sherif fixed my AC system in this Lagos heat. Fast service and reasonable price. My family can now travel comfortably again. Thank you!",
                rating: 5
              },
              {
                name: "Bisi L",
                location: "ALIMOSHO, LAGOS",
                mechanic: "Engnr. Opeyemi",
                review: "Engnr. Opeyemi is the best! Fixed my transmission issue at home. No need to tow the car. Professional, punctual, and affordable. Highly recommend!",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.review}"</p>
                  <div className="text-sm">
                    <p className="font-semibold">{review.name} - {review.location}</p>
                    <p className="text-gray-500">Mechanic: {review.mechanic}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* We Make Car Repair Hassle Free */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            We Make Car Repair Hassle Free
          </h2>
          <div className="max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-6">
            <p>
              Realone Auto is a full service auto repair shop without the shop! Our mobile mechanics service all types of cars and trucks, offering
              everything from oil changes and tune ups to brake jobs and no-starts. Our certified mechanics can perform most jobs right in your
              driveway or at your parking spot at work giving you the freedom to spend your time on more important things.
            </p>
            <p>
              Just tell us what maintenance and auto repair services you need and we'll send you a fixed quote. Don't know what's wrong? Not a
              problem, one of our mobile mechanics will come out, do a diagnostic visit and create a quote for you. We focus on no hassle
              and convenience. We provide upfront quotes with transparent pricing. We also keep you covered with our{" "}
              <Link href="/warranty" className="text-blue-500 hover:text-blue-600">12 month/12,000 mile Warranty</Link>.
            </p>
            <p>
              Give Realone Auto a try today. We are confident you will be thrilled with how easy and painless it is to maintain and fix your car
              with the help of our friendly mobile mechanics near you!
            </p>
          </div>
        </div>
      </section>

      {/* Services We Perform */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Services We Perform</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {[
              "Alternator Replacement",
              "Battery Replacement",
              "Brake Caliper Replacement",
              "Brake Pad Replacement",
              "Diagnostic Service",
              "Emissions Failure Repair",
              "Ignition Coil Replacement",
              "Oil and Filter Change",
              "Radiator Replacement",
              "Serpentine Belt Replacement",
              "Spark Plugs Replacement",
              "Starter Replacement",
              "Thermostat Replacement",
              "Timing Belt Replacement",
              "Transmission Fluid Change",
              "Water Pump Replacement"
            ].map((service, index) => (
              <Link
                key={index}
                href={`/services/${service.toLowerCase().replace(/ /g, '-')}`}
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                {service}
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Button asChild className="bg-gray-800 hover:bg-gray-900 text-white">
              <Link href="/services">View all services we perform</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mechanics Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Check Out Some Of Our Awesome Mechanics
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Engnr. Opeyemi.", experience: 16, rating: 5, certifications: ["ASE Certified", "Master Automotive", "AC Certified"] },
              { name: "Engnr. FAUD.", experience: 15, rating: 5,  certifications: ["ASE Certified", "Emissions Certified"] },
              { name: "Engnr. Qudus", experience: 19, rating: 5, },
              { name: "Engnr. Sherif", experience: 15, rating: 5,  }
            ].map((mechanic, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4" />
                  <h3 className="font-semibold text-center mb-2">{mechanic.name}</h3>
                  <div className="flex justify-center mb-2">
                    {[...Array(mechanic.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  {/* <p className="text-sm text-gray-600 text-center mb-2">
                    Experience: {mechanic.experience} years
                  </p> */}
                  {mechanic.certifications && (
                    <div className="space-y-1">
                      {mechanic.certifications.map((cert, i) => (
                        <p key={i} className="text-xs text-gray-500 text-center">• {cert}</p>
                      ))}
                    </div>
                  )}
                  {/* <Button variant="outline" className="w-full mt-4">
                    View Profile
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Car Won't Start Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-red-100">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://ext.same-assets.com/2263820674/3693712472.png"
                alt="Car battery"
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Car Won't Start?</h2>
              <p className="text-gray-600 mb-6">Top 3 signs that it may be a battery issue:</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                  <span>Your vehicle lights do not turn on</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                  <span>There is no sound when trying to start the vehicle</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                  <span>The battery is over 5 years old</span>
                </li>
              </ul>
              <Button className="bg-gray-800 hover:bg-gray-900 text-white">
                <a href="tel:08092735348">Get help now</a>
                
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Used Vehicle Inspection */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-100 rounded-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <Car className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Used Vehicle Inspection Service</h2>
                <p className="text-gray-600">LemonSquad - A Realone Auto Company</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Get your pre-purchase used car inspection today with LemonSquad, a Realone subsidiary with National Footprint,
              offering the most comprehensive inspections of Consumer, Commercial, and Recreational Vehicles.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Always get a person on the phone</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">No hidden fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Qualified experienced inspectors</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Largest company in the industry</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Easy to understand reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span className="text-gray-700">Best turn around time in the industry</span>
                </li>
              </ul>
            </div>
            <Button className="bg-gray-800 hover:bg-gray-900 text-white">
              Order LemonSquad Inspection
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">See Realone Auto In Action</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src="https://ext.same-assets.com/2263820674/4123905027.jpeg"
                  alt="Oil change video"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-4">Realone Comes To You</h3>
              <p className="text-gray-600 mt-2">
                Getting your car fixed has never been easier! Our mobile mechanics come to you to fix your car whether
                you're at work or home. Just pass the keys to our mechanic and relax as they quickly get your car back
                on the road.
              </p>
            </div>
            <div>
              <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden group cursor-pointer">
                <img
                  src="https://ext.same-assets.com/2263820674/2310299499.jpeg"
                  alt="Brake job video"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-4">Professional Service</h3>
              <p className="text-gray-600 mt-2">
                Watch how efficient and clean a Realone oil change is. We also change brakes, alternators, starters,
                batteries, and even axles! Once you have your car serviced with such skill and convenience, you won't
                be able to imagine going back to a shop!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Convenience?</h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied customers who trust Realone Auto for their vehicle maintenance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Get Your Free Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Call 08092735348
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}