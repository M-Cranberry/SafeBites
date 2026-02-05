import { router } from "expo-router";
import * as React from "react";
import { Text, View, Pressable, StyleSheet, Image } from "react-native";
import { PaperProvider } from "react-native-paper";
//these are for the icon check-circle
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Confirm() {
  return (
    <PaperProvider>
        <View style={styles.container}>

            
              <Pressable style={styles.editButton} onPress={()=> router.push('/profile')}> {/*to my profile page*/}
                <Image 
                source={require("../assets/images/cancel.png")} 
                style={styles.editImage} 
                />
              </Pressable>
           

            <View style={styles.body}>
                <Text style={styles.icon}><AntDesign name="check-circle" size={100} color="#C5DBCA" /> </Text>
                <Text style={styles.text}>Your dietary</Text>
                <Text style={styles.text}>preferences have</Text>
                <Text style={styles.text}>been updated</Text>
            </View>
        
        </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6AA792",
  }, 
    header: {
    color: '#FFFAF0',
    fontFamily: "BBH-Hegarty-Regular",
    fontSize: 36,
    paddingTop: 100,
    alignItems: "center",
  },
  body: {
    paddingLeft: 20,
    paddingBottom: 20,
    alignItems: "center",
  },
   text: {
    paddingLeft: 20,
    color: '#FFFAF0',
    fontFamily: "Quicksand-Medium",
    fontSize: 20,
    alignItems: "center",
  },
  //checkmark icon
  icon: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 20,
    alignItems: "center",
  },

  editButton: {
    padding: 50,
  },

  editImage: {
    width:35,
    height:35,
    tintColor:"#674F5D",
    position: "absolute",
    top: 10,
    right: 10,
  },

});
