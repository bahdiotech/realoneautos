import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Shield, Clock, Truck, Users, Phone } from "lucide-react"

export default function EnterpriseWarrantyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Enterprise Warranty</h1>
            <p className="text-xl mb-6">
              Comprehensive Fleet and Business Vehicle Coverage
            </p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Built for Business Success
            </Badge>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <Truck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Fleet Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Comprehensive warranty for entire vehicle fleets
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Dedicated Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Assigned account manager for your business needs
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Priority Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Fast-track scheduling and emergency response
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Coverage Features:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Extended 18-month warranty period</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Up to 20,000 miles coverage</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>24/7 emergency service</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Fleet-wide coverage management</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Bulk service discounts</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-4">Business Advantages:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Dedicated account manager</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Custom service scheduling</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Detailed service reporting</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Predictive maintenance alerts</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Corporate billing solutions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ideal for These Industries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Logistics & Delivery</h4>
                      <p className="text-sm text-gray-600">Keep delivery fleets running smoothly</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Taxi & Ride-share</h4>
                      <p className="text-sm text-gray-600">Minimize downtime for drivers</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Corporate Fleets</h4>
                      <p className="text-sm text-gray-600">Maintain executive and company vehicles</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Service Level Agreement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium">Emergency Response Time</span>
                      <Badge variant="outline">Within 30 minutes</Badge>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium">Routine Service Scheduling</span>
                      <Badge variant="outline">Same day or next day</Badge>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium">Account Manager Response</span>
                      <Badge variant="outline">Within 2 hours</Badge>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium">Service Areas</span>
                      <Badge variant="outline">All Lagos & Ogun State</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pricing Tiers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="border rounded-lg p-6 text-center">
                      <h4 className="font-bold text-lg mb-2">Starter</h4>
                      <p className="text-sm text-gray-600 mb-4">5-15 vehicles</p>
                      <ul className="text-sm space-y-2 mb-6">
                        <li>• 15% service discount</li>
                        <li>• Email support</li>
                        <li>• Basic reporting</li>
                      </ul>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="https://api.whatsapp.com/send/?phone=2347010009558&text&type=phone_number&app_absent=0">Get Quote</a>
                      </Button>
                    </div>
                    <div className="border-2 border-blue-600 rounded-lg p-6 text-center">
                      <Badge className="mb-2">Most Popular</Badge>
                      <h4 className="font-bold text-lg mb-2">Professional</h4>
                      <p className="text-sm text-gray-600 mb-4">16-50 vehicles</p>
                      <ul className="text-sm space-y-2 mb-6">
                        <li>• 25% service discount</li>
                        <li>• Dedicated support</li>
                        <li>• Advanced reporting</li>
                        <li>• Account manager</li>
                      </ul>
                      <Button className="w-full" asChild>
                        <a href="https://api.whatsapp.com/send/?phone=2347010009558&text&type=phone_number&app_absent=0">Get Quote</a>
                      </Button>
                    </div>
                    <div className="border rounded-lg p-6 text-center">
                      <h4 className="font-bold text-lg mb-2">Enterprise</h4>
                      <p className="text-sm text-gray-600 mb-4">50+ vehicles</p>
                      <ul className="text-sm space-y-2 mb-6">
                        <li>• 35% service discount</li>
                        <li>• Priority support</li>
                        <li>• Custom solutions</li>
                        <li>• On-site service</li>
                      </ul>
                      <Button variant="outline" className="w-full">Contact Sales</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Fleet?</h2>
          <p className="text-xl mb-8">
            Contact our enterprise team for a custom warranty solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Call Enterprise Team
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Request Proposal
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
