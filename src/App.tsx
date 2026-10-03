import "./index.css";
import { Header } from "./components/header";
import {CategoriesSection} from './components/section'
import{BannerSection} from './components/banner'
import { ProductSection } from "./components/product";
import { Featured } from "./components/featured";
import { About } from "./components/about";
import { Utensils } from "./components/utensils";
import { Footer } from "./components/footer";
import{ Posts } from "./components/posts"

export function App() {
  return(
    <main>
      <BannerSection />
      <Header /> 
      <CategoriesSection />
      <ProductSection />
      <Featured />
      <Posts />
      <About />
      <Utensils />
      <Footer />
    </main>
  )
}