import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Catalog from "@/components/ProductCatalog/ProductCatalog";
export default function Home() {
  return (
   <main>
    <Navbar/>
    <Hero/>
    <Catalog/>
   </main>
  )
}
