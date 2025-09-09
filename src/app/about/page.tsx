import { CheckCircle, Users, Award, Shield, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Realone Auto</h1>
            <p className="text-xl text-gray-300">
              We're revolutionizing auto repair by bringing certified mechanics directly to your location.
              No more waiting rooms, no more scheduling around shop hours.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Realone Auto, we believe car maintenance and repair should be convenient, transparent, and trustworthy.
                That's why we bring professional automotive services directly to your home or office.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded with the vision of making car care hassle-free, we've built a network of certified mechanics
                who are passionate about delivering exceptional service wherever you are.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Convenience First</h3>
                    <p className="text-gray-600">We come to you, on your schedule</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Transparent Pricing</h3>
                    <p className="text-gray-600">No surprises, fixed upfront quotes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold">Quality Guaranteed</h3>
                    <p className="text-gray-600">12-month/12,000-mile warranty</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/proser.jpeg"
                alt="Professional diagnostic equipment and Mercedes vehicle service"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Realone Auto by the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">50,000+</div>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">100+</div>
              <p className="text-gray-600">Certified Mechanics</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">25+</div>
              <p className="text-gray-600">Cities Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">99%</div>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Engnr. Opeyemi", role: "CEO & Founder", experience: "Former automotive industry executive with 15+ years experience" },
              { name: "Engnr. FAUD", role: "Electrical Work", experience: "Call for information" },
              { name: "Engnr. Qudus", role: "", experience: "Call for information" },
              { name: "Engnr. Sherif", role: "", experience: "Call for information" }
            ].map((member, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />
                  <h3 className="font-semibold text-center text-lg">{member.name}</h3>
                  <p className="text-red-600 text-center mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm text-center">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-gray-300">Every decision we make prioritizes our customers' needs and convenience.</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-300">We maintain the highest standards in service quality and professionalism.</p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Trust</h3>
              <p className="text-gray-300">Building lasting relationships through transparency and reliability.</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-300">Continuously improving our services through technology and feedback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers who've made the switch to convenient mobile auto repair.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100" asChild>
              <a href="https://api.whatsapp.com/send/?phone=2347010009558&text&type=phone_number&app_absent=0">
                Get Your Free Quote
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white/10">
              <Phone className="h-5 w-5 mr-2" />
              <a href="tel:08092735348">Call +234(0)8092735348</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}