import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

export default function FAQPage() {
  const faqs = [
    {
      question: "How does mobile auto repair work?",
      answer: "Our certified mechanics come directly to your location with a fully equipped service vehicle. We can perform most automotive services right in your driveway, office parking lot, or any convenient location in Lagos."
    },
    {
      question: "What areas in Lagos do you service?",
      answer: "We service all major areas in Lagos including Victoria Island, Ikoyi, Lekki, Ikeja, Surulere, Yaba, Gbagada, Ketu, Mushin, Oshodi, Festac, and many more. If you're unsure about your area, contact us and we'll confirm availability."
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing varies by service and vehicle type. We provide upfront quotes with no hidden fees. Contact us at 08092735348 or WhatsApp 07010009558 for a specific quote for your vehicle."
    },
    {
      question: "How do I schedule a service?",
      answer: "You can schedule a service by calling 08092735348, messaging us on WhatsApp at 07010009558, or using our online booking system. We typically offer same-day or next-day appointments."
    },
    {
      question: "What if my car won't start?",
      answer: "We offer 24/7 emergency roadside assistance. Call us immediately at 08092735348 and we'll dispatch a mechanic to your location. Common causes include dead battery, starter issues, or fuel problems - all of which we can diagnose and fix on-site."
    },
    {
      question: "Do you warranty your work?",
      answer: "Yes! All our services come with a 12-month/12,000-mile warranty covering both parts and labor. This warranty is valid across all our service areas in Lagos."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, bank transfers, and mobile payments (POS available). Payment is due upon completion of service unless you have an enterprise account with us."
    },
    {
      question: "How long do services take?",
      answer: "Service times vary: oil changes typically take 30-45 minutes, battery replacement 20-30 minutes, and brake services 1-2 hours. We'll provide an estimated time when you book your appointment."
    },
    {
      question: "Can you service all car makes and models?",
      answer: "Yes, our mechanics are trained to work on all major car brands including Toyota, Honda, Mercedes-Benz, BMW, Hyundai, Kia, Ford, and more. We stock parts for the most common vehicle models in Lagos."
    },
    {
      question: "What should I do to prepare for your visit?",
      answer: "Ensure your vehicle is accessible and in a safe location. For security, please be present during the service. If you're at work, let security know we're coming. We'll handle everything else!"
    },
    {
      question: "Do you offer services for commercial fleets?",
      answer: "Absolutely! We have special enterprise packages for businesses with multiple vehicles. These include bulk discounts, dedicated account managers, and priority scheduling."
    },
    {
      question: "What if you can't fix my car on-site?",
      answer: "While we can handle 90% of repairs on-site, if your vehicle needs specialized equipment or parts, we'll provide a detailed diagnosis and recommend next steps. We can also arrange towing if needed."
    },
    {
      question: "Are your mechanics certified?",
      answer: "All our mechanics are ASE-certified with years of experience. They undergo continuous training to stay current with automotive technology and carry professional-grade tools and diagnostic equipment."
    },
    {
      question: "Can I get a quote before the service?",
      answer: "Yes! We provide free estimates over the phone or WhatsApp. For complex issues, we may need to perform a diagnostic (₦5,000) which is credited toward your repair if you proceed with the service."
    },
    {
      question: "What happens if it rains during my appointment?",
      answer: "We carry portable canopies and can work in light rain. For heavy rain or unsafe weather conditions, we'll reschedule your appointment at no charge."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300">
              Get answers to common questions about our mobile auto repair services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Quick Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Can't find what you're looking for? Our team is ready to help!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call 08092735348
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp 07010009558
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Card className="mt-12">
              <CardHeader>
                <CardTitle>Still Have Questions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our customer service team is available to help you with any questions not covered here.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Business Hours</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Monday - Friday: 7:00 AM - 7:00 PM</li>
                      <li>Saturday: 8:00 AM - 6:00 PM</li>
                      <li>Sunday: 9:00 AM - 5:00 PM</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Emergency Service</h4>
                    <p className="text-sm text-gray-600">
                      24/7 emergency roadside assistance available for urgent situations
                    </p>
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
