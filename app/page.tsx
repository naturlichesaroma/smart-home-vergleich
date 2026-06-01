"use client";

import { useMemo, useState } from "react";

const products = [
  {
  id: 1,
  name: "ECOVACS X12 PRO OMNI",
  brand: "ECOVACS",
  category: "Saugroboter",
  badge: "Premium Empfehlung",
  rating: 4.8,
  numericPrice: 1049,
  price: "ab 1.199€",
  image: "/ecovacs-x12.webp",
  description:
    "Premium-Saugroboter mit starker Saugleistung, moderner Wischfunktion und automatischer Reinigungsstation.",
  features: [
    "22000 Pa",
    "OZMO Roller",
    "Selbstreinigung",
    "App-Steuerung",
  ],
  pros: [
    "Sehr starke Saugleistung",
    "Gute Wischfunktion",
    "Premium-Station",
  ],
  cons: [
    "Sehr hoher Preis",
    "Große Station benötigt Platz",
  ],
  affiliate: "/produkte/ecovacs-x12-pro-omni",
},
  {
    id: 2,
    name: "iRobot Roomba i7+",
    brand: "iRobot",
    category: "Saugroboter",
    numericPrice: 499,
    badge: "Beliebt",
    rating: 4.5,
    price: "ab 499€",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1200&auto=format&fit=crop",
    description:
      "Bekannter Saugroboter mit automatischer Absaugstation und guter Alltagstauglichkeit.",
    features: ["Absaugstation", "App-Steuerung", "Zeitpläne", "Teppich"],
    pros: ["Automatische Entleerung", "Gute Marke", "Einfach zu bedienen"],
    cons: ["Wischfunktion fehlt", "Etwas lauter"],
    affiliate: "#",
  },
 {
  id: 3,
  name: "Arlo Pro 5",
  brand: "Arlo",
  category: "Kamera",
  numericPrice: 185,
  badge: "Premium",
  rating: 3.8,
  price: "ab 185€",
  image: "/arlo-pro5.webp",
  description:
    "Kabellose 2K-HDR Sicherheitskamera mit Farbnachtsicht, 160° Blickwinkel und smarter Bewegungserkennung.",
  features: [
    "2K HDR",
    "Farbnachtsicht",
    "160° Blickwinkel",
    "IP65"
  ],
  pros: [
    "Sehr einfache Installation",
    "2K HDR Bildqualität",
    "Farbnachtsicht",
    "Für Innen & Außen geeignet"
  ],
  cons: [
    "Cloud-Abo für viele Funktionen",
    "Preis relativ hoch",
    "Lokale Speicherung eingeschränkt"
  ],
  affiliate: "/produkte/arlo-pro-5",
},
    {
  id: 4,
  name: "Roborock QV 35A Set",
  brand: "Roborock",
  category: "Saugroboter",
  numericPrice: 349,
  badge: "Preis-Leistung",
  rating: 4.5,
  price: "ab 599€",
  image: "/roborock-qv35a.webp",
  description:
    "Preis-Leistungs-Saugroboter mit 8.000 Pa Saugleistung, LiDAR-Navigation und automatischer Reinigungsstation.",
  features: [
    "8.000 Pa",
    "LiDAR",
    "Reactive Tech",
    "All-in-One Dock",
  ],
  pros: [
    "Sehr gutes Preis-Leistungs-Verhältnis",
    "Automatische Reinigungsstation",
    "Starke Navigation",
  ],
  cons: [
    "Große Dockingstation",
    "Weniger Premiumfunktionen",
  ],
  affiliate: "/produkte/roborock-qv35a",
},
];

function stars(rating: number) {
  return "★".repeat(Math.round(rating)) + "☆".repeat(5 - Math.round(rating));
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Alle");
  const [brand, setBrand] = useState("Alle");
  const [maxPrice, setMaxPrice] = useState("Alle");
  const [compareA, setCompareA] = useState(1);
  const [compareB, setCompareB] = useState(3);
  const [compareType, setCompareType] = useState("Saugroboter");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "Alle" || product.category === category;

     const matchesBrand =
  brand === "Alle" || product.brand === brand;

const matchesPrice =
  maxPrice === "Alle" ||
  product.numericPrice <= Number(maxPrice);

return (
  matchesSearch &&
  matchesCategory &&
  matchesBrand &&
  matchesPrice
);
    });
  }, [search, category, brand, maxPrice]);
  const compareProducts = products.filter(
  (p) => p.category === compareType
);

  const productA = products.find((p) => p.id === compareA)!;
  const productB = products.find((p) => p.id === compareB)!;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50 to-slate-100 text-gray-900">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b shadow-sm">
  <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
    <a href="#top" className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black">
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

    <div className="hidden md:flex gap-6 text-sm text-gray-600">
      <a href="#produkte" className="hover:text-blue-600">
        Produkte
      </a>

      <a href="#vergleich" className="hover:text-blue-600">
        Vergleich
      </a>

      <a href="#affiliate" className="hover:text-blue-600">
        Transparenz
      </a>
    </div>
  </div>
</nav>
      <section id="top" className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 text-white">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <div className="mb-6 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
            Unabhängiges Smart-Home Vergleichsportal
          </div>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Saugroboter & Sicherheitskameras einfach vergleichen
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Finde passende Smart-Home Produkte mit klaren Bewertungen,
            ehrlichen Vorteilen und verständlichen Kaufempfehlungen.
          </p>

          <div className="mt-8 max-w-xl rounded-2xl bg-white/10 p-3 backdrop-blur">
            <input
              className="w-full bg-transparent px-3 py-2 text-white outline-none placeholder:text-white/70"
              placeholder="Produkt suchen, z. B. Roborock oder Arlo..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {["Alle", "Saugroboter", "Kamera"].map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full border border-white/30 px-5 py-2 text-sm transition ${
                  category === item
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 max-w-xl">
  <select
    className="rounded-2xl bg-white px-4 py-3 text-gray-900"
    value={brand}
    onChange={(e) => setBrand(e.target.value)}
  >
    <option value="Alle">Alle Marken</option>
    <option value="Roborock">Roborock</option>
    <option value="iRobot">iRobot</option>
    <option value="Arlo">Arlo</option>
    <option value="Eufy">Eufy</option>
  </select>

  <select
    className="rounded-2xl bg-white px-4 py-3 text-gray-900"
    value={maxPrice}
    onChange={(e) => setMaxPrice(e.target.value)}
  >
    <option value="Alle">Alle Preise</option>
    <option value="100">bis 100€</option>
    <option value="300">bis 300€</option>
    <option value="600">bis 600€</option>
  </select>
</div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-10 grid max-w-6xl gap-5 px-6 md:grid-cols-3">
        <div className="rounded-3xl bg-white p-6 shadow-xl">
          <h2 className="text-xl font-bold">Schnell vergleichen</h2>
          <p className="mt-2 text-gray-600">
            Produkte direkt gegenüberstellen und Unterschiede erkennen.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-xl">
          <h2 className="text-xl font-bold">Bewertungen & FAQ</h2>
          <p className="mt-2 text-gray-600">
            Verständliche Einschätzungen statt komplizierter Technikbegriffe.
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 shadow-xl">
          <h2 className="text-xl font-bold">Affiliate vorbereitet</h2>
          <p className="mt-2 text-gray-600">
            Später musst du nur noch deine Amazon-Links einsetzen.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <p className="font-semibold text-blue-700">Top Empfehlungen</p>
          <h2 className="text-4xl font-extrabold">Beliebte Produkte</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-[32px] bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover"
                />

                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-bold backdrop-blur">
                  {product.badge}
                </div>
              </div>

              <div className="p-8">
                <div className="text-sm font-semibold text-blue-700">
                  {product.category}
                </div>

                <h3 className="mt-1 text-3xl font-bold">{product.name}</h3>

                <div className="mt-3 text-yellow-500">
                  {stars(product.rating)}
                  <span className="ml-2 text-sm text-gray-500">
                    {product.rating}/5
                  </span>
                </div>

                <p className="mt-4 leading-relaxed text-gray-600">
                  {product.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm text-gray-500">Preisbereich</div>
                    <div className="text-2xl font-bold">{product.price}</div>
                  </div>

                  <a
                    href={product.affiliate}
                    className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white transition hover:scale-105"
                  >
                    Details ansehen
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-[32px] bg-white p-8 shadow-2xl">
          <div className="mb-6 flex items-center justify-between gap-4">
  <p className="font-semibold text-blue-700">Produktvergleich</p>

  <div className="flex gap-3">
    {["Saugroboter", "Kamera"].map((type) => (
      <button
        key={type}
        onClick={() => {
          setCompareType(type);
          const first = products.find((p) => p.category === type);
          const second = products.filter((p) => p.category === type)[1] || first;

          if (first) setCompareA(first.id);
          if (second) setCompareB(second.id);
        }}
        className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
          compareType === type
            ? "bg-blue-600 text-white"
            : "bg-white text-gray-700 hover:bg-gray-100"
        }`}
      >
        {type === "Kamera" ? "Kameras" : "Saugroboter"}
      </button>
    ))}
  </div>
</div>
          <h2 className="mt-2 text-4xl font-extrabold">
            Produkt A vs Produkt B
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <select
              className="rounded-2xl border p-4"
              value={compareA}
              onChange={(e) => setCompareA(Number(e.target.value))}
            >
              {compareProducts.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>

            <select
              className="rounded-2xl border p-4"
              value={compareB}
              onChange={(e) => setCompareB(Number(e.target.value))}
            >
              {compareProducts.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[productA, productB].map((product) => (
              <div key={product.id} className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <div className="mt-2 text-yellow-500">
                  {stars(product.rating)}
                </div>
                <p className="mt-4 text-gray-600">{product.description}</p>
                <div className="mt-4 font-bold">{product.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-[32px] bg-white p-8 shadow-2xl">
          <p className="font-semibold text-blue-700">SEO Produktseite</p>
          <h2 className="mt-2 text-4xl font-extrabold">
            ECOVACS X12 PRO OMNI Test & Bewertung
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <img
                src={products[0].image}
                alt="Roborock S8 Produktbild"
                className="h-96 w-full rounded-3xl object-cover shadow-lg"
              />
            </div>

            <div>
              <div className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                Testsieger Empfehlung
              </div>

              <p className="mt-5 text-lg leading-relaxed text-gray-600">
                Der ECOVACS X12 PRO OMNI ist ein Premium-Saugroboter mit FocusJet-Fleckenvorlösung, OZMO Roller 3.0, 22.000 Pa Saugleistung, TruEdge 3.0 Kantenreinigung und automatischer Reinigungsstation.
              </p>

              <a
                href="/produkte/ecovacs-x12-pro-omni"
                className="mt-8 inline-block rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/30 transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
              >
                Details ansehen
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-green-100 bg-green-50 p-6">
              <h3 className="text-2xl font-bold text-green-700">Vorteile</h3>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>✔ Sehr starke Saugleistung mit bis zu 22.000 Pa</li>
              <li>✔ OZMO Roller 3.0 Wischsystem</li>
              <li>✔ FocusJet-Technologie zur Fleckenvorlösung</li>
              <li>✔ Automatische Reinigungsstation</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-red-100 bg-red-50 p-6">
              <h3 className="text-2xl font-bold text-red-600">Nachteile</h3>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>✖ Hoher Preis im Premium-Segment</li>
                <li>✖ Große Station benötigt Platz</li>
              <  li>✖ Für kleine Wohnungen eventuell überdimensioniert</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-slate-50 p-6">
            <h3 className="text-2xl font-bold">Häufige Fragen</h3>

            <div className="mt-6 space-y-5">
              <div>
                <h4 className="font-bold">
                  Ist der ECOVACS X12 PRO OMNI für Tierhaare geeignet?
                </h4>
                <p className="mt-1 text-gray-600">
                  Ja, durch die starke Saugleistung eignet er sich gut für
                  Haushalte mit Haustieren.
                </p>
              </div>

              <div>
                <h4 className="font-bold">Hat der ECOVACS X12 PRO OMNI eine Wischfunktion?</h4>
                <p className="mt-1 text-gray-600">
                  Ja, das Modell kombiniert Saugen und Wischen.
                </p>
              </div>

              <div>
                <h4 className="font-bold">Lohnt sich der Preis?</h4>
                <p className="mt-1 text-gray-600">
                  Für Nutzer, die Komfort, starke Leistung und smarte Funktionen
                  suchen, kann sich der Preis lohnen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
  <div className="rounded-[32px] bg-white p-8 shadow-xl">
    <h2 className="text-3xl font-extrabold">
      Transparenz & Amazon Partnerprogramm
    </h2>

    <p className="mt-4 leading-relaxed text-gray-600">
      Auf dieser Website findest du Vergleiche, Bewertungen und Empfehlungen
      zu Saugrobotern und Sicherheitskameras. Ziel ist es, Besuchern eine
      verständliche Orientierung vor dem Kauf zu geben.
    </p>

    <p className="mt-4 leading-relaxed text-gray-600 font-semibold">
      Als Amazon-Partner verdiene ich an qualifizierten Verkäufen.
    </p>

    <p className="mt-4 leading-relaxed text-gray-600">
      Wenn du über einen Affiliate-Link ein Produkt kaufst, kann diese Website
      eine Provision erhalten. Für dich entstehen dadurch keine zusätzlichen Kosten.
    </p>
  </div>
</section>

      <footer className="px-6 py-10 text-center text-sm text-gray-500">
        <div className="mb-4 flex justify-center gap-6">
          <a href="#" className="hover:underline">
            Impressum
          </a>
          <a href="#" className="hover:underline">
            Datenschutz
          </a>
          <a href="#" className="hover:underline">
            Kontakt
          </a>
        </div>
        © 2026 Smart Home Vergleichsportal
      </footer>
    </main>
  );
}