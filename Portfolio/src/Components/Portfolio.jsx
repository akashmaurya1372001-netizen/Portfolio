import ProjectCard from "./Project";
import password from "../assets/password.png";
import currency from "../assets/currency.png";
function Portfolio() {
  return (
    <section id="projects" className="px-6 bg-green-100 rounded-3xl m-5 py-6">
        <h2 className="font-bold text-4xl text-center py-11"> My Projects</h2>
    <div className="flex gap-6 justify-center">
        
      <ProjectCard
        title="Currency Converter"
        description="A fast and accurate tool to convert currencies in real-time using up-to-date exchange rates."
        image={currency}
        tech={["React", "Node.js", "API", "Tailwind", "vite"]}
        liveLink="https://currency-converter-pink-chi.vercel.app/"
        githubLink="https://github.com/akashmaurya1372001-netizen/CurrencyConverter"
        featured={false}
      />
      <ProjectCard
        title="Password Generator"
        description=" Generate random passwords to protect your accounts and data."
        image={password}
        tech={["React", "Tailwind", "Vite"]}
        liveLink="https://password-generator-eta-lemon.vercel.app/"
        githubLink="https://github.com/akashmaurya1372001-netizen/PasswordGenerator"
      />
    </div>
    </section>
  );
}

export default Portfolio;
