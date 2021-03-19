import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';


export const Post = ({post}) => {
console.log(post)
    return (
        <View style={styles.post}>
            <ImageBackground style={styles.img} source={ {uri: post.img} }>
                <View style={styles.textWrap}>
                    <Text style={styles.title}>{post.date}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
    post: {
        marginBottom: 15,
        overflow: 'hidden'
    },
    img: {
        width: '100%',
        height: 200,
    },
    textWrap: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%'
    },
    title: {
        color: '#fff',
        fontFamily: 'open-regular'
    }
});