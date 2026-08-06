import CategoryList from "@/components/products/CategoryList";
import ProductHero from "@/components/products/ProductHero";

export default function page() {
  return (
    <div className="md:pt-48">
      <ProductHero/>
      <CategoryList/>
    </div>
  )
}
