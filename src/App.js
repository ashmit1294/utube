import './App.css'; //without this all base , components and utilities files of tailwind wont be called!
import Header from "./components/Header";
import Body from "./components/Body";
import store from './utils/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
    <div>
      <Header/>
      <Body />
    </div>
    </Provider>
  );
}

export default App;
