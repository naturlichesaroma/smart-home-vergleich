"use client";

import { useState } from "react";

const images = [
  "/roborock-qv35a.webp",
  "/roborock-qv35a-2.webp",
  "/roborock-qv35a-3.webp",
  "/roborock-qv35a-4.webp",
  "/roborock-qv35a-5.webp",
];

export default function RoborockPage() {
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
            Preis-Leistungs Empfehlung
          </div>

          <h1 className="text-5xl font-extrabold leading-tight">
            Roborock QV 35A Set
          </h1>

          <div className="mt-5 flex items-center gap-3">
            <div className="text-2xl text-yellow-500">★★★★☆</div>

            <div className="text-gray-600">
              4,5/5 Bewertung · ca. 3.826 Rezensionen
            </div>
          </div>

          <p className="mt-8 text-lg leading-relaxed text-gray-600">
            Der Roborock QV 35A Set ist ein starker Preis-Leistungs-Saugroboter
            mit 8.000 Pa Saugleistung, LiDAR-Navigation, Reactive-Tech
            Hindernisvermeidung und automatischer All-in-One Dockingstation.
            Besonders interessant ist er für Nutzer, die viele Komfortfunktionen
            möchten, aber nicht direkt ein High-End-Modell kaufen wollen.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white p-4 shadow transition duration-300">
              <div className="text-sm text-gray-500">Saugleistung</div>
              <div className="mt-1 text-xl font-bold">8.000 Pa</div>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow transition duration-300">
              <div className="text-sm text-gray-500">Navigation</div>
              <div className="mt-1 text-xl font-bold">LiDAR</div>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow transition duration-300">
              <div className="text-sm text-gray-500">Hindernisse</div>
              <div className="mt-1 text-xl font-bold">Reactive Tech</div>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow transition duration-300">
              <div className="text-sm text-gray-500">Zielgruppe</div>
              <div className="mt-1 text-xl font-bold">Preis-Leistung</div>
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
              href="https://www.amazon.de/dp/B0DSLBN5FS"
              target="_blank"
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
            >
              Preis & Bewertungen prüfen
            </a>

            <a
              href="/"
              className="rounded-2xl border px-8 py-4 font-semibold transition duration-300 hover:bg-gray-100 hover:scale-105"
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
            alt="Roborock QV 35A Set"
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
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[32px] bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-2xl font-extrabold">8.000 Pa Saugleistung</h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              Die starke Saugleistung entfernt Staub, Schmutz und Tierhaare von
              Hartböden, Teppichen und schwer zugänglichen Bereichen.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-2xl font-extrabold">Reactive Tech</h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              Das System erkennt Hindernisse wie Möbel, Kabel oder Schuhe und
              hilft dem Roboter, präziser durch den Raum zu navigieren.
            </p>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
            <h2 className="text-2xl font-extrabold">All-in-One Dock</h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              Die Dockingstation übernimmt wichtige Komfortfunktionen wie
              Staubentleerung, Moppreinigung und Mopptrocknung automatisch.
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
                  Starkes Preis-Leistungs-Verhältnis
                </h3>

                <p className="mt-2 leading-relaxed text-gray-600">
                  Der Roborock QV 35A bietet viele Funktionen, die sonst eher
                  bei teureren Modellen zu finden sind, bleibt aber preislich
                  deutlich unter vielen Premium-Geräten.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">Gute Saugleistung</h3>

                <p className="mt-2 leading-relaxed text-gray-600">
                  Mit 8.000 Pa Saugleistung ist das Modell stark genug für
                  Staub, Krümel und Tierhaare auf Hartboden und Teppichen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Komfort durch automatische Station
                </h3>

                <p className="mt-2 leading-relaxed text-gray-600">
                  Die All-in-One Station reduziert den Wartungsaufwand, weil
                  zentrale Reinigungsschritte automatisiert werden.
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
                  Weniger Premium als High-End-Modelle
                </h3>

                <p className="mt-2 leading-relaxed text-gray-600">
                  Im direkten Vergleich mit sehr teuren Spitzenmodellen fehlen
                  einzelne Premiumfunktionen wie besonders fortschrittliche
                  Schmutzerkennung.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">Station benötigt Platz</h3>

                <p className="mt-2 leading-relaxed text-gray-600">
                  Die Dockingstation ist praktisch, braucht aber mehr Stellfläche
                  als ein einfacher Saugroboter ohne Station.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  Nicht die günstigste Einstiegslösung
                </h3>

                <p className="mt-2 leading-relaxed text-gray-600">
                  Wer nur eine sehr einfache Reinigung benötigt, findet günstigere
                  Modelle. Der QV 35A lohnt sich eher, wenn Komfortfunktionen
                  wichtig sind.
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
              ["Bewertung", "4,5 Sterne"],
              ["Rezensionen", "ca. 3.826"],
              ["Saugleistung", "8.000 Pa"],
              ["Navigation", "LiDAR"],
              ["Hinderniserkennung", "Reactive Tech"],
              ["Moppwäsche", "Ja"],
              ["Mopptrocknung", "Ja"],
              ["App-Steuerung", "Ja"],
              ["Dockingstation", "All-in-One Dock"],
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
                Ist der Roborock QV 35A für Tierhaare geeignet?
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Ja, durch die hohe Saugleistung und die Anti-Tangle
                Seitenbürste eignet sich das Modell gut für Haushalte mit
                Haustieren.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Hat der Roborock QV 35A eine Wischfunktion?
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Ja, das Modell kombiniert Saugen und Wischen und besitzt
                rotierende Mopps mit automatischer Reinigung über die Station.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">
                Lohnt sich der Roborock QV 35A im Vergleich zu teureren Modellen?
              </h3>

              <p className="mt-3 leading-relaxed text-gray-600">
                Für viele Nutzer ja. Der QV 35A bietet starke Grundfunktionen
                und viel Komfort, ist aber günstiger als viele Premium-Modelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAZIT */}
      <section className="mx-auto max-w-6xl px-6 py-12 pb-24">
        <div className="rounded-[40px] bg-gradient-to-r from-blue-700 to-indigo-700 p-12 text-white shadow-2xl">
          <h2 className="text-5xl font-extrabold">
            Fazit zum Roborock QV 35A Set
          </h2>

          <p className="mt-8 max-w-4xl text-lg leading-relaxed text-white/80">
            Der Roborock QV 35A Set ist eine starke Wahl für Nutzer, die einen
            modernen Saugroboter mit automatischer Station, LiDAR-Navigation und
            guter Saugleistung suchen, ohne direkt in die teuerste Premiumklasse
            einzusteigen. Besonders als Preis-Leistungs-Modell passt er sehr gut
            in den Vergleich mit teureren Geräten wie dem ECOVACS X12 PRO OMNI.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.amazon.de/dp/B0DSLBN5FS"
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