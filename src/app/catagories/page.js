

import Category from '@/components/Category';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { cookies } from 'next/headers';


export default async function catagories() {

    const data = await getCategories();

    return (
        <>
            <Header />
            {data.categories.items.map(category => {
                return <Category id={category.id} name={category.name} categoryplaylist={[]} />;
            }
            )}
            <Footer />
        </>
    )
}


async function getCategories() {
    const cookieStore = cookies();
    const token = cookieStore.get("iplay_token")
    const response = await fetch("https://api.spotify.com/v1/browse/categories", {
        headers: {
            Authorization: 'Bearer ' + token.value
        }
    });

    return response.json()
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