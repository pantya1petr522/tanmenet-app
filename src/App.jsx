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
      <hr />
      <OraForm onOraHozzaad={(ora) => setOrak((prev) => [...prev, ora])}/>
      <section className="ora-grid">
        {orak.map((ora, index) => (
          <OraCard
            key={index}
            oraSzam={`${index + 1 }. óra`}
            cim={ora.cim}
            onKartyaTorles={() => 
              setOrak((prev) => prev.filter((ora, i) => i !== index))}
          >
            {ora.leiras}
          </OraCard>
        ))}
      </section>
    </main>
  );
};

export default App;