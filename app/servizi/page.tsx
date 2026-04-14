export default function Servizi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10">

      <h1 className="text-4xl mb-6">Servizi del B&B</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white/10 rounded-xl hover:scale-105 transition">
          WiFi Ultra Veloce
        </div>
        <div className="p-6 bg-white/10 rounded-xl hover:scale-105 transition">
          Colazione Inclusa
        </div>
        <div className="p-6 bg-white/10 rounded-xl hover:scale-105 transition">
          Vista Mare 
        </div>
      </div>
    </div>
  )
}