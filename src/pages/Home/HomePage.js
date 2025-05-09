import { useTitle } from "../../hooks/useTitle";
import { Hero } from "./Home-components/Hero";
import { FeaturedProducts } from "./Home-components/FeaturedProduct";
import { Testimonials } from "./Home-components/Testimonials";
import { Faq } from "./Home-components/Faq";

export const HomePage = () => {

  useTitle("Codebook(HomePage) - React App");
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  )
}


