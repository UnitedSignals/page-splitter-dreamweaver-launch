
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { CalendarCheck, Map, Clock, Users } from "lucide-react";

const Landing3 = () => {
  const { toast } = useToast();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Event date - 30 days in the future
  const eventDate = new Date();
  eventDate.setDate(eventDate.getDate() + 30);
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(eventDate) - +new Date();
      let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      
      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      
      setTimeLeft(newTimeLeft);
    };
    
    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    
    return () => clearInterval(timer);
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Anmeldung erfolgreich!",
      description: "Sie erhalten in Kürze eine Bestätigung per E-Mail.",
    });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-emerald-600">TechConf 2025</div>
          <nav>
            <Link to="/" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
              ← Zurück zur Übersicht
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-16 md:py-24 bg-emerald-600 text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Die größte Tech-Konferenz des Jahres
                </h1>
                <p className="text-xl text-emerald-100 mb-8">
                  Verpassen Sie nicht die Gelegenheit, von den führenden Experten der Branche zu lernen
                  und wertvolle Kontakte zu knüpfen.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center">
                    <CalendarCheck className="h-5 w-5 mr-2" />
                    <span>{eventDate.toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center">
                    <Map className="h-5 w-5 mr-2" />
                    <span>Berlin, Deutschland</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>9:00 - 18:00 Uhr</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    <span>500+ Teilnehmer</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white text-gray-800 rounded-lg shadow-xl p-8">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold">Countdown zum Event</h2>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-center">
                    {[
                      { value: timeLeft.days, label: "Tage" },
                      { value: timeLeft.hours, label: "Stunden" },
                      { value: timeLeft.minutes, label: "Minuten" },
                      { value: timeLeft.seconds, label: "Sekunden" }
                    ].map((item, index) => (
                      <div key={index} className="bg-emerald-50 p-3 rounded-lg">
                        <div className="text-3xl font-bold text-emerald-600">{item.value}</div>
                        <div className="text-xs text-gray-500">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Hauptredner</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Dr. Anna Schmidt", role: "KI-Expertin", company: "Future Labs" },
                { name: "Michael Weber", role: "Blockchain-Spezialist", company: "CryptoTech" },
                { name: "Julia Müller", role: "UX-Designerin", company: "Design Solutions" },
                { name: "Thomas Klein", role: "Cloud-Architekt", company: "CloudScale" }
              ].map((speaker, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 bg-emerald-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-emerald-500 text-3xl">{speaker.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold">{speaker.name}</h3>
                  <p className="text-emerald-600">{speaker.role}</p>
                  <p className="text-gray-500">{speaker.company}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Jetzt anmelden</h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Vorname</label>
                      <Input id="firstName" placeholder="Max" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Nachname</label>
                      <Input id="lastName" placeholder="Mustermann" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                      <Input id="email" type="email" placeholder="max.mustermann@example.com" required />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Unternehmen</label>
                      <Input id="company" placeholder="Musterfirma GmbH" />
                    </div>
                  </div>
                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Platz reservieren
                  </Button>
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    Die Anzahl der Plätze ist begrenzt. Sichern Sie sich jetzt Ihre Teilnahme!
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Häufig gestellte Fragen</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "Sind die Aufzeichnungen der Vorträge verfügbar?",
                    answer: "Ja, alle Teilnehmer erhalten Zugang zu den Aufzeichnungen nach der Konferenz."
                  },
                  {
                    question: "Gibt es Networking-Möglichkeiten?",
                    answer: "Absolut! Wir haben spezielle Networking-Sessions und eine Abendveranstaltung geplant."
                  },
                  {
                    question: "Welche Zahlungsmethoden werden akzeptiert?",
                    answer: "Wir akzeptieren Kreditkarten, PayPal und Überweisung."
                  },
                  {
                    question: "Kann ich meine Buchung stornieren?",
                    answer: "Stornierungen sind bis zu 14 Tage vor der Veranstaltung mit voller Rückerstattung möglich."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold mb-4">TechConf 2025</div>
              <p className="text-gray-400">
                Die führende Technologiekonferenz in Deutschland
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Programm</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Veranstaltungsort</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Kontakt</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} TechConf. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing3;
