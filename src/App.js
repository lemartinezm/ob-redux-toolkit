import { Provider } from 'react-redux';
import './App.css';
import BoxAction from './components/container/BoxAction';
import { store } from './store/config/store.config';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BoxAction />
      </Provider>
    </div>
  );
}

export default App;
