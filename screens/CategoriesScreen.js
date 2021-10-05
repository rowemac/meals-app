import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { CATEGORIES } from "../data/dummy-data";

const renderGridItem = (itemData) => {
    return (
        <TouchableOpacity 
            onPress={() => {
                props.navigation.navigate({ routeName: 'CategoryMeals' }); 
            }}
        > 
            <View style={styles.gridItem}>
                <Text>{itemData.item.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity  
                style={styles.gridItem} 
                onPress={() => {
                    props.navigation.navigate({ routeName: 'CategoryMeals' }); 
                }}
            > 
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <FlatList 
            keyExtractor={(item, index) => item.id} // not necessary anymore but good for legacy code
            data={CATEGORIES} 
            renderItem={renderGridItem} 
            numColumns={2} 
        />
    )
}; 

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

export default CategoriesScreen; 