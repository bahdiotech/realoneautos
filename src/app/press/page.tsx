import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Download, ExternalLink } from "lucide-react"

export default function PressPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Press & Media</h1>
            <p className="text-xl text-gray-300">
              Latest news and resources about Realone Auto
            </p>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Recent Press Releases</h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">
                          Realone Auto Expands Mobile Mechanic Services Across Lagos
                        </CardTitle>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span>January 15, 2025</span>
                          <Badge variant="outline">Company News</Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Read More
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Realone Auto announces expansion of mobile automotive services to cover all 20 Local Government Areas
                      in Lagos State, bringing convenient car repair directly to customers' locations...
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">
                          Company Launches 24/7 Emergency Roadside Assistance Program
                        </CardTitle>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span>December 20, 2024</span>
                          <Badge variant="outline">Service Launch</Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Read More
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      New round-the-clock emergency service helps Lagos drivers with battery jumps, tire changes,
                      and urgent repairs anywhere in the city...
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl mb-2">
                          Realone Auto Partners with Local Automotive Training Institute
                        </CardTitle>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span>November 8, 2024</span>
                          <Badge variant="outline">Partnership</Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Read More
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Strategic partnership aims to train and certify more mobile mechanics to meet growing demand
                      for convenient automotive services in Nigeria...
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Media Kit */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Media Kit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Download our media kit for official logos, images, and company information.
                  </p>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Company Logos (PNG/SVG)
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Official Photos
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Company Fact Sheet
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Media Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Press Inquiries</h4>
                      <p className="text-gray-600">Yemiiope@gmail.com</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-gray-600">08092735348</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Business Hours</h4>
                      <p className="text-gray-600">Monday - Friday, 9:00 AM - 6:00 PM WAT</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Address</h4>
                      <p className="text-gray-600">
                        Plot 4 Ebute Metta<br />
                        Costain round about Lagos<br />
                        Nigeria
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Company Facts */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Company Facts & Figures</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">2024</div>
                    <p className="text-gray-600">Founded</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">20+</div>
                    <p className="text-gray-600">Lagos Areas Served</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                    <p className="text-gray-600">Certified Mechanics</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                    <p className="text-gray-600">Emergency Service</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  )
}
