
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-900">Landing Pages Demo</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Diese Demo zeigt drei separate Landingpages, die unabhängig voneinander über GitHub Pages mit
            benutzerdefinierten Domains veröffentlicht werden können.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-blue-500 text-white rounded-t-lg">
              <CardTitle>Landing Page 1</CardTitle>
              <CardDescription className="text-blue-100">
                Produktvorstellung im modernen Design
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 pb-4">
              <p className="mb-6 text-gray-600">
                Eine elegante Landingpage für die Vorstellung eines digitalen Produkts mit klaren Call-to-Actions.
              </p>
              <Link to="/landing1">
                <Button className="w-full bg-blue-500 hover:bg-blue-600">Besuchen</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-purple-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-purple-500 text-white rounded-t-lg">
              <CardTitle>Landing Page 2</CardTitle>
              <CardDescription className="text-purple-100">
                Service-Präsentation mit Preistabellen
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 pb-4">
              <p className="mb-6 text-gray-600">
                Eine übersichtliche Landingpage zur Darstellung von Dienstleistungen mit Preisoptionen.
              </p>
              <Link to="/landing2">
                <Button className="w-full bg-purple-500 hover:bg-purple-600">Besuchen</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="bg-emerald-500 text-white rounded-t-lg">
              <CardTitle>Landing Page 3</CardTitle>
              <CardDescription className="text-emerald-100">
                Event-Anmeldung mit Countdown
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6 pb-4">
              <p className="mb-6 text-gray-600">
                Eine ansprechende Landingpage für Events mit Anmeldeformular und Countdown.
              </p>
              <Link to="/landing3">
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Besuchen</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Konfigurationshinweise</h2>
          <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
            <ol className="text-left space-y-4 text-gray-700">
              <li><span className="font-semibold">GitHub Pages:</span> Veröffentlichen Sie dieses Repository über GitHub Pages.</li>
              <li><span className="font-semibold">CNAME Records:</span> Erstellen Sie für jede Landingpage einen separaten CNAME-Record, der auf Ihre GitHub Pages URL verweist.</li>
              <li><span className="font-semibold">Zugriff:</span> Jede Landingpage ist über ihre eigene URL direkt erreichbar.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
