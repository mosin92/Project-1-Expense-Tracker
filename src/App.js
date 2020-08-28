    import React from 'react';

    import './App.css';


    import {GlobalContextProvider} from './Context/GlobalContext';

    import { MainDesign } from './MainDesign';
      function App() {
        return (
         <GlobalContextProvider>
          <MainDesign/>
        </GlobalContextProvider>
          );
      }

    export default App;
