import React from 'react'

function PropsDemo({user}) {

  const {userName, userAge} = user;
  return (
    <div> 
        <p>Welcome {userName}  Your age is {userAge}.</p> 
    </div>
  )
}

export default PropsDemo