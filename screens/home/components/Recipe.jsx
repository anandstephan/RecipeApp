import {View,Image,StyleSheet,Pressable} from 'react-native'
import { useNavigation } from '@react-navigation/native';
const Recipe = (props) =>{
   
    const navigation =  useNavigation()
    const onPressHandler= () =>{
        navigation.navigate('Info',{info:props})
    }
return <Pressable onPress={onPressHandler}> 
<View style={styles.container}>   
    <Image
    source={{uri:props.image}}
    style={styles.image}
    />
</View>
</Pressable>
}

export default Recipe

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