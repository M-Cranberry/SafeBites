import { router } from "expo-router";
import * as React from "react";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Divider, Provider as PaperProvider, Switch } from "react-native-paper";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

export default function AccountInfo() {

    //this is for the switch, taken from reactnative.dev site
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <PaperProvider>
            <View style={styles.container}>

                <View style={styles.body}>
                    <Text style={styles.header}>Appearance</Text>
                </View>

                <View style={styles.body}>
                    {/* User Information Section */}
                    <SafeAreaProvider style={styles.optionsWrapper}>
                    <Text style={styles.descText}>Dark Mode
                        <SafeAreaView style={styles.switchContainer}>
                            <Switch
                                trackColor={{false: '#767577', true: '#C5DBCA'}}
                                thumbColor={isEnabled ? '#FFFAF0' : '#FFFAF0'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </SafeAreaView>
                    </Text>
                    </SafeAreaProvider>
                    <Divider style={{ height: 2, width: 400, backgroundColor: '#C5DBCA' }} />
                </View>

                <View style={styles.optionsWrapper}>
                    <Text style={styles.descText}>Font Size</Text>
                    <Text style={styles.infoText}>Normal</Text>
                    <Divider style={{ height: 2, width: 400, backgroundColor: '#C5DBCA' }} />
                </View>

                <View style={styles.body}>
                    {/* User Information Section */}
                    <SafeAreaProvider style={styles.optionsWrapper}>
                    <Text style={styles.descText}>Notifications
                        <SafeAreaView style={styles.switchContainer}>
                            <Switch
                                trackColor={{false: '#767577', true: '#C5DBCA'}}
                                thumbColor={isEnabled ? '#FFFAF0' : '#FFFAF0'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </SafeAreaView>
                    </Text>
                    </SafeAreaProvider>
                    <Divider style={{ height: 2, width: 400, backgroundColor: '#C5DBCA' }} />

                </View>
                    <View style={styles.body}>
                    {/* User Information Section */}
                    <SafeAreaProvider style={styles.optionsWrapper}>
                    <Text style={styles.descText}>Share my location
                        <SafeAreaView style={styles.switchContainer}>
                            <Switch
                                trackColor={{false: '#767577', true: '#C5DBCA'}}
                                thumbColor={isEnabled ? '#FFFAF0' : '#FFFAF0'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </SafeAreaView>
                    </Text>
                    </SafeAreaProvider>
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
        fontWeight: "600",
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
    optionsWrapper: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingLeft: 20,
        paddingTop: 16,
  },

});
