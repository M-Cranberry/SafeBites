import { router } from "expo-router";
import * as React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { layouts, spacing } from "../styles/spacing";
import { Colors } from "../styles/colors";
import { useUserPreferences } from "../context/UserPreferenceContext";

/* manages options being added to an array, yes we are going to have to manage strings later*/
/* Backend phase change variable names*/
const Option = ({ label, value, selectedValues, toggleValue }) => {
  const checkedQ6 = selectedValues.includes(value);

  return (
    <View style={styles.optionContainer}>
      {/* Checkbox button */}
      <Pressable
        onPress={() => toggleValue(value)}
        style={[
          styles.checkbox,
          checkedQ6 && styles.checkboxChecked,
        ]}
      >
        {checkedQ6 && <View />}
      </Pressable>

      {/* text or something */}
      <Text style={styles.optionLabel}>{label}</Text>
    </View>
  );
};

export default function Q3Answers() {
  //access context
  const { preferences, updatePreference } = useUserPreferences();

  // Preload saved selections if they exist
const [selectedValues, setSelectedValues] = React.useState([]);

React.useEffect(() => {
  if (preferences.importance?.length) {
    setSelectedValues(preferences.importance);
  }
}, [preferences.importance]);
  /* manages the checkbox selection values */
  const toggleValue = (item) => {
    const updatedValues = selectedValues.includes(item)
      ? selectedValues.filter((v) => v !== item)
      : [...selectedValues, item];

    setSelectedValues(updatedValues); 
   
  };

  const handleNext = () => {
    updatePreference("importance", selectedValues);
    router.push("/screenQ7");
  };

  return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.header}>
            What matters most{"\n"}to you when eating{"\n"}out?
          </Text>
          <Text style={styles.body}>Select all that apply</Text>
        </View>

        {/* options */}
        <View style={styles.optionsWrapper}>
          <Option label="Safety from allergens" value="allergensSafety" {...{ selectedValues, toggleValue }} />
          <Option label="Fits my dietary choice" value="dietaryChoice" {...{ selectedValues, toggleValue }} />
          <Option label="Healthy options" value="healthyOptions" {...{ selectedValues, toggleValue }} />
          <Option label="Price range" value="priceRange" {...{ selectedValues, toggleValue }} />
          <Option label="Proximity" value="proximity" {...{ selectedValues, toggleValue }} />
        </View>

        {/* Next Button */}
      <Pressable
        style={[styles.nextButtonBorder, { backgroundColor: Colors.primaryButton }]}
        onPress={handleNext}
      >
        <Text style={styles.nextButton}>Next</Text>
      </Pressable>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...layouts.container
  },

  // Header 
  header: {
   ...layouts.headerBase,
    fontFamily: "Quicksand-Medium",
    fontSize: 36,
  },
  body: {
    paddingTop: spacing.md,
    ...layouts.body,
    paddingBottom: spacing.xxl,
    fontSize: 20,
  },

  // Two column grid ? 
  optionsWrapper: {
    flexWrap: "wrap",
    paddingLeft: 40,
    paddingTop: 30,
  },
  optionContainer: {
    width: "50%",
    ...layouts.optionContainer,
  },
  optionLabel: {
    fontSize: 18,
    color: "#FFFAF0",
    fontFamily: "Quicksand-Medium",
  },

    // Custom checkbox
  checkbox: {
     ...layouts.checkbox,
    borderColor:Colors.primary,
  },
  checkboxChecked: {
    backgroundColor: Colors.headerColor,
    borderColor: Colors.primary,
  },

  // Button Container
  nextButton: {
    ...layouts.nextButtonText,
    color: Colors.thirdText,
    fontSize: 20,
  },

  nextButtonBorder: {
    ...layouts.nextButtonBorder,
  },
});