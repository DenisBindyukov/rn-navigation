import React from 'react';
import {StyleSheet, Text, View, Image, Button, ScrollView, Alert} from 'react-native';
import {THEME} from "../../THEME";
import {DATA} from "../../data";

export const PostScreen = ({navigation}) => {

    const postId = navigation.getParam('postId')

    const post = DATA.find(p => p.id === postId)

    const removePost = () => {
        Alert.alert(
            "Remove",
            "Do you want to remove a post ?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { text: "Delete", style:'destructive', onPress: () => {} }
            ]
        );
    }

    return (
        <ScrollView>
            <Image source={{uri: post.img}} style={styles.img}/>
            <View style={styles.textWrap}>
                <Text style={styles.title}>{post.text.repeat(100)}</Text>
                <Button title={'Delete'} color={THEME.DANGER_COLOR} onPress={removePost}/>
            </View>
        </ScrollView>
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
    img: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10
    },
     title: {
        fontFamily: 'open-regular'
     }
});