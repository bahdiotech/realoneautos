"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MessageCircle, Clock } from "lucide-react"

export default function HelpPage() {
  const faqs = [
    {
      question: "How does Realone Auto work?",
      answer: "Simply request a quote online or call us. We'll send you an upfront price, schedule a convenient time, and our certified mechanic will come to your location to perform the service."
    },
    {
      question: "What areas do you serve?",
      answer: "We currently serve over 25 major metropolitan areas across the United States. Enter your ZIP code on our homepage to check if we service your area."
    },
    {
      question: "Are your mechanics certified?",
      answer: "Yes! All our mechanics are ASE certified and undergo extensive background checks. Many also hold additional certifications like Master Automotive Technician credentials."
    },
    {
      question: "What's included in your warranty?",
      answer: "We provide a 12-month or 12,000-mile warranty on all parts and labor, whichever comes first. This covers the same service if any issues arise from our work."
    },
    {
      question: "How do you determine pricing?",
      answer: "Our pricing is transparent and competitive. We provide upfront quotes based on your vehicle's needs. Contact us for a personalized quote - no surprises."
    },
    {
      question: "Can you work on all vehicle makes and models?",
      answer: "We service most domestic and foreign vehicles, including cars, trucks, and SUVs. If you have a specialty vehicle, please call us to confirm compatibility."
    },
    {
      question: "What if I need emergency service?",
      answer: "For emergency roadside assistance and towing, call our emergency line at 08092735348. We offer 24/7 emergency services for urgent situations."
    },
    {
      question: "How far in advance should I schedule?",
      answer: "We recommend scheduling 1-2 days in advance for routine maintenance. However, we often have same-day availability for urgent repairs."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, and cash. Payment is collected after the service is completed to your satisfaction."
    },
    {
      question: "What if I'm not satisfied with the service?",
      answer: "Customer satisfaction is our top priority. If you're not completely satisfied, contact us immediately and we'll make it right at no additional cost."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Help & Support</h1>
            <p className="text-xl text-gray-300">
              Find answers to common questions or get in touch with our support team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get Help Now</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader className="text-center">
                <Phone className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Call Us</CardTitle>
                <CardDescription>Speak with our customer service team</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-red-600 mb-2">08092735348</p>
                <p className="text-gray-600 mb-4">Available 7 days a week</p>
                <div className="text-sm text-gray-500">
                  <div className="flex items-center gap-2 justify-center mb-1">
                    <Clock className="h-4 w-4" />
                    <span>Mon-Fri: 6am - 5pm PST</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <Clock className="h-4 w-4" />
                    <span>Sat-Sun: 7am - 4pm PST</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Mail className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Email Support</CardTitle>
                <CardDescription>Send us a detailed message</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg font-semibold mb-2">Yemiiope@gmail.com</p>
                <p className="text-gray-600 mb-4">We typically respond within 2 hours</p>
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => window.location.href = 'mailto:Yemiiope@gmail.com?subject=Service Inquiry&body=Hello, I need help with...'}
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <MessageCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>Chat with our support team</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">Get instant help with your questions</p>
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => window.open('https://wa.me/2347010009558?text=Hello, I need help with my vehicle...', '_blank')}
                >
                  Start Chat
                </Button>
                <p className="text-sm text-gray-500 mt-2">Available during business hours</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="text-left font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Emergency Assistance?</h2>
          <p className="text-xl mb-8">
            For roadside emergencies, breakdowns, and urgent repairs
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            <Phone className="h-5 w-5 mr-2" />
            Call Emergency Line: 08092735348
          </Button>
          <p className="mt-4 text-red-100">Available 24/7 for emergency services</p>
        </div>
      </section>
    </div>
  )
}
