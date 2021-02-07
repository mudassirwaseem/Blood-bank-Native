import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Container, Header, Content, Form, Item, Picker } from 'native-base';
import firebase from '../configFirebase'

export default function InputF(props) {


    const [name, setname] = useState("")
    const [gender, setgender] = useState("Male")
    const [age, setage] = useState("")
    const [bloodgroup, setbloodgroup] = useState("A+")
    const [Number, setNumber] = useState("")
    const [address, setaddress] = useState("")


    Submit = (() => {
        if (name && gender && age && bloodgroup && Number && address) {
            let value = { name, gender, age, bloodgroup, address, Number }
            firebase.database().ref("user").push(value)
            alert("Information Submit")
            props.navigation.navigate("Main")
        }
        else alert("Please fill in all fields")


    })

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.container1}>
                    <Text style={{ fontSize: 34, color: "red", fontWeight: "bold", textAlign: "center", marginTop: 20 }}>Wellcome Donor</Text>

                </View>



                <View>
                    <Text style={styles.text}>Username:</Text>
                    <TextInput
                        onChangeText={(val) => setname(val)}

                        style={{
                            height: 40, textAlign: "center", borderRadius: 10, margin: "auto",
                            borderColor: 'gray', borderWidth: 2, backgroundColor: "white", width: 300
                        }}
                        placeholder="Enter Your Name"
                    />
                    <Text style={{ fontSize: 16, marginTop: 10 }}>Gender:</Text>

                    <Form>
                        <Item picker>
                            <Picker
                                mode="dropdown"

                                style={{ width: undefined }}
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={gender}
                                onValueChange={(value) => {
                                    setgender(value)
                                }}>


                                <Picker.Item label="Male" value="Male" />
                                <Picker.Item label="Female" value="Female" />

                            </Picker>
                        </Item>
                    </Form>

                    <Text style={{ fontSize: 16, marginTop: 10 }}>Blood Group :</Text>

                    <Form>
                        <Item picker>
                            <Picker
                                mode="dropdown"

                                style={{ width: undefined }}
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={bloodgroup}
                                onValueChange={(value) => {
                                    setbloodgroup(value)
                                }}>

                                <Picker.Item label="A+" value="A+" />
                                <Picker.Item label="A-" value="A-" />
                                <Picker.Item label="B+" value="B+" />
                                <Picker.Item label="B-" value="B-" />
                                <Picker.Item label="O+" value="O+" />
                                <Picker.Item label="O-" value="O-" />
                                <Picker.Item label="AB-" value="AB-" />
                                <Picker.Item label="AB+" value="AB+" />


                            </Picker>
                        </Item>
                    </Form>
                    <Text style={styles.text}>Age:</Text>
                    <TextInput
                        keyboardType="numeric"
                        onChangeText={(val) => setage(val)}

                        style={{
                            height: 40, textAlign: "center", borderRadius: 10, margin: "auto",
                            borderColor: 'gray', borderWidth: 2, backgroundColor: "white", width: 300
                        }}
                        placeholder="Enter Your Age"
                    />
                    <Text style={styles.text}>Number</Text>
                    <TextInput
                        keyboardType="numeric"

                        onChangeText={(val) => setNumber(val)}
                        style={{
                            height: 40, textAlign: "center", borderRadius: 10, margin: "auto",
                            borderColor: 'gray', borderWidth: 2, backgroundColor: "white", width: 300
                        }}
                        placeholder="Enter Address"
                    />
                    <Text style={styles.text}>Address</Text>
                    <TextInput

                        onChangeText={(val) => setaddress(val)}
                        style={{
                            height: 40, textAlign: "center", borderRadius: 10, margin: "auto",
                            borderColor: 'gray', borderWidth: 2, backgroundColor: "white", width: 300
                        }}
                        placeholder="Enter Address"
                    />
                </View>
                <TouchableOpacity onPress={Submit} >
                    <Text style={styles.btn2}>Submit</Text>
                </TouchableOpacity>
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
    container1: {
        backgroundColor: "white",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
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
    },
    btn2: {
        marginTop: 40,
        backgroundColor: "red",
        borderRadius: 20,
        width: 300,
        margin: 10,
        padding: 10,
        color: "white",
        textAlign: "center"
    },
    text: {
        fontSize: 20,
        marginTop: 10
    },

})