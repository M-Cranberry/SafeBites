import { router } from "expo-router";
import * as React from "react";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Divider, Provider as PaperProvider, Switch } from "react-native-paper";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function AccountInfo() {

  const theme = {
    colors: {
      primary: "#FFFAF0",
      secondary: "#C5DBCA",
    },
  };

  //this is for the switch, taken from reactnative.dev site
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>

        <View style={styles.body}>
          <Text style={styles.header}>Appearance</Text>
        </View>

        <View style={styles.optionsWrapper}>
          {/* dark mode */}
          <View style={{ height: 35, paddingLeft: 20, paddingBottom: 50, width: "50%" }}>
            <Text style={styles.descText}>Dark Mode </Text>
          </View>

          <View style={{ height: 35, paddingLeft: 30, paddingTop: 20, paddingBottom: 20, width: "50%" }}>
            <SafeAreaProvider style={styles.optionsWrapper}>
              <SafeAreaView style={styles.switchContainer}>
                    <Switch trackColor={{false: theme.colors.secondary, true: theme.colors.secondary}} 
                    thumbColor={isEnabled ? theme.colors.secondary : theme.colors.primary} 
                    ios_backgroundColor="#3e3e3e" 
                    onValueChange={toggleSwitch} value={isEnabled} />
              </SafeAreaView>
            </SafeAreaProvider>
          </View>

          <Divider style={{ height: 2, width: 400, backgroundColor: '#C5DBCA' }} />
        </View>

        <View style={styles.optionsWrapper}>
          {/* Font Size */}
          <View style={{ height: 35, paddingLeft: 20, paddingBottom: 20, width: "40%" }}>
            <Text style={styles.descText}>Font Size</Text>
          </View>

          <View style={{ height: 35, paddingBottom: 20, width: "40%", }}>
            <Text style={styles.infoText}>Normal</Text>
          </View>
        </View>
        
        {/* Do NOT try to remove this spacing or add it to another component... */}
        <View style={{ paddingBottom: 15 }}></View>

        <View style={[styles.optionsWrapper]}>
            <Divider style={{ height: 2, width: 400, backgroundColor: '#C5DBCA' }} />
        </View>

        <View style={styles.optionsWrapper}>
          {/* Language */}
          <View style={{ height: 35, paddingLeft: 20, paddingBottom: 20, width: "40%" }}>
            <Text style={styles.descText}>Language</Text>
          </View>

          <View style={{ height: 35, paddingBottom: 20, width: "40%", color: '#C5DBCA' }}>
            <Text style={styles.infoText}>Normal</Text>
          </View>

        </View>

                {/* Do NOT try to remove this spacing or add it to another component... */}
        <View style={{ paddingBottom: 15 }}></View>

        <View style={[styles.optionsWrapper]}>
            <Divider style={{ height: 2, width: 400, backgroundColor: '#C5DBCA' }} />
        </View>

        <View style={styles.optionsWrapper}>
          {/* notifs */}
          <View style={{ height: 35, paddingLeft: 20, paddingBottom: 50, width: "50%" }}>
            <Text style={styles.descText}>Notifications </Text>
          </View>

          <View style={{ height: 35, paddingLeft: 30, paddingTop: 20, paddingBottom: 20, width: "50%" }}>
            <SafeAreaProvider style={styles.optionsWrapper}>
              <SafeAreaView style={styles.switchContainer}>
                    <Switch trackColor={{false: theme.colors.secondary, true: theme.colors.secondary}} 
                    thumbColor={isEnabled ? theme.colors.secondary : theme.colors.primary} 
                    ios_backgroundColor="#3e3e3e" 
                    onValueChange={toggleSwitch} value={isEnabled} />
              </SafeAreaView>
            </SafeAreaProvider>
          </View>

          <Divider style={{ height: 2, width: 400, backgroundColor: '#C5DBCA' }} />
        </View>

        <View style={styles.optionsWrapper}>
          {/* dark mode */}
          <View style={{ height: 35, paddingLeft: 20, paddingBottom: 50, width: "50%" }}>
            <Text style={styles.descText}>Share Location </Text>
          </View>

          <View style={{ height: 35, paddingLeft: 30, paddingTop: 20, paddingBottom: 20, width: "50%" }}>
            <SafeAreaProvider style={styles.optionsWrapper}>
              <SafeAreaView style={styles.switchContainer}>
                    <Switch trackColor={{false: theme.colors.secondary, true: theme.colors.secondary}} 
                    thumbColor={isEnabled ? theme.colors.secondary : theme.colors.primary} 
                    ios_backgroundColor="#3e3e3e" 
                    onValueChange={toggleSwitch} value={isEnabled} />
              </SafeAreaView>
            </SafeAreaProvider>
          </View>

          <Divider style={{ height: 2, width: 400, backgroundColor: '#C5DBCA' }} />
        </View>

      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAF0",
  },
  switchContainer: {
    alignItems: 'flex-end',
    paddingLeft: 20,
  },
  header: {
    paddingLeft: 20,
    fontSize: 36,
    color: "#719F91",
    paddingBottom: 10,
    fontFamily: "BBH Sans Hegarty",
    fontWeight: "regular",
  },
  body: {
    paddingLeft: 20,
    paddingBottom: 20,
  },
  descText: {
    paddingTop: 15,
    paddingBottom: 15,
    color: '#674F5D',
    fontFamily: "Quicksand-Medium",
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
});
