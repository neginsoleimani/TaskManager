import Banner1 from './banner1';
import banner2 from './banner2';
import banner3 from './banner3';
import './App.module.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Route, Switch} from 'react-router-dom';


function App() {
  return (
    <>
   <div className="App">
      <Switch>
      <Route path="/next3" component={banner3}/>
        <Route path="/next2" component={banner2}/>
        <Route  path="/" component={Banner1}/>
      </Switch>
    </div>
    </>
  );
}


export default App;
