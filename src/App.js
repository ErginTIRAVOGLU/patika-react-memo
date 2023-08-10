import { useCallback, useMemo, useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("0");
  /*
  const data = useMemo(() =>{
    return  {name :"Mehmet", number};
    },[number])
*/ 


  const data = useMemo(() => {
    return calculateObject();
  }, [text]);
  

  //const data = calculateObject();

  const increment=useCallback(
    () => {
     setNumber((prevState) => prevState + 1)
    },[],);

  return (
    <div className="App">
      <Header number={number < 5 ? 0 : number} data={data} increment={increment} />
      <hr />
      <h2>{number}</h2>
      <br /><br />
      {/*<button onClick={() => setNumber(number + 1)}>Click</button>*/}

      <input value={text} onChange={({target}) => setText(target.value)} />
    </div>
  );
}
function calculateObject() {
  console.log("Calculating...");
  for(let i =0 ; i<1000000000;i++)
  {}
  console.log("Calculating done!");
  return { name: "Ahmet" };
}

export default App;
