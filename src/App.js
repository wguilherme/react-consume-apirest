import React from 'react';
import Header from './components/Header';

//pages
import Main from './pages/main'
import Charts1 from './pages/charts1'


const App = () => (
  <div className="App">
    <Header />
    <Charts1 />
    {/* <Main /> */}
  </div>
)
export default App;
