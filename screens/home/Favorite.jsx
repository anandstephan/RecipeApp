import { useEffect, useState } from "react"
import { View,Text,FlatList } from "react-native"
import { getFavorites } from "../../storage/storage"
import Fav from "./components/Fav"

const Favorite = () =>{
    const [fav,setFav] = useState([])
useEffect(()=>{
    async function getFav(){
        let favorites = await getFavorites()
        setFav(favorites)
    }
    getFav()
},[])

    return <View>
        <Text>
            Favorite
        </Text>
        <FlatList
        data={fav}
        renderItem={({item}) => <Fav {...item}/>}
        />
    </View>
}

export default Favorite