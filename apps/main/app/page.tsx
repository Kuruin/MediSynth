import { FAQ } from "../components/faq";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FAQ />
      <Footer />
    </div>
  );
}
