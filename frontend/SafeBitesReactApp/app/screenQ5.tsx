import { router } from "expo-router";
import * as React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { Checkbox, Provider as PaperProvider } from "react-native-paper";

/* manages options being added to an array, yes we are going to have to manage strings later*/
/* Backend phase change variable names*/
const Option = ({ label, value, selectedValues, toggleValue }) => {
  const checkedQ5 = selectedValues.includes(value);

  return (
    <Pressable
      onPress={() => toggleValue(value)}
      style={styles.optionContainer}
    >
      <Checkbox
        status={checkedQ5 ? "checked" : "unchecked"}
        color="#FFFAF0"
        uncheckedColor="#FFFAF0"
      />
      <Text style={styles.optionLabel}>{label}</Text>
    </Pressable>
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
    <PaperProvider>
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
`       <View style={styles.nextButton}>
          <Pressable onPress={() => router.push('/screenQ6')}>
            <Text style={[styles.nextButton, styles.nextButtonBorder]}>
              Next
            </Text>
          </Pressable>
        </View>`
      </View>
    </PaperProvider>
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
