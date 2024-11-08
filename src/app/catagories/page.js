

import Category from '@/components/Category';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ThemeButton from '@/components/ThemeButton';
import { cookies } from 'next/headers';


export default async function catagories() {
    const cookieStore = cookies();
    const token = cookieStore.get("iplay_token")

    const data = await getCategories(token);
    //console.log("data", data.categories.items);
    

    return (
        <>
        <ThemeButton/>
            <Header />
            {data.categories.items.map(category => {
                return <Category key={category.id} cookieToken={token} id={category.id} name={category.name} categoryplaylist={[]} />;
            }
            )}
            <Footer />
        </>
    )
    
    
    async function getCategories(token) {
        
        const response = await fetch("https://api.spotify.com/v1/browse/categories", {
            headers: {
                Authorization: 'Bearer ' + token.value
            }
        });
        
        return response.json()
    }
    
}


// async function getCategoryPlaylist(categoryId) {

//     const cookieStore = cookies();
//     const token = cookieStore.get("iplay_token")
//     let response = await fetch(`https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`, {
//         headers: {
//             Authorization: 'Bearer ' + token.value
//         }
//     });

//     return response.json();
// }