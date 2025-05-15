import Layout from "./components/Layout/Layout";
import HeroSection from "./components/Home/Hero";
import FeaturesSection from "./components/Home/Features";
import RegistrationForm from "./components/Registration/RegistrationForm";
import AboutSection from "./components/Home/About";

function App() {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <section id="registration" className="py-16">
        <div className="container mx-auto px-4">
          {/* <h2 className="text-center mb-12 text-3xl font-bold text-primary-dark relative">
            Student Registration
          </h2> */}
          <RegistrationForm />
        </div>
      </section>
      <AboutSection />
    </Layout>
  );
}

export default App;
