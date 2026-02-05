import { router } from "expo-router";
import * as React from "react";
import { Text, Image, View, StyleSheet, Pressable } from "react-native";
import {Provider as PaperProvider } from "react-native-paper";

export default function AccountInfo() {
  return (
    <PaperProvider>
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.suggest}>Suggestions</Text>
          <Pressable style={styles.editButton} onPress={() => router.push('/main_dashboard')}>
            <Image 
              source={require("../assets/images/cancel.png")} 
              style={styles.editImage} 
            />
          </Pressable>
        </View>

       
        <View style={styles.body}>
          {[
            "restaurant suggestion 1",
            "restaurant suggestion 2",
            "restaurant suggestion 3",
            "restaurant suggestion 4",
            "restaurant suggestion 5",
          ].map((item, index) => (
            <View key={index} style={styles.clicky}>
              <Image
                source={require("../assets/images/search.png")}
                style={styles.searchy}
              />
              <Text style={styles.restSug}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      
      <View style={styles.searchFloating}>
        <Image
          source={require("../assets/images/search.png")}
          style={styles.searchIcon}
        />
        <Text onPress={() => router.push("/keyboard")} style={styles.searchText}>Search</Text>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: "#FFFAF0",
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 35,
    paddingRight: 20,
    paddingBottom: 10,
    marginTop: 10,
  },

  suggest: {
    color: "#674F5D",
    fontFamily: "Quicksand-SemiBold",
    fontSize: 20,
    marginTop: 10,
  },
 editButton: {
    padding: 5, 
  },

  editImage: {
    width: 35,
    height: 35,
    tintColor: "#674F5D",
  },

  body: {
    paddingLeft: 35,
    paddingBottom: 20,
  },

  clicky: {
    flexDirection: "row",      
    alignItems: "center",      
    justifyContent: "flex-start",  
    marginVertical: 10,        
  },

   searchy: {
    width: 20,
    height: 20,
    tintColor: "#674f5d",
    marginRight: 10,          
  },

  restSug: {
    fontSize: 23,            
    color: "#674f5d",
    fontFamily: "Quicksand-Regular",
  },
  
   searchFloating: {
  position: "absolute",
  bottom: 90,
  alignSelf: "center",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#FFF8F3",
  borderRadius: 26,
  paddingHorizontal: 140,
  paddingVertical: 12,
  borderWidth: 3,
  borderColor: "#674f5d",
  shadowOpacity:0.9,
  shadowOffset: { width: 7, height: 7 },
  shadowColor: "#674f5d",
},

searchIcon: {
  width: 18,
  height: 18,
  tintColor: "#674f5d",
  marginRight: 7,
  fontWeight:"200",
},

searchText: {
  fontSize: 16,
  color: "#674f5d",
  fontFamily: "Quicksand-Bold",
},

});
