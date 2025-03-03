// STEP 1 : line 3,5,7 create and export the context

import React from "react";

const UserContext = React.createContext();

export default UserContext



// 1 bar context bn gya to uska 1 provider bhi bnana pdta h
// provider ki help se global variables ka access mil jayega sbhi wrapped components ko

{/* <UserContext> ==> ye h provider
            <Login></Login> ==> ye use krenge variables ko
            <Card/> ==> ye use krenge variables ko
            <Home/> ==> ye use krenge variables ko
</UserContext> */}