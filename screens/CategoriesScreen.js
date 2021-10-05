import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

import { CATEGORIES } from "../data/dummy-data";

const renderGridItem = (itemData) => {
    return <View><Text>{itemData.item.title}</Text></View>
};

const CategoriesScreen = props => {
    return (
        <FlatList data={CATEGORIES} renderItem={} numColumns={2} />
    )
}; 

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen; 