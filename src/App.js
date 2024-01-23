import './App.css'; //without this all base , components and utilities files of tailwind wont be called!
import store from './utils/store';
import { Provider } from 'react-redux';
import Theme from './components/Theme';
function App() {
  return (
    <Provider store={store}>
    <div >
      <Theme />
    </div>
    </Provider>
  );
}

export default App;
