import {View,Image,StyleSheet,Pressable,Text} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../../../constants/styles';
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
       <View style={styles.innerContainer}>
        <Text style={styles.heading}>{props.title}</Text>
    </View>
</View>
</Pressable>
}

export default Fav

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    image:{
        width:'100%',
        height:300,
        marginVertical:10
    },
    innerContainer:{
        backgroundColor:GlobalStyles.colors.primary500,
        opacity:0.7,
        width:'100%',
        paddingHorizontal:20,
        paddingVertical:10,
        marginTop:-100,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },
    heading:{
        color:GlobalStyles.colors.accent500,
        fontSize:30,
        fontWeight:"bold"
    },
})