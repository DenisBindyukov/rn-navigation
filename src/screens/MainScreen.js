import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {DATA} from "../../data";
import {Post} from "../components/Post";

//navigation  метод из обьекта который приходит в пропсы из библеотечки навигации.

export const MainScreen = () => {
    // const goToPost = () => {
    //     navigation.navigate('Post')
    //                //push
    // }

    return (
        <View>
            <FlatList
                data={DATA}
                keyExtrator={post => post.id.toString()}
                renderItem={({item}) => <Post post={item} />}
                />
        </View>
    )
}


const styles = StyleSheet.create({
    wrapper: {
      padding: 10
    },
});