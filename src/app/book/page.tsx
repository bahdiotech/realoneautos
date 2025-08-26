"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Car,
  Wrench,
  MapPin,
  Calendar,
  User,
  CreditCard,
  Check,
  ChevronRight,
  ChevronLeft,
  Phone,
  Mail,
  Clock
} from "lucide-react"

const steps = [
  { id: 1, name: "Vehicle", icon: <Car className="h-5 w-5" /> },
  { id: 2, name: "Services", icon: <Wrench className="h-5 w-5" /> },
  { id: 3, name: "Location", icon: <MapPin className="h-5 w-5" /> },
  { id: 4, name: "Schedule", icon: <Calendar className="h-5 w-5" /> },
  { id: 5, name: "Contact", icon: <User className="h-5 w-5" /> },
  { id: 6, name: "Payment", icon: <CreditCard className="h-5 w-5" /> },
  { id: 7, name: "Confirm", icon: <Check className="h-5 w-5" /> }
]

const commonServices = [
  { name: "Oil Change", time: "45 min" },
  { name: "Brake Pads Replacement", time: "2 hours" },
  { name: "Battery Replacement", time: "30 min" },
  { name: "Diagnostic Check", time: "1 hour" },
  { name: "Tire Rotation", time: "30 min" },
  { name: "Air Filter Replacement", time: "15 min" },
  { name: "Spark Plugs Replacement", time: "1 hour" },
  { name: "Coolant Flush", time: "45 min" }
]

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Vehicle info
    year: "",
    make: "",
    model: "",
    vin: "",
    mileage: "",
    // Services
    services: [] as string[],
    customIssue: "",
    // Location
    address: "",
    city: "",
    state: "",
    zipCode: "",
    locationType: "home",
    // Schedule
    date: "",
    time: "",
    // Contact
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // Payment
    paymentMethod: "card"
  })

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const toggleService = (serviceName: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceName)
        ? prev.services.filter(s => s !== serviceName)
        : [...prev.services, serviceName]
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}
              >
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                    step.id === currentStep
                      ? 'bg-orange-500 border-orange-500 text-white'
                      : step.id < currentStep
                      ? 'bg-green-500 border-green-500 text-white'
                      : 'bg-white border-gray-300 text-gray-500'
                  }`}
                >
                  {step.id < currentStep ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    step.icon
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      step.id < currentStep ? 'bg-green-500' : 'bg-gray-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold">{steps[currentStep - 1].name}</h2>
          </div>
        </div>

        {/* Form Content */}
        <Card>
          <CardContent className="p-6">
            {/* Step 1: Vehicle Information */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">Tell us about your vehicle</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="year">Year</Label>
                    <Select value={formData.year} onValueChange={(value) => setFormData({...formData, year: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({length: 30}, (_, i) => new Date().getFullYear() - i).map(year => (
                          <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="make">Make</Label>
                    <Input
                      id="make"
                      placeholder="e.g., Toyota"
                      value={formData.make}
                      onChange={(e) => setFormData({...formData, make: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="model">Model</Label>
                    <Input
                      id="model"
                      placeholder="e.g., Camry"
                      value={formData.model}
                      onChange={(e) => setFormData({...formData, model: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="vin">VIN (optional)</Label>
                    <Input
                      id="vin"
                      placeholder="17 characters"
                      value={formData.vin}
                      onChange={(e) => setFormData({...formData, vin: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="mileage">Current Mileage</Label>
                    <Input
                      id="mileage"
                      type="number"
                      placeholder="e.g., 50000"
                      value={formData.mileage}
                      onChange={(e) => setFormData({...formData, mileage: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Select Services */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">What services do you need?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {commonServices.map((service) => (
                    <div
                      key={service.name}
                      onClick={() => toggleService(service.name)}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        formData.services.includes(service.name)
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold">{service.name}</h4>
                          <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                            <Clock className="h-3 w-3" /> {service.time}
                          </p>
                        </div>
                        <div className="text-right">
                          {formData.services.includes(service.name) && (
                            <Check className="h-5 w-5 text-green-500 ml-auto" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <Label htmlFor="customIssue">Describe any other issues (optional)</Label>
                  <Textarea
                    id="customIssue"
                    placeholder="Tell us about any specific problems or services needed..."
                    value={formData.customIssue}
                    onChange={(e) => setFormData({...formData, customIssue: e.target.value})}
                    className="mt-2"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Location */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">Where should we come?</h3>
                <div>
                  <Label>Location Type</Label>
                  <div className="grid grid-cols-3 gap-4 mt-2">
                    {['home', 'office', 'other'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setFormData({...formData, locationType: type})}
                        className={`p-3 border rounded-lg capitalize ${
                          formData.locationType === type
                            ? 'border-orange-500 bg-orange-50'
                            : 'border-gray-200'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Street Address</Label>
                  <Input
                    id="address"
                    placeholder="123 Main St"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-1">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      placeholder="Seattle"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      placeholder="WA"
                      value={formData.state}
                      onChange={(e) => setFormData({...formData, state: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      placeholder="98101"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Schedule */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">When would you like service?</h3>
                <div>
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="time">Preferred Time</Label>
                  <Select value={formData.time} onValueChange={(value) => setFormData({...formData, time: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">Morning (8am - 12pm)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12pm - 5pm)</SelectItem>
                      <SelectItem value="evening">Evening (5pm - 8pm)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> We'll confirm the exact time window after reviewing your request.
                    Same-day service may be available for urgent repairs.
                  </p>
                </div>
              </div>
            )}

            {/* Step 5: Contact Information */}
            {currentStep === 5 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">Your contact information</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
            )}

            {/* Step 6: Payment Method */}
            {currentStep === 6 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                <div className="space-y-3">
                  {['card', 'cash', 'check'].map((method) => (
                    <label
                      key={method}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer ${
                        formData.paymentMethod === method
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200'
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method}
                        checked={formData.paymentMethod === method}
                        onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                        className="mr-3"
                      />
                      <span className="capitalize font-medium">
                        {method === 'card' ? 'Credit/Debit Card' : method}
                      </span>
                    </label>
                  ))}
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    Payment will be collected after service is completed. You'll receive a detailed invoice via email.
                  </p>
                </div>
              </div>
            )}

            {/* Step 7: Confirmation */}
            {currentStep === 7 && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold mb-4">Review and Confirm</h3>

                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Vehicle</h4>
                    <p className="text-gray-600">
                      {formData.year} {formData.make} {formData.model}
                    </p>
                    {formData.mileage && <p className="text-sm text-gray-500">Mileage: {formData.mileage}</p>}
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Services</h4>
                    {formData.services.map((service) => (
                      <Badge key={service} className="mr-2 mb-2">{service}</Badge>
                    ))}
                    {formData.customIssue && (
                      <p className="text-sm text-gray-600 mt-2">{formData.customIssue}</p>
                    )}
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Location & Schedule</h4>
                    <p className="text-gray-600">
                      {formData.address}, {formData.city}, {formData.state} {formData.zipCode}
                    </p>
                    <p className="text-gray-600 mt-1">
                      {formData.date} - {formData.time}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Contact</h4>
                    <p className="text-gray-600">
                      {formData.firstName} {formData.lastName}
                    </p>
                    <p className="text-gray-600">{formData.email}</p>
                    <p className="text-gray-600">{formData.phone}</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <p className="text-green-800">
                    <strong>What's Next:</strong> After you confirm, we'll review your request and send you a
                    detailed quote within 30 minutes. Our mechanic will arrive at your scheduled time.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>

              {currentStep < 7 ? (
                <Button
                  onClick={nextStep}
                  className="bg-orange-500 hover:bg-orange-600 text-white flex items-center gap-2"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
                >
                  <Check className="h-4 w-4" />
                  Confirm Booking
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="mt-8 text-center text-gray-600">
          <p>Need help? Call us at <a href="tel:1-800-REALONE" className="text-orange-500 font-semibold">1-800-REALONE</a></p>
          <p className="text-sm mt-1">Available 7 days a week</p>
        </div>
      </div>
    </div>
  )
}
