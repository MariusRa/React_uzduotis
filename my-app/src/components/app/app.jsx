import './app.css'

import Nav from '../../components/nav/nav';
import Header from '../../components/header/header';
import Main from '../../components/main/main';
import Footer from '../../components/footer/footer';



function App() {
    return (
        <div className='reactDemo'>
            <Nav/>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}
export default App;