import React from 'react';
const { View, TouchableHighlight,StyleSheet } = require("react-native")
import { Avatar ,Button} from 'react-native-paper';


const ImageUpload=()=>{
  const [Pic,SetPic]=React.useState("")
  return(
    <View >
      <View style={styles.centerContent}>
      <TouchableHighlight
      onPress={()=>uploadImage()}
      underlayColor="rgba(0,0,0,0)">
  <Avatar.Image
  size={250}
  source={{uri:'data:image/png:base64,'+Pic}}
/>
</TouchableHighlight>
</View>
<View style={(styles.centerContent,{margineTop:25,flexDirection:'row'})}>
<Button mode="contained" onPress={()=>uploadImage()}>
Upload Image
</Button>
<Button 
mode="contained" 
style={{marginLeft:23}}
 onPress={()=>uploadImage()}>
Remove Image
</Button>
</View>
    </View>
  )
}
const styles=StyleSheet.create({
  centerContent:{
    justifyContent:'center',
    alignItems:'center',
    margineTop:100,
  },
})

export default ImageUpload