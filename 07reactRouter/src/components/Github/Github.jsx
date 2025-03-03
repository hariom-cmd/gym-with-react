import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()

  // Mrko followers tab show krne h jese component load/mount ho ===> indicartes mrko useEffect() use krna chahiye

//   const [data , setData] = useState([]);
//   useEffect( () => {
//     fetch('https://api.github.com/users/hiteshchoudhary')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         setData(data);
//     }
//     )
//   } , [] )

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers : {data.followers}
        <img  src={data.avatar_url} alt="Profile Picture" width={200}/>
    </div>
  )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}

export default Github
