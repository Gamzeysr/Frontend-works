import Card from "./component/card/Card";
import data from "./util/data";



function App() {
  //JS
  return (
    //JSX
    <>
      {data.map((item) => {

        return <Card />;
      })}

    </>
  );
}

export default App;
