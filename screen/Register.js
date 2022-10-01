import { Text,StyleSheet, View ,TextInput,TouchableOpacity} from "react-native";

const Register = () => {
    return (
        <View style={styles.container}>
        
      <Text style={styles.baseText}>
        REGISTER 
      </Text>
      <TextInput style={styles.input} placeholder="NIC" keyboardType="numeric" />
       <TextInput style={styles.input} placeholder="Name" keyboardType="text" />
       <TextInput style={styles.input} placeholder="Address" keyboardType="text" />
       <TextInput style={styles.input} placeholder="Contact" keyboardType="numeric"/>
       <TextInput
        style={styles.input}
        placeholder="Vehicle Number"
        keyboardType="text"
      />
     <TouchableOpacity style={styles.button}>
     <Text style={styles.buttontext}>Register</Text>
     </TouchableOpacity>
       
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    baseText: {
      fontWeight: 'bold',
      color: 'black',
      fontSize:30
    },
    container:{
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
    },
    input: {
        height: 50,
        marginTop: 25,
        borderRadius:30,
        borderWidth: 1,
        padding: 10,
        width:280
      },
      button:{
        width:'60%',
        padding:5,
        fontSize:20,
        backgroundColor:"black",
        height:50,
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
      image:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
      },
  });
  
  export default Register;