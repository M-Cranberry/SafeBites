import { router } from "expo-router";
import * as React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
//import { Checkbox, Provider as PaperProvider } from "react-native-paper";
import {Provider as PaperProvider } from "react-native-paper";
//these are for the icon check-circle
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Q1Answers() {

  return (
    <PaperProvider>
      <View style={styles.container}>

        <View style={styles.body}>
          <Text style={styles.header}>Thank You!</Text>
          <Text style={styles.icon}>
          <AntDesign name="check-circle" size={60} color="#C5DBCA" /> </Text>
          <Text style={styles.text}>We will save this information to</Text>
          <Text style={styles.text}>personalize your dining experience.</Text>
        </View>


        {/* Next Button */}
`       <View style={styles.nextButton}>
          <Pressable onPress={() => router.push('/main_dashboard')}> {/*change this to the dashboard page*/}
            <Text style={[styles.nextButton, styles.nextButtonBorder]}> Go to Main Dashboard </Text>
          </Pressable>
        </View>`
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
  // Button Container
  nextButton: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFAF0',
    fontSize: 20,
    padding: 10,
  },

  // Button Colors
  nextButtonBorder: {
    paddingHorizontal: 40,
    borderWidth: 2,
    borderColor: '#674F5D',
    borderRadius: 30,
    backgroundColor: '#674F5D',
  },
});
