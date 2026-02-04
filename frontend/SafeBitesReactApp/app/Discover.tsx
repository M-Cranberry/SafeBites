import { StyleSheet, Text, FlatList, View, Pressable, Image, TextInput, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Discover() {
  const router = useRouter();

  const restaurants = [
    {
      id: "1",
      name: "Chick-Fil-A",
      type: "American fast food",
      distance: "0.5 mi",
      image: require("../assets/images/chickfila.jpg"),
    },
    {
      id: "2",
      name: "Qdoba",
      type: "Mexican food",
      distance: "0.7 mi",
      image: require("../assets/images/qdoba.jpg"),
    },
    {
      id: "3",
      name: "Huey Magoos",
      type: "American fast food",
      distance: "0.7 mi",
      image: require("../assets/images/huey.jpg"),
    },
    {
      id: "4",
      name: "Panda Express",
      type: "Chinese fast food",
      distance: "1.1 mi",
      image: require("../assets/images/panda.jpeg"),
    },
    {
      id: "5",
      name: "Dunkin Donuts",
      type: "American Cafe",
      distance: "2 mi",
      image: require("../assets/images/dunkin.jpg"),

    },
    {
      id: "6",
      name: "Purple Ocean Superfood Bar",
      type: "Vegan Kitchen",
      distance: "2.6 mi",
      image: require("../assets/images/purple.jpg"),
    },
  ];

  return (
    <View style={styles.container}>

      <View style={styles.topRow}>
        <Text style={styles.discoverTitle}>Discover</Text>

        <View style={styles.iconRow}>
          <Pressable onPress={() => router.push("/map_view")}>
                <Image
                    source={require("../assets/images/icon.png")}
                    style={styles.topIcon}
                />
            </Pressable>
          <Image
            source={require("../assets/images/filter.png")}
            style={styles.topIcon}
          />
        </View>
      </View>

      {/* filter */}
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

      {/* grid */}
      <FlatList
        data={restaurants}
        numColumns={2}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <Pressable style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />

            <Text style={styles.restaurantName}>{item.name}</Text>
            <Text style={styles.restaurantType}>{item.type}</Text>
            <Text style={styles.distance}>{item.distance}</Text>
          </Pressable>
        )}
      />

       <View style={styles.searchFloating}>
             <Image
               source={require("../assets/images/search.png")}
               style={styles.searchIcon}
             />
             <Text style={styles.searchText}>Search</Text>
           </View>

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
            style={styles.navIcon}
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
    paddingBottom: 10,
    marginLeft: 10,
  },

  iconRow: {
    paddingBottom: 14,
    flexDirection: "row",
    gap: 15,
  },

  topIcon: {
    width: 35,
    height: 35,
    tintColor: "#674f5d",
  },

    filterRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    paddingHorizontal: 30,
    marginBottom: 10,
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
    paddingBottom:7,
  },

  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },

  card: {
    backgroundColor: "#FFF8F3",
    borderRadius: 22,
    borderWidth: 1.5,
    borderColor: "#A4C4B0",
    padding: 10,
    margin: 8,
    flex: 1,
  },

  cardImage: {
    width: "100%",
    height: 110,
    borderRadius: 16,
    marginBottom: 8,
  },

  restaurantName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#4A5A5A",
  },

  restaurantType: {
    fontSize: 13,
    color: "#8A9A9A",
  },

  distance: {
    fontSize: 13,
    color: "#8A9A9A",
  },

  /*search */
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
    marginBottom: 30,
    flexDirection: "row",
    justifyContent:"space-evenly",
    borderTopWidth: 1,
    borderTopColor: "#FFF8F3",
  },

  navIcon: {
    width: 40,
    height: 40,
    tintColor: "#7A9A87",
  },
});
