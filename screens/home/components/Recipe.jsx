import {View,Image,StyleSheet,Pressable,Text} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../../../constants/styles';
const Recipe = (props) =>{

    const navigation =  useNavigation()
    const onPressHandler= () =>{
        navigation.navigate('Info',{info:props})
    }
return <Pressable onPress={onPressHandler} style={({pressed}) => pressed && styles.pressed}> 
<View style={styles.container}>   
    <Image
    source={{uri:props.image}}
    style={styles.image}
    />
    <View style={styles.innerContainer}>
        <Text style={styles.heading}>{props.label}</Text>
    </View>
</View>
</Pressable>
}

export default Recipe

const styles = StyleSheet.create({
    pressed:{
        opacity:0.75
    },
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:100,

    },
    heading:{
        color:GlobalStyles.colors.accent500,
        fontSize:30,
        fontWeight:"bold"
    },
    image:{
        width:'100%',
        height:300,
        marginVertical:5
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
    }
})