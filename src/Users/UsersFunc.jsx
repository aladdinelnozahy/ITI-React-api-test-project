// rfc shortcut for function component  --> () simple react snippets extention )
// rcc shortcut for class component  --> () simple react snippets extention )
import React from 'react';
import {useState} from 'react';

export default function UsersFunc() {

    const [users, setUsers] = useState([
            { name: "Aladdin", email: "aladdin@gmail.com", isAdmin: true },
            { name: "Mona", email: "mona@gmail.com", isAdmin: true },
            { name: "Hend", email: "hend@gmail.com", isAdmin: true },
            { name: "Ali", email: "ali@gmail.com", isAdmin: true },
            { name: "Abdo", email: "abdo@gmail.com", isAdmin: false }
        ]);
        const [isAuth, setAuth] = useState(true);
        const changeAuth=()=>{
            setAuth(!setAuth)
        }
            return (
        <>
            {isAuth?<ul>

                {users.map((user, index)=>{
                    if (user.isAdmin) {
                        return <li key={index}>{user.name}</li>;
                    }
                })}

            </ul>
            :<p>please login first</p>}
            <button onClick={()=>changeAuth()} className='btn btn-warning'>Click</button>
        </>
    );
}
