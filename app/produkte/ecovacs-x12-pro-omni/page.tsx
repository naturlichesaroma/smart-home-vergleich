export default function EcovacsPage() {
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
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <div className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Premium Empfehlung
          </div>

          <h1 className="text-5xl font-extrabold leading-tight">
            ECOVACS X12 PRO OMNI
          </h1>

          <div className="mt-4 text-yellow-500 text-xl">
            ★★★★★
            <span className="ml-2 text-base text-gray-500">
              4.8/5 Bewertung
            </span>
          </div>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Der ECOVACS X12 PRO OMNI gehört zu den modernsten Premium
            Saugrobotern auf dem Markt und kombiniert starke Saugleistung,
            intelligente Navigation und eine besonders starke Wischfunktion.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
              22000 Pa
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
              OZMO Roller
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
              Selbstreinigung
            </span>

            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
              App Steuerung
            </span>
          </div>

          <div className="mt-10">
            <div className="text-sm text-gray-500">Preisbereich</div>

            <div className="mt-1 text-4xl font-extrabold">
              ab 1.049€
            </div>
          </div>

          <div className="mt-10 flex gap-4">
            <a
              href="https://www.amazon.de/dp/B0GLNQSF9C"
              target="_blank"
              className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
            >
              Preis bei Amazon prüfen
            </a>

            <a
              href="/"
              className="rounded-2xl border px-8 py-4 font-semibold transition hover:bg-gray-100"
            >
              Weitere Produkte
            </a>
          </div>
        </div>

        {/* PRODUKTBILD */}
        <div className="overflow-hidden rounded-[32px] bg-white shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=1200&auto=format&fit=crop"
            alt="ECOVACS X12 PRO OMNI"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* VORTEILE / NACHTEILE */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[32px] bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-extrabold text-green-600">
              Vorteile
            </h2>

            <ul className="mt-6 space-y-4 text-gray-700">
              <li>✔ Sehr starke Saugleistung</li>
              <li>✔ Hochwertige Wischfunktion</li>
              <li>✔ Automatische Reinigungsstation</li>
              <li>✔ Gute Navigation mit Hinderniserkennung</li>
              <li>✔ Besonders gut für Tierhaare</li>
            </ul>
          </div>

          <div className="rounded-[32px] bg-white p-8 shadow-xl">
            <h2 className="text-3xl font-extrabold text-red-500">
              Nachteile
            </h2>

            <ul className="mt-6 space-y-4 text-gray-700">
              <li>✖ Sehr hoher Preis</li>
              <li>✖ Große Station benötigt Platz</li>
              <li>✖ Premiumfunktionen eher für große Wohnungen sinnvoll</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-[32px] bg-white p-8 shadow-xl">
          <h2 className="text-4xl font-extrabold">
            Häufige Fragen
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-xl font-bold">
                Ist der ECOVACS X12 PRO OMNI gut für Tierhaare?
              </h3>

              <p className="mt-2 text-gray-600">
                Ja, besonders durch die hohe Saugleistung und die verbesserte
                Bürstentechnologie eignet sich das Modell sehr gut für
                Haustierhaare.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Kann der Roboter gleichzeitig saugen und wischen?
              </h3>

              <p className="mt-2 text-gray-600">
                Ja, der X12 PRO OMNI kombiniert Saugen und Wischen in einem
                Reinigungsvorgang.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Für wen lohnt sich dieses Modell?
              </h3>

              <p className="mt-2 text-gray-600">
                Besonders für Nutzer mit größeren Wohnungen, Haustieren oder
                hohen Ansprüchen an automatische Reinigung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAZIT */}
      <section className="mx-auto max-w-6xl px-6 py-10 pb-20">
        <div className="rounded-[32px] bg-gradient-to-r from-blue-700 to-indigo-700 p-10 text-white shadow-2xl">
          <h2 className="text-4xl font-extrabold">
            Fazit zum ECOVACS X12 PRO OMNI
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            Der ECOVACS X12 PRO OMNI gehört aktuell zu den stärksten Premium
            Saugrobotern auf dem Markt und überzeugt besonders bei
            Wischfunktion, Komfort und automatischer Reinigung.
          </p>

          <a
            href="https://www.amazon.de/dp/B0GLNQSF9C"
            target="_blank"
            className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
          >
            Jetzt bei Amazon ansehen
          </a>
        </div>
      </section>
    </main>
  );
}