"use client";

import { useState } from "react";
const images = [
  "/ecovacs-x12.webp",
  "/ecovacs-x12-2.webp",
  "/ecovacs-x12-3.webp",
  "/ecovacs-x12-4.webp",
  "/ecovacs-x12-5.webp",
];
export default function EcovacsPage() {
  const [currentImage, setCurrentImage] = useState(0);

const nextImage = () => {
  setCurrentImage((currentImage + 1) % images.length);
};

const prevImage = () => {
  setCurrentImage((currentImage - 1 + images.length) % images.length);
};
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-gray-900">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 font-black text-white">
              SH
            </div>

            <div>
              <div className="font-extrabold leading-none">
                SmartHome Check
              </div>

              <div className="text-xs text-gray-500">
                Vergleich & Kaufberatung
              </div>
            </div>
          </a>

          <a
            href="/"
            className="rounded-full border px-4 py-2 text-sm transition hover:bg-gray-100"
          >
            Zurück zur Startseite
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto grid max-w-6xl gap-14 px-6 py-16 lg:grid-cols-2">
        
        {/* LEFT */}
        <div>
          <div className="mb-5 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Premium Empfehlung 2026
          </div>

          <h1 className="text-5xl font-extrabold leading-tight">
            ECOVACS X12 PRO OMNI
          </h1>

          <div className="mt-5 flex items-center gap-3">
            <div className="text-2xl text-yellow-500">
              ★★★★☆
            </div>

            <div className="text-gray-600">
              4,4/5 Bewertung
            </div>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-gray-600">
            Der ECOVACS X12 PRO OMNI gehört zu den modernsten Premium
            Saugrobotern auf dem Markt und kombiniert starke Saugleistung,
            intelligente Navigation und eine besonders hochwertige
            Wischfunktion mit automatischer Reinigungsstation.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white p-4 shadow">
              <div className="text-sm text-gray-500">
                Saugleistung
              </div>

              <div className="mt-1 text-xl font-bold">
                22.000 Pa
              </div>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow">
              <div className="text-sm text-gray-500">
                Navigation
              </div>

              <div className="mt-1 text-xl font-bold">
                KI + LiDAR
              </div>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow">
              <div className="text-sm text-gray-500">
                Wischsystem
              </div>

              <div className="mt-1 text-xl font-bold">
                OZMO Roller
              </div>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow">
              <div className="text-sm text-gray-500">
                Zielgruppe
              </div>

              <div className="mt-1 text-xl font-bold">
                Premium
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="text-sm text-gray-500">
              Preisbereich
            </div>

            <div className="mt-2 text-4xl font-extrabold">
              Preis bei Amazon prüfen
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.amazon.de/dp/B0GLNQSF9C"
              target="_blank"
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
            >
              Preis & Bewertungen prüfen
            </a>

            <a
              href="/"
              className="rounded-2xl border px-8 py-4 font-semibold transition hover:bg-gray-100"
            >
              Weitere Produkte
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Bewertung und Preis können sich ändern.
          </p>
        </div>

        {/* IMAGE GALLERY */}
<div className="relative overflow-hidden rounded-[36px] bg-white shadow-2xl">
  <img
    src={images[currentImage]}
    alt="ECOVACS X12 PRO OMNI"
    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
  />

  <button
    onClick={prevImage}
    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-3 text-xl font-bold shadow hover:bg-white"
  >
    ‹
  </button>

  <button
    onClick={nextImage}
    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-3 text-xl font-bold shadow hover:bg-white"
  >
    ›
  </button>

  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
    {images.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentImage(index)}
        className={`h-3 w-3 rounded-full ${
          currentImage === index ? "bg-blue-600" : "bg-gray-300"
        }`}
      />
    ))}
  </div>
</div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="grid gap-6 md:grid-cols-3">
          
          <div className="rounded-[32px] bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-2xl font-extrabold">
              FocusJet Technologie
            </h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              Das spezielle FocusJet-System soll hartnäckige Flecken und
              eingetrocknete Verschmutzungen gezielter anlösen und entfernen.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-2xl font-extrabold">
              OZMO Roller 3.0
            </h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              Das moderne Wischsystem arbeitet mit rotierenden Walzen und
              verbessert die Wischleistung gegenüber klassischen Mopps deutlich.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-2xl font-extrabold">
              Automatische Station
            </h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              Die Reinigungsstation übernimmt Entleerung, Reinigung und
              Trocknung automatisch und reduziert den Wartungsaufwand.
            </p>
          </div>
        </div>
      </section>

      {/* VORTEILE / NACHTEILE */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          
          <div className="rounded-[36px] border border-green-100 bg-gradient-to-br from-green-50 to-white p-10 shadow-x1 transition duration-300 hover:-translate-y-1 hover:shadow-2x1">
            <h2 className="text-4xl font-extrabold text-green-600">
              Vorteile
            </h2>

            <div className="mt-8 space-y-6">
              
              <div>
                <h3 className="text-xl font-bold">
                  Sehr starke Saugleistung
                </h3>

                <p className="mt-2 leading-relaxed text-gray-600">
                  Mit bis zu 22.000 Pa Saugleistung gehört das Modell zu den
                  leistungsstärksten Premium-Saugrobotern auf dem Markt.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Hochwertige Wischfunktion
                </h3>

                <p className="mt-2 leading-relaxed text-gray-600">
                  Das OZMO Roller 3.0 System verbessert die Reinigung von
                  Hartböden deutlich und eignet sich besonders für Haushalte
                  mit hoher Bodenbelastung.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Komfort durch Automatisierung
                </h3>

                <p className="mt-2 leading-relaxed text-gray-600">
                  Die Station übernimmt viele Wartungsaufgaben automatisch,
                  wodurch deutlich weniger manuelle Reinigung nötig ist.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[36px] border border-red-100 bg-gradient-to-br from-red-50 to-white p-10 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-4xl font-extrabold text-red-500">
              Nachteile
            </h2>

            <div className="mt-8 space-y-6">
              
              <div>
                <h3 className="text-xl font-bold">
                  Hoher Preis
                </h3>

                <p className="mt-2 leading-relaxed text-gray-600">
                  Der ECOVACS X12 PRO OMNI gehört klar zur Premiumklasse und ist
                  deutlich teurer als viele klassische Saugroboter.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Große Reinigungsstation
                </h3>

                <p className="mt-2 leading-relaxed text-gray-600">
                  Die umfangreiche Station benötigt vergleichsweise viel Platz
                  und passt nicht optimal in kleine Wohnungen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Viele Funktionen nicht für jeden nötig
                </h3>

                <p className="mt-2 leading-relaxed text-gray-600">
                  Nutzer mit kleinen Wohnungen oder geringem Reinigungsbedarf
                  benötigen viele Premiumfunktionen möglicherweise nicht.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-[36px] bg-white p-10 shadow-2xl">
          
          <h2 className="text-4xl font-extrabold">
            Häufige Fragen
          </h2>

          <div className="mt-10 space-y-10">
            
            <div>
              <h3 className="text-2xl font-bold">
                Ist der ECOVACS X12 PRO OMNI gut für Tierhaare?
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Ja, besonders durch die hohe Saugleistung und die moderne
                Bürstentechnologie eignet sich das Modell sehr gut für Haushalte
                mit Haustieren.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Kann das Modell gleichzeitig saugen und wischen?
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Ja, der Saugroboter kombiniert Saugen und Wischen in einem
                Reinigungsvorgang.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Für wen lohnt sich der X12 PRO OMNI?
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Besonders für Nutzer mit größeren Wohnungen, Haustieren oder
                hohen Ansprüchen an Komfort und Automatisierung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAZIT */}
      <section className="mx-auto max-w-6xl px-6 py-12 pb-24">
        <div className="rounded-[40px] bg-gradient-to-r from-blue-700 to-indigo-700 p-12 text-white shadow-2xl">
          
          <h2 className="text-5xl font-extrabold">
            Fazit zum ECOVACS X12 PRO OMNI
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/80">
            Der ECOVACS X12 PRO OMNI gehört aktuell zu den stärksten Premium
            Saugrobotern auf dem Markt und überzeugt besonders bei
            Wischfunktion, Komfort, Navigation und automatischer Reinigung.
            Für Nutzer mit hohen Ansprüchen kann das Modell eine sehr starke
            Wahl sein.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.amazon.de/dp/B0GLNQSF9C"
              target="_blank"
              className="rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
            >
              Preis & Bewertungen bei Amazon ansehen
            </a>

            <a
              href="/"
              className="rounded-2xl border border-white/30 px-8 py-4 font-semibold transition hover:bg-white/10"
            >
              Weitere Produkte vergleichen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}