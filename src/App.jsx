import OraCard from "./components/OraCard";
import OraForm from "./components/OraForm";
import Oraszam from "./components/Oraszam";
import Temakorok from "./components/temakorok";
import { orakLista } from "./lib/orak";
import { useState } from "react";

const App = () => {
  const [orak, setOrak] = useState(orakLista);

  return (
    <main>
      <h1>Bevezetés a programozásba</h1>

      <Oraszam orakATanmenetben={orak.length} />
      <Temakorok/>
      <OraForm/>
      <section className="ora-grid">
        {orak.map((ora) => (
          <OraCard
            key={ora.oraSzam}
            oraSzam={`${ora.oraSzam}. óra`}
            cim={ora.cim}
          >
            {ora.leiras}
          </OraCard>
        ))}
      </section>
    </main>
  );
};

export default App;