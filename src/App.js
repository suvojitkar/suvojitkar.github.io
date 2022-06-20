import './App.css';

function App() {
  const sreeparna = {
    Height: "5'4",
    Age: 25,
    Weight: "54 kg",
    Location: "North Barrackpur",
    Gothram: "Parashar",
    Raasi: "Kanya (Virgo)",
    Community: "Kayastha (Bengali), Chanda",
    Degree: "M.Sc. Degree",
    Collage: "East Calcutta Girls' College",
    horoscope: "67% Horoscope",
    brother: "No",
    sister: "No",
    Father: "employed",
    Mother: "homemaker",
    phone: <button> ph number </button>
  }

  const ananya = {
    Height: "5'4",
    Age: "25 years and 11 months",
    Weight: "-",
    Location: "Rishra",
    Gothram: "-",
    Raasi: "Meen (Pisces)",
    Community: "Kayastha (Bengali)",
    Degree: "M.A. Degree",
    Collage: "Basanti Devi College",
    horoscope: "-",
    brother: "1 Brother, Not Married",
    sister: "No",
    Father: "business man",
    Mother: "homemaker",
    phone: <button> ph number </button>
  }


  return (
    <div className="App">
      <nav> Suvojit </nav>

      <div className="card">
      <h1> sreeparna chanda</h1>
        <div className="images">
          <img src="https://suvojitkar.github.io/test/Assets/sreeparna/1.png" alt="img"/>
          <img src="https://suvojitkar.github.io/test/Assets/sreeparna/2.png" alt="img"/>
          <img src="https://suvojitkar.github.io/test/Assets/sreeparna/3.png" alt="img"/>
          <img src="https://suvojitkar.github.io/test/Assets/sreeparna/4.png" alt="img"/>
        </div>
        <br></br>
        <div className="details">
          <br></br>
          {Object.keys(sreeparna).map(function(keyName, keyIndex) {
            return (
                <div key={keyName}>
                {keyName}: {sreeparna[keyName]}
                </div>
            )
          })}
        </div>
        <br></br>
      </div>
      
      <br></br>
      
      <div className="card">
      <h1> Ananya sinha roy </h1>
        <div className="images">
          <img src="/test/Assets/ananya/1.png" alt="img"/>
          <img src="/test/Assets/ananya/2.png" alt="img"/>
          <img src="/test/Assets/ananya/3.png" alt="img"/>
          <img src="/test/Assets/ananya/4.png" alt="img"/>
          <img src="/test/Assets/ananya/5.png" alt="img"/>
          <img src="/test/Assets/ananya/6.png" alt="img"/>
          <img src="/test/Assets/ananya/7.png" alt="img"/>
        </div>
        <br></br>
        <div className="details">
          {Object.keys(ananya).map(function(keyName, keyIndex) {
            return (
                <div key={keyName}>
                {keyName}: {ananya[keyName]}
                </div>
            )
          })}
        </div>
      </div>
      
    </div>
  );
}

export default App;
