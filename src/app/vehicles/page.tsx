import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Car, Truck, Star } from "lucide-react"

export default function VehiclesPage() {
  const popularBrands = [
    {
      name: "Toyota",
      models: ["Camry", "Corolla", "RAV4", "Highlander", "Sienna", "Prius"],
      popularity: "Most Popular",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=300"
    },
    {
      name: "Honda",
      models: ["Accord", "Civic", "CR-V", "Pilot", "Odyssey", "Fit"],
      popularity: "Very Popular",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=300"
    },
    {
      name: "Mercedes-Benz",
      models: ["C-Class", "E-Class", "S-Class", "GLE", "GLC", "A-Class"],
      popularity: "Luxury",
      image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=300"
    },
    {
      name: "BMW",
      models: ["3 Series", "5 Series", "X3", "X5", "X1", "7 Series"],
      popularity: "Luxury",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300"
    },
    {
      name: "Hyundai",
      models: ["Elantra", "Sonata", "Santa Fe", "Tucson", "Accent", "Genesis"],
      popularity: "Popular",
      image: "https://images.unsplash.com/photo-1564419434740-8cbb97a07e5b?w=300"
    },
    {
      name: "Kia",
      models: ["Optima", "Sorento", "Sportage", "Rio", "Soul", "Stinger"],
      popularity: "Popular",
      image: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=300"
    }
  ]

  const allBrands = [
    "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Dodge",
    "Ford", "Genesis", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Jeep",
    "Kia", "Land Rover", "Lexus", "Lincoln", "Mazda", "Mercedes-Benz", "MINI",
    "Mitsubishi", "Nissan", "Peugeot", "Porsche", "Ram", "Subaru", "Tesla",
    "Toyota", "Volkswagen", "Volvo"
  ]

  const vehicleTypes = [
    {
      type: "Sedans",
      icon: <Car className="h-8 w-8" />,
      description: "Compact, mid-size, and full-size sedans",
      examples: ["Toyota Camry", "Honda Accord", "Mercedes C-Class"]
    },
    {
      type: "SUVs",
      icon: <Truck className="h-8 w-8" />,
      description: "Compact, mid-size, and full-size SUVs",
      examples: ["Toyota RAV4", "Honda CR-V", "BMW X5"]
    },
    {
      type: "Trucks",
      icon: <Truck className="h-8 w-8" />,
      description: "Light-duty and heavy-duty pickup trucks",
      examples: ["Ford F-150", "Chevrolet Silverado", "Ram 1500"]
    },
    {
      type: "Luxury Vehicles",
      icon: <Star className="h-8 w-8" />,
      description: "Premium and luxury vehicle brands",
      examples: ["Mercedes-Benz", "BMW", "Audi", "Lexus"]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Supported Vehicles</h1>
            <p className="text-xl text-gray-300 mb-6">
              Professional mobile auto repair for all major car brands and models
            </p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              30+ Brands Supported
            </Badge>
          </div>
        </div>
      </section>

      {/* Popular Brands */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Most Serviced Brands in Lagos</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our mechanics are specially trained and equipped to work on these popular vehicle brands
                commonly found on Lagos roads.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {popularBrands.map((brand, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge
                      className={`absolute top-3 right-3 ${
                        brand.popularity === 'Most Popular' ? 'bg-green-600' :
                        brand.popularity === 'Luxury' ? 'bg-purple-600' : 'bg-blue-600'
                      }`}
                    >
                      {brand.popularity}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-3">{brand.name}</h3>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600 font-medium">Popular Models:</p>
                      <div className="flex flex-wrap gap-1">
                        {brand.models.map((model, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {model}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Vehicle Types We Service</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From compact cars to luxury SUVs, our mobile mechanics are equipped to handle
                all types of vehicles with professional expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vehicleTypes.map((vehicle, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-red-100 rounded-full w-fit">
                      {vehicle.icon}
                    </div>
                    <CardTitle>{vehicle.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">{vehicle.description}</p>
                    <div className="space-y-1">
                      {vehicle.examples.map((example, idx) => (
                        <p key={idx} className="text-xs text-gray-500">• {example}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* All Supported Brands */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">All Supported Brands</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Complete list of vehicle brands our certified mechanics can service at your location.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {allBrands.map((brand, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{brand}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Specialty Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Luxury Vehicle Specialists</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Our certified technicians are specially trained to work on luxury vehicles including
                    Mercedes-Benz, BMW, Audi, and Lexus with manufacturer-approved parts and procedures.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Factory-trained technicians</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>OEM and aftermarket parts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Advanced diagnostic tools</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Don't See Your Vehicle?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Even if your vehicle brand or model isn't listed, our experienced mechanics
                    can likely help. We work on many specialty and classic vehicles too.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-red-600 hover:bg-red-700">
                      Call to Confirm: 08092735348
                    </Button>
                    <Button variant="outline" className="w-full">
                      WhatsApp: 07010009558
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
