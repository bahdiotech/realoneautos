import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Clock, Wrench } from "lucide-react"

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Consumer Warranty</h1>
            <p className="text-xl mb-6">
              12 Month / 12,000 Mile Warranty Coverage
            </p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Peace of Mind Guaranteed
            </Badge>
          </div>
        </div>
      </section>

      {/* Warranty Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>12 Months</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Full warranty coverage for one year from service date
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Wrench className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>12,000 Miles</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Comprehensive coverage up to 12,000 miles driven
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Parts & Labor</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Complete coverage for both parts and labor costs
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>What's Covered</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Covered Services:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Oil changes and filter replacements</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Battery replacement and testing</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Brake pad and disc replacement</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Alternator and starter replacement</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>AC system repairs</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Additional Coverage:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Diagnostic services</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Electrical system repairs</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Cooling system services</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Fuel system maintenance</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span>Suspension repairs</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Warranty Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Coverage Period</h4>
                      <p className="text-gray-600">
                        Warranty begins on the date of service completion and lasts for 12 months or 12,000 miles,
                        whichever comes first.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Transferable</h4>
                      <p className="text-gray-600">
                        Warranty coverage transfers to new owners if the vehicle is sold during the warranty period.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Lagos-Wide Coverage</h4>
                      <p className="text-gray-600">
                        Warranty services are available across all Lagos service areas at no additional charge.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What's Not Covered</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Normal wear and tear items (wipers, belts, fluids)</li>
                    <li>• Damage due to accidents or misuse</li>
                    <li>• Services performed by non-Realone Auto technicians</li>
                    <li>• Modifications or aftermarket parts</li>
                    <li>• Damage from environmental factors (flooding, etc.)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How to Make a Warranty Claim</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="font-semibold">Contact Us</h4>
                        <p className="text-gray-600">Call 08092735348 or WhatsApp 07010009558</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 className="font-semibold">Provide Information</h4>
                        <p className="text-gray-600">Share your original service receipt and describe the issue</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 className="font-semibold">Schedule Service</h4>
                        <p className="text-gray-600">We'll schedule a convenient time to inspect and repair</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
