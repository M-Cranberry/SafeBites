import { router } from "expo-router";
import * as React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { layouts, spacing } from "../styles/spacing";
import { Colors } from "../styles/colors";
import { useUserPreferences } from "../context/UserPreferenceContext";

/* manages options being added to an array, yes we are going to have to manage strings later*/
/* Backend phase change variable names*/
const Option = ({ label, value, selectedValues, toggleValue }) => {
  const checkedQ2 = selectedValues.includes(value);

  return (
    <View style={styles.optionContainer}>
      {/* Checkbox button */}
      <Pressable
        onPress={() => toggleValue(value)}
        style={[styles.checkbox, 
        checkedQ2 && styles.checkboxChecked]}
      >
        {checkedQ2 && <View />}
      </Pressable>

      {/*text */}
      <Text style={styles.optionLabel}>{label}</Text>
    </View>
  );
};


export default function Q2Answers() {
  //access context
  const { preferences, updatePreference } = useUserPreferences();

  //loads previously saved selections, if any
 const [selectedValues, setSelectedValues] = React.useState([]);
 
 React.useEffect(() => {
   if (preferences.dietType?.length) {
     setSelectedValues(preferences.dietType);
   }
 }, [preferences.dietType]);
  /*manages the checkbox selection values */
  const toggleValue = (item) => {
    const updatedValues = selectedValues.includes(item)
      ? selectedValues.filter((v) => v !== item)
      : [...selectedValues, item];

    setSelectedValues(updatedValues)
    
  };

  //called when user hits next button to save and move on
  const handleNext = () => {
    updatePreference("dietType", selectedValues);
    router.push("/screenQ3");
  };

  
  return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.header}>
            What best describes{"\n"}your main dietary{"\n"}preference?
          </Text>
          <Text style={styles.body}>Select all that apply</Text>
        </View>

        {/* options */}
        <View style={styles.optionsWrapper}>
            <Option label="Omnivore" value="omnivore" {...{ selectedValues, toggleValue }} />
            <Option label="Vegetarian" value="vegetarian" {...{ selectedValues, toggleValue }} />
            <Option label="Vegan" value="vegan" {...{ selectedValues, toggleValue }} />
            <Option label="Pescatarian" value="pescatarian" {...{ selectedValues, toggleValue }} />
            <Option label="Other" value="other" {...{ selectedValues, toggleValue }} />
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
    paddingBottom: spacing.xxl,
    ...layouts.body,
    fontSize: 20,
  },

  // Two column grid ? 
  optionsWrapper: {
    flexWrap: "wrap",
    paddingLeft:spacing.xxxl,
    paddingTop: spacing.lg,
  },
  optionContainer: {
    width: "40%",
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
