import { router } from "expo-router";
import * as React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";

/* manages options being added to an array, yes we are going to have to manage strings later*/
/* Backend phase change variable names*/
const Option = ({ label, value, selectedValues, toggleValue }) => {
  const checkedQ4 = selectedValues.includes(value);

  return (
    <View style={styles.optionContainer}>
      {/* Checkbox button */}
      <Pressable
        onPress={() => toggleValue(value)}
        style={[
          styles.checkbox,
          checkedQ4 && styles.checkboxChecked,
        ]}
      >
        {checkedQ4 && <View />}
      </Pressable>

      {/* text or something */}
      <Text style={styles.optionLabel}>{label}</Text>
    </View>
  );
};

export default function Q1Answers() {
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

        <View style={styles.header}>
          <Text style={styles.header}>
            Are you following{"\n"}any specific eating{"\n"}plan or goal?
          </Text>
          <Text style={styles.body}>Select all that apply</Text>
        </View>

        {/* options */}
        <View style={styles.optionsWrapper}>
            <Option label="Weight management" value="weightManagement" {...{ selectedValues, toggleValue }} />
            <Option label="Low carb / Keto" value="lowCarbKeto" {...{ selectedValues, toggleValue }} />
            <Option label="Low sodium" value="lowSodium" {...{ selectedValues, toggleValue }} />
            <Option label="Low sugar" value="lowSugar" {...{ selectedValues, toggleValue }} />
            <Option label="Low fat" value="lowFat" {...{ selectedValues, toggleValue }} />
            <Option label="None" value="none" {...{ selectedValues, toggleValue }} />
            <Option label="Other" value="other" {...{ selectedValues, toggleValue }} />
        </View>

        {/* Next Button */}
`       <View style={styles.nextButton}>
          <Pressable onPress={() => router.push('/screenQ5')}>
            <Text style={[styles.nextButton, styles.nextButtonBorder]}>
              Next
            </Text>
          </Pressable>
        </View>`
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6AA792",
  },

  // Header 
  header: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
    borderWidth: 1,
    borderColor: '#C3D8C5',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#C3D8C5',
    color: '#674F5D',
    fontFamily: "Quicksand-Medium",
    fontSize: 36,
  },
  body: {
    paddingTop: 15,
    paddingLeft: 20,
    paddingBottom: 40,
    color: '#674F5D',
    fontSize: 20,
  },

  // Two column grid ? 
  optionsWrapper: {
    flexWrap: "wrap",
    paddingLeft: 20,
    paddingTop: 16,
  },
  optionContainer: {
    width: "40%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
  },
  optionLabel: {
    fontSize: 18,
    color: "#FFFAF0",
    fontFamily: "Quicksand-Medium",
  },

    // Custom checkbox
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#FFFAF0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: "#C3D8C5",
    borderColor: "#FFFAF0",
  },

  optionLabel: {
    fontSize: 18,
    color: "#FFFAF0",
    fontFamily: "Quicksand-Medium",
  },
  // Button Container
  nextButton: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFAF0',
    fontSize: 20,
    padding: 10,
  },

  // Button Colors
  nextButtonBorder: {
    paddingHorizontal: 40,
    borderWidth: 2,
    borderColor: '#674F5D',
    borderRadius: 30,
    backgroundColor: '#674F5D',
  },
});
