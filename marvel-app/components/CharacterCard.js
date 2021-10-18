import React from 'react';
import { Text, View,  Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CharacterCard = ({image, name}) => {

    const navigation=useNavigation()

    return (
        <TouchableOpacity style={styles.container} 
        onPress={()=>navigation.navigate("Detail")}
        >
			<Image style={styles.image}
				source={image}
			/>
            <Text style={styles.font}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      padding: 20,
      backgroundColor: "#333333",
      borderRadius:10,
      margin: 3,
      flexDirection: "row",
    },
    image:{
        width:50,
        height:50,
        marginRight:20
    },
    font:{
        color:"red",
        fontSize: 20
    }

  });
export default CharacterCard
