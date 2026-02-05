import { router } from "expo-router";
import * as React from "react";
import { Text,Image, View, StyleSheet, Pressable } from "react-native";
import { Divider, Provider as PaperProvider } from "react-native-paper";

export default function AccountInfo() {
  return (
    <PaperProvider>
        <View style={styles.container}>

          <View style={styles.headerContainer}>
            <Pressable style={styles.editButton} onPress={()=> router.push('/dietary_pref')}>
              <Image 
              source={require("../assets/images/back.png")} 
              style={styles.editBack} 
              />
            </Pressable>
            <Pressable style={styles.editButton} onPress={()=> router.push('/account_info')}>
              <Image 
              source={require("../assets/images/cancel.png")} 
              style={styles.editImage} 
              />
            </Pressable>
          </View>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Account{" \n"}Information</Text>
            </View>
            <View style={styles.body}>
                {/* User Information Section */}
                <Text style={styles.descText}>Name</Text>
                <Text style={styles.infoText}>Jane Doe</Text>


                <Text style={styles.descText}>Email</Text>
                <Text style={styles.infoText}>janedoe@example.com</Text>


                <Text style={styles.descText}>Phone</Text>
                <Text style={styles.infoText}>(407) 000-0000</Text>

                
                <Text style={styles.descText}>Address</Text>
                <Text style={styles.infoText}>My address Apt 000 Orlando FL, 00000 </Text>
                
            </View>
            <View style={styles.bottom}>
                <Pressable>
                    <Text style={styles.saveButton}>Save</Text>
                </Pressable>
            </View>
        </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAF0",
  },
    header: {
    marginTop:10,
    paddingLeft: 20,
    fontSize: 36,
    color: "#6aa792",
    paddingBottom: 13,
    fontFamily: "BBH Sans Hegarty",
    fontWeight: "regular",
  },

headerContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: 35,
  paddingRight: 20,
  paddingBottom: 10,
},

editButton: {
  padding: 5, 
},

editBack: {
 width:28,
height:28,
tintColor:"#674F5D",
},
editImage: {
  width: 35,
  height: 35,
  tintColor:"#674F5D",
},

  body: {
    paddingLeft: 30,
    paddingBottom: 30,

  },
   descText: {
    paddingLeft: 10,
    paddingTop: 15,
    color: '#674F5D',
    fontFamily: "Quicksand-Medium",
    fontSize: 20,
    
  },
    infoText: {
   backgroundColor: "#FFFAF0",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 25,
    fontSize: 13,
    borderWidth: 1,
    borderColor: "#c3d8c5",
    width:"90%",
    marginTop:10,
    paddingRight:10,
  },

    bottom: {
    position: "absolute",
    bottom: 95,         
    width: "25%",       
    alignSelf: "center", 
    },

    saveButton: {
    backgroundColor: "#674F5D",
    color: "#fff",
    textAlign: "center",
    paddingVertical: 9,
    borderRadius: 25,   
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Quicksand-SemiBold",
    },
});
