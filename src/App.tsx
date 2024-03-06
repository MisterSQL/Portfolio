import './App.css';
import AppHeader from "./layout/AppHeader";
import {GlobalStyles} from "./styles/GlobalStyles";



export default function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <AppHeader />
        </div>
    );
}
