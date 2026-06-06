"use client";

import { useState } from "react";

const images = [
  "/arlo-pro5.webp",
  "/arlo-pro5-2.webp",
  "/arlo-pro5-3.webp",
  "/arlo-pro5-4.webp",
  "/arlo-pro5-5.webp",
  "/arlo-pro5-6.webp",
];

export default function ArloPro5Page() {
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
        <div>
          <div className="mb-5 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Premium Sicherheitskamera
          </div>

          <h1 className="text-5xl font-extrabold leading-tight">
            Arlo Pro 5 2er Set
          </h1>

          <div className="mt-5 flex items-center gap-3">
            <div className="text-2xl text-yellow-500">★★★★☆</div>
            <div className="text-gray-600">
              3,8/5 Bewertung · ca. 371 Rezensionen
            </div>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-gray-600">
            Die Arlo Pro 5 ist eine kabellose Sicherheitskamera für innen und
            außen. Das 2er Set bietet 2K HDR Video, Farbnachtsicht, 160°
            Blickwinkel, Spotlight, 2-Wege-Audio, Bewegungserkennung und eine
            integrierte Sirene. Besonders interessant ist sie für Nutzer, die
            eine flexible Außenkamera mit App-Steuerung und Smart-Home-Anbindung
            suchen.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white p-4 shadow transition-shadow duration-300 hover:shadow-xl">
              <div className="text-sm text-gray-500">Auflösung</div>
              <div className="mt-1 text-xl font-bold">2K HDR</div>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow transition-shadow duration-300 hover:shadow-xl">
              <div className="text-sm text-gray-500">Sichtfeld</div>
              <div className="mt-1 text-xl font-bold">160°</div>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow transition-shadow duration-300 hover:shadow-xl">
              <div className="text-sm text-gray-500">Nachtsicht</div>
              <div className="mt-1 text-xl font-bold">Farbnachtsicht</div>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow transition-shadow duration-300 hover:shadow-xl">
              <div className="text-sm text-gray-500">Wetterfest</div>
              <div className="mt-1 text-xl font-bold">IP65</div>
            </div>
          </div>

          <div className="mt-10">
            <div className="text-sm text-gray-500">Preisbereich</div>
            <div className="mt-2 text-4xl font-extrabold">
              Preis bei Amazon prüfen
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.amazon.de/dp/B0D6GYK1LX"
              target="_blank"
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
            >
              Preis & Bewertungen prüfen
            </a>

            <a
              href="/"
              className="rounded-2xl border px-8 py-4 font-semibold transition duration-300 hover:bg-gray-100"
            >
              Weitere Produkte
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            Preis und Bewertung können sich ändern. Prüfe aktuelle Angaben immer
            direkt bei Amazon.
          </p>
        </div>

        {/* IMAGE GALLERY */}
        <div className="relative flex min-h-[560px] items-center justify-center overflow-hidden rounded-[36px] bg-slate-50 p-6 shadow-2xl">
          <img
            src={images[currentImage]}
            alt="Arlo Pro 5 2er Set"
            className="max-h-[500px] w-full rounded-3xl object-contain transition-transform duration-700 hover:scale-[1.03]"
          />

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-3 text-xl font-bold shadow transition hover:bg-white hover:scale-110"
          >
            ‹
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-4 py-3 text-xl font-bold shadow transition hover:bg-white hover:scale-110"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-3 w-3 rounded-full transition ${
                  currentImage === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-6 py-6">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-[32px] bg-white p-8 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-2xl font-extrabold">2K HDR Video</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Die Kamera liefert scharfe 2K-Aufnahmen mit HDR, damit Details bei
              hellen und dunklen Bildbereichen besser erkennbar bleiben.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-2xl font-extrabold">Farbnachtsicht</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Durch Farbnachtsicht, Spotlight und Bewegungserkennung lassen sich
              Personen, Kleidung und Objekte auch nachts besser erkennen.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-2xl font-extrabold">160° Blickwinkel</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Das breite Sichtfeld eignet sich gut für Einfahrten, Gärten,
              Eingänge oder größere Innenbereiche.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
            <h2 className="text-2xl font-extrabold">Smart Home</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              Die Arlo Pro 5 unterstützt Alexa, Google Home und Apple HomeKit.
              Dadurch lässt sie sich bequem per App oder Sprachsteuerung in dein
              Smart Home einbinden.
            </p>
          </div>
        </div>
      </section>

      {/* VORTEILE / NACHTEILE */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[36px] border border-green-100 bg-gradient-to-br from-green-50 to-white p-10 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-4xl font-extrabold text-green-600">
              Vorteile
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold">
                  Sehr einfache kabellose Installation
                </h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Die Kamera benötigt keine feste Verkabelung und kann flexibel
                  im Innen- oder Außenbereich montiert werden.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Gute Bildqualität mit 2K HDR
                </h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Die Auflösung reicht für viele typische Überwachungsbereiche
                  gut aus und liefert mehr Details als einfache Full-HD-Kameras.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Gute Sicherheitsfunktionen
                </h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Spotlight, Sirene, Bewegungserkennung, 2-Wege-Audio und
                  Farbnachtsicht machen die Kamera vielseitig einsetzbar.
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
                  Viele Funktionen erst mit Abo richtig sinnvoll
                </h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Arlo Secure bietet zusätzliche Cloudfunktionen,
                  Objekterkennung und Aktivitätszonen. Ohne Abo bleibt die
                  Kamera nutzbar, aber eingeschränkter.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Bewertung niedriger als bei manchen Konkurrenten
                </h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Die durchschnittliche Bewertung liegt bei etwa 3,8 von 5
                  Sternen und sollte vor dem Kauf beachtet werden.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Cloud-Funktionen können Zusatzkosten verursachen
                </h3>
                <p className="mt-2 leading-relaxed text-gray-600">
                  Wer möglichst unabhängig von Abo- oder Cloud-Funktionen sein
                  möchte, sollte die Speicheroptionen vor dem Kauf genau prüfen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNISCHE DATEN */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-[36px] bg-white p-10 shadow-2xl">
          <h2 className="text-4xl font-extrabold">Technische Daten</h2>

          <div className="mt-8 overflow-hidden rounded-3xl border">
            <div className="grid grid-cols-2 border-b bg-slate-50 p-4">
              <div className="font-bold">Merkmal</div>
              <div className="font-bold">Angabe</div>
            </div>

            {[
              ["Produkt", "Arlo Pro 5 2er Set"],
              ["Bewertung", "3,8 Sterne"],
              ["Rezensionen", "ca. 371"],
              ["Auflösung", "2K HDR"],
              ["Bildfrequenz", "24 FPS"],
              ["Sichtfeld", "160°"],
              ["Nachtsicht", "Farbnachtsicht"],
              ["Nachtsichtbereich", "ca. 7 Meter"],
              ["Audio", "2-Wege-Audio"],
              ["Sirene", "Ja"],
              ["Spotlight", "Ja"],
              ["Wetterfestigkeit", "IP65"],
              ["Verbindung", "WLAN / kabellos"],
              ["Stromquelle", "Akku / batteriebetrieben"],
              ["Smart Home", "Alexa, Google Home, Apple HomeKit"],
              ["App-Steuerung", "Ja"],
              ["Set", "2 Kameras"],
            ].map(([label, value]) => (
              <div key={label} className="grid grid-cols-2 border-b p-4">
                <div className="font-semibold">{label}</div>
                <div className="text-gray-600">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-[36px] bg-white p-10 shadow-2xl">
          <h2 className="text-4xl font-extrabold">Häufige Fragen</h2>

          <div className="mt-10 space-y-10">
            <div>
              <h3 className="text-2xl font-bold">
                Ist die Arlo Pro 5 wetterfest?
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                Ja, die Kamera besitzt IP65-Schutz und eignet sich dadurch für
                den Innen- und Außenbereich.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Funktioniert die Arlo Pro 5 ohne Abo?
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                Ja, Live-Ansicht, Bewegungsalarm und 2-Wege-Kommunikation sind
                grundsätzlich möglich. Für erweiterte Cloudfunktionen und
                intelligente Erkennung ist Arlo Secure aber wichtig.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Ist die Arlo Pro 5 für den Garten geeignet?
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600">
                Ja, durch kabellose Installation, Wetterfestigkeit, 160°
                Sichtfeld, Spotlight und Farbnachtsicht eignet sie sich gut für
                Garten, Einfahrt oder Eingangsbereich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAZIT */}
      <section className="mx-auto max-w-6xl px-6 py-12 pb-24">
        <div className="rounded-[40px] bg-gradient-to-r from-blue-700 to-indigo-700 p-12 text-white shadow-2xl">
          <h2 className="text-5xl font-extrabold">Fazit zur Arlo Pro 5</h2>

          <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/80">
            Die Arlo Pro 5 ist eine starke kabellose Sicherheitskamera für
            Nutzer, die Wert auf einfache Installation, gute Bildqualität,
            Farbnachtsicht und Smart-Home-Funktionen legen. Besonders als 2er
            Set eignet sie sich gut für Eingangsbereich, Garten oder Einfahrt.
            Kritisch sollte man jedoch beachten, dass viele Komfort- und
            Cloudfunktionen erst mit Arlo Secure wirklich vollständig nutzbar
            sind.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.amazon.de/dp/B0D6GYK1LX"
              target="_blank"
              className="rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition duration-300 hover:scale-105"
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