

import Category from '@/components/Category';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { cookies } from 'next/headers';




export default async function catagories() {
  

    const cookieStore = cookies();
    const token = cookieStore.get("iplay_token")
    console.log(token.value);
    const response = await fetch("https://api.spotify.com/v1/browse/categories  ", {
        headers: {

            Authorization: 'Bearer ' + token.value
        }
    })
    const data = await response.json()
    //console.log("-----catagories", data.categories.items);

    

   


    return (
        <>
            <Header />
            {data.categories.items.map(category=>(
                <Category id={category.id} name={category.name} />

            ))}
            <Footer/>
        </>
    )
}