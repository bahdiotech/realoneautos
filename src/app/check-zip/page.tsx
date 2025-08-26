"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MapPin, CheckCircle, Clock, AlertCircle, Search } from "lucide-react"

export default function CheckZipPage() {
  const [zipCode, setZipCode] = useState("")
  const [searchResult, setSearchResult] = useState<{
    found: boolean;
    area?: string;
    responseTime?: string;
    status?: string;
    message?: string;
  } | null>(null)
  const [isSearching, setIsSearching] = useState(false)

  // Nigerian postal codes for Lagos areas
  const servicedAreas = {
    "100001": { area: "Victoria Island", responseTime: "25-35 min", status: "active" },
    "100004": { area: "Ikoyi", responseTime: "25-35 min", status: "active" },
    "100211": { area: "Lagos Island", responseTime: "20-30 min", status: "active" },
    "100252": { area: "Surulere", responseTime: "25-35 min", status: "active" },
    "100281": { area: "Yaba", responseTime: "20-30 min", status: "active" },
    "101245": { area: "Ikeja", responseTime: "25-35 min", status: "active" },
    "101001": { area: "Lekki", responseTime: "30-45 min", status: "active" },
    "101285": { area: "Gbagada", responseTime: "30-40 min", status: "active" },
    "102273": { area: "Ketu", responseTime: "35-45 min", status: "active" },
    "100242": { area: "Apapa", responseTime: "30-40 min", status: "active" },
    "102213": { area: "Festac", responseTime: "35-45 min", status: "active" },
    "100271": { area: "Mushin", responseTime: "25-35 min", status: "active" },
    "100218": { area: "Oshodi", responseTime: "20-30 min", status: "active" },
    "100284": { area: "Isolo", responseTime: "25-35 min", status: "active" },
    "102215": { area: "Alimosho", responseTime: "40-50 min", status: "active" },
    "102216": { area: "Egbeda", responseTime: "40-50 min", status: "active" },
    "103101": { area: "Badagry", responseTime: "50-60 min", status: "active" },
    "106104": { area: "Epe", responseTime: "50-60 min", status: "active" },
    "104101": { area: "Ikorodu", responseTime: "45-55 min", status: "active" },
    "105102": { area: "Kosofe", responseTime: "40-50 min", status: "active" }
  }

  const handleSearch = () => {
    setIsSearching(true)

    // Simulate API call
    setTimeout(() => {
      const result = servicedAreas[zipCode as keyof typeof servicedAreas]

      if (result) {
        setSearchResult({
          found: true,
          ...result
        })
      } else {
        setSearchResult({
          found: false,
          message: "We don't currently service this postal code, but we're expanding rapidly!"
        })
      }
      setIsSearching(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Check Your Postal Code</h1>
            <p className="text-xl text-gray-100 mb-6">
              Enter your Nigerian postal code to see if we service your area
            </p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Lagos Wide Coverage
            </Badge>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-center">Enter Your Postal Code</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="e.g., 100001"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="text-lg h-12"
                      maxLength={6}
                    />
                    <Button
                      onClick={handleSearch}
                      className="bg-green-600 hover:bg-green-700 h-12 px-8"
                      disabled={!zipCode || isSearching}
                    >
                      {isSearching ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      ) : (
                        <Search className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                  <p className="text-sm text-gray-500 text-center">
                    Enter the 6-digit Nigerian postal code for your area
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Search Results */}
            {searchResult && (
              <Card className={`mb-8 ${searchResult.found ? 'border-green-200 bg-green-50' : 'border-orange-200 bg-orange-50'}`}>
                <CardContent className="p-6">
                  {searchResult.found ? (
                    <div className="text-center">
                      <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-green-800 mb-2">Great News!</h3>
                      <p className="text-green-700 mb-4">
                        We service <strong>{searchResult.area}</strong> in your postal code area.
                      </p>
                      <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Response time: {searchResult.responseTime}</span>
                        </div>
                        <Badge className="bg-green-600">Active Service Area</Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button className="bg-green-600 hover:bg-green-700">
                          Book Service Now
                        </Button>
                        <Button variant="outline">
                          Get Free Quote
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <AlertCircle className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                      <h3 className="text-xl font-bold text-orange-800 mb-2">Not Yet Available</h3>
                      <p className="text-orange-700 mb-4">{searchResult.message}</p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Button className="bg-orange-600 hover:bg-orange-700">
                          Contact Us Anyway
                        </Button>
                        <Button variant="outline">
                          Get Notified
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

          </div>
        </div>
      </section>

      {/* Service Areas Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Lagos Service Areas</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We currently service these postal code areas across Lagos State. More areas are being added regularly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(servicedAreas).map(([code, info]) => (
                <Card key={code} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{info.area}</h3>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                      <MapPin className="h-3 w-3" />
                      <span>Postal Code: {code}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-3 w-3" />
                      <span>{info.responseTime}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Common Questions */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Don't know your postal code?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    You can still get service! Just tell us your area name (like "Victoria Island" or "Ikeja")
                    and we'll help you determine if we service your location.
                  </p>
                  <Button variant="outline" className="w-full">
                    Contact Us
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What if you don't service my area?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We're expanding rapidly across Lagos and Nigeria. Sign up to be notified
                    when we start servicing your area.
                  </p>
                  <Button variant="outline" className="w-full">
                    Get Notified
                  </Button>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
