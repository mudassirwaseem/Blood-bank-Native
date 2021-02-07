import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import firebase from '../configFirebase'

export default function About(props) {

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
                props.navigation.navigate("About")
                // ...
            }
        });
    }, [])
    const Logout = () => {
        firebase.auth().signOut()
            .then(() => {
                alert("User Log out")
                props.navigation.navigate("Home")

            })
            .catch(error => alert(error.message))
    }


    return (
        <View style={styles.container}>
            <View >
            <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: 'https://images.pexels.com/photos/1164531/pexels-photo-1164531.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                            }}
                        />
            </View>
            <View>
                <TouchableOpacity onPress={() => props.navigation.navigate('AllDonors')} >
                    <Text style={styles.btn1}>Find A donor</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('InputF')} >
                    <Text style={styles.btn2}>Be A Donor</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Logout}  >
                    <Text style={styles.btn3}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
    },
    container1: {
        backgroundColor: "red",
        height: 200,
        justifyContent: "center",
        alignItems: "center"
    },
    btn1: {
        marginTop: 60,
        backgroundColor: "blue",
        borderRadius: 10,
        fontSize: 22,
        fontWeight: "bold",
        width: 300,
        margin: 10,
        padding: 10,
        color: "white",
        textAlign: "center",
    },
       tinyLogo: {
        width: 340,
        height: 200,
        marginTop:10
    },
    btn2: {
        marginTop: 60,
        backgroundColor: "red",
        borderRadius: 10,
        width: 300,
        margin: 10,
        padding: 10,
        color: "white",
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold"
    },
    btn3: {
        marginTop: 60,
        backgroundColor: "green",
        borderRadius: 10,
        width: 300,
        margin: 10,
        padding: 10,
        color: "white",
        textAlign: "center",
        fontSize: 22,
        fontWeight: "bold"
    }

})