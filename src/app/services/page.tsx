"use client"
import { useState } from "react"
import {
  Wrench,
  Gauge,
  Cog,
  Car,
  Thermometer,
  Lightbulb,
  Settings,
  Zap,
  CircleDot,
  Droplet,
  Wind,
  Navigation
} from "lucide-react"
import Link from "next/link"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatNairaBasic, servicePrices } from "@/lib/currency"

const serviceCategories = [
  {
    title: "Brakes and Traction Control",
    icon: <CircleDot className="h-6 w-6" />,
    services: [
      "Backing Plate Replacement",
      "Parking Brake Cable Replacement",
      "Parking Brake Switch Replacement",
      "Brake Master Cylinder Replacement",
      "Brake Safety Inspection",
      "Check Brake Fluid Level",
      "Brake Caliper Replacement",
      "Bleed Brakes",
      "Brake Fluid Flush",
      "Brake Booster Unit Replacement",
      "Brake Pads Replacement",
      "Brake Drum Replacement",
      "Brake Shoes Replacement",
      "Brake Pedal Linkage Lubrication",
      "Brake Adjustment",
      "Brake Rotor Replacement",
      "Brake Line Replacement"
    ]
  },
  {
    title: "Diagnostic",
    icon: <Gauge className="h-6 w-6" />,
    services: [
      "Check Engine Light",
      "Car Won't Start",
      "Car Running Rough",
      "Fluids Are Leaking",
      "Warning Light",
      "Diagnostic",
      "Used Car Inspection"
    ]
  },
  {
    title: "Engine, Cooling, Exhaust",
    icon: <Cog className="h-6 w-6" />,
    services: [
      "Front Pipe Replacement",
      "Fan Shroud Assembly Replacement",
      "Idle Control Valve Replacement",
      "Fan Shroud Replacement",
      "Distributor Replacement",
      "EGR Valve Replacement",
      "Ignition Wire Set Replacement",
      "Cooling System Drain and Fill",
      "Oil Pan Gasket Replacement",
      "Intake Manifold Gasket Replacement",
      "Intake Camshaft Position Sensor Replacement",
      "Freeze Plug Replacement",
      "Exhaust Manifold Gasket Replacement",
      "Exhaust Camshaft Position Sensor Replacement",
      "Tail Pipe Replacement",
      "Carburetor Replacement",
      "Exhaust System Replacement",
      "Manual Transmission Oil Level Check",
      "Check Engine Oil Level",
      "Engine Oil and Filter Change",
      "Engine Mount Replacement",
      "Engine Coolant Temperature Sensor Replacement",
      "Engine Oil Pressure Sensor Switch Replacement",
      "Expansion Tank Replacement",
      "Harmonic Balancer Replacement",
      "Serpentine Belt Replacement",
      "Drive Belt Replacement",
      "Drive Belt Tensioner Replacement",
      "Distributor Cap Replacement",
      "Cooling Fan Replacement",
      "Radiator Replacement",
      "Radiator Fan Assembly Replacement",
      "Radiator Fan Motor Replacement",
      "Radiator Hose Replacement",
      "Thermostat Replacement",
      "Engine Tune-up",
      "Water Pump Replacement",
      "Valve Cover Gasket Replacement",
      "Timing Belt Replacement",
      "Emissions Failure Repair",
      "Crankshaft Position Sensor Replacement",
      "Coolant Drain and Fill",
      "Catalytic Converter Replacement",
      "Camshaft Position Sensor Replacement"
    ]
  },
  {
    title: "External Vehicle Parts",
    icon: <Car className="h-6 w-6" />,
    services: [
      "Antenna Mast Replacement",
      "Mirror Glass Replacement",
      "Door Lock Replacement",
      "Headlight Door Replacement",
      "Header Panel Replacement",
      "License Plate Bracket Replacement",
      "Emblem Replacement",
      "Trunk Strut Replacement",
      "Grille Insert Replacement",
      "Fuel Tank Cap Replacement",
      "Hood Strut Replacement",
      "Splash Guard Backing Plate Replacement",
      "Rear Lift Gate Locking Mechanism",
      "Rear Distance Sensor Replacement",
      "Door Weather Stripping Replacement",
      "Power Seat Switch Replacement",
      "Energy Absorber Replacement"
    ]
  },
  {
    title: "Heating and Air Conditioning",
    icon: <Thermometer className="h-6 w-6" />,
    services: [
      "Blower Motor Resistor Replacement",
      "Heater Core Replacement",
      "Cabin Air Filter Replacement",
      "Heater and A/C Blower Motor",
      "A/C Recharge",
      "A/C Compressor Replacement",
      "A/C Condenser Replacement",
      "Defroster Grid Repair",
      "A/C Line or Hose Replacement",
      "Heater Core Hoses Replacement",
      "HVAC Electronic Control Module Replacement",
      "HVAC Blower Motor Resistor Replacement",
      "HVAC Blower Motor Replacement",
      "HVAC Blend Door Actuator Replacement",
      "A/C Evacuate and Recharge"
    ]
  },
  {
    title: "Lighting and Horns",
    icon: <Lightbulb className="h-6 w-6" />,
    services: [
      "Turn Signal Switch Replacement",
      "Turn Signal Bulb Replacement",
      "Brake Light Bulb Replacement",
      "Headlight Bulb Replacement",
      "Fog Light Assembly Replacement",
      "Corner Light Bulb Replacement",
      "Side Marker Light Assembly Replacement",
      "Turn Signal Light Assembly Replacement",
      "Headlight Assembly Replacement",
      "Park Light Assembly Replacement",
      "Headlight Cover",
      "Tail Light Bulb Replacement",
      "Tail Light Assembly Replacement",
      "Brake Light Switch Replacement",
      "Headlight Switch"
    ]
  },
  {
    title: "Maintenance",
    icon: <Settings className="h-6 w-6" />,
    services: [
      "Fuse Replacement",
      "Tire Rotation",
      "Scheduled Maintenance - 30K, 60K, 90K, etc."
    ]
  },
  {
    title: "Powertrain",
    icon: <Cog className="h-6 w-6" />,
    services: [
      "Throttle Body Replacement",
      "Throttle Position Sensor Replacement",
      "Oxygen Sensor Replacement",
      "Fuel Injector Replacement",
      "Fuel Filter Replacement",
      "Air Filter Replacement",
      "Mass Airflow Sensor/Meter Replacement",
      "Fuel Pressure Regulator Replacement",
      "Ignition Coil Replacement",
      "Spark Plugs Replacement"
    ]
  },
  {
    title: "Starting and Charging",
    icon: <Zap className="h-6 w-6" />,
    services: [
      "Ignition Switch Replacement",
      "Ignition Lock Cylinder Replacement",
      "Battery Replacement",
      "Battery Cable Replacement",
      "Battery Cable Battery Terminal End Service",
      "Alternator Belt Replacement",
      "Alternator Replacement",
      "Starter Replacement"
    ]
  },
  {
    title: "Steering and Suspension",
    icon: <Navigation className="h-6 w-6" />,
    services: [
      "Power Steering Hose Replacement",
      "Outer Tie Rod End Replacement",
      "Power Steering Pump Replacement",
      "Wheel Hub and Bearing Assembly Replacement",
      "Wheel Hub Assembly Replacement",
      "Control Arm Replacement",
      "Check Tire Pressure",
      "Check Power Steering Fluid",
      "Power Steering Fluid Replacement",
      "Wheel Bearing Replacement",
      "ABS Control Unit Replacement",
      "Wheel Cylinder Replacement",
      "Ball Joint Replacement",
      "Shock Absorber Replacement",
      "Strut Assembly Replacement"
    ]
  },
  {
    title: "Tires",
    icon: <CircleDot className="h-6 w-6" />,
    services: [
      "Flat Tire Repair",
      "New Tire Installation",
      "Tire Mount and Balance",
      "Tire TPMS Valves and Stems"
    ]
  },
  {
    title: "Transmission and Drivetrain",
    icon: <Settings className="h-6 w-6" />,
    services: [
      "Axle Assembly Replacement",
      "CV Joint Boot Replacement",
      "CV Joint Replacement",
      "CV Axle Assembly Replacement",
      "Driveshaft Replacement",
      "Transfer Case Fluid Replacement",
      "Transmission Fluid Change"
    ]
  },
  {
    title: "Wash and Detail",
    icon: <Droplet className="h-6 w-6" />,
    services: [
      "Car Wash",
      "Detailing"
    ]
  },
  {
    title: "Windows and Glass",
    icon: <Wind className="h-6 w-6" />,
    services: [
      "Window Regulator with Motor Replacement",
      "Window Belt Strip Replacement",
      "Power Window Switch Replacement"
    ]
  },
  {
    title: "Wiper and Washer System",
    icon: <Wind className="h-6 w-6" />,
    services: [
      "Windshield Wiper Motor Replacement",
      "Windshield Wiper Blades Replacement",
      "Windshield Washer Pump Replacement"
    ]
  },
  {
    title: "Other",
    icon: <Wrench className="h-6 w-6" />,
    services: [
      "Key and Locksmith",
      "Towing and Roadside Assistance"
    ]
  }
]

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredCategories = serviceCategories.map(category => ({
    ...category,
    services: category.services.filter(service =>
      service.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category =>
    category.services.length > 0 ||
    category.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Realone Auto Services</h1>
          <p className="text-xl text-gray-200 mb-8">
            Comprehensive mobile mechanic services at your location
          </p>
          <div className="flex gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Get a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <input
            type="text"
            placeholder="Search for a service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-xl mx-auto block px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </section>

      {/* Services List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Accordion type="multiple" className="space-y-4">
            {filteredCategories.map((category, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border">
                <AccordionTrigger className="px-6 hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="text-orange-500">{category.icon}</div>
                    <span className="text-lg font-semibold">{category.title}</span>
                    <Badge variant="secondary" className="ml-auto mr-4">
                      {category.services.length} services
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 pt-4">
                    {category.services.map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        href={`/services/${service.toLowerCase().replace(/ /g, '-')}`}
                        className="text-gray-700 hover:text-orange-500 transition-colors py-2 px-3 rounded hover:bg-orange-50"
                      >
                        {service}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Popular Services Pricing */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Service Pricing in Lagos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Thermometer className="h-5 w-5 text-orange-600" />
                  Oil Change
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Standard Oil:</span>
                    <span className="font-semibold">{formatNairaBasic(servicePrices.oilChange.standard)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Synthetic Oil:</span>
                    <span className="font-semibold">{formatNairaBasic(servicePrices.oilChange.synthetic)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Premium Oil:</span>
                    <span className="font-semibold">{formatNairaBasic(servicePrices.oilChange.premium)}</span>
                  </div>
                </div>
                <Badge className="mt-3">Includes filter</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-orange-600" />
                  Battery Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Basic Battery:</span>
                    <span className="font-semibold">{formatNairaBasic(servicePrices.battery.basic)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Premium Battery:</span>
                    <span className="font-semibold">{formatNairaBasic(servicePrices.battery.premium)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Deluxe Battery:</span>
                    <span className="font-semibold">{formatNairaBasic(servicePrices.battery.deluxe)}</span>
                  </div>
                </div>
                <Badge className="mt-3">Free installation</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CircleDot className="h-5 w-5 text-orange-600" />
                  Brake Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Brake Pads:</span>
                    <span className="font-semibold">{formatNairaBasic(servicePrices.brakes.pads)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Brake Discs:</span>
                    <span className="font-semibold">{formatNairaBasic(servicePrices.brakes.discs)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Full Service:</span>
                    <span className="font-semibold">{formatNairaBasic(servicePrices.brakes.fullService)}</span>
                  </div>
                </div>
                <Badge className="mt-3">Per axle</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wind className="h-5 w-5 text-orange-600" />
                  AC Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Gas Refill:</span>
                    <span className="font-semibold">{formatNairaBasic(servicePrices.ac.gasRefill)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>AC Service:</span>
                    <span className="font-semibold">{formatNairaBasic(servicePrices.ac.service)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Compressor:</span>
                    <span className="font-semibold">{formatNairaBasic(servicePrices.ac.compressor)}</span>
                  </div>
                </div>
                <Badge className="mt-3">Essential for Lagos</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gauge className="h-5 w-5 text-orange-600" />
                  Diagnostics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Basic Check:</span>
                    <span className="font-semibold">{formatNairaBasic(servicePrices.diagnostics.basic)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Comprehensive:</span>
                    <span className="font-semibold">{formatNairaBasic(servicePrices.diagnostics.comprehensive)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Electrical:</span>
                    <span className="font-semibold">{formatNairaBasic(servicePrices.diagnostics.electrical)}</span>
                  </div>
                </div>
                <Badge className="mt-3">Computer scan</Badge>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Navigation className="h-5 w-5 text-red-600" />
                  Emergency Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Call Out Fee:</span>
                    <span className="font-semibold">{formatNairaBasic(servicePrices.emergency.callout)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Jump Start:</span>
                    <span className="font-semibold">{formatNairaBasic(servicePrices.emergency.jumpStart)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Towing (per km):</span>
                    <span className="font-semibold">{formatNairaBasic(servicePrices.emergency.towing)}</span>
                  </div>
                </div>
                <Badge variant="destructive" className="mt-3">24/7 Available</Badge>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              *All prices are in Nigerian Naira and may vary based on vehicle make/model and parts availability
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8">
            Our certified mechanics can handle almost any auto repair or maintenance service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Call Us: 08092735348
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Schedule a Diagnostic
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}