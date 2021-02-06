import React from 'react';
import { StyleSheet, View, ScrollView, Text, Button, TouchableOpacity, Image } from 'react-native';




export default function Home(props) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://i.ytimg.com/vi/JjfrEU3Quwg/maxresdefault.jpg',
                }}
            />
            <Text style={{ fontSize: 34,marginTop:30, textAlign: "center", color: "red", fontWeight: "bold" }}>
                Welcome To Our Blood Bank
            </Text>

            <TouchableOpacity onPress={() => props.navigation.navigate('About')} >
                <Text style={styles.btn1}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate('Contact')}>
                <Text style={styles.btn2}>Sign Up</Text>
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
    },
    btn1: {
        backgroundColor: "blue",
        marginTop: 40,
        borderRadius: 20,
        width: 300,
        margin: 10,
        padding: 10,
        color: "white",
        textAlign: "center"
    },
    btn2: {
        backgroundColor: "green",
        width: 300,
        borderRadius: 20,
        margin: 10,
        padding: 10,
        color: "white",
        textAlign: "center"
    },
    tinyLogo: {
        width: 300,
        height: 200,
        marginTop: 40
    }
})