//filter popup screen - cami. this opens from discover and map view screens when u click the filter icon and had to install slider package for this btw

import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import * as React from "react";
import Slider from "@react-native-community/slider";

// this is so the parent component can close the popup
interface FilterProps {
  onClose: () => void;
}

export default function DiscoverFilter({ onClose }: FilterProps) {

  //states for all the filter options
  const [distance, setDistance] = React.useState(2);
  const [selectedAllergies, setSelectedAllergies] = React.useState<string[]>([]);
  const [selectedDiet, setSelectedDiet] = React.useState("None");
  const [selectedGoals, setSelectedGoals] = React.useState<string[]>([]);

  // toggle function for allergies adds or removes from array, maybe these can be added in the other ones but I dont have time to do that - Cami
  const toggleAllergy = (item: string) => {
    if (selectedAllergies.includes(item)) {

      setSelectedAllergies(selectedAllergies.filter((a) => a !== item));
    } else {
      setSelectedAllergies([...selectedAllergies, item]);
    }
  };

  //same thing but for health goals
  const toggleGoal = (item: string) => {
    if (selectedGoals.includes(item)) {
      setSelectedGoals(selectedGoals.filter((g) => g !== item));
    } else {
      setSelectedGoals([...selectedGoals, item]);
    }
  };

  return (
    <View style={styles.overlay}>
      {/*this is the dark background behind the popup, click to close */}
      <Pressable style={styles.darkBackground} onPress={onClose} />

      {/*main popup container */}
      <View style={styles.popupContainer}>

        {/* header with title and X button*/}
        <View style={styles.headerRow}>
          <Text style={styles.filterTitle}>Filter</Text>
          <Pressable onPress={onClose}>
            <Text style={styles.xButton}>X</Text>
          </Pressable>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>

          {/*  distance section */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Distance</Text>
            <Text style={styles.distanceText}>{distance}mi</Text>
            <Slider
              style={{ width: "100%", height: 40 }}
              minimumValue={0.5}
              maximumValue={10}
              step={0.5}
              value={distance}
              onValueChange={(val) => setDistance(val)}
              minimumTrackTintColor="#674f5d"
              maximumTrackTintColor="#C5DBCA"
              thumbTintColor="#674f5d"
            />
            <View style={styles.line} />
          </View>

          {/* allergies section - first row */}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Allergies</Text>
            <View style={styles.chipsRow}>
              {["Dairy", "Eggs", "Gluten", "Peanuts"].map((item) => (
                <Pressable
                  key={item}
                  style={[
                    styles.chip,
                    selectedAllergies.includes(item) && styles.chipSelected
                  ]}
                  onPress={() => toggleAllergy(item)}
                >
                  <Text style={[
                    styles.chipText,
                    selectedAllergies.includes(item) && styles.chipTextSelected
                  ]}>{item}</Text>
                </Pressable>
              ))}
            </View>
            {/* second row of allergies*/}
            <View style={styles.chipsRow}>
              {["Tree nuts", "Soy", "Wheat", "Fish"].map((item) => (
                <Pressable
                  key={item}
                  style={[
                    styles.chip,
                    selectedAllergies.includes(item) && styles.chipSelected
                  ]}
                  onPress={() => toggleAllergy(item)}
                >
                  <Text style={[
                    styles.chipText,
                    selectedAllergies.includes(item) && styles.chipTextSelected
                  ]}>{item}</Text>
                </Pressable>
              ))}
            </View>
            {/*third row */}
            <View style={styles.chipsRow}>
              {["Shellfish", "Sesame", "Add custom"].map((item) => (
                <Pressable
                  key={item}
                  style={[
                    styles.chip,
                    selectedAllergies.includes(item) && styles.chipSelected
                  ]}
                  onPress={() => toggleAllergy(item)}
                >
                  <Text style={[
                    styles.chipText,
                    selectedAllergies.includes(item) && styles.chipTextSelected
                  ]}>{item}</Text>
                </Pressable>
              ))}
            </View>
            <View style={styles.line} />
          </View>

          {/*diet type sectioncheckboxes so only one can be selected*/}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Diet Type</Text>
            <View style={styles.radioGrid}>
              {/* row 1 */}
              <View style={styles.radioItem}>
                <Pressable
                  style={styles.radioCircle}
                  onPress={() => setSelectedDiet("Omnivore")}
                >
                  {selectedDiet === "Omnivore" && <View style={styles.radioFilled} />}
                </Pressable>
                <Text style={styles.radioLabel}>Omnivore</Text>
              </View>
              <View style={styles.radioItem}>
                <Pressable
                  style={styles.radioCircle}
                  onPress={() => setSelectedDiet("Pescatarian")}
                >
                  {selectedDiet === "Pescatarian" && <View style={styles.radioFilled} />}
                </Pressable>
                <Text style={styles.radioLabel}>Pescatarian</Text>
              </View>

              {/*row 2 */}
              <View style={styles.radioItem}>
                <Pressable
                  style={styles.radioCircle}
                  onPress={() => setSelectedDiet("Vegetarian")}
                >
                  {selectedDiet === "Vegetarian" && <View style={styles.radioFilled} />}
                </Pressable>
                <Text style={styles.radioLabel}>Vegetarian</Text>
              </View>
              <View style={styles.radioItem}>
                <Pressable
                  style={styles.radioCircle}
                  onPress={() => setSelectedDiet("Vegan")}
                >
                  {selectedDiet === "Vegan" && <View style={styles.radioFilled} />}
                </Pressable>
                <Text style={styles.radioLabel}>Vegan</Text>
              </View>

              {/*row 3*/}
              <View style={styles.radioItem}>
                <Pressable
                  style={styles.radioCircle}
                  onPress={() => setSelectedDiet("None")}
                >
                  {selectedDiet === "None" && <View style={styles.radioFilled} />}
                </Pressable>
                <Text style={styles.radioLabel}>None</Text>
              </View>
            </View>
          </View>

          {/*health goals section - first row*/}
          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Health goals</Text>
            <View style={styles.chipsRow}>
              {["Manage weight", "Keto", "Low fat"].map((item) => (
                <Pressable
                  key={item}
                  style={[
                    styles.chip,
                    selectedGoals.includes(item) && styles.chipSelected
                  ]}
                  onPress={() => toggleGoal(item)}
                >
                  <Text style={[
                    styles.chipText,
                    selectedGoals.includes(item) && styles.chipTextSelected
                  ]}>{item}</Text>
                </Pressable>
              ))}
            </View>
            {/* second row*/}
            <View style={styles.chipsRow}>
              {["Low sugar", "Low sodium", "None"].map((item) => (
                <Pressable
                  key={item}
                  style={[
                    styles.chip,
                    selectedGoals.includes(item) && styles.chipSelected
                  ]}
                  onPress={() => toggleGoal(item)}
                >
                  <Text style={[
                    styles.chipText,
                    selectedGoals.includes(item) && styles.chipTextSelected
                  ]}>{item}</Text>
                </Pressable>
              ))}
            </View>
          </View>

        </ScrollView>

        {/*save button at the bottom */}
        <Pressable style={styles.saveBtn} onPress={onClose}>
          <Text style={styles.saveBtnText}>Save</Text>
        </Pressable>

      </View>
    </View>
  );
}

// styles - cami
const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
  },
  darkBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  popupContainer: {
    height: 730,
    backgroundColor: "#6AA792",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 30,
  },

  // header stuff
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  filterTitle: {
    fontSize: 32,
    color: "#FFF8F3",
    fontFamily: "BBHHegarty-Regular",
  },
  xButton: {
    fontSize: 28,
    color: "#FFF8F3",
    fontWeight: "300",
    padding: 5,
  },

  //sections
  section: {
    marginBottom: 12,
  },
  sectionLabel: {
    fontSize: 18,
    color: "#FFF8F3",
    fontFamily: "Quicksand-SemiBold",
    marginBottom: 10,
  },

  // distance stuff
  distanceText: {
    fontSize: 16,
    color: "#FFF8F3",
    fontFamily: "Quicksand-Medium",
    marginBottom: 5,
  },
  line: {
    height: 1,
    backgroundColor: "rgba(255,248,243,0.3)",
    marginTop: 12,
  },

  // chips for allergies and health goals
  chipsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#FFF8F3",
  },
  chipSelected: {
    backgroundColor: "#FFF8F3",
  },
  chipText: {
    fontSize: 14,
    color: "#FFF8F3",
    fontFamily: "Quicksand-Medium",
  },
  chipTextSelected: {
    color: "#6AA792",
  },

  //radio buttons for diet type - these fill completely when selected I just copied the filter.tsx scrrene
  radioGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  radioItem: {
    width: "50%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  radioCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#FFF8F3",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  radioFilled: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#FFF8F3",
  },
  radioLabel: {
    fontSize: 14,
    color: "#FFF8F3",
    fontFamily: "Quicksand-Medium",
  },

  // save button
  saveBtn: {
    backgroundColor: "#674f5d",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 15,
  },
  saveBtnText: {
    fontSize: 18,
    color: "#FFF8F3",
    fontFamily: "Quicksand-Bold",
  },
});
