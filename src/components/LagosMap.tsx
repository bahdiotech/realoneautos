"use client"

import { MapPin, Navigation, Phone, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function LagosMap() {
  const openInGoogleMaps = () => {
    const address = "Plot 4 Ebute Metta, Costain round about Lagos, Nigeria"
    const encodedAddress = encodeURIComponent(address)
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`
    window.open(googleMapsUrl, '_blank')
  }

  const openInAppleMaps = () => {
    const address = "Plot 4 Ebute Metta, Costain round about Lagos, Nigeria"
    const encodedAddress = encodeURIComponent(address)
    const appleMapsUrl = `https://maps.apple.com/?q=${encodedAddress}`
    window.open(appleMapsUrl, '_blank')
  }

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-red-600" />
            Our Lagos Location
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="relative h-64 md:h-80 bg-gray-100">
            {/* Embedded Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6089234567!2d3.369140814770!3d6.473821795349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b0d0d0d0d0d%3A0x0!2sEbute%20Metta%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Realone Auto Lagos Location"
            ></iframe>

            {/* Overlay with location marker */}
            <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Realone Auto HQ</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Location Details */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-red-600" />
              Address
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-gray-700">
              Plot 4 Ebute Metta<br />
              Costain Round About<br />
              Lagos, Nigeria
            </p>
            <div className="flex gap-2">
              <Button onClick={openInGoogleMaps} size="sm" variant="outline">
                <Navigation className="h-4 w-4 mr-2" />
                Google Maps
              </Button>
              <Button onClick={openInAppleMaps} size="sm" variant="outline">
                <Navigation className="h-4 w-4 mr-2" />
                Apple Maps
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-red-600" />
              Operating Hours
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Monday - Friday:</span>
              <span className="font-medium">7:00 AM - 7:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Saturday:</span>
              <span className="font-medium">8:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Sunday:</span>
              <span className="font-medium">9:00 AM - 5:00 PM</span>
            </div>
            <div className="pt-2 border-t">
              <div className="flex justify-between">
                <span className="text-red-600 font-medium">Emergency:</span>
                <span className="font-medium">24/7 Available</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Contact */}
      <Card className="bg-gradient-to-r from-red-50 to-red-100">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">Need Immediate Service?</h3>
            <p className="text-gray-600">
              Our mobile mechanics can reach any location in Lagos within 1-2 hours
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-red-600 hover:bg-red-700">
                <Phone className="h-4 w-4 mr-2" />
                Call 08092735348
              </Button>
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                WhatsApp 07010009558
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Service Areas */}
      <Card>
        <CardHeader>
          <CardTitle>We Service All Lagos Areas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "Victoria Island", "Ikoyi", "Lekki", "Ajah",
              "Ikeja", "Surulere", "Yaba", "Lagos Island",
              "Apapa", "Festac", "Gbagada", "Ketu",
              "Mushin", "Oshodi", "Isolo", "Mile 2"
            ].map((area, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <span className="text-gray-700">{area}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Don't see your area? Contact us - we're expanding rapidly across Lagos!
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
