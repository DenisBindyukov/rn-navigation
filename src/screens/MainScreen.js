import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

 //navigation  метод из обьекта который приходит в пропсы через библеотечке навигации.

export const MainScreen = ({navigation}) => {
    const goToPost = () => {
        navigation.navigate('Post')
                    //push
    }

    return (
        <View style={styles.center}>
            <Text>MainScreen</Text>
            <Button title={'Go to post'} onPress={goToPost}/>
        </View>
    )
}


const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});