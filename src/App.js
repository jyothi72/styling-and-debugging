import React,{useState}from 'react';
import Userlist from'./components/userlist'

import Formitem from './components/formitems';
function App() {
  const[userlist,setuserlist]=useState([])
  const userenterhsndler=(uname,uage,ucollege)=>{
    setuserlist((prev)=>{
        return[...prev,{name:uname,age:uage,college:ucollege}]
    })
  }
  return (
    <div>
     <Formitem onUserenter={userenterhsndler}/>
     <Userlist users={userlist}/>
    </div>
  );
}

export default App;
