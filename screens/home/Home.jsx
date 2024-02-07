import { useEffect, useState } from "react"
import { View,TextInput,StyleSheet,FlatList,Button } from "react-native"
import Recipe from "./components/Recipe"


const Home = () =>{
    const [recipes,setRecipes] = useState([]);
    const [search,setSearch] = useState('');
    const [query,setQuery] = useState('chicken');
    const APP_ID = 'dc34792b';
    const APP_KEY = '3eab1a651f78f58e8b394f905f3efa21'

    
    useEffect(() =>{
    getRecipes()
    },[query])
    
    const getRecipes = async () =>{
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
      const data = await response.json()
      // console.log(response)
      // console.log(data)
      setRecipes(data.hits)
    }
    const getSearch = e =>{
      e.preventDefault();
      console.log("hi")
      setQuery(search)
      setSearch('')
    }


return <View >
        <TextInput style={styles.input}
        placeholder="Enter the Recipe Name..."
        onChangeText={text => setSearch(text)}
       value={search}
       />
       <Button
       title="submit"
       onPress={getSearch}
       />
       <FlatList
       renderItem={({item})=><Recipe {...item.recipe}/>}
       data={recipes}
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