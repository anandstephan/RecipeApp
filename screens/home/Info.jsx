import {View,Text,Image,StyleSheet,FlatList} from 'react-native'
import { useRoute } from '@react-navigation/native';
import Ingredients from './components/Ingredients';

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
    data={params.info.ingredients}
    renderItem={({item})=><Ingredients {...item}/>}
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