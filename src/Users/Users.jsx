import React from "react";

export default class Users extends React.Component{

    constructor(){
        super()
        this.state={
            isAuth:true,
            users:[
                {name:"Aladdin",email:"aladdin@gmail.com"},
                {name:"Mona",email:"mona@gmail.com"},
                {name:"Hend",email:"hend@gmail.com"},
                {name:"Ali",email:"ali@gmail.com"},
                {name:"Abdo",email:"abdo@gmail.com"},
            ]
        }
    }
    render(){

        return(
            // conditional rendering 
            <>
            {this.state.isAuth?
             <ul>
             {this.state.users.map((user,index)=>{
                 return <li key={index}>{user.name}</li>
             })}
         </ul>:<p>please login first </p>
            
            }
           
            
            
            </>
        )
    }


}
