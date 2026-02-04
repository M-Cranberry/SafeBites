import { StyleSheet, Text, View, Pressable, Image, TextInput, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Discover() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      {/*header*/}
      <View style={styles.topRow}>
        <Text style={styles.discoverTitle}>Discover</Text>

        <View style={styles.iconRow}>
          <Image
            source={require("../assets/images/grid.png")}
            style={styles.topIcon}
          />
          <Image
            source={require("../assets/images/filter.png")}
            style={styles.topIcon}
          />
        </View>
      </View>

      {/*filter*/}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.filterRow}
      >
        {["Nearby", "Most popular", "Low price", "Open now"].map((item) => (
          <View key={item} style={styles.filterButton}>
            <Text style={styles.filterText}>{item}</Text>
          </View>
        ))}
      </ScrollView>

      {/*map */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.mapScroll}
      >
        <Image
          source={require("../assets/images/orlando-map.png")}
          style={styles.mapImage}
        />
      </ScrollView>

      <View style={styles.searchFloating}>
        <Image
          source={require("../assets/images/search.png")}
          style={styles.searchIcon}
        />
        <Text style={styles.searchText}>Search</Text>
      </View>

      {/*nav*/}
      <View style={styles.navBar}>
        <Pressable onPress={() => router.push("/main_dashboard")}>
          <Image
            source={require("../assets/images/house.png")}
            style={styles.navIcon}
          />
        </Pressable>

        <Pressable onPress={() => router.push("/Discover")}>
          <Image
            source={require("../assets/images/compass.png")}
            style={styles.navIconActive}
          />
        </Pressable>

        <Pressable onPress={() => router.push("/favorites")}>
          <Image
            source={require("../assets/images/heart.png")}
            style={styles.navIcon}
          />
        </Pressable>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
  flex: 1,
  backgroundColor: "#FFF8F3",
},

topRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 16,
  marginTop: 20,
},

discoverTitle: {
  fontSize: 38,
  fontWeight: "600",
  color: "#8AA197",
  marginLeft:10,
},

iconRow: {
  flexDirection: "row",
  gap: 14,
},

topIcon: {
  width: 32,
  height: 32,
  tintColor: "#674f5d",
},

filterRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    paddingHorizontal: 30,
    marginTop:10,
    marginBottom:10,
  },

  filterButton: {
    borderRadius: 18,
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderWidth: 1.5,
    borderColor: "#674f5d",
  },

  filterText: {
    fontSize: 13,
    color: "#674f5d",
    fontWeight: "500",
    paddingBottom:8,
  },

mapScroll: {
  paddingHorizontal: 16,
  paddingBottom: 200,
  paddingTop:25,
},

mapImage: {
  width: "100%",
  height: 620,
  borderRadius: 24,
  
},

searchFloating: {
  position: "absolute",
  bottom: 90,
  alignSelf: "center",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#FFF8F3",
  borderRadius: 26,
  paddingHorizontal: 70,
  paddingVertical: 12,
  borderWidth: 3,
  borderColor: "#674f5d",
  shadowOpacity: 0.9,
  shadowOffset: { width: 7, height: 7 },
  shadowColor: "#674f5d",
},

searchIcon: {
  width: 18,
  height: 18,
  tintColor: "#674f5d",
  marginRight: 8,
  fontWeight:"200",
},

searchText: {
  fontSize: 16,
  color: "#674f5d",
},

navBar: {
  position: "absolute",
  bottom: 0,
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-evenly",
  paddingVertical: 14,
  backgroundColor: "#FFF8F3",
},

navIcon: {
  width: 38,
  height: 38,
  tintColor: "#C6D8CF",
  marginBottom:9,
},

navIconActive: {
  width: 38,
  height: 38,
  tintColor: "#7A9A87",
},

})