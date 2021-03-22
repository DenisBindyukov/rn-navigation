import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {DATA} from "../../data";
import {Post} from "../components/Post";

//navigation  метод из обьекта который приходит в пропсы из библеотечки навигации.

export const MainScreen = ({navigation}) => {
    const goToPost = (post) => {
        navigation.navigate('Post',{postId: post.id})
                   //push
    }

    return (
        <View style={styles.wrap}>
            <FlatList
                data={DATA}
                keyExtrator={post => post.id.toString()}
                renderItem={({item}) => <Post post={item} onOpen={goToPost}/>}
                />
        </View>
    )
}


const styles = StyleSheet.create({
    wrapper: {
      padding: 10
    },
});