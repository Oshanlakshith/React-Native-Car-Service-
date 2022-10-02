import React from 'react';
import { View,StyleSheet,Image,Text,TextInput, TouchableOpacity} from "react-native";

 const Loging=()=>{
    return(
<View>
    <Text style={styles.text}>
        LOGING FORM
        </Text>
<Image style={styles.image} source={require('../assets/image/loging1.jpg')} />  
<View style={styles.feilds}>
<TextInput style={styles.input} placeholder="User Name" keyboardType="text" />
       <TextInput style={styles.input}
           placeholder="Password"
           returnKeyType='go'
           secureTextEntry
           autoCorrect={false}
/>
</View>

<TouchableOpacity style={styles.button}>
     <Text style={styles.buttontext}>Loging</Text>
     </TouchableOpacity>
 
</View>

        );
    };
const styles=StyleSheet.create({
    input: {
        height: 50,
        marginTop: 25,
        borderRadius:30,
        borderWidth: 1,
        padding: 10,
        width:280
      },
      tinyLogo: {
        width: 100,
        height: 100,

      },
      container:{
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        marginTop:30,
        width:'100%',
        height:'50%',
        justifyContent:'center',
        autoCorrect:'cover'
    },
    text:{
        fontWeight: 'bold',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        color: 'black',
        fontSize:30
    },
    feilds:{
        justifyContent:'center',
        textAlign:'center',
        marginLeft:50
    },
    button:{
        width:'60%',
        padding:5,
        fontSize:20,
        backgroundColor:"blue",
        height:50,
       marginLeft:80,

        alignItems:'center',
        justifyContent:'center',
        marginTop:'3%',
        borderRadius:100
      },
      buttontext:{
        color: 'white',
        textAlign:'center',
        fontWeight: 'bold',
      },

});
export default Loging;
 