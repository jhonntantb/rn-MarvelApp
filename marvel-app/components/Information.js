import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const Information = ({ image, name, description }) => {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                source={{uri: image}}
            />
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}


const styles=StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        padding:20,
        margin:3,
        borderRadius:10,
        borderColor:"red"
    },
    image:{
        height:30,
        width:30
    },
    title:{
        color:"red",
        fontSize:20,
    },
    description:{
        color:"#000000",
        fontSize:25
    }
})

export default Information
