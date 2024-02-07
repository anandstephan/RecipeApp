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

export const editPost = async id =>{
    try {
        const allPost = await getMemories()
        const filteredPost = allPost.filter(post => post.id===id)
        return filteredPost[0]
    } catch (error) {
        Alert.alert("Error",error);       
    }   
}

export const resavePost = async (id,title,body,pic) =>{
    const memories = await getMemories()
    memories.forEach(mem => {
        if(mem.id === id){
            mem.title = title;
            mem.body = body;
            mem.img = pic
        }
    })
    await AsyncStorage.setItem("memories",JSON.stringify(memories))
    return "Memory Updated"
}

export const likePost = async (postId,likeId) =>{
    try {
        const memories = await getMemories()
     
        await memories.forEach(mem => {
            if(mem.id === postId){
                // console.log(mem.likes,mem.likes.push(likeId))
                mem.likes.push(likeId)
            }
        })
        console.log("newMem",memories)
        await AsyncStorage.setItem("memories",JSON.stringify(memories))
        // return "Like"

    } catch (error) {

        Alert.alert("Error4",error.message);     
    }
}
export const UnLikePost = async (postId,UnLikeId) =>{
    try {
        const memories = await getMemories()
        memories.forEach(mem => {
            if(mem.id === postId){
                console.log("unLike",mem.id)
                mem.likes = mem.likes.filter(like => like !== UnLikeId )
            }
        })
        console.log("newMem",memories)
        await AsyncStorage.setItem("memories",JSON.stringify(memories))
        return "UnLike"

    } catch (error) {
        Alert.alert("Error",error.message);     
    }
}