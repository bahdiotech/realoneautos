import {
  Car,
  Battery,
  Wrench,
  Clock,
  MapPin,
  Star,
  CheckCircle,
  AlertTriangle,
  Zap,
  Thermometer,
  Wind,
  Shield
} from "lucide-react"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LagosServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-violet-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Mobile Auto Repair Services in Lagos
            </h1>
            <p className="text-xl mb-8">
              Specialized automotive solutions for Lagos traffic, weather, and road conditions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                Get Instant Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-violet-600 hover:bg-white/10">
                <MapPin className="h-5 w-5 mr-2" />
                Find Service Areas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lagos-Specific Challenges */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Lagos Vehicles Need Special Care
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Heavy Traffic</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Stop-and-go traffic puts extra strain on brakes, clutch, and cooling systems
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Thermometer className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Hot Climate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Lagos heat causes faster battery drain, AC problems, and overheating issues
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Poor Roads</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Potholes and rough surfaces damage suspension, alignment, and tires
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Wind className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Dust & Pollution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Air filters clog faster, requiring more frequent maintenance and cleaning
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lagos Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Service Areas Across Lagos
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {[
              "Victoria Island", "Ikoyi", "Lekki", "Ajah", "Ikeja", "Surulere",
              "Yaba", "Lagos Island", "Apapa", "Festac", "Egbeda", "Alimosho",
              "Mushin", "Oshodi", "Isolo", "Gbagada", "Ketu", "Mile 2",
              "Badagry", "Epe", "Ikorodu", "Kosofe"
            ].map((area, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                <MapPin className="h-4 w-4 text-red-600" />
                <span className="text-gray-700">{area}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-600 mb-4">Don't see your area? We're expanding rapidly!</p>
            <Button variant="outline">Contact Us for Your Location</Button>
          </div>
        </div>
      </section>

      {/* Popular Lagos Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Most Requested Services in Lagos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Battery className="h-8 w-8 text-red-600" />
                  <div>
                    <CardTitle>Battery Service</CardTitle>
                    <Badge variant="secondary">Most Popular</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Battery replacement, testing, and maintenance. Lagos heat shortens battery life.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Free testing & diagnosis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Contact for pricing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Thermometer className="h-8 w-8 text-red-600" />
                  <div>
                    <CardTitle>AC Repair</CardTitle>
                    <Badge variant="secondary">High Demand</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  AC servicing, gas refill, and compressor repair. Essential for Lagos weather.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Gas refill available
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Full AC service available
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Wrench className="h-8 w-8 text-red-600" />
                  <div>
                    <CardTitle>Brake Service</CardTitle>
                    <Badge variant="destructive">Critical</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Brake pad replacement and fluid change. Crucial for stop-and-go traffic safety.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Professional brake service
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Same-day service
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Zap className="h-8 w-8 text-red-600" />
                  <div>
                    <CardTitle>Electrical Issues</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Alternator, starter, and wiring problems. Common in older Lagos vehicles.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Professional diagnosis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Expert diagnostics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Car className="h-8 w-8 text-red-600" />
                  <div>
                    <CardTitle>Oil Change</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Engine oil and filter replacement. More frequent changes needed in Lagos heat.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Standard & premium oils available
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Quick service available
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-red-600" />
                  <div>
                    <CardTitle>Emergency Service</CardTitle>
                    <Badge variant="destructive">24/7</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Roadside assistance and emergency repairs. Available across Lagos 24/7.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Quick response time
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    All areas covered
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Lagos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Lagos Drivers Choose Realone Auto
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Local Knowledge</h3>
                    <p className="text-gray-600">
                      Our mechanics understand Lagos roads, traffic patterns, and common vehicle issues in the city.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Beat the Traffic</h3>
                    <p className="text-gray-600">
                      No need to drive to a mechanic shop. We come to you, saving you hours in Lagos traffic.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Quality Parts</h3>
                    <p className="text-gray-600">
                      We source quality auto parts suitable for Lagos conditions and climate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600">
                      No hidden charges. Clear quotes provided upfront before we start work.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Warranty Coverage</h3>
                    <p className="text-gray-600">
                      1-year warranty on all major repairs and replacements for your peace of mind.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Quick Response</h3>
                    <p className="text-gray-600">
                      Fast scheduling and emergency response across all Lagos areas within hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lagos Workshop Capabilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              State-of-the-Art Equipment in Lagos
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Our Lagos facility is equipped with the latest diagnostic and repair technology to handle all vehicle types and complex automotive issues.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <img
                  src="/ecu_rep.jpeg"
                  alt="Advanced ECU diagnostics and repair"
                  className="rounded-lg shadow-lg w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Advanced ECU Services</h3>
                <p className="text-gray-600 mb-4">
                  Complete ECU diagnostics, repair, and reprogramming services for all vehicle brands popular in Lagos including Mercedes, BMW, Toyota, and Honda.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Engine control module repair</li>
                  <li>• Immobilizer programming</li>
                  <li>• DPF regeneration</li>
                  <li>• Key programming</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <img
                  src="/elec_rep.jpeg"
                  alt="Professional electrical diagnostics"
                  className="rounded-lg shadow-lg w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Electrical System Expertise</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive electrical diagnostics and repair capabilities for complex automotive electrical issues common in Lagos climate conditions.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Wiring harness repair</li>
                  <li>• Sensor diagnostics</li>
                  <li>• Circuit analysis</li>
                  <li>• Component testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Your Car Fixed?</h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied Lagos drivers who trust Realone Auto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Get Free Quote Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-amber-900 hover:bg-white/10">
            <a href="tel:08092735348">Call 08092735348</a>
              {/* Call 08092735348 */}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}