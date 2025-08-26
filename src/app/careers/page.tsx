"use client"
import { MapPin, Clock, DollarSign, Users, Award, Briefcase, Car, Phone, Heart, Target } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CareersPage() {
  const jobs = [
    {
      title: "Mobile Automotive Technician",
      location: "Lagos (Victoria Island, Lekki, Ikeja)",
      type: "Full-time",
      experience: "2+ years",
      salary: "₦2.4M - ₦3.6M",
      description: "Join our team providing mobile automotive services across Lagos. Experience with Mercedes, Toyota, and Honda preferred."
    },
    {
      title: "Senior Diagnostic Technician",
      location: "Lagos Island",
      type: "Full-time",
      experience: "3+ years",
      salary: "₦3.6M - ₦5.4M",
      description: "Specialized role in ECU diagnostics and programming. Experience with OBD systems and German vehicles required."
    },
    {
      title: "Lagos Operations Manager",
      location: "Ikeja, Lagos",
      type: "Full-time",
      experience: "4+ years",
      salary: "₦6M - ₦9M",
      description: "Lead our Lagos operations team and manage service delivery across all 20 Lagos LGAs. Knowledge of Lagos traffic patterns essential."
    },
    {
      title: "Customer Service Representative",
      location: "Remote/Lagos",
      type: "Full-time",
      experience: "1+ years",
      salary: "₦1.8M - ₦2.7M",
      description: "Provide customer support in English and local languages. Handle WhatsApp, phone, and email inquiries from Lagos customers."
    },
    {
      title: "Electrical Systems Specialist",
      location: "Surulere, Lagos",
      type: "Full-time",
      experience: "3+ years",
      salary: "₦3M - ₦4.8M",
      description: "Expert in automotive electrical systems, AC repair, and hybrid vehicle technology. NIMET certification preferred."
    },
    {
      title: "Parts Procurement Officer",
      location: "Apapa, Lagos",
      type: "Full-time",
      experience: "2+ years",
      salary: "₦2.4M - ₦3.6M",
      description: "Manage parts inventory and supplier relationships. Knowledge of Lagos auto parts markets and import procedures required."
    },
    {
      title: "Fleet Service Coordinator",
      location: "Multiple Lagos Locations",
      type: "Full-time",
      experience: "2+ years",
      salary: "₦2.7M - ₦4.2M",
      description: "Coordinate fleet maintenance services for corporate clients. Experience with logistics companies and transport operators preferred."
    },
    {
      title: "Mobile Mechanic Apprentice",
      location: "Lagos (Training Program)",
      type: "Full-time",
      experience: "0-1 years",
      salary: "₦1.5M - ₦2.1M",
      description: "Learn mobile automotive repair through our structured apprenticeship program. SSCE/OND required, automotive experience preferred."
    }
  ]

  const benefits = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Competitive Salary",
      description: "Industry-leading Naira compensation with performance bonuses and 13th month pay"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "HMO & Healthcare",
      description: "Comprehensive HMO coverage for employee and immediate family members"
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Transport & Vehicle",
      description: "Company vehicle for technicians plus transport allowance for Lagos commute"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Flexible Work",
      description: "Work-life balance with flexible hours to avoid Lagos peak traffic"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Training & Certification",
      description: "Professional automotive certification programs and international training opportunities"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Career Growth",
      description: "Fast-track advancement opportunities in Nigeria's leading mobile auto service company"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Join Nigeria's Leading Mobile Auto Service</h1>
            <p className="text-xl text-gray-300 mb-8">
              Build your automotive career with Lagos's most innovative mobile mechanic service. Competitive Naira salaries and growth opportunities.
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Realone Auto Nigeria?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We're Nigeria's leading mobile automotive service company, revolutionizing car care across Lagos.
                Join our team of skilled professionals and build a rewarding career in Nigeria's growing automotive sector.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Nigerian Innovation</h3>
                    <p className="text-gray-600">Be part of a homegrown company transforming Lagos's automotive service industry</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Target className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Lagos Market Leader</h3>
                    <p className="text-gray-600">Join Nigeria's fastest-growing mobile auto service with expansion plans nationwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <Award className="h-5 w-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Skills Development</h3>
                    <p className="text-gray-600">Local and international automotive training programs with clear career advancement paths</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/join.jpeg"
                alt="Professional automotive workspace with diagnostic equipment"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-red-600 mb-2">{benefit.icon}</div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <p className="text-gray-600 mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {job.type}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          {job.experience}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <DollarSign className="h-3 w-3" />
                          {job.salary}
                        </Badge>
                      </div>
                    </div>
                    <div className="lg:ml-4">
                      <Button
                        className="bg-red-600 hover:bg-red-700 text-white w-full lg:w-auto"
                        onClick={() => window.location.href = `mailto:Yemiiope@gmail.com?subject=Application for ${job.title}&body=Dear Hiring Manager,%0D%0A%0D%0AI am interested in applying for the ${job.title} position. Please find my resume attached.%0D%0A%0D%0ABest regards`}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Hiring Process</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Email Application</h3>
              <p className="text-gray-600 text-sm">Send your CV and cover letter to our Lagos office via email</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Phone Screening</h3>
              <p className="text-gray-600 text-sm">Brief phone interview to discuss your background and interests</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Lagos Office Interview</h3>
              <p className="text-gray-600 text-sm">Visit our Ebute Metta office for technical assessment and team meeting</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Join the Team</h3>
              <p className="text-gray-600 text-sm">Complete onboarding and start making a difference</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Career in Lagos?</h2>
          <p className="text-xl mb-8">
            Join Nigeria's leading mobile auto service team and advance your automotive career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              Apply Today
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Phone className="h-5 w-5 mr-2" />
              Call HR: 08092735348
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}