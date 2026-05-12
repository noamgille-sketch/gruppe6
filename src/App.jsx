import { useEffect, useState } from "react";
import { supabase } from "./supabase";
export default function UnityRPDRH() {
  
const [agents, setAgents] = useState([]);
useEffect(() => {
  fetchAgents();
}, []);

const fetchAgents = async () => {
  const { data, error } = await supabase
    .from("agents")
    .select("*");

  if (data) {
    setAgents(data);
  }
};

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [activePage, setActivePage] = useState("dashboard");
  const [search, setSearch] = useState("");

  

  const grades = [
    "Stagiaire",
    "Agent Aspirant",
    "Agent confirmé",
    "Agent Experimenté",
    "Agent Elite",
    "Officier I",
    "Officier II",
    "Officier III",
    "Superviseur",
    "Superviseur Expérimenté",
    "Superviseur Elite",
    "Attaché de direction",
    "Assistant de direction",
    "DRH",
    "Co-Directeur",
    "Directeur",
  ];

  const statuts = [
    "Actif",
    "Suspendu",
    "En pause",
    "Licencié",
    "Archivisé",
  ];

  const filteredAgents = agents.filter((agent) =>
    agent.nom.toLowerCase().includes(search.toLowerCase()) ||
    agent.grade.toLowerCase().includes(search.toLowerCase()) ||
    agent.matricule.toLowerCase().includes(search.toLowerCase())
  );

  const activeAgents = filteredAgents.filter(
    (agent) => agent.statut !== "Archivisé"
  );

  const archivedAgents = filteredAgents.filter(
    (agent) => agent.statut === "Archivisé"
  );

  const users = [
  {
    username: "drh",
    password: "gruppe6",
    role: "DRH",
  },

  {
    username: "directrice",
    password: "einrod",
    role: "Directrice",
  },

  {
    username: "codirecteur",
    password: "kronos",
    role: "Co-directeur",
  },

];

const [currentUser, setCurrentUser] = useState(null);

const login = () => {
  const foundUser = users.find(
    (user) =>
      user.username === username &&
      user.password === password
  );

  if (foundUser) {
    setCurrentUser(foundUser);
    setIsLoggedIn(true);
    setError("");
  } else {
    setError("Identifiants incorrects");
  }
};

const addAgent = async () => {
  const newAgent = {
    nom: "Nouvel Agent",
    matricule: `G6-${Math.floor(Math.random() * 999)}`,
    grade: "Stagiaire",
    fac: "Gruppe 6",
    statut: "Actif",
    recrutement: new Date().toLocaleDateString(),
    telephone: "",
    rib: "",
    sanctions: [],
    promotions: [],
    notes: "",
  };

  await supabase
    .from("agents")
    .insert([newAgent]);

  fetchAgents();
};

const deleteAgent = async (id) => {
  await supabase
    .from("agents")
    .delete()
    .eq("id", id);

  fetchAgents();
};

  const addSanction = (agent) => {
    const sanction = window.prompt("Entrer la sanction :");

    if (sanction) {
      const updated = [...agents];
      updated[agents.indexOf(agent)].sanctions.push(sanction);
      setAgents(updated);
    }
  };

  const addPromotion = (agent) => {
    const promotion = window.prompt("Entrer la promotion :");

    if (promotion) {
      const updated = [...agents];
      updated[agents.indexOf(agent)].promotions.push(promotion);
      setAgents(updated);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6 text-white">
        <div className="w-full max-w-md bg-zinc-950 border border-emerald-500/20 rounded-3xl p-8 shadow-2xl">
          <h1 className="text-5xl font-black text-emerald-400 text-center mb-2">
            Gruppe 6
          </h1>

          <p className="text-zinc-500 text-center mb-8">
            Système DRH sécurisé
          </p>

          <input
            type="text"
            placeholder="Identifiant"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 mb-4"
          />

          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 mb-6"
          />

          <button
            onClick={login}
            className="w-full bg-emerald-500 hover:bg-emerald-400 transition text-black font-black py-4 rounded-2xl"
          >
            Se connecter
          </button>

          {error && (
            <p className="text-red-400 mt-4 text-center">{error}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex">
      <aside className="w-72 bg-zinc-950 border-r border-zinc-800 p-6">
        <h1 className="text-4xl font-black text-emerald-400 mb-10">
          Gruppe 6
        </h1>

        <div className="space-y-3">
          <div className="bg-zinc-900 border border-emerald-500/20 rounded-3xl p-5 mb-6">
            <p className="text-zinc-500 text-sm mb-2">Connecté en tant que</p>
            <h2 className="text-2xl font-black text-emerald-400">
            {currentUser?.role} 
            </h2>
            <p className="text-zinc-400 mt-1">
            {currentUser?.username} • Gruppe 6
            </p>

            <div className="mt-4 flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-bold">
                Système sécurisé actif
              </span>
            </div>
          </div>
          <button
            onClick={() => setActivePage("dashboard")}
            className="w-full bg-emerald-500 text-black font-bold p-4 rounded-2xl"
          >
            Tableau de bord
          </button>

          <button
            onClick={() => setActivePage("sanctions")}
            className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-2xl"
          >
            Sanctions
          </button>

          <button
            onClick={() => setActivePage("promotions")}
            className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-2xl"
          >
            Promotions
          </button>

          <button
            onClick={() => setActivePage("archives")}
            className="w-full bg-zinc-900 border border-zinc-700 p-4 rounded-2xl"
          >
            Archives RH
          </button>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto">
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5 mb-8 flex items-center justify-between shadow-2xl">
          <div>
            <h1 className="text-3xl font-black text-emerald-400">
              Centre RH Gruppe 6
            </h1>
            <p className="text-zinc-500 mt-1">
              Gestion interne • Administration sécurisée • Unity RP
            </p>
          </div>

          <div className="flex gap-4">
            <div className="bg-black border border-zinc-800 rounded-2xl px-5 py-3">
              <p className="text-zinc-500 text-sm">Serveur</p>
              <p className="text-green-400 font-bold">ONLINE</p>
            </div>

            <div className="bg-black border border-zinc-800 rounded-2xl px-5 py-3">
              <p className="text-zinc-500 text-sm">Sauvegarde</p>
              <p className="text-emerald-400 font-bold">ACTIVE</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="Rechercher un agent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-zinc-900 border border-zinc-700 rounded-2xl px-5 py-4 w-96"
          />

          <button
            onClick={addAgent}
            className="bg-emerald-500 text-black font-bold px-6 py-4 rounded-2xl hover:bg-emerald-400 transition"
          >
            + Ajouter un agent
          </button>
        </div>

        {activePage === "dashboard" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
              <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
                <p className="text-zinc-400">Agents actifs</p>
                <h2 className="text-5xl font-black text-emerald-400 mt-3">
                  {activeAgents.length}
                </h2>
              </div>

              <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
                <p className="text-zinc-400">Sanctions</p>
                <h2 className="text-5xl font-black text-red-400 mt-3">
                  {agents.reduce((t, a) => t + a.sanctions.length, 0)}
                </h2>
              </div>

              <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
                <p className="text-zinc-400">Promotions</p>
                <h2 className="text-5xl font-black text-green-400 mt-3">
                  {agents.reduce((t, a) => t + a.promotions.length, 0)}
                </h2>
              </div>

              <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
                <p className="text-zinc-400">Archives</p>
                <h2 className="text-5xl font-black text-blue-400 mt-3">
                  {archivedAgents.length}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {activeAgents.map((agent) => (
                <div
                  key={agent.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-emerald-500/30 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/10"
                >
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h2 className="text-3xl font-black text-emerald-400">
                        {agent.nom}
                      </h2>

                      <p className="text-zinc-500 mt-2">
                        {agent.matricule}
                      </p>
                    </div>

                    <button
                      onClick={() => deleteAgent(agent.id)}
                      className="bg-red-500 px-4 py-2 rounded-xl font-bold"
                    >
                      Supprimer
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <input
                      value={agent.nom}
                      onChange={(e) => {
                        const updated = [...agents];
                        updated[agents.indexOf(agent)].nom = e.target.value;
                        setAgents(updated);
                      }}
                      className="bg-black border border-zinc-700 rounded-2xl px-4 py-3"
                    />

                    <input
                      value={agent.matricule}
                      onChange={(e) => {
                        const updated = [...agents];
                        updated[agents.indexOf(agent)].matricule = e.target.value;
                        setAgents(updated);
                      }}
                      className="bg-black border border-zinc-700 rounded-2xl px-4 py-3"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <input
                      value={agent.telephone}
                      placeholder="Téléphone"
                      onChange={(e) => {
                        const updated = [...agents];
                        updated[agents.indexOf(agent)].telephone = e.target.value;
                        setAgents(updated);
                      }}
                      className="bg-black border border-zinc-700 rounded-2xl px-4 py-3"
                    />

                    <input
                      value={agent.rib}
                      placeholder="RIB"
                      onChange={(e) => {
                        const updated = [...agents];
                        updated[agents.indexOf(agent)].rib = e.target.value;
                        setAgents(updated);
                      }}
                      className="bg-black border border-zinc-700 rounded-2xl px-4 py-3"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <select
                      value={agent.grade}
                      onChange={(e) => {
                        const updated = [...agents];
                        updated[agents.indexOf(agent)].grade = e.target.value;
                        setAgents(updated);
                      }}
                      className="bg-black border border-zinc-700 rounded-2xl px-4 py-3"
                    >
                      {grades.map((grade, index) => (
                        <option key={index}>{grade}</option>
                      ))}
                    </select>

                    <select
                      value={agent.statut}
                      onChange={(e) => {
                        const updated = [...agents];
                        updated[agents.indexOf(agent)].statut = e.target.value;
                        setAgents(updated);
                      }}
                      className="bg-black border border-zinc-700 rounded-2xl px-4 py-3"
                    >
                      {statuts.map((statut, index) => (
                        <option key={index}>{statut}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-red-400 text-xl font-black">
                        Sanctions
                      </h3>

                      <button
                        onClick={() => addSanction(agent)}
                        className="bg-red-500 px-4 py-2 rounded-xl"
                      >
                        + Ajouter
                      </button>
                    </div>

                    <div className="space-y-2">
                      {agent.sanctions.map((sanction, index) => (
                        <div
                          key={index}
                          className="bg-red-500/10 border border-red-500/20 rounded-2xl p-3"
                        >
                          {sanction}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-green-400 text-xl font-black">
                        Promotions
                      </h3>

                      <button
                        onClick={() => addPromotion(agent)}
                        className="bg-green-500 text-black px-4 py-2 rounded-xl"
                      >
                        + Ajouter
                      </button>
                    </div>

                    <div className="space-y-2">
                      {agent.promotions.map((promotion, index) => (
                        <div
                          key={index}
                          className="bg-green-500/10 border border-green-500/20 rounded-2xl p-3"
                        >
                          {promotion}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-black mb-3">
                      Notes RH
                    </h3>

                    <textarea
                      value={agent.notes}
                      onChange={(e) => {
                        const updated = [...agents];
                        updated[agents.indexOf(agent)].notes = e.target.value;
                        setAgents(updated);
                      }}
                      className="w-full min-h-[140px] bg-black border border-zinc-700 rounded-2xl p-4"
                    ></textarea>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activePage === "sanctions" && (
          <div className="bg-zinc-900 rounded-3xl p-8">
            <h1 className="text-5xl font-black text-red-400 mb-8">
              Sanctions
            </h1>

            <div className="space-y-4">
              {agents.map((agent) => (
                <div
                  key={agent.id}
                  className="bg-black border border-zinc-800 rounded-2xl p-5"
                >
                  <h2 className="text-2xl font-black text-emerald-400 mb-3">
                    {agent.nom}
                  </h2>

                  {agent.sanctions.map((sanction, index) => (
                    <div
                      key={index}
                      className="bg-red-500/10 border border-red-500/20 rounded-2xl p-3 mb-2"
                    >
                      {sanction}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {activePage === "promotions" && (
          <div className="bg-zinc-900 rounded-3xl p-8">
            <h1 className="text-5xl font-black text-green-400 mb-8">
              Promotions
            </h1>

            <div className="space-y-4">
              {agents.map((agent) => (
                <div
                  key={agent.id}
                  className="bg-black border border-zinc-800 rounded-2xl p-5"
                >
                  <h2 className="text-2xl font-black text-emerald-400 mb-3">
                    {agent.nom}
                  </h2>

                  {agent.promotions.map((promotion, index) => (
                    <div
                      key={index}
                      className="bg-green-500/10 border border-green-500/20 rounded-2xl p-3 mb-2"
                    >
                      {promotion}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}

        {activePage === "archives" && (
          <div className="bg-zinc-900 rounded-3xl p-8">
            <h1 className="text-5xl font-black text-emerald-400 mb-8">
              Archives RH
            </h1>

            {archivedAgents.length > 0 ? (
              <div className="space-y-4">
                {archivedAgents.map((agent) => (
                  <div
                    key={agent.id}
                    className="bg-black border border-zinc-800 rounded-2xl p-5"
                  >
                    <h2 className="text-2xl font-black text-emerald-400">
                      {agent.nom}
                    </h2>

                    <p className="text-zinc-500 mt-2">
                      {agent.grade} • {agent.matricule}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-black border border-zinc-800 rounded-3xl p-10 text-center text-zinc-500">
                Aucune archive actuellement.
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
