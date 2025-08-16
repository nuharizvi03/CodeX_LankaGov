import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ServiceCategory from "./components/ServiceCategory";
import servicesData from "./data/services";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-2">All Services</h1>
        <p className="text-gray-600 mb-6">
          Explore all government services available in Sri Lanka.
        </p>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {servicesData.map((section, idx) => (
          <ServiceCategory
            key={idx}
            category={section.category}
            services={section.services}
            searchTerm={searchTerm}
          />
        ))}
      </main>
    </div>
  );
}
