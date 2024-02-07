import {View,Text,Image,StyleSheet,FlatList,Button} from 'react-native'
import { useRoute } from '@react-navigation/native';
import Ingredients from './components/Ingredients';
import { addToFavorites, deleteFav } from '../../storage/storage';


const Info = () =>{

    const {params} = useRoute();
  
    
return <View>
    <Image
    style={styles.image}
    source={{uri:params.info.image}}
    />
    <Text>{params.info.label}</Text>
    <Text>Calories -: {Math.round(params.info.calories,2)}k/cal</Text>
    <Text>Weight -: {Math.round(params.info.totalWeight,2)}g</Text>
    <Text>Ingredients</Text>
    <FlatList
    height={200}
    data={params.info.ingredients}
    renderItem={({item})=><Ingredients {...item}/>}
    />
    <Button
        onPress={() => {
          // Add your button press logic here
          params.info?.isFav ?deleteFav(params.info.label): addToFavorites(params.info.image,params.info.label,Math.round(params.info.calories,2),Math.round(params.info.totalWeight,2),params.info.ingredients) 
        }}
        title={params.info?.isFav?"Remove":"Add"}
        color="#007AFF" // You can set the color according to your preference
      />
    
</View>
}

export default Info

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:300,
        marginVertical:10
    }
})