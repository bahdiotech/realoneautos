import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Truck, DollarSign, Clock, Users, BarChart3, Shield, Phone, MessageCircle, Mail } from "lucide-react"

export default function FleetPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-red-600 text-white px-4 py-2">For Business</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Fleet Solutions by Realone Auto</h1>
            <p className="text-xl text-gray-300 mb-8">
              Keep your business vehicles running smoothly with our comprehensive mobile fleet maintenance services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                Get Fleet Quote
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Call Fleet Specialists: 08092735348
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Realone for Your Fleet?</h2>
              <p className="text-gray-600 mb-8">
                Our mobile fleet maintenance eliminates downtime, reduces costs, and keeps your vehicles on the road where they belong.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Minimize Downtime</h3>
                    <p className="text-gray-600">We come to your location, so your vehicles stay in service longer</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <DollarSign className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Reduce Costs</h3>
                    <p className="text-gray-600">Volume discounts and predictable pricing help control maintenance budgets</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Dedicated Support</h3>
                    <p className="text-gray-600">Assigned fleet specialists who understand your business needs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Fleet Management Portal</h3>
                    <p className="text-gray-600">Track maintenance, schedules, and costs across your entire fleet</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://ext.same-assets.com/2263820674/862924845.jpeg"
                alt="Fleet vehicles"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Fleet Services We Provide</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Preventive Maintenance",
                description: "Oil changes, filter replacements, fluid checks, and scheduled maintenance",
                icon: <Shield className="h-8 w-8" />
              },
              {
                title: "Emergency Repairs",
                description: "24/7 emergency roadside assistance and urgent repair services",
                icon: <Phone className="h-8 w-8" />
              },
              {
                title: "Brake Services",
                description: "Brake pad replacement, rotor service, and brake system maintenance",
                icon: <Truck className="h-8 w-8" />
              },
              {
                title: "Engine Diagnostics",
                description: "Computer diagnostics, check engine light service, and engine repairs",
                icon: <BarChart3 className="h-8 w-8" />
              },
              {
                title: "Fleet Inspections",
                description: "DOT inspections, safety checks, and compliance maintenance",
                icon: <CheckCircle className="h-8 w-8" />
              },
              {
                title: "Tire Services",
                description: "Tire rotation, replacement, pressure monitoring, and wheel alignment",
                icon: <Clock className="h-8 w-8" />
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-red-600 mb-2">{service.icon}</div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Custom Fleet Solutions</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-red-50 to-red-100 border-red-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Get a Custom Fleet Quote</h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  Fleet pricing varies based on your fleet size, service needs, and location.
                  Contact our fleet specialists for a customized solution that fits your business.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex flex-col items-center">
                    <Phone className="h-8 w-8 text-red-600 mb-2" />
                    <h4 className="font-semibold mb-2">Call Fleet Specialists</h4>
                    <Button className="bg-red-600 hover:bg-red-700 w-full">
                      08092735348
                    </Button>
                  </div>
                  <div className="flex flex-col items-center">
                    <MessageCircle className="h-8 w-8 text-green-600 mb-2" />
                    <h4 className="font-semibold mb-2">WhatsApp Business</h4>
                    <Button className="bg-green-600 hover:bg-green-700 w-full">
                      07010009558
                    </Button>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="h-8 w-8 text-blue-600 mb-2" />
                    <h4 className="font-semibold mb-2">Email Quote</h4>
                    <Button variant="outline" className="w-full">
                      Yemiiope@gmail.com
                    </Button>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Fleet Services Include:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                    <ul className="space-y-1">
                      <li>• Volume discounts based on fleet size</li>
                      <li>• Dedicated account management</li>
                      <li>• Priority scheduling and service</li>
                      <li>• Fleet-wide maintenance tracking</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• 24/7 emergency support</li>
                      <li>• Predictive maintenance programs</li>
                      <li>• Custom reporting and analytics</li>
                      <li>• Consolidated billing solutions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Fleet Maintenance?</h2>
          <p className="text-xl mb-8">
            Join hundreds of businesses that trust Realone Auto for their fleet needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Schedule Fleet Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Phone className="h-5 w-5 mr-2" />
              Call Fleet Specialists: 08092735348
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
