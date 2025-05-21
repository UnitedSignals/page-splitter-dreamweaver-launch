
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";

const Landing2 = () => {
  const pricingPlans = [
    {
      title: "Basic",
      price: "49",
      description: "Ideal für kleine Teams und Start-ups",
      features: [
        "5 Projekte",
        "2 Team-Mitglieder",
        "5GB Speicher",
        "E-Mail Support"
      ],
      cta: "Kostenlos testen"
    },
    {
      title: "Professional",
      price: "99",
      description: "Perfekt für wachsende Unternehmen",
      features: [
        "20 Projekte",
        "10 Team-Mitglieder",
        "50GB Speicher",
        "Prioritäts-Support",
        "Erweiterte Analytics"
      ],
      cta: "Jetzt buchen",
      highlighted: true
    },
    {
      title: "Enterprise",
      price: "249",
      description: "Für große Organisationen",
      features: [
        "Unbegrenzte Projekte",
        "Unbegrenzte Team-Mitglieder",
        "500GB Speicher",
        "24/7 Premium Support",
        "Erweiterte Analytics",
        "Dedizierter Account Manager"
      ],
      cta: "Kontakt aufnehmen"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-600">ConsultPro</div>
          <nav>
            <Link to="/" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
              ← Zurück zur Übersicht
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
                Professionelle Beratungsdienstleistungen für Ihr Unternehmen
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Wir bieten maßgeschneiderte Beratungslösungen, die Ihnen helfen, 
                Ihre Geschäftsziele zu erreichen und nachhaltiges Wachstum zu erzielen.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
                Termin vereinbaren
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Unsere Dienstleistungen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Strategieberatung",
                  description: "Entwicklung umfassender Geschäftsstrategien zur Steigerung Ihrer Wettbewerbsfähigkeit."
                },
                {
                  title: "Prozessoptimierung",
                  description: "Identifikation und Optimierung von ineffizienten Geschäftsprozessen."
                },
                {
                  title: "Digitale Transformation",
                  description: "Begleitung Ihres Unternehmens auf dem Weg in die digitale Zukunft."
                },
                {
                  title: "Change Management",
                  description: "Erfolgreiches Steuern von Veränderungsprozessen in Ihrem Unternehmen."
                },
                {
                  title: "Schulungen & Workshops",
                  description: "Maßgeschneiderte Trainings für Ihre Mitarbeiter zu relevanten Themen."
                },
                {
                  title: "Datenanalyse",
                  description: "Nutzen Sie die Kraft Ihrer Daten für fundierte Geschäftsentscheidungen."
                }
              ].map((service, index) => (
                <div key={index} className="bg-purple-50 rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-purple-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Unsere Preispläne</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Transparente Preisgestaltung ohne versteckte Kosten. Wählen Sie den Plan, der am besten zu Ihren Bedürfnissen passt.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`${
                    plan.highlighted 
                      ? 'border-purple-400 shadow-lg relative' 
                      : 'border-gray-200'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">
                      Empfohlen
                    </div>
                  )}
                  <CardHeader className={`text-center ${plan.highlighted ? 'pt-8' : 'pt-6'}`}>
                    <CardTitle className="text-2xl font-bold">{plan.title}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price} €</span>
                      <span className="text-gray-500">/Monat</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className={`w-full ${
                        plan.highlighted 
                          ? 'bg-purple-600 hover:bg-purple-700' 
                          : 'bg-gray-800 hover:bg-gray-900'
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Bereit für den nächsten Schritt?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Vereinbaren Sie ein kostenloses Erstgespräch mit unseren Experten und 
              entdecken Sie, wie wir Ihnen helfen können.
            </p>
            <Button className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-3">
              Gespräch vereinbaren
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold mb-4">ConsultPro</div>
              <p className="text-gray-400">
                Ihr Partner für nachhaltige Unternehmensentwicklung
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Über uns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Kontakt</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Impressum</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} ConsultPro. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing2;
