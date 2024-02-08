import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert } from "react-native"

export const signup = async (id,name,email,password,image) =>{
    try {
        const response = await AsyncStorage.setItem("userDetail",JSON.stringify({id,name,email,password}))
        return "User Added Successfully";
    } catch (error) {
     Alert.alert("Error",error);   
    }
}

export const login = async (email,password) =>{
    try {
        const response = await AsyncStorage.getItem("userDetail")
        const parsedRes = JSON.parse(response)
        if(response===null || response===undefined){
            return "There is no User yet please signup first"
        }
        else if(parsedRes.email!==email){
        return "Email is not matched";          
        }else if(parsedRes.password!==password){
            return "Password is not matched"
        }
        else{
            return "You're Successfully Login"
        }
    } catch (error) {
        return        Alert.alert("Error",error.message);      
    }
}

export const addToFavorites = async (imageUrl,title,cal,weight,ingredients) =>{
  
   try {
    let favorites ;
    let response = await getFavorites()
    if(response === null){
        favorites=[]
    }else{
        favorites = response
    }
    let newIngredients = JSON.stringify(ingredients)
    favorites.push({imageUrl,title,cal,weight,newIngredients})
    await AsyncStorage.setItem("Favorites",JSON.stringify(favorites))
    return "Favorite Added"
   } catch (error) {
    return  Alert.alert("Error",error.message);  
   } 
}


export const getUserDetail = async () =>{
    try {
        const response = await AsyncStorage.getItem("userDetail")
        return JSON.parse(response);
        
    } catch (error) {
        Alert.alert("Error",error);      
    }
}

export const deleteUserDetail = async () =>{
    try {
        await AsyncStorage.removeItem('userDetail')
    } catch (error) {
        Alert.alert("Error",error.message);      
    }
}

export const getFavorites = async () =>{
    try {
        const response = await AsyncStorage.getItem("Favorites")
        if(response===null) return null;
        return JSON.parse(response);
        
    } catch (error) {
        Alert.alert("Error",error.message);      
    }
}

export const deleteFav = async (title) =>{
    try {
        const favorites = JSON.parse(await AsyncStorage.getItem('Favorites'))
        console.log(favorites)
        favorites.forEach((fav,index)=>{
            if(fav.title === title)
            favorites.splice(index,1);
        })
        await AsyncStorage.setItem("Favorites",JSON.stringify(favorites))
        return "Delete Favorites"

    } catch (error) {
        Alert.alert("Error",error.message);      
    }
}





