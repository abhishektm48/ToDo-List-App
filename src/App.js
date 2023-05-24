import About from "./Container/About";
import Profile from "./Container/Profile";
import {useState} from 'react';
import {Route,Routes,Link,useNavigate} from 'react-router-dom'
import  {AppContext} from './Appcontext';
function App() {
  const [state,setState]= useState(48)
  const history = useNavigate()
  return (
    <div className="App">
        <button onClick={()=>history('/about')}>About Me</button>
        <button onClick={()=>history('/profile')}>Profile</button>
        <AppContext.Provider value={{data:state}}>
        <Routes>
        <Route element={<About/>} path='/about' />
        <Route element={<Profile/>} path='/profile' />
        </Routes>
        </AppContext.Provider>
    </div>
  );
}

export default App;
