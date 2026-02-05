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
            <Pressable style={styles.editButton} onPress={()=> router.push('/account_edit')}>
              <Image 
              source={require("../assets/images/edit.png")} 
              style={styles.editImage} 
              />
            </Pressable>
          </View>
            <View style={styles.body}>
                <Text style={styles.header}>Account{" \n"}Information</Text>
            </View>
            <View style={styles.body}>
                {/* User Information Section */}
                <Text style={styles.descText}>Name</Text>
                <Text style={styles.infoText}>Jane Doe</Text>
                <Divider style={{ height: 2, width: 400, backgroundColor: '#C5DBCA' }} />

                <Text style={styles.descText}>Email</Text>
                <Text style={styles.infoText}>janedoe@example.com</Text>
                <Divider style={{ height: 2, width: 400, backgroundColor: '#C5DBCA' }} />

                <Text style={styles.descText}>Phone</Text>
                <Text style={styles.infoText}>(407) 000-0000</Text>
                <Divider style={{ height: 2, width: 400, backgroundColor: '#C5DBCA' }} />
                
                <Text style={styles.descText}>Address</Text>
                <Text style={styles.infoText}>My address Apt 000 Orlando FL, 00000 </Text>
                <Divider style={{ height: 2, width: 400, backgroundColor: '#C5DBCA' }} />
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
    fontFamily: "BBHHegarty-Regular",
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
    paddingLeft: 20,
    paddingBottom: 20,
  },
   descText: {
    paddingLeft: 20,
    paddingTop: 15,
    color: '#674F5D',
    fontFamily: "Quicksand-Medium",
    fontSize: 20,
  },
    infoText: {
    paddingTop: 15,
    paddingLeft: 20,
    paddingBottom: 15,
    color: '#674F5D',
    fontFamily: "Quicksand-light",
    fontSize: 16,
  },

});
