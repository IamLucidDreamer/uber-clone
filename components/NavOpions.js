import React from 'react'
import { FlatList , Text, TouchableOpacity, View } from 'react-native'

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://link.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order Food",
        image: "https://link.papareact.com/20w",
        screen: "EatScreen",
    }
]


const NavOpions = () => {
    return (
        <FlatList 
        data={data}
        horizontal
        renderItem={({ item }) => {
            <TouchableOpacity>
                <Text>{item.title}</Text>
            </TouchableOpacity>
        }}
        />
    )
}

export default NavOpions

