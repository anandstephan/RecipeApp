import {View,Image,StyleSheet,Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native';
const Fav = (props) =>{

    const navigation =  useNavigation()
    const onPressHandler= () =>{
        const newObj = {image:props.imageUrl,label:props.title,calories:props.cal,totalWeight:props.weight,ingredients:JSON.parse(props.newIngredients),isFav:true}
        navigation.navigate('Info',{info:newObj})
    }
return <Pressable onPress={onPressHandler}> 
<View style={styles.container}>   
    <Image
    source={{uri:props.imageUrl}}
    style={styles.image}
    />
</View>
</Pressable>
}

export default Fav

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItem:"center"
    },
    image:{
        width:'100%',
        height:300,
        marginVertical:10
    }
})