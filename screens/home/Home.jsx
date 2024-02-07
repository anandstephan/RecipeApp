import { useEffect, useState } from "react"
import { View,TextInput,StyleSheet,FlatList } from "react-native"
import Recipe from "./components/Recipe"


const Home = () =>{
const [input,setInput] = useState('momo')
const [data,setData] = useState([])
const APP_ID = 'dc34792b';
const APP_KEY = '3eab1a651f78f58e8b394f905f3efa21'
const getRecipes = async () =>{
    const response = await fetch(`https://api.edamam.com/search?q=${input}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json()
    console.log(data.hits)
    setData(data.hits)
    // setRecipes(data.hits)
  }

useEffect(()=>{
    getRecipes()
},[input])
console.log(input)
return <View >
        <TextInput style={styles.input}
        placeholder="Enter the Recipe Name..."
        onChangeText={setInput}
       value={input}
       />
       <FlatList
       renderItem={({item})=><Recipe {...item.recipe}/>}
       data={data}
       />
</View>
}

export default Home

const styles = StyleSheet.create({
    input:{
        width:"100%",
        borderWidth:2,
        
    }
})