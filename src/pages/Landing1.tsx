
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Landing1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">ProductX</div>
          <nav>
            <Link to="/" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
              ← Zurück zur Übersicht
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                  Revolutionieren Sie Ihren digitalen Workflow
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  ProductX bietet Ihnen innovative Lösungen für moderne Unternehmen. 
                  Steigern Sie Ihre Produktivität und optimieren Sie Ihre Arbeitsabläufe.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-6 py-3">
                    Demo anfordern
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-6 py-3">
                    Mehr erfahren
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white rounded-lg shadow-xl p-1 border border-gray-200">
                  <div className="aspect-video bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="text-6xl text-blue-500">ProductX</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Unsere Funktionen</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Einfache Integration",
                  description: "Nahtlose Einbindung in bestehende Systeme ohne technische Hürden."
                },
                {
                  title: "Datenanalyse",
                  description: "Umfassende Einblicke in Ihre Geschäftsprozesse durch intelligente Analysewerkzeuge."
                },
                {
                  title: "Automatisierung",
                  description: "Sparen Sie Zeit durch automatisierte Workflows und smarte Prozesse."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-blue-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Bereit für die nächste Stufe?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Starten Sie noch heute und erleben Sie den Unterschied mit ProductX.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3">
              Jetzt starten
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold mb-4">ProductX</div>
              <p className="text-gray-400">
                Die Zukunft der digitalen Arbeitsabläufe
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Über uns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Kontakt</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Datenschutz</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} ProductX. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing1;
