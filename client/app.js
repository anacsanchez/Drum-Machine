import React from 'react';
import { DrumMachine } from './components';
import store from './store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h5>Drum Machine</h5>
          <DrumMachine />
      </div>
    </Provider>
  )
}
export default App;
