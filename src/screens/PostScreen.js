import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const PostScreen = ({navigation}) => {

    const postId = navigation.getParam('postId')

    return (
        <View style={styles.center}>
            <Text>{postId}</Text>
        </View>
    )
}

// PostScreen.navigationOptions = ({navigation}) => {
//     const postId = navigation.getParam('postId')
//
//     return {
//         titleColor: `red`
//     }
// }


const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});