import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, Image, ScrollView, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';
import firebase from '../configFirebase'



export default function About(props) {
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                props.navigation.navigate("Main")
                
            }
        });
    }, [])
    const submit = (() => {
        let a = { name, password }
        console.log(a)
        //    firebase.database().ref("users").push(a)
        
        // props.navigation.navigate("Main") iski waja sy navigatio kr rha tha
        firebase.auth().signInWithEmailAndPassword(name, password)
        .then((userCredential) => {
                alert("User Login")
                console.log("signed iN")
                props.navigation.navigate("Main")
                // Signed in
                var user = userCredential.user;
                // ...
            })
            .catch((error) => {
                // console.log(error.message)
                alert(error.message)
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    })

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.container}>
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: 'https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                            }}
                        />
                    </View>
                    <Text style={{ fontSize: 36, marginTop: 20, color: "blue", fontWeight: "bold" }}>Login</Text>
                    <View style={styles.text1}>
                        <Text style={styles.text}>Email:</Text>
                        <TextInput
                            onChangeText={(val) => setname(val)}
                            style={{
                                height: 40, textAlign: "center", borderRadius: 10, margin: "auto",marginTop:10,
                                borderColor: 'gray', borderWidth: 2, backgroundColor: "white", width: 300
                            }}
                            placeholder="Enter Email"
                        />
                    </View>
                    <View style={styles.text1}>
                        <Text style={styles.text}>Password:</Text>
                        <TextInput
                            secureTextEntry={true}
                            onChangeText={(val) => setpassword(val)}
                            style={{
                                height: 40, textAlign: "center", borderRadius: 10, margin: "auto",marginTop:10,
                                borderColor: 'gray', borderWidth: 2, backgroundColor: "white", width: 300
                            }}
                            placeholder="Enter Password"
                        />
                    </View>



                    <TouchableOpacity onPress={submit}   >
                        <Text style={styles.btn1}>Login</Text>
                    </TouchableOpacity>

                </View>



            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
    },
    tinyLogo: {
        width: 340,
        height: 200
    },
    text: {
        fontSize: 20
    },
    text1: {
        marginTop: 20
    },
    btn1: {
        marginTop: 40,
        backgroundColor: "blue",
        borderRadius: 20,
        width: 300,
        margin: 10,
        padding: 10,
        color: "white",
        textAlign: "center"
    }
})