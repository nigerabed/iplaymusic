// import Link from "next/link";
"use client";

import { useEffect, useState } from "react";

export default function CategoryPlaylist({ playlist, id,cookieToken }) {
  const [singleCategory, setSingleCategory] = useState([]);


  useEffect(() => {
    async function getSingleCategorieId(id = 0) {
     
      const response = await fetch(
        `https://api.spotify.com/v1/browse/categories/${id}`,
        {
          headers: {
            Authorization: "Bearer " + cookieToken.value,
          },
        }
      );

      const data = [await response.json()] 

      console.log(data);
      
      
      setSingleCategory(data)
    }
    
    //console.log('hello');
    getSingleCategorieId(id);
  }, []);



  return (

          <>
          {singleCategory.map((item) => (
           <a key={item.id} href={`/categories/${item.id}`}>
           <p>{item.name}</p>
           </a>
          ))}
        </>
  );
}

// async function getSingleCategorieId(id) {
//     const cookieStore = cookies();
//     const token = cookieStore.get("iplay_token")
//     const response = await fetch(`https://api.spotify.com/v1/browse/categories/${id}`, {
//         headers: {
//             Authorization: 'Bearer ' + token.value
//         }
//     });

//     return response.json()
// }
