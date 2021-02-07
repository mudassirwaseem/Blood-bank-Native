import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import firebase from '../configFirebase'

export default function About(props) {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const signIn = (() => {
        let a = { email, password }
        alert("User Sign In")
        console.log(a)
        //    firebase.database().ref("users").push(a)

        props.navigation.navigate("Main")
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((value1) => {
                console.log(value1)
            })
            .catch((error) => {
                console.log(error)
                alert(error.message)
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
                                uri: 'https://images.pexels.com/photos/4531304/pexels-photo-4531304.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                            }}
                        />
                    </View>
                    <Text style={{ fontSize: 36, color: "red", fontWeight: "bold" }}>Sign Up</Text>

                    <View style={styles.text1}>
                        <Text style={styles.text}>Email:</Text>
                        <TextInput
                            onChangeText={(val) => setemail(val)}
                            style={{
                                height: 40, textAlign: "center", borderRadius: 10, margin: "auto", marginTop: 20,marginBottom:10,
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
                                height: 40, textAlign: "center", borderRadius: 10, margin: "auto", marginTop: 20,marginBottom:10,
                                borderColor: 'gray', borderWidth: 2, backgroundColor: "white", width: 300
                            }}
                            placeholder="Enter Password"
                        />
                    </View>

                    <View style={styles.text1}>

                        {/* <Button
                        onPress={submit}
                        style={styles.button}
                        title="Login" /> */}
                        <TouchableOpacity onPress={signIn} >
                            <Text style={styles.btn1}>Sign Up</Text>
                        </TouchableOpacity>

                    </View>

                    {/* </ImageBackground> */}
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
        height: 200,
        marginTop:10
    },
    text: {
        fontSize: 20
    },
    text1: {
        marginTop: 0
    },
    btn1: {
        marginTop: 30,
        backgroundColor: "red",
        borderRadius: 20,
        width: 300,
        margin: 10,
        padding: 10,
        color: "white",
        textAlign: "center"
    }
})