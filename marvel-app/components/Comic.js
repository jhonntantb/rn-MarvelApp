import React from 'react'
import { View, Text, Image } from 'react-native'

const Comic = ({name,image}) => {
    return (
        <View>
            <Image source={{uri: image}}/>
            <Text>{name}</Text>
        </View>
    )
}

export default Comic
