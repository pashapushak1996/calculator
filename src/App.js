import './App.css';
import {Input} from "./components";
import {Buttons} from "./components";
import {Result} from "./components"

const App = () => {
    return (
        <div className={'container d-flex dir-column align-center'}>
            <Result/>
            <Buttons/>
            <Input/>
        </div>
    );
}

export default App;
