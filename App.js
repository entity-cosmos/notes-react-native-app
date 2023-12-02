import { Provider } from 'react-redux';
import store from './src/modules/store/store';
import Home from './src/pages/home';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <Provider store={store}>
    <PaperProvider>
      <Home />
    </PaperProvider>
    </Provider>
  )
}

