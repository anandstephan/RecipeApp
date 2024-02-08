import {View,Text,StyleSheet} from 'react-native'
import { GlobalStyles } from '../../../constants/styles'
const Ingredients = ({text}) =>{
return <View style={styles.container}>
    <Text style={styles.textstyle}>{text}</Text>
</View>
}

export default Ingredients

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:'center',
    alignItems:"center",
    // width:'80%'
    borderWidth:2,
    borderColor:GlobalStyles.colors.error500,
    // paddingHorizontal:10,
    marginVertical:10,
    paddingVertical:10
  },
  textstyle:{
    fontSize:15,
    color:GlobalStyles.colors.accent500
      }
})