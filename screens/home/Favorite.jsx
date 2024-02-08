import { useEffect, useState } from "react"
import { View,Text,FlatList,StyleSheet } from "react-native"
import { getFavorites } from "../../storage/storage"
import Fav from "./components/Fav"
import { useIsFocused } from '@react-navigation/native';
import { GlobalStyles } from "../../constants/styles";

const Favorite = () =>{
    const [fav,setFav] = useState([])
    const focused = useIsFocused()
    if(focused){
        async function getFav(){
            let favorites = await getFavorites()
            setFav(favorites)
        }
        getFav()
    }

    

    return fav.length===0 ? <View style={styles.container}>
        <Text style={{color:GlobalStyles.colors.accent500,fontSize:20}}>No Favorites Right Now</Text>
    </View>
    :
    <View style={styles.otherContainer}>
        <View style={styles.textContainer}>
        <Text style={styles.textStyle}>
            Favorite
        </Text>
        </View>
        <FlatList
        data={fav}
        renderItem={({item}) => <Fav {...item}/>}
        />
    </View>
}

export default Favorite

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:"center",
        flexDirection:"row",
        height:"100%",
        backgroundColor:GlobalStyles.colors.primary200,
    
    },
    otherContainer:{
        backgroundColor:GlobalStyles.colors.primary200,
        flex:1
    },
    textContainer:{
        justifyContent:'center',
        alignItems:"center"
    },
    textStyle:{
        color:'#FFF',
        fontSize:20
    }
})