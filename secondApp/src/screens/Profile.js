import React from "react"
import { Text, View, StyleSheet, Image} from "react-native"

const Profile = () => {
  return (
    <View style={styles.viewStyle}>
        <Image
                source = {require ('../../assets/profile.jpg')}
                style={styles.imageStyle}
        />
        <Text style = {styles.textStyle}>
            Name: Md. Rafid Islam{"\n"}
            Student ID: 170042009{"\n"}
            Room No: Non residential{"\n"}
            Email: rafidislam@iut-dhaka.edu{"\n"}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    color: "black",
    alignSelf: "center",
  },
  viewStyle: {
    margin: 50,
    alignSelf: "center",
    backgroundColor: "lightgrey"
  },
  imageStyle: {
    margin: 26,  
    height: 260,
    width: 260,
    alignSelf: 'center',
},
})

export default Profile