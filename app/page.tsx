import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutMe from "@/components/AboutMe";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Mahmood Fazile — UI/UX Designer",
  description:
    "Portfolio of Mahmood Fazile, UI/UX Designer specializing in App Design, Web Design, and more.",
};

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
