import HeroSection from "./components/home/hero";
import CategoriesSection from "./components/home/categories";
import ProductsSection from "./components/home/products";
import { getAllcategories } from "../services/category-service";
import { getAllProducts } from "../services/product-service";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getAllcategories(),
    getAllProducts()
  ])
  return (
    <main>
      <HeroSection />
      <CategoriesSection categories={categories} />
      <ProductsSection products={products}/>
    </main>
  );
}
