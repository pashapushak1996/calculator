import './App.css';
import {Input} from "./components";
import {Buttons} from "./components";
import {Result} from "./components"
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
