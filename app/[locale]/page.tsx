import { setRequestLocale } from "next-intl/server";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Fleet from "@/components/Fleet";
import UseCases from "@/components/UseCases";
import Safety from "@/components/Safety";
import Status from "@/components/Status";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Problem />
        <HowItWorks />
        <Fleet />
        <UseCases />
        <Safety />
        <Status />
        <About />
        <Contact />
      </main>
      <Footer locale={locale} />
    </>
  );
}
