import React from 'react';
import {StyleSheet, Platform, StatusBar, ImageBackground, SafeAreaView, View, Text} from 'react-native';
import {AppNavigation} from "./src/navigation/AppNavigation";
import {useFonts} from "expo-font";

export default function App() {

    let [fontsLoaded] = useFonts({
        'open-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        'open-regular': require('./assets/fonts/OpenSans-Regular.ttf')
    });

    if (!fontsLoaded) {

        return (
            <SafeAreaView style={styles.statusBar}>
                <ImageBackground style={styles.bg} resizeMode="cover" source={require('./assets/favicon.png')}>
                    <View style={styles.wrapperDowlandFonts}>
                        <Text> Загрузка шрифтов... </Text>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        )
    }

    return <AppNavigation/>
}

const styles = StyleSheet.create({
    container: {

    },
    statusBar: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    bg: {
        flex: 1
    },
    wrapperDowlandFonts: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 20,
    },
});
