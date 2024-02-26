import React, { useState } from 'react';
import {View, Text, TextInput, Image, TouchableOpacity, SafeAreaView, Button} from 'react-native';
import { StyleSheet } from 'react-native';
import {useNavigation} from "@react-navigation/native";


const Password = () => {
    const navigation = useNavigation()
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    let pword = "MadTwo";
    let uname = "JFM04";

    const handlePress = () => {
        if(password === pword && username === uname){
            navigation.navigate('Home');
        }
    };

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.welcome}>
                    <Text style={styles.words}>Please Enter Your Username and Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        onChangeText={text => setUsername(text)} // Update the password state when the text changes
                        value={username} // Set the value of the input to the password state
                    />
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        placeholder="Password"
                        onChangeText={text => setPassword(text)} // Update the password state when the text changes
                        value={password} // Set the value of the input to the password state
                    />
                    <Button style={styles.button} title="Enter" onPress={handlePress} />
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end', // Aligns children to the end (bottom for column direction)
    },
    welcome: {
        flex: 1,
        justifyContent: 'center', // This will center the text vertically
        alignItems: 'center', // This will center the text horizontally
    },
    words:{
        fontSize: 20,
    },
    input: {
        height: 40,
        width: '80%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 5,
        padding: 10,
    },
});

export default Password;

