import { router } from "expo-router";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { Colors } from "../styles/colors";


export default function Index() {
  return (
    <View style={styles.container}>

      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.header}>
          Let’s personalize {"\n"}your dining {"\n"}experience
        </Text>
      </View>

      {/* Question/Explanation Section */}
      <View style={styles.body}>
        <Text style={styles.body}>
          We’ll ask a few things{"\n"}about your diet and allergies to{"\n"}personalize your{"\n"}recommendations.
        </Text>
      </View>

      {/* Continue Button */}
      <View style={styles.nextButtonBorder}>
        <Pressable onPress={() => router.push("/screenQ1")}>
          <Text style={[styles.nextButton]}>
            Continue
          </Text>
        </Pressable>
      </View>

    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    backgroundColor: '#6AA792',
  },

  // Header
  header: {
    padding: 20,
    paddingTop: 50,
    borderWidth: 1,
    borderColor: Colors.headerColor,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: Colors.headerColor,
    color: Colors.secondaryText,
    fontFamily: 'Quicksand-Medium',
    fontSize: 36,
  },

  // Body
  body: {
    paddingLeft: 20,
    paddingTop: 40,
    paddingBottom: 40,
    color: Colors.thirdText,
    fontSize: 23,
    fontFamily: 'Quicksand-Medium',
  },

  // Button Container
  nextButton: {
    textAlign: 'center',
    color: Colors.thirdText,
    fontSize: 20,
    padding: 10,
  },

  // Button Colors
  nextButtonBorder: {
    borderWidth: 1,
    borderColor: Colors.purpleShadow,
    borderRadius: 30,
    backgroundColor: Colors.primaryButton,
    paddingHorizontal:10,
    marginHorizontal:150,
  },
});

