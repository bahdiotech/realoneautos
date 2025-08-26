import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Terms of Use</h1>
            <p className="text-xl text-gray-300">
              Last updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">

            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  By accessing and using Realone Auto's services, you accept and agree to be bound by the terms and provision of this agreement.
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Service Description</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Realone Auto provides mobile automotive repair and maintenance services in Lagos, Nigeria. Our certified mechanics
                  come to your location to perform various automotive services including but not limited to:
                </p>
                <ul className="list-disc pl-6 mt-4">
                  <li>Oil changes and fluid services</li>
                  <li>Battery testing and replacement</li>
                  <li>Brake system repair and maintenance</li>
                  <li>Diagnostic services</li>
                  <li>AC system repair and maintenance</li>
                  <li>Emergency roadside assistance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Booking and Payment</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  All services must be booked in advance through our website, phone, or WhatsApp. Payment is due upon completion
                  of services unless otherwise arranged. We accept cash, bank transfers, and mobile payments.
                </p>
                <p className="mt-4">
                  Prices quoted are estimates and may vary based on actual parts required and labor needed. Final pricing will
                  be confirmed before work begins.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Service Locations</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Services are available across Lagos State. Service areas include but are not limited to Victoria Island,
                  Ikoyi, Lekki, Ikeja, Surulere, Yaba, and surrounding areas. Additional charges may apply for locations
                  outside our standard service area.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Warranty and Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Realone Auto provides a 12-month/12,000-mile warranty on parts and labor for covered services. This warranty
                  does not cover normal wear and tear, misuse, or damage caused by factors beyond our control.
                </p>
                <p className="mt-4">
                  Our liability is limited to the cost of the service provided. We are not responsible for consequential
                  damages or losses.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Cancellation Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Services may be cancelled up to 2 hours before the scheduled appointment without charge. Cancellations
                  made less than 2 hours before the appointment may be subject to a cancellation fee.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Privacy and Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  We respect your privacy and are committed to protecting your personal information. Please refer to our
                  Privacy Policy for detailed information about how we collect, use, and protect your data.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Modifications to Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  Realone Auto reserves the right to modify these terms at any time. Changes will be effective immediately
                  upon posting on our website. Continued use of our services constitutes acceptance of modified terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p>
                  If you have any questions about these Terms of Use, please contact us:
                </p>
                <div className="mt-4">
                  <p><strong>Phone:</strong> 08092735348</p>
                  <p><strong>WhatsApp:</strong> 07010009558</p>
                  <p><strong>Email:</strong> Yemiiope@gmail.com</p>
                  <p><strong>Address:</strong> Plot 4 Ebute Metta, Costain round about Lagos</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  )
}
