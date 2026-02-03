import { router } from "expo-router"; 
import { Text, View, Pressable, StyleSheet } from "react-native"; 


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
      <View style={styles.nextButton}>
        <Pressable onPress={() => router.push("/screenQ1")}>
          <Text style={[styles.nextButton, styles.nextButtonBorder]}>
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
    borderColor: '#C3D8C5',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#C3D8C5',
    color: '#674F5D',
    fontFamily: 'Quicksand-Medium',
    fontSize: 36,
  },

  // Body
  body: {
    paddingLeft: 20,
    paddingTop: 40,
    paddingBottom: 40,
    color: '#FFFAF0',
    fontSize: 20,
  },

  // Button Container
  nextButton: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFFAF0',
    fontSize: 20,
    padding: 15,
  },

  // Button Colors
  nextButtonBorder: {
    borderWidth: 2,
    borderColor: '#674F5D',
    borderRadius: 30,
    backgroundColor: '#674F5D',
  },
});

