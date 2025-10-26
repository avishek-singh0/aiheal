import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/pages/HomePage";
import { ProductPage } from "./components/pages/ProductPage";
import { RDPage } from "./components/pages/RDPage";
import { AboutPage } from "./components/pages/AboutPage";
import { BlogsPage } from "./components/pages/BlogsPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <HomePage />;
      case "Product":
        return <ProductPage />;
      case "R&D":
        return <RDPage />;
      case "About":
        return <AboutPage />;
      case "Blogs":
        return <BlogsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}