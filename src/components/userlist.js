import React from "react";
import Card from "./card";
import classes from './user.module.css'
const Userlist = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.name}>
              {user.name} ({user.age}years old) {user.college}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};
export default Userlist;
