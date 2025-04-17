"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  image: string
  category: "coffee" | "breakfast" | "lunch" | "dessert"
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>("coffee")

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Espresso",
      description: "Strong and concentrated coffee served in a small cup",
      price: "$3.50",
      image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=2070",
      category: "coffee",
    },
    {
      id: 2,
      name: "Cappuccino",
      description: "Espresso with steamed milk and a layer of foamed milk",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=2070",
      category: "coffee",
    },
    {
      id: 3,
      name: "Latte",
      description: "Espresso with a lot of steamed milk and a little foam",
      price: "$4.75",
      image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=2070",
      category: "coffee",
    },
    {
      id: 4,
      name: "Mocha",
      description: "Espresso with chocolate, steamed milk, and whipped cream",
      price: "$5.25",
      image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=2070",
      category: "coffee",
    },
    {
      id: 5,
      name: "Avocado Toast",
      description: "Sourdough bread with avocado, cherry tomatoes, and microgreens",
      price: "$9.50",
      image: "https://images.unsplash.com/photo-1603046891744-76e6481cf539?q=80&w=2087",
      category: "breakfast",
    },
    {
      id: 6,
      name: "Eggs Benedict",
      description: "English muffin with poached eggs, ham, and hollandaise sauce",
      price: "$12.75",
      image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=2036",
      category: "breakfast",
    },
    {
      id: 7,
      name: "Pancakes",
      description: "Fluffy pancakes with maple syrup and fresh berries",
      price: "$10.50",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=2070",
      category: "breakfast",
    },
    {
      id: 8,
      name: "Chicken Sandwich",
      description: "Grilled chicken with avocado, bacon, and aioli on ciabatta",
      price: "$13.50",
      image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=2070",
      category: "lunch",
    },
    {
      id: 9,
      name: "Caesar Salad",
      description: "Romaine lettuce with parmesan, croutons, and Caesar dressing",
      price: "$11.25",
      image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2070",
      category: "lunch",
    },
    {
      id: 10,
      name: "Pasta Primavera",
      description: "Linguine with seasonal vegetables in a light cream sauce",
      price: "$14.75",
      image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070",
      category: "lunch",
    },
    {
      id: 11,
      name: "Tiramisu",
      description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
      price: "$7.50",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=2071",
      category: "dessert",
    },
    {
      id: 12,
      name: "Chocolate Cake",
      description: "Rich chocolate cake with ganache and fresh berries",
      price: "$8.25",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2089",
      category: "dessert",
    },
  ]

  const filteredItems = menuItems.filter((item) => item.category === activeCategory)

  const categories = [
    { id: "coffee", name: "Coffee" },
    { id: "breakfast", name: "Breakfast" },
    { id: "lunch", name: "Lunch" },
    { id: "dessert", name: "Dessert" },
  ]

  return (
    <section id="menu" className="section-padding bg-cream">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted menu featuring the finest coffee and delicious food made with fresh, locally
            sourced ingredients.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="menu-card group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-heading font-bold">{item.name}</h3>
                <span className="text-primary font-bold">{item.price}</span>
              </div>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">View Full Menu</button>
        </div>
      </div>
    </section>
  )
}
