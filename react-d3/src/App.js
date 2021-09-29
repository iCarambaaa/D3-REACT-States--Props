import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyBadge from './components/MyBadge';
import  WarningSing  from './components/WarningSign';

function App() {
  return (
    <div>
<WarningSing str=" little code. "/>
<MyBadge text="hello badge!" color="success"/>
    </div>
  );
}

export default App;
