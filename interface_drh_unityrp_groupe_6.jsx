// =========================================
// INSTALLATION DU PROJET
// =========================================
//
// 1. Ouvre un terminal
// 2. Lance ces commandes :
//
// npm create vite@latest gruppe6-rh -- --template react
// cd gruppe6-rh
// npm install
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p
//
// 3. Remplace le fichier src/App.jsx par ce code
//
// 4. Dans src/index.css ajoute :
//
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
//
// body {
//   margin: 0;
//   font-family: Arial, sans-serif;
//   background: black;
// }
//
// 5. Dans tailwind.config.js ajoute :
//
// content: [
// './index.html',
// './src/**/*.{js,ts,jsx,tsx}',
// ],
//
// 6. Lance le projet :
// npm run dev
//
// =========================================
// APP.jsx
// =========================================

export default function UnityRPDRH() {
  const agents = [
    {
      id: 1,
      nom: "Erwan Lefevre",
      matricule: "G6-204",
      grade: "Commandant",
      service: "Brigade Terrain",
      fac: "Gruppe 6",
      statut: "Actif",
      recrutement: "12/02/2025",
      sanctions: ["Avertissement écrit — 03/03/2026"],
      promotions: ["Capitaine → Commandant — 12/01/2026"],
      competences: ["Management", "Formation", "Intervention"],
      notes: "Très bon comportement en service. Gestion exemplaire des équipes.",
    },
    {
      id: 2,
      nom: "Nathan Dubois",
      matricule: "G6-381",
      grade: "Agent Senior",
      service: "Sécurité VIP",
      fac: "Gruppe 6",
      statut: "Suspendu",
      recrutement: "22/09/2025",
      sanctions: ["Suspension 2 jours — 18/04/2026"],
      promotions: [],
      competences: ["Protection", "Escorte"],
      notes: "En attente de rendez-vous disciplinaire.",
    },
  ];

  const isLoggedIn = false;

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-black" />

        <div className="w-full max-w-md bg-zinc-950 border border-yellow-500/20 rounded-[35px] p-8 shadow-2xl shadow-yellow-500/10 relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-3xl bg-yellow-500 flex items-center justify-center text-black text-4xl font-black shadow-2xl shadow-yellow-500/30">
              G6
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-black text-yellow-400 tracking-wide mb-3">
              Gruppe 6
            </h1>

            <p className="text-zinc-400 text-lg">
              Accès sécurisé • Système RH
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="block text-sm text-zinc-400 mb-2">
                Identifiant
              </label>

              <input
                type="text"
                placeholder="Entrez votre identifiant"
                className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-2">
                Mot de passe
              </label>

              <input
                type="password"
                placeholder="••••••••••"
                className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 transition"
              />
            </div>

            <button className="w-full bg-yellow-500 text-black font-black py-4 rounded-2xl text-lg hover:scale-[1.02] transition shadow-2xl shadow-yellow-500/20">
              Se connecter
            </button>
          </div>

          <div className="mt-8 bg-black border border-zinc-800 rounded-2xl p-4 text-center">
            <p className="text-zinc-500 text-sm">
              Système réservé à la direction et aux ressources humaines Gruppe 6.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-white overflow-hidden">
      <div className="flex">
        <aside className="w-72 bg-black border-r border-yellow-500/20 min-h-screen p-6">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-yellow-500 flex items-center justify-center text-black font-black text-2xl shadow-2xl shadow-yellow-500/30">
                G6
              </div>

              <div>
                <h1 className="text-2xl font-black tracking-wide text-yellow-400">
                  Gruppe 6
                </h1>
                <p className="text-sm text-zinc-400">Système DRH</p>
              </div>
            </div>
          </div>

          <nav className="space-y-3">
            <button className="w-full bg-yellow-500 text-black font-bold rounded-2xl px-4 py-4 text-left hover:scale-[1.02] transition">
              Tableau de bord
            </button>

            <button className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-4 text-left hover:border-yellow-500/40 transition">
              Gestion des agents
            </button>

            <button className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-4 text-left hover:border-yellow-500/40 transition">
              Sanctions
            </button>

            <button className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-4 text-left hover:border-yellow-500/40 transition">
              Promotions
            </button>

            <button className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-4 py-4 text-left hover:border-yellow-500/40 transition">
              Archives RH
            </button>
          </nav>

          <div className="mt-10 bg-zinc-900 border border-yellow-500/20 rounded-3xl p-5">
            <p className="text-zinc-400 text-sm mb-2">Connecté en tant que</p>
            <h3 className="font-bold text-lg">Directeur RH</h3>
            <p className="text-yellow-400 text-sm">Gruppe 6 • Unity RP</p>
          </div>
        </aside>

        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-5xl font-black text-yellow-400 tracking-wide">
                Centre RH
              </h1>
              <p className="text-zinc-400 mt-2 text-lg">
                Gestion professionnelle des employés Gruppe 6
              </p>
            </div>

            <div className="flex gap-4">
              <button className="bg-zinc-900 border border-zinc-700 px-5 py-4 rounded-2xl hover:border-yellow-500 transition">
                Exporter les dossiers
              </button>

              <button className="bg-yellow-500 text-black font-bold px-6 py-4 rounded-2xl hover:scale-105 transition shadow-2xl shadow-yellow-500/30">
                + Ajouter un agent
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
            <div className="bg-zinc-900 border border-yellow-500/10 rounded-3xl p-6 shadow-2xl">
              <p className="text-zinc-400">Agents actifs</p>
              <h2 className="text-4xl font-black mt-3 text-yellow-400">48</h2>
            </div>

            <div className="bg-zinc-900 border border-yellow-500/10 rounded-3xl p-6 shadow-2xl">
              <p className="text-zinc-400">Sanctions actives</p>
              <h2 className="text-4xl font-black mt-3 text-red-400">6</h2>
            </div>

            <div className="bg-zinc-900 border border-yellow-500/10 rounded-3xl p-6 shadow-2xl">
              <p className="text-zinc-400">Promotions</p>
              <h2 className="text-4xl font-black mt-3 text-green-400">12</h2>
            </div>

            <div className="bg-zinc-900 border border-yellow-500/10 rounded-3xl p-6 shadow-2xl">
              <p className="text-zinc-400">Entretiens RH</p>
              <h2 className="text-4xl font-black mt-3 text-blue-400">4</h2>
            </div>
          </div>

          <div className="bg-zinc-900 border border-yellow-500/10 rounded-[30px] p-6 mb-8 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-4 justify-between mb-6">
              <input
                type="text"
                placeholder="Rechercher un agent, un matricule..."
                className="bg-black border border-zinc-700 rounded-2xl px-5 py-4 w-full lg:w-[420px] focus:outline-none focus:border-yellow-500"
              />

              <div className="flex gap-4">
                <select className="bg-black border border-zinc-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-yellow-500">
                  <option>Tous les grades</option>
                  <option>Commandant</option>
                  <option>Capitaine</option>
                  <option>Agent Senior</option>
                </select>

                <select className="bg-black border border-zinc-700 rounded-2xl px-5 py-4 focus:outline-none focus:border-yellow-500">
                  <option>Tous les statuts</option>
                  <option>Actif</option>
                  <option>Suspendu</option>
                  <option>Repos</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-zinc-800">
              <table className="w-full overflow-hidden">
                <thead className="bg-black">
                  <tr className="text-left text-zinc-400 uppercase text-sm">
                    <th className="p-5">Agent</th>
                    <th className="p-5">Matricule</th>
                    <th className="p-5">Grade</th>
                    <th className="p-5">Service</th>
                    <th className="p-5">Statut</th>
                    <th className="p-5">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {agents.map((agent) => (
                    <tr
                      key={agent.id}
                      className="border-t border-zinc-800 hover:bg-black/40 transition"
                    >
                      <td className="p-5">
                        <div>
                          <h3 className="font-bold text-lg">{agent.nom}</h3>
                          <p className="text-zinc-500 text-sm">
                            Recruté le {agent.recrutement}
                          </p>
                        </div>
                      </td>

                      <td className="p-5 text-yellow-400 font-bold">
                        {agent.matricule}
                      </td>

                      <td className="p-5">{agent.grade}</td>
                      <td className="p-5">{agent.service}</td>

                      <td className="p-5">
                        <span
                          className={`px-4 py-2 rounded-full text-sm font-bold ${
                            agent.statut === "Actif"
                              ? "bg-green-500/20 text-green-400"
                              : "bg-red-500/20 text-red-400"
                          }`}
                        >
                          {agent.statut}
                        </span>
                      </td>

                      <td className="p-5 flex gap-3">
                        <button className="bg-yellow-500 text-black px-4 py-2 rounded-xl font-bold hover:scale-105 transition">
                          Ouvrir
                        </button>

                        <button className="bg-zinc-800 border border-zinc-700 px-4 py-2 rounded-xl hover:border-yellow-500 transition">
                          Modifier
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="bg-zinc-900 border border-yellow-500/10 rounded-[30px] p-7 shadow-2xl"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-black text-yellow-400">
                      {agent.nom}
                    </h2>
                    <p className="text-zinc-400 mt-2">
                      {agent.grade} • {agent.service}
                    </p>
                  </div>

                  <button className="bg-yellow-500 text-black font-bold px-5 py-3 rounded-2xl hover:scale-105 transition">
                    Éditer le dossier
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-black rounded-2xl p-5 border border-zinc-800">
                    <p className="text-zinc-500 text-sm">Faction</p>
                    <h3 className="font-bold mt-2">{agent.fac}</h3>
                  </div>

                  <div className="bg-black rounded-2xl p-5 border border-zinc-800">
                    <p className="text-zinc-500 text-sm">Matricule</p>
                    <h3 className="font-bold mt-2 text-yellow-400">
                      {agent.matricule}
                    </h3>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-black mb-4">Compétences</h3>

                  <div className="flex flex-wrap gap-3">
                    {agent.competences.map((comp, index) => (
                      <span
                        key={index}
                        className="bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 px-4 py-2 rounded-full"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-black mb-4 text-red-400">
                    Sanctions
                  </h3>

                  <div className="space-y-3">
                    {agent.sanctions.map((sanction, index) => (
                      <div
                        key={index}
                        className="bg-red-500/10 border border-red-500/20 rounded-2xl p-4"
                      >
                        {sanction}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-black mb-4 text-green-400">
                    Promotions
                  </h3>

                  <div className="space-y-3">
                    {agent.promotions.length > 0 ? (
                      agent.promotions.map((promo, index) => (
                        <div
                          key={index}
                          className="bg-green-500/10 border border-green-500/20 rounded-2xl p-4"
                        >
                          {promo}
                        </div>
                      ))
                    ) : (
                      <div className="bg-black border border-zinc-800 rounded-2xl p-4 text-zinc-500">
                        Aucune promotion enregistrée
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-black mb-4">Notes RH</h3>

                  <textarea
                    defaultValue={agent.notes}
                    className="w-full min-h-[160px] bg-black border border-zinc-700 rounded-3xl p-5 focus:outline-none focus:border-yellow-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
