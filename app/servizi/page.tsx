export default function Servizi() {
  const services = [
    "WiFi Ultra Veloce",
    "Colazione Inclusa",
    "Vista Mare",
    "Check-in Smart",
    "Parcheggio Privato",
    "Pulizia Giornaliera",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10">
      <h1 className="text-4xl mb-2">Servizi del B&B</h1>
      <p className="text-slate-200 mb-6">
        Tutto cio che offriamo per un soggiorno comodo e rilassante.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <article
            key={service}
            className="p-6 bg-white/10 rounded-xl hover:scale-105 transition"
          >
            {service}
          </article>
        ))}
      </div>
    </div>
  );
}