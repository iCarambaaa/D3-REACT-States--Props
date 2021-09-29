import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyBadge from './components/MyBadge';
import  WarningSing  from './components/WarningSign';
import BookList from "./components/BookList ";
import History from "./history.json";



function App() {
  return (
    <div>
<WarningSing str=" little code. "/>
<MyBadge text="hello badge!" color="success"/>

<BookList list={History} />
    </div>
  );
}

export default App;
