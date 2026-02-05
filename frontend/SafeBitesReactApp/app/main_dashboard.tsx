import { StyleSheet, Text, View, Pressable, Image, TextInput, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function MainDashboard() {
    const router = useRouter();
    return (
        <ScrollView contentContainerStyle={styles.container}>

                {/*header*/}
                <View style={styles.header}>
                {/* profile stuff */}
                <View style={styles.welcomeRow}>
                    <View style={styles.welcomeName}>
                    <Text style={styles.welcomeText}>Hi, Jane</Text>
                    </View>
                  
                  <Pressable onPress={() => router.push("/profile")}>
                    <Image
                    source={require("../assets/images/profilepic.jpg")}
                    style={styles.profilepic}
                    />
                  </Pressable>
                    
                </View>

                {/*diet*/}
                <Text style={styles.dietPreferance}>Your Dietary Preferences</Text>
                <View style={styles.preferenceRow}>
                    <View style={styles.preferenceBorder}>
                    <Text style={styles.dietChoice}>🥚 Egg-free</Text>
                    </View>
                    <View style={styles.preferenceBorder}>
                    <Text style={styles.dietChoice}>🐟 Pescetarian</Text>
                    </View>

                </View>
                <Text style={styles.editPreferences}>{'\n'}edit my preferences</Text>
                </View>



                {/*top picks-filter*/}
                <View style={styles.middleContainer}>
                 <Text style={styles.sectionTitle}>Top picks for you</Text>

                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.filterRow}>
                  
                  <View style={styles.filterRow}>
                    {["Nearby", "Most popular", "Low price", "Open now"].map((item) => (
                    <View key={item} style={styles.filterButton}>
                        <Text style={styles.filterText}>{item}</Text>
                    </View>
                    ))}
                </View>
                </ScrollView>
                
                 

                  {/*restaurant cards */}                
                  <View style={styles.shadowBox}>
                    <View style={styles.card}>
                      {[
                        {
                          name: "Chick-Fil-A",
                          distance: "0.5 mi",
                          image: require("../assets/images/chickfila.jpg"),
                          route:"/restaurantprof_chickfila",
                        },
                        {
                          name: "Qdoba Mexican",
                          distance: "0.7 mi",
                          image: require("../assets/images/qdoba.jpg"),
                          route:"/restaurantprof_qdoba",
                        },
                        {
                          name: "Huey Magoos",
                          distance: "0.7 mi",
                          image: require("../assets/images/huey.jpg"),
                          route:"/restaurantprof_huey",
                        },
                        /*
                        {
                          name: "Panda Express",
                          distance: "1.1 mi",
                          image: require("../assets/images/panda.jpg"),
                          route:"/restaurantprof_panda",
                        },
                        {
                          name: "Dunkin Donuts",
                          distance: "2 mi",
                          image: require("../assets/images/dunkin.jpg"),
                          route:"/restaurantprof_dunkin",
                        }
                        */
                      ].map((item) => (
                        <Pressable onPress={()=>router.push(item.route as any)}
                         key={item.name} >
                          <View style={styles.cardRow}>
                          <Image source={item.image} style={styles.cardImage} />
                          <View>
                            <Text  style={styles.restaurantName}>{item.name}</Text>
                            <Text style={styles.distance}>{item.distance}</Text>
                          </View>
                        </View>
                        </Pressable>
                      
                      ))}
                    </View>
                  </View>

              
                <Text onPress={()=>router.push("/Discover")} style={styles.seeMore}>see more</Text>

                <View style = {styles.shadowSearch}>
                <Pressable  onPress={()=>router.push("/keyboard")} style={styles.searchBar}>
                  <Image
                            source={require("../assets/images/search.png")}
                            style={styles.searchIcon}
                          />
                    <Text style={styles.searchText}>Search</Text>
                </Pressable>
                </View>

          
               {/*Nav Bar 
               Change into actual tabs later*/}
                <View style={styles.navBar}>
                <Pressable
                    style={styles.navItem}
                    onPress={() => router.push("/main_dashboard")}
                >
                    <Image
                    source={require("../assets/images/house.png")}
                    style={styles.navIcon}
                    />
                </Pressable>

                <Pressable
                    style={styles.navItem}
                    onPress={() => router.push("/Discover")}
                >
                    <Image
                    source={require("../assets/images/compass.png")}
                    style={styles.navIcon}
                    />
                </Pressable>

                <Pressable
                    style={styles.navItem}
                    onPress={() => router.push("/favorites")}
                >
                    <Image
                    source={require("../assets/images/heart.png")}
                    style={styles.navIcon}
                    />
                </Pressable>
                </View>

                </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F3",
      flexDirection:"column", 
  },

header: {
  backgroundColor: "#A4C4B0",
  borderBottomLeftRadius: 24,
  borderBottomRightRadius: 24,
  paddingHorizontal: 16,
  paddingVertical: 30,
  marginBottom: 16,
},
welcomeRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
},

  welcomeName: {
    backgroundColor: "#6aa792",
    paddingHorizontal: 80,
    paddingVertical: 5,
    borderRadius: 25,
    marginLeft: -30,
  },

  welcomeText: {
    fontSize: 30,
    fontWeight: "600",
    color: "#FFF8F3",
  },

  profilepic: {
    width: 68,
    height: 68,
    marginRight: 30,
    borderRadius: 50,
  },

  /* Dietary Preferences */
  dietPreferance: {
    marginTop: 20,
    fontSize: 25,
    color: "#674f5d",
    marginBottom: 15,
    fontWeight: "400",
    paddingHorizontal: 16,
    fontFamily: "Quicksand-Bold",
  },

  preferenceRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    paddingHorizontal: 16,
    marginBottom: 2,
    
  },

  preferenceBorder: {
    alignItems: "center",
    borderRadius: 18,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderWidth: 2,
    borderColor: "#674f5d",
    paddingTop:1,
  },

  dietChoice: {
    fontSize: 15,
    color: "#674f5d",
    fontWeight: "300",
    fontFamily: "Quicksand-SemiBold",
  },

  editPreferences: {
    fontSize: 15,
    color: "#674f5d",
    textAlign: "center",
    marginTop: -5,
    marginBottom: -10,
    fontFamily: "Quicksand-Medium",
  },

  middleContainer:{

  },
  /* Top Picks */
  sectionTitle: {
    fontSize: 24,
    color: "#8AA197",
    marginBottom: 12,
    fontWeight: "500",
    paddingHorizontal: 16,
    marginLeft:10,
    fontFamily: "Quicksand-Bold",
  },

  filterRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    paddingHorizontal: 16,
    marginBottom: 12,
    marginLeft:-3,
  },

  filterButton: {
    borderRadius: 18,
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderWidth: 1.5,
    borderColor: "#674f5d",
  },

  filterText: {
    fontSize: 13,
    color: "#674f5d",
    fontWeight: "500",
    fontFamily: "Quicksand-Medium",
  },

  /* Restaurant Cards */
  card: {
    backgroundColor: "#FFF8F3",
    borderRadius: 20,
    padding: 12,
    borderWidth: 1.5,
    borderColor: "#427263",
    marginHorizontal: 16,
    marginBottom: 12,
    shadowOpacity:1,
    shadowOffset: {
      width:10,height:10,
    },
    shadowColor:"#A4C4B0",
  },
  shadowBox:{
  },

  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E8EFEA",
  },

cardImage: {
  width: 75,
  height: 54,
  borderRadius: 10,
  marginRight: 14,
},

  restaurantName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#427263",
    fontFamily: "Quicksand-Bold",
  },

  distance: {
    fontSize: 13,
    color: "#8A9A9A",
    fontFamily: "Quicksand-Medium",
  },

  seeMore: {
    fontSize: 15,
    color: "#427263",
    textAlign: "center",
    marginBottom: 30,
    paddingTop: 9,
    fontFamily: "Quicksand-Medium",
  },

  shadowSearch:{
    shadowOpacity:1,
    shadowOffset: {
      width:3,height:3,
    },
    shadowColor:"#674f5d"
  },

  /* Search */
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 22,
    paddingVertical: 12,
    paddingHorizontal: 79,
    borderWidth: 3,
    borderColor: "#674f5d",
    marginHorizontal: 16,
    marginBottom: 24,
    marginRight:110,
    marginLeft:110,
  },

  searchIcon: {
  width: 18,
  height: 18,
  tintColor: "#674f5d",
  marginRight: 7,
  fontWeight:"200",
  marginLeft:-15,
},

  searchText: {
    fontSize: 13,
    color: "#674f5d",
    fontFamily: "Quicksand-SemiBold",
  },

  /* Bottom Nav (temporary) */
  navBar: {
    flexDirection: "row",
    justifyContent:"space-evenly",
    borderTopWidth: 1,
    borderTopColor: "#FFF8F3",
  },

  navItem:{
    padding:-1,
  },

  navIcon: {
    width: 40,
    height: 40,
    tintColor: "#7A9A87",
  },
});
