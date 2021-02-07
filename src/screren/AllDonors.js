import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView, Text, Button, TouchableOpacity, Image } from 'react-native';
import firebase from '../configFirebase'
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';





export default function AllDonors() {

    const [Alldata, setAlldata] = useState([])

    useEffect(() => {
        let data = firebase.database().ref("user")
        data.on("value", datasnap => {
            console.log(Object.values(datasnap.val()))
            setAlldata(Object.values(datasnap.val()))



        })

    }, [])


    return (

        Alldata ?

            (
                <View style={styles.container}>
                    <Text style={{ fontSize: 40, margin: 10, textAlign: "center", color: "red", fontWeight: "bold" }}> Donors</Text>

                    <ScrollView>
                        {
                            Alldata.map((all, key) => {
                                return <View style={styles.container1} key={key} >
                                    <Text style={{ textAlign: "center", fontSize: 25 ,color:"blue",fontWeight:"bold"}}> Name : {all.name}</Text>
                                    <Text style={{ textAlign: "center", fontSize: 15 ,color:"red"}}> Blood Group : {all.bloodgroup}</Text>
                                    <Text style={{ textAlign: "center", fontSize: 15 ,color:"red"}}> Gender : {all.gender}</Text>
                                    <Text style={{ textAlign: "center", fontSize: 15 ,color:"red" }}> Address : {all.address}</Text>
                                    <Text style={{ textAlign: "center", fontSize: 15 ,color:"red" }}> Contact : {all.Number}</Text>
                                    <Text style={{ textAlign: "center", fontSize: 15 ,color:"red"}}> Age : {all.age}</Text>
                                 
                                </View>
                            })
                        }
                    </ScrollView>

                </View>) :
            <View> <Text>Loading</Text></View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    container1: {
        margin: 20,
        padding: 10,
        marginTop: 20,
        color: "red",
        fontSize: 20,
        marginTop: 10,
        marginBottom: 20,
        borderWidth: 2,
        borderColor:'red',
        fontFamily: "Cochin"



    }

})