import React from 'react';
import WidgetMeteo from '../WidgetMeteo';
import './styles.scss';

function App() {
  
  return (
    <div className="app">
      <WidgetMeteo defaultCity="Saint-Paul" />
    </div>
  );
}

export default App;
