import {View,Text,Image,StyleSheet,FlatList,Button,Pressable} from 'react-native'
import { useRoute } from '@react-navigation/native';
import Ingredients from './components/Ingredients';
import { addToFavorites, deleteFav } from '../../storage/storage';
import { GlobalStyles } from '../../constants/styles';


const Info = () =>{

    const {params} = useRoute();
  
    
return <View style={styles.container}>
    <Image
    style={styles.image}
    source={{uri:params.info.image}}
    />
    <View style={styles.innerContainer}>    
    <Text style={styles.textStyle}>{Math.round(params.info.calories,2)}k/cal</Text>
    <Text style={styles.textStyle}>{params.info.label}</Text>
    <Text style={styles.textStyle}> {Math.round(params.info.totalWeight,2)}g</Text>

    </View>
    <View style={styles.ingredContainer}>
    <Text style={styles.ingredText}>Ingredients</Text>
    </View>
    <FlatList
    height={200}
    data={params.info.ingredients}
    renderItem={({item})=><Ingredients {...item}/>}
    />
      <Pressable
         onPress={() => {
            // Add your button press logic here
            params.info?.isFav ?deleteFav(params.info.label): addToFavorites(params.info.image,params.info.label,Math.round(params.info.calories,2),Math.round(params.info.totalWeight,2),params.info.ingredients) 
          }}
      style={({pressed}) => pressed && styles.pressed}>
        <View style={styles.btnContainer}>
            <Text style={styles.textbtn}>{params.info?.isFav?"Remove From Favorites":"Add to Favorites"}</Text>
        </View>
      </Pressable>
    
</View>
}

export default Info

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:300,
        borderRadius:10
    },
    ingredText:{
        fontSize:20,
        color:GlobalStyles.colors.error500,
        marginVertical:20,

    },
    ingredContainer:{
        justifyContent:'center',
        alignItems:"center",
        flexDirection:"row",
    },
    textbtn:{
        color:GlobalStyles.colors.accent500,
        fontSize:20
    },
    btnContainer:{
        backgroundColor:GlobalStyles.colors.error500,
        justifyContent:"center",
        alignItems:'center',
        flexDirection:"row",
        padding:10
    },
    pressed:{
        opacity:0.75
    },
    container:{
        backgroundColor:GlobalStyles.colors.primary200,
        flex:1
    },
    innerContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:10,
        borderWidth:2,
        borderColor:GlobalStyles.colors.accent500,
        marginTop:10,
        backgroundColor:GlobalStyles.colors.primary500,
        opacity:0.7,
        paddingHorizontal:20,
        paddingVertical:20,
    },
    textStyle:{
        color:GlobalStyles.colors.accent500,
        fontSize:20,

    }
})