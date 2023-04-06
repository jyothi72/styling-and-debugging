import React, { useState } from "react";
import Card from "./card";
import Errored from'./errored'
import Button from'./button'
import classes from'./formitem.module.css'
const Formitem = (props) => {
  const [name, setname] = useState("");
  const [college, setcollege] = useState("");
  const [num, setnum] = useState("");
  const[error,seterror]=useState()
  const showname = (event) => {
    setname(event.target.value);
  };
  const shownum = (event) => {
    setnum(event.target.value);
  };
  const showcollege = (event) => {
    setcollege(event.target.value);
  };
  const saveentered = (event) => {
    event.preventDefault();
    if(name.trim().length===0||num.trim().length===0||college.trim().length===0)
    {
        seterror({
            title:'invalid input',
            message:'pls enter valid name and age(no empty)'
        })
        return
    }
    if(+num<1){
        
        seterror({
            title:'invalid input',
            message:'pls enter age(>0)'
        })
        return;
    }
    props.onUserenter(name,num,college);
    setname("");
    setnum("");
    setcollege("")
  };
  const errorhandler=()=>{
    seterror(null)
  }
  return (
    <div>
    {error&&<Errored title={error.title} message={error.message} onConfirm={errorhandler}/>}
    <Card className={classes.input}>
      <form onSubmit={saveentered}>
        <label htmlFor="jyo">name</label>
        <input id="jyo" type="text" value={name} onChange={showname} />

        <label htmlFor="aged">num</label>
        <input id="aged" type="number" value={num} onChange={shownum} />
        <label htmlFor="college">college</label>
        <input id="college" type="text" value={college} onChange={showcollege} />

        <Button type='submit'>Adduser</Button>
      </form>
    </Card>
    </div>
  );
};
export default Formitem; 
