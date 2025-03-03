import React from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {

    const [user , setUser] = React.useState(null) // ye vo values h jo children use krenge

    return (
        <UserContext.Provider value = {{user, setUser}} > {/* Childrens kya value use krenge vo bhi to btana pdega. So we pass these values as an object  */}
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider