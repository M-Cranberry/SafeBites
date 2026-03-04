import { router } from "expo-router";
import * as React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { layouts, spacing } from "../styles/spacing";
import { Colors } from "../styles/colors";
import { useUserPreferences } from "../context/UserPreferenceContext";

/* manages options being added to an array, yes we are going to have to manage strings later*/
/* Backend phase change variable names*/
const Option = ({ label, value, selectedValues, toggleValue }) => {
  const checkedQ5 = selectedValues.includes(value);

  return (
    <View style={styles.optionContainer}>
      {/* Checkbox button */}
      <Pressable
        onPress={() => toggleValue(value)}
        style={[
          styles.checkbox,
          checkedQ5 && styles.checkboxChecked,
        ]}
      >
        {checkedQ5 && <View />}
      </Pressable>

      {/* text or something */}
      <Text style={styles.optionLabel}>{label}</Text>
    </View>
  );
};

export default function Q5Answers() {
  //access context
  const { preferences, updatePreference } = useUserPreferences();

  // Preload saved selections if they exist
const [selectedValues, setSelectedValues] = React.useState([]);

React.useEffect(() => {
  if (preferences.medical?.length) {
    setSelectedValues(preferences.medical);
  }
}, [preferences.medical]);


  /* manages the checkbox selection values */
  const toggleValue = (item) => {
    const updatedValues = selectedValues.includes(item)
      ? selectedValues.filter((v) => v !== item)
      : [...selectedValues, item];

    setSelectedValues(updatedValues); 
   
  };

  const handleNext = () => {
    updatePreference("medical", selectedValues);
    router.push("/screenQ6");
  };

  return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.header}>
            Do you have any{"\n"}medical conditions{"\n"}that affect your{"\n"}eating habits?
          </Text>
          <Text style={styles.body}>Select all that apply</Text>
        </View>

        {/* options */}
        <View style={styles.optionsWrapper}>
            <Option label="Diabetes" value="diabetes" {...{ selectedValues, toggleValue }} />
            <Option label="High blood pressure" value="highBloodPressure" {...{ selectedValues, toggleValue }} />
            <Option label="Celiac disease" value="celiacDisease" {...{ selectedValues, toggleValue }} />
            <Option label="Lactose intolerance" value="lactoseIntolerance" {...{ selectedValues, toggleValue }} />
            <Option label="None" value="none" {...{ selectedValues, toggleValue }} />
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
    ...layouts.body,
    paddingBottom: spacing.xxl,
    fontSize: 20,
  },

  // Two column grid ? 
  optionsWrapper: {
    flexWrap: "wrap",
    paddingLeft: 40,
    paddingTop: 16,
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
