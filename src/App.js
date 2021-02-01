import React, {Fragment} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './sass/layout.sass'

const App = () => {
    return ( 
        <Fragment>
            <Header />
            <Main />
            <Footer />
        </Fragment>
     );
}
 
export default App;