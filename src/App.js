import './App.css';
import {Input} from "./components/input";
import {Buttons} from "./components/buttons";
import {Result} from "./components/result"
//todo создать три компоненты кнопки, инпут, резалт соответственно перенести чать логики туда


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
