import React from 'react'
import { View, Text } from 'react-native'

const Information = () => {
    return (
        <View>
            <Text>Information</Text>
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
