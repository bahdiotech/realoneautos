"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MapPin, Search, Phone, Clock } from "lucide-react"
import { useState } from "react"

export default function LocationsPage() {
  const [zipCode, setZipCode] = useState("")

  const states = [
    {
      name: "California",
      cities: ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "Oakland", "Fresno", "Bakersfield", "Orange County", "San Jose", "Inland Empire"]
    },
    {
      name: "Texas",
      cities: ["Houston", "Dallas", "Austin", "San Antonio", "El Paso", "Corpus Christi", "Killeen"]
    },
    {
      name: "Florida",
      cities: ["Miami", "Orlando", "Tampa", "Jacksonville", "Tallahassee"]
    },
    {
      name: "New York",
      cities: ["New York", "Buffalo", "Rochester"]
    },
    {
      name: "Illinois",
      cities: ["Chicago"]
    },
    {
      name: "Pennsylvania",
      cities: ["Philadelphia", "Pittsburgh"]
    },
    {
      name: "Ohio",
      cities: ["Columbus", "Cleveland", "Cincinnati", "Toledo"]
    },
    {
      name: "Georgia",
      cities: ["Atlanta", "Savannah"]
    },
    {
      name: "North Carolina",
      cities: ["Charlotte", "Raleigh", "Greensboro"]
    },
    {
      name: "Michigan",
      cities: ["Detroit", "Grand Rapids"]
    },
    {
      name: "Washington",
      cities: ["Seattle"]
    },
    {
      name: "Colorado",
      cities: ["Denver", "Colorado Springs"]
    },
    {
      name: "Arizona",
      cities: ["Phoenix", "Tucson"]
    },
    {
      name: "Tennessee",
      cities: ["Nashville", "Memphis", "Knoxville", "Chattanooga"]
    },
    {
      name: "Missouri",
      cities: ["Kansas City", "St. Louis"]
    },
    {
      name: "Maryland",
      cities: ["Baltimore"]
    },
    {
      name: "Massachusetts",
      cities: ["Boston"]
    },
    {
      name: "Virginia",
      cities: ["Norfolk", "Richmond"]
    },
    {
      name: "Indiana",
      cities: ["Indianapolis"]
    },
    {
      name: "Wisconsin",
      cities: ["Milwaukee"]
    },
    {
      name: "Minnesota",
      cities: ["Minneapolis"]
    },
    {
      name: "Louisiana",
      cities: ["New Orleans"]
    },
    {
      name: "Nevada",
      cities: ["Las Vegas", "Reno"]
    },
    {
      name: "Oklahoma",
      cities: ["Oklahoma City", "Tulsa"]
    },
    {
      name: "Utah",
      cities: ["Salt Lake City"]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Service Locations</h1>
            <p className="text-xl text-gray-300 mb-8">
              Find mobile mechanic services in your area. We're expanding rapidly to serve more communities.
            </p>

            {/* ZIP Code Checker */}
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-md mx-auto">
              <h3 className="text-lg font-semibold mb-4">Check Service Availability</h3>
              <div className="flex gap-2">
                <Input
                  type="text"
                  placeholder="Enter your ZIP code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="bg-white text-gray-900"
                />
                <Button className="bg-red-600 hover:bg-red-700 text-white px-6">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">25+</div>
              <p className="text-gray-600">States Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">100+</div>
              <p className="text-gray-600">Cities & Metro Areas</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <p className="text-gray-600">Certified Mechanics</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">50M+</div>
              <p className="text-gray-600">People in Service Area</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Current Service Areas</h2>
          <div className="grid gap-8">
            {states.map((state, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-red-600" />
                    {state.name}
                  </CardTitle>
                  <CardDescription>
                    {state.cities.length} metro areas served
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {state.cities.map((city, cityIndex) => (
                      <Badge key={cityIndex} variant="outline" className="text-gray-700">
                        {city}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Don't See Your Area?</CardTitle>
              <CardDescription>We're expanding rapidly across the United States</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                We're constantly adding new service areas. If we don't currently serve your location,
                we may be launching soon! Contact us to be notified when we expand to your area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Request Service Area
                </Button>
                <Button variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Call 1-800-REALONE
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Hours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Service Hours</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <Clock className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Regular Service Hours</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold">7:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-semibold">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">9:00 AM - 5:00 PM</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Emergency Services</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  24/7 emergency roadside assistance and urgent repairs available
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Call Emergency Line
                </Button>
                <p className="text-sm text-gray-500 mt-2">
                  Additional fees may apply for after-hours service
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Book your mobile mechanic service today and experience the convenience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100" asChild>
              <a href="https://api.whatsapp.com/send/?phone=2347010009558&text&type=phone_number&app_absent=0">
                Get Your Free Quote
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Phone className="h-5 w-5 mr-2" />
              Call 1-800-REALONE
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
