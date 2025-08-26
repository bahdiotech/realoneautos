import { Phone, Clock, MapPin, AlertTriangle, Battery, Key, Fuel, Wrench, Shield, CheckCircle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TowingRoadsidePage() {
  const services = [
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Emergency Towing",
      description: "24/7 towing service to get your vehicle to safety or a repair facility",
      features: ["Flatbed and wheel-lift towing", "Long-distance towing available", "Secure transport"]
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Battery Jump Start",
      description: "Dead battery? We'll get you started with professional jump start service",
      features: ["Professional grade equipment", "Battery testing", "On-site battery replacement"]
    },
    {
      icon: <Key className="h-8 w-8" />,
      title: "Lockout Service",
      description: "Locked out of your vehicle? Our technicians will get you back in safely",
      features: ["Non-destructive entry", "All vehicle types", "Fast response time"]
    },
    {
      icon: <Fuel className="h-8 w-8" />,
      title: "Emergency Fuel Delivery",
      description: "Ran out of gas? We'll bring fuel directly to your location",
      features: ["Up to 3 gallons delivered", "Premium and regular gas", "Quick delivery"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Tire Change Service",
      description: "Flat tire assistance including spare tire installation",
      features: ["Spare tire installation", "Tire repair assessment", "Tire pressure check"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Extrication & Winch-out",
      description: "Stuck in snow, mud, or ditch? We'll safely extract your vehicle",
      features: ["Professional winching", "Off-road recovery", "Damage-free extraction"]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-neutral-800 to-red-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 bg-white text-red-600 px-4 py-2">24/7 Emergency Service</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Roadside Assistance</h1>
            <p className="text-xl text-red-100 mb-8">
              When you're stranded, we're here to help. Fast, reliable roadside assistance when you need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-red-50">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+2348092735348">Call Emergency Line: +234(0)8092735348</a>
                {/* Call Emergency Line: +234(0)8092735348 */}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
              <a href="https://api.whatsapp.com/send/?phone=2347010009558&text&type=phone_number&app_absent=0">Request Service Online</a>
                
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-yellow-50 border-b border-yellow-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-center">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            <span className="text-yellow-800 font-medium">
              Emergency? Call <strong>+234(0)8092735348</strong> for immediate 24/7 assistance
            </span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Emergency Services Available</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-red-600 mb-3">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Our Roadside Service Works</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">1. Call Us</h3>
              <p className="text-gray-600">Call our emergency line or request service online</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">2. Share Location</h3>
              <p className="text-gray-600">Tell us your exact location and describe the problem</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">3. We Dispatch</h3>
              <p className="text-gray-600">Our nearest technician is dispatched to your location</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="font-semibold text-lg mb-2">4. Problem Solved</h3>
              <p className="text-gray-600">Get back on the road quickly and safely</p>
            </div>
          </div>
        </div>
      </section>

      {/* Response Times */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Average Response Times</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="text-3xl font-bold text-red-600 mb-2">15-30</div>
                <CardTitle>Minutes</CardTitle>
                <CardDescription>Urban Areas</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-3xl font-bold text-red-600 mb-2">30-45</div>
                <CardTitle>Minutes</CardTitle>
                <CardDescription>Suburban Areas</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="text-3xl font-bold text-red-600 mb-2">45-60</div>
                <CardTitle>Minutes</CardTitle>
                <CardDescription>Rural Areas</CardDescription>
              </CardHeader>
            </Card>
          </div>
          <p className="text-center text-gray-600 mt-8">
            * Response times may vary based on location, weather conditions, and service demand
          </p>
        </div>
      </section>

      {/* Coverage Area */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nationwide Coverage</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our roadside assistance network covers major metropolitan areas across the United States,
                ensuring help is always nearby when you need it most.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span>Available in 100+ cities nationwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span>24/7 emergency dispatch center</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span>GPS tracking for accurate location</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span>Professional, insured technicians</span>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Need Emergency Service?</CardTitle>
                  <CardDescription>Don't wait - help is just a phone call away</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-3">
                    <Phone className="h-5 w-5 mr-2" />
                    <a href="tel:+2348092735348">Call +234(0)8092735348</a>
                  </Button>
                  <div className="text-center text-sm text-gray-600">
                    <p className="flex items-center justify-center gap-1 mb-1">
                      <Clock className="h-4 w-4" />
                      Available 24 hours a day, 7 days a week
                    </p>
                    <p>Average response time: 15-45 minutes</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Roadside Safety Tips</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Stay Visible</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Turn on hazard lights, use reflective triangles, and wear bright clothing to stay visible to other drivers.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Pull Over Safely</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Move your vehicle as far off the road as possible, preferably behind a barrier or onto the shoulder.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Stay in Your Vehicle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Unless it's unsafe, stay inside your vehicle with seatbelts fastened while waiting for help.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Call for Help</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Contact roadside assistance immediately and provide your exact location and description of the problem.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Be Prepared</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Keep an emergency kit in your car with basic tools, flashlight, water, and warm clothing.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Share Your Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Use GPS coordinates or nearby landmarks to help emergency services find you quickly.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}