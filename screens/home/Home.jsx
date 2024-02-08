import React, { useEffect, useState, useCallback } from "react";
import { View, TextInput, StyleSheet, FlatList,Text } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import Recipe from "./components/Recipe";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(search);

  const APP_ID = "dc34792b";
  const APP_KEY = "3eab1a651f78f58e8b394f905f3efa21";

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(search);
    }, 500); // Adjust the debounce time as needed

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  useEffect(() => {
    getRecipes();
  }, [debouncedSearchTerm]);

  const getRecipes = async () => {
    let term = debouncedSearchTerm.length!==0 ? debouncedSearchTerm :"momo"
    const response = await fetch(
      `https://api.edamam.com/search?q=${term}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter the Recipe Name..."
        onChangeText={(text) => setSearch(text)}
        value={search}
        placeholderTextColor={"#FFF"}
      />
      {
        recipes.length!==0 ?
        <FlatList
        renderItem={({ item }) => <Recipe {...item.recipe} />}
        data={recipes}
      />
        : 
        <View style={styles.container2}>
            <Text style={{color:GlobalStyles.colors.accent500,fontSize:20}}>No Recipe Found</Text>
        </View>
      }
    
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    backgroundColor: GlobalStyles.colors.primary200,
    color: "#FFFFFF",
    fontSize: 20,
  },
  container:{
    backgroundColor:GlobalStyles.colors.primary500,
    flex:1
  },
  container2:{
    marginTop:60,
    justifyContent:'center',
    alignItems:"center",
    flexDirection:"row",
    // height:"100%",
    backgroundColor:GlobalStyles.colors.primary500,
    flex:1,

},
});
