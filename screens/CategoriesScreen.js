import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoriesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Categories Screen</Text>
            <Button title="Go to Meals" onPress={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals'
                });
                // props.navigation.push('Category Meals') -- can also use this -- pushes to the same page possibly with different content
            }} />
            {/* <Button title="Go Back" onPress={() => {
                props.navigation.goBack(); 
            }} /> */}
        </View>
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