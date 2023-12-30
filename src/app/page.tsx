import Hero from "@/components/Hero/Hero";
import Catalog from "@/components/ProductCatalog/ProductCatalog";
import {ShoppingCartProvider} from "@/context/ShoppingCartContext";
export default function Home() {
  return (
   <main>
   <ShoppingCartProvider>
    <Hero/>
    <Catalog/>
    </ShoppingCartProvider>
   </main>
  )
}
