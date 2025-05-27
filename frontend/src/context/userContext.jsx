import React, { Children } from 'react';

export const UserDataContext = createContext();

const UserContext = ({children})=>{

    const [user, setUser] = useState({
        email:'',
        password:'',
        fullName:{
            firstName:'',
            lastName:''
        }
    });

    return(
        <div>
            <UserDataContext.provider value={{user, setUser}}>
            {children}
            </UserDataContext.provider>
        </div>
    )
};

export default UserContext;
