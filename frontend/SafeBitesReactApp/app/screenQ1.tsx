import { router } from "expo-router";
import * as React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";

/* whole block manages options being added to an array + option styling and stuff , yes we are going to have to manage strings later*/
/* Backend phase change variable names*/

//fixed this - Cami (renamed from allergiesArray to Option so JSX can find the component)
const Option = ({ label, value, selectedValues, toggleValue }) => {
  const checkedQ1 = selectedValues.includes(value);

  return (
    <View style={styles.optionContainer}>
      {/* Checkbox button */}
      <Pressable
        onPress={() => toggleValue(value)}
        style={[
          styles.checkbox,
          checkedQ1 && styles.checkboxChecked,
        ]}
      >
        {checkedQ1 && <View />}
      </Pressable>

      {/* text or something */}
      <Text style={styles.optionLabel}>{label}</Text>
    </View>
  );
};


/* This specifically is the array*/
export default function Q1Answers() {
  const [selectedValues, setSelectedValues] = React.useState([]);

  /* manages the values*/
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
          Do you have any{"\n"}food allergies or{"\n"}intolerances?
        </Text>
        <Text style={styles.body}>Select all that apply</Text>
      </View>

      {/* options */}
      <View style={styles.optionsWrapper}>
        <Option label="Dairy" value="dairy" {...{ selectedValues, toggleValue }} />
        <Option label="Wheat" value="wheat" {...{ selectedValues, toggleValue }} />
        <Option label="Eggs" value="eggs" {...{ selectedValues, toggleValue }} />
        <Option label="Fish" value="fish" {...{ selectedValues, toggleValue }} />
        <Option label="Gluten" value="gluten" {...{ selectedValues, toggleValue }} />
        <Option label="Shellfish" value="shellfish" {...{ selectedValues, toggleValue }} />
        <Option label="Peanuts" value="peanuts" {...{ selectedValues, toggleValue }} />
        <Option label="Sesame" value="sesame" {...{ selectedValues, toggleValue }} />
        <Option label="Tree nuts" value="treenuts" {...{ selectedValues, toggleValue }} />
        <Option label="Soy" value="soy" {...{ selectedValues, toggleValue }} />
        <Option label="Other" value="other" {...{ selectedValues, toggleValue }} />
      </View>

      {/* Next Button */}
      <View style={styles.nextButton}>
        <Pressable onPress={() => router.push("/screenQ2")}>
          <Text style={[styles.nextButton, styles.nextButtonBorder]}>
            Next
          </Text>
        </Pressable>
      </View>

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
    borderColor: "#C3D8C5",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#C3D8C5",
    color: "#674F5D",
    fontFamily: "Quicksand-Medium",
    fontSize: 36,
  },
  body: {
    paddingTop: 15,
    paddingLeft: 20,
    paddingBottom: 40,
    color: "#674F5D",
    fontSize: 20,
    fontFamily: "Quicksand-Medium"
  },

  // Options
  optionsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 20,
    paddingTop: 16,
  },
  optionContainer: {
    width: "40%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
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

  // Button
  nextButton: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFFAF0",
    fontSize: 20,
    padding: 10,
  },
  nextButtonBorder: {
    paddingHorizontal: 40,
    borderWidth: 2,
    borderColor: "#674F5D",
    borderRadius: 30,
    backgroundColor: "#674F5D",
  },
});
