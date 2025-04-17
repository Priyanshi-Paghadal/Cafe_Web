import Header from "@/components/header"
import Hero from "@/components/hero"
import Menu from "@/components/menu"
import Testimonials from "@/components/testimonials"
import Gallery from "@/components/gallery"
import BookTable from "@/components/book-table"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Menu />
      <Gallery />
      <Testimonials />
      <BookTable />
      <Footer />
    </main>
  )
}
