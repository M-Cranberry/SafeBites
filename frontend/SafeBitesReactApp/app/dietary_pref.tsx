import { router } from "expo-router";
import * as React from "react";
import { Text,Image, View, StyleSheet, Pressable } from "react-native";
import { Divider } from "react-native-paper";


const Option = ({ label, value, selectedValues, toggleValue }) => {
  const checkedQ2 = selectedValues.includes(value);

  return (
    <View style={styles.optionContainer}>
      {/* Checkbox button */}
      <Pressable
        onPress={() => toggleValue(value)}
        style={[
          styles.checkbox,
          checkedQ2 && styles.checkboxChecked,
        ]}
      >
        {checkedQ2 && <View />}
      </Pressable>

      {/* text or something */}
      <Text style={styles.optionLabel}>{label}</Text>
    </View>
  );
};

export default function Q2Answers() {
  const [selectedValues, setSelectedValues] = React.useState([]);

  const toggleValue = (item) => {
    setSelectedValues((prev) =>
      prev.includes(item)
        ? prev.filter((v) => v !== item)
        : [...prev, item]
    );
  };

return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <Pressable style={styles.editButton} onPress={()=> router.push('/main_dashboard')}>
                <Image 
                source={require("../assets/images/back.png")} 
                style={styles.editBack} 
                />
                </Pressable>
                <Pressable style={styles.editButton} onPress={()=> router.push('/dietaryPrefEdit')}>
                <Image 
                source={require("../assets/images/edit.png")} 
                style={styles.editImage} 
                />
                </Pressable>
            </View>

            <View style={styles.body}>
                <Text style={styles.header}>Dietary{" \n"}Preferences</Text>
            </View>
            <View style={styles.body}>
                {/* allergies listed options */}
                <Text style={styles.descText}>Allergies</Text>
                
                <View style={styles.filterRow}>
                    {["Dairy", "Eggs", "Gluten", "Peanuts"].map((item) => (
                    <View key={item} style={styles.filterButton}>
                        <Text style={styles.filterText}>{item}</Text>
                    </View>
                    ))}

                </View>
                    <View style={styles.filterRow}>
                        {["Tree Nuts", "Soy", "Wheat", "Fish"].map((item) => (
                        <View key={item} style={styles.filterButton}>
                            <Text style={styles.filterText}>{item}</Text>
                    </View>
                    ))}
                
                </View>
                    <View style={styles.filterRow}>
                        {["Shellfish", "Sesame", "Add Custom"].map((item) => (
                        <View key={item} style={styles.filterButton}>
                            <Text style={styles.filterText}>{item}</Text>
                    </View>
                    ))}
                </View>


                <Divider style={{ height: 2, width: 400, backgroundColor: '#C5DBCA' }} />

            </View>
 

            <View>
                <Text style={[styles.descText, { paddingLeft: 40 }]}>Diet Type</Text>
                <View style={styles.optionsWrapper}>
                    <View style={{ height: 35, paddingLeft: 20, width: "50%"}}>
                        <Option label="Dairy" value="dairy" {...{ selectedValues, toggleValue }} />
                    </View>
                    <View style={{ height: 35, paddingLeft: 20, width: "50%"}}>
                        <Option label="Omnivore" value="omnivore" {...{ selectedValues, toggleValue }} />
                    </View>
                    <View style={{ height: 35, paddingLeft: 20, width: "50%"}}>
                        <Option label="Vegetarian" value="vegetarian" {...{ selectedValues, toggleValue }} />
                    </View>
                    <View style={{ height: 35, paddingLeft: 20, width: "50%"}}>
                        <Option label="Vegan" value="vegan" {...{ selectedValues, toggleValue }} />
                    </View>
                    <View style={{ height: 35, paddingLeft: 20, width: "50%"}}>
                        <Option label="Pescatarian" value="pescatarian" {...{ selectedValues, toggleValue }} />
                    </View>
                    <View style={{ height: 35, paddingLeft: 20, width: "50%", paddingBottom: 30 }}>
                        <Option label="None" value="None" {...{ selectedValues, toggleValue }} />
                    </View>    
                </View>
                <View style={styles.body}>
                    <Divider style={{ height: 2, width: 400, backgroundColor: '#C5DBCA' }} />
                </View>
                </View>
<View style={styles.body}>
                {/* allergies listed options */}
                <Text style={styles.descText}>Health goals</Text>
                
                <View style={styles.filterRow}>
                    {["Manage Weight", "Keto", "Low-Fat"].map((item) => (
                    <View key={item} style={styles.filterButton}>
                        <Text style={styles.filterText}>{item}</Text>
                    </View>
                    ))}

                </View>
                    <View style={styles.filterRow}>
                        {["Low-sugar", "Keto", "None"].map((item) => (
                        <View key={item} style={styles.filterButton}>
                            <Text style={styles.filterText}>{item}</Text>
                    </View>
                    ))}
                </View>

            </View>        
        
        
        </View>

        
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
    paddingLeft: 20,
    paddingBottom: 10,
    paddingTop: 10,

  },
   descText: {
    paddingLeft: 20,
    paddingBottom: 15,
    color: '#674F5D',
    fontFamily: "Quicksand-bold",
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
      // Custom checkbox
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#674F5D",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: "#674F5D",
    borderColor: "#674F5D",
  },

  optionLabel: {
    fontSize: 18,
    color: "#674F5D",
    fontFamily: "Quicksand-Medium",
  },

  // Two column grid ? 
  optionsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", 
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Quicksand-bold",
  },
  optionContainer: {
    width: "45%", 
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8, 
  },
/* Filter Row Styles */
filterRow: {
  flexDirection: "row",
  width: "90%",
  alignContent: "center",
  gap: 18,
  paddingHorizontal: 16,
  marginBottom: 12,
  paddingLeft: 20,
},

filterButton: {
  borderRadius: 18,
  paddingVertical: 6,
  paddingHorizontal: 14,
  borderWidth: 2,
  borderColor: "#674f5d",
},

filterText: {
  fontSize: 13,
  color: "#674f5d",
  fontWeight: "500",
  fontFamily: "Quicksand-Medium",
},


});
