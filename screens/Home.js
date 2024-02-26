import React from 'react';

import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import { StyleSheet } from 'react-native';
import {useNavigation} from "@react-navigation/native";


const Home = () => {
    const navigation = useNavigation()

    return (
        <>
            <View style = {styles.rectangle1}/>
            <SafeAreaView style={styles.container}>
                <View style={styles.welcome}>
                    <Text>Welcome Back, Scott!</Text>
                </View>
                <View style={styles.navbar}>
                    <TouchableOpacity onPress={() => navigation.navigate('Physical')}>
                        <Image source={require('./photos/heart.png')} style={{ width: 35, height: 35}} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Password')}>
                    <Image source={require('./photos/logout.png')} style={{ width: 35, height: 35}} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Mental')}>
                        <Image source={require('./photos/brain.png')} style={{ width: 35, height: 35}} />
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
            <View style = {styles.rectangle}/>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end', // Aligns children to the end (bottom for column direction)
    },
    navbar: {
        flexDirection: 'row',
        flexWrap: 'wrap', // This will allow the items to wrap onto the next line when there isn't enough space
        alignItems: 'center',
        justifyContent: 'space-around', // This will spread the items out evenly
        backgroundColor: '#333',
        paddingTop: 20,
    },
    navbarItem: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        padding: 14,
        textDecorationLine: 'none',
    },
    rectangle: {
        justifyContent: 'flex-end',
        height: 50,
        width: 1000,
        backgroundColor: '#333', // Use backgroundColor instead of color
    },
    rectangle1: {
        justifyContent: 'flex-start',
        height: 100,
        width: 1000,
        backgroundColor: '#333', // Use backgroundColor instead of color
    },
    welcome: {
        flex: 1,
        justifyContent: 'center', // This will center the text vertically
        alignItems: 'center', // This will center the text horizontally
    },
});

export default Home;

