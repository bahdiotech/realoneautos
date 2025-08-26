import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Essential Car Maintenance Tips for Lagos Traffic",
      excerpt: "Learn how to keep your vehicle running smoothly in Lagos's challenging driving conditions, from frequent stops to heavy traffic.",
      author: "Emeka Johnson",
      date: "January 10, 2025",
      readTime: "5 min read",
      category: "Maintenance",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400",
      featured: true
    },
    {
      id: 2,
      title: "Why Your Car Battery Dies Faster in Lagos Heat",
      excerpt: "Understanding how Nigeria's tropical climate affects your car battery and what you can do to extend its lifespan.",
      author: "Funmi Adebayo",
      date: "January 8, 2025",
      readTime: "4 min read",
      category: "Battery Care",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"
    },
    {
      id: 3,
      title: "AC Maintenance Guide for Nigerian Weather",
      excerpt: "Keep your car's air conditioning system running efficiently through Lagos's hottest months with these expert tips.",
      author: "Abdul Rahman",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "AC Service",
      image: "https://images.unsplash.com/photo-1571974599782-87624638275c?w=400"
    },
    {
      id: 4,
      title: "Signs Your Brakes Need Attention in Stop-and-Go Traffic",
      excerpt: "Lagos traffic puts extra strain on your brakes. Learn the warning signs that indicate it's time for brake service.",
      author: "Chidi Okonkwo",
      date: "January 3, 2025",
      readTime: "4 min read",
      category: "Brake Care",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400"
    },
    {
      id: 5,
      title: "Emergency Car Kit Every Lagos Driver Should Have",
      excerpt: "Be prepared for roadside emergencies with this comprehensive guide to essential items for your car emergency kit.",
      author: "Biodun Alabi",
      date: "December 28, 2024",
      readTime: "7 min read",
      category: "Safety",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400"
    },
    {
      id: 6,
      title: "When to Use Premium vs Regular Oil in Nigeria",
      excerpt: "Making the right choice between oil types for your vehicle based on driving conditions and climate in Nigeria.",
      author: "Tolu Martins",
      date: "December 25, 2024",
      readTime: "5 min read",
      category: "Oil Changes",
      image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400"
    }
  ]

  const categories = ["All", "Maintenance", "Battery Care", "AC Service", "Brake Care", "Safety", "Oil Changes"]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Realone Auto Blog</h1>
            <p className="text-xl text-gray-300">
              Expert automotive tips, maintenance guides, and insights for Lagos drivers
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={index === 0 ? "bg-red-600 hover:bg-red-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">

            {/* Featured Post */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <Badge className="mb-3">{blogPosts[0].category}</Badge>
                    <h3 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h3>
                    <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{blogPosts[0].author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{blogPosts[0].date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                    </div>
                    <Button className="bg-red-600 hover:bg-red-700">
                      Read Full Article
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Recent Posts */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Recent Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.slice(1).map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-3 left-3">{post.category}</Badge>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <Card className="mt-16 bg-gradient-to-r from-red-50 to-red-100">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="text-gray-600 mb-6">
                  Get the latest automotive tips and maintenance guides delivered to your inbox
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <Button className="bg-red-600 hover:bg-red-700">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  )
}
