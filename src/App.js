import './App.css'; //without this all base , components and utilities files of tailwind wont be called!
import Header from "./components/Header";
import Body from "./components/Body";
function App() {
  return (
    <div>
      <Header/>
      <Body />
    </div>
  );
}

export default App;
