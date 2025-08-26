import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, CheckCircle, Clock, Phone } from "lucide-react"

export default function CitiesPage() {
  const lagosAreas = [
    { name: "Victoria Island", status: "active", responseTime: "30 min" },
    { name: "Ikoyi", status: "active", responseTime: "25 min" },
    { name: "Lekki", status: "active", responseTime: "35 min" },
    { name: "Ajah", status: "active", responseTime: "40 min" },
    { name: "Ikeja", status: "active", responseTime: "30 min" },
    { name: "Surulere", status: "active", responseTime: "25 min" },
    { name: "Yaba", status: "active", responseTime: "20 min" },
    { name: "Lagos Island", status: "active", responseTime: "25 min" },
    { name: "Apapa", status: "active", responseTime: "35 min" },
    { name: "Festac", status: "active", responseTime: "40 min" },
    { name: "Egbeda", status: "active", responseTime: "45 min" },
    { name: "Alimosho", status: "active", responseTime: "50 min" },
    { name: "Mushin", status: "active", responseTime: "30 min" },
    { name: "Oshodi", status: "active", responseTime: "25 min" },
    { name: "Isolo", status: "active", responseTime: "30 min" },
    { name: "Gbagada", status: "active", responseTime: "35 min" },
    { name: "Ketu", status: "active", responseTime: "40 min" },
    { name: "Mile 2", status: "active", responseTime: "35 min" },
    { name: "Badagry", status: "active", responseTime: "60 min" },
    { name: "Epe", status: "active", responseTime: "60 min" },
    { name: "Ikorodu", status: "active", responseTime: "50 min" },
    { name: "Kosofe", status: "active", responseTime: "45 min" }
  ]

  const comingSoon = [
    { name: "Abuja", state: "FCT", eta: "Q2 2025" },
    { name: "Port Harcourt", state: "Rivers", eta: "Q3 2025" },
    { name: "Ibadan", state: "Oyo", eta: "Q3 2025" },
    { name: "Kano", state: "Kano", eta: "Q4 2025" }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Service Areas</h1>
            <p className="text-xl text-gray-100 mb-6">
              Mobile auto repair services across Lagos and expanding nationwide
            </p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              20+ Lagos Areas Covered
            </Badge>
          </div>
        </div>
      </section>

      {/* Current Service Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Currently Serving Lagos</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our mobile mechanics are ready to serve you across Lagos State with fast response times
                and professional automotive services at your location.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
              {lagosAreas.map((area, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{area.name}</h3>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>Avg. {area.responseTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Complete Lagos Coverage</h3>
                <p className="text-gray-600 mb-4">
                  We proudly serve all 20 Local Government Areas in Lagos State with our mobile auto repair services.
                </p>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Phone className="h-4 w-4 mr-2" />
                  Book Service Now
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Expansion Plans */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Expanding Across Nigeria</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're bringing our mobile auto repair services to major cities across Nigeria.
                Be the first to know when we launch in your city!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {comingSoon.map((city, index) => (
                <Card key={index} className="border-dashed border-2 border-gray-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">{city.name}</h3>
                        <p className="text-gray-600">{city.state} State</p>
                      </div>
                      <Badge variant="outline">{city.eta}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>Coming Soon</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Get Notified</h3>
                <p className="text-gray-600 mb-6">
                  Want to be notified when we launch in your city? Sign up for updates!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Notify Me
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Service Commitment */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Local Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our mechanics know Lagos roads and traffic patterns, ensuring efficient service delivery.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Fast Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Average response time of 30-45 minutes across most Lagos areas during business hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CheckCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Quality Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Same high-quality service standards across all locations with 12-month warranty.
                  </p>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
