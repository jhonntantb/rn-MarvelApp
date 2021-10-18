import React from 'react'
import { View, Text } from 'react-native'
import CharacterCard from './CharacterCard'

const Home = () => {
    return (
        <View >
            <CharacterCard image={require('../assets/favicon.png')} name='Iron Man' />
            <CharacterCard image={require('../assets/favicon.png')} name='Captain America' />
        </View>
    )
}

export default Home
