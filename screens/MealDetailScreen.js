import React, { useEffect, useCallback } from "react";
import { ScrollView, View, Image, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import HeaderButton from '../components/HeaderButton';
import DefaultText from "../components/DefaultText";
import { toggleFavorite } from '../store/actions/meals'; 

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.children}</Text>
        </View>
    )
}

const MealDetailScreen = props => {
    const availableMeals = useSelector(state => state.meals.meals)
    const mealId = props.navigation.getParam('mealId');
    const currentMealIsFavorite = useSelector(state => 
        state.meals.favoriteMeals.some(meal => meal.id === mealId)
    ); 

    const selectedMeal = availableMeals.find(meal => meal.id === mealId); 

    const dispatch = useDispatch(); 

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId)); 
    }, [dispatch, mealId]);  

    useEffect(() => {
        // props.navigation.setParams({ mealTitle: selectedMeal.title }); DELAYED TITLE UPDATE BECAUSE OF RERENDER 
        props.navigation.setParams({toggleFav: toggleFavoriteHandler}); 
    }, [selectedMeal]);

    useEffect(() => {
        props.navigation.setParams({isFav: currentMealIsFavorite}); 
    }, [currentMealIsFavorite]); 

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />

            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>

            <View>
                <Text style={styles.title}>Ingredients</Text>
                {selectedMeal.ingredients.map(ingredient => (
                    <ListItem key={ingredient}>{ingredient}</ListItem>
                ))}
                <Text style={styles.title}>Steps</Text>
                {selectedMeal.steps.map(step => (
                    <ListItem key={step}>{step}</ListItem>
                ))}
            </View>

        </ScrollView>
    )
}; 

MealDetailScreen.navigationOptions = (navigationData) => {
    // const mealId = navigationData.navigation.getParam('mealId'); 
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFavorite = navigationData.navigation.getParam('toggleFav'); 
    const isFavorite = navigationData.navigation.getParam('isFav');
    // const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: mealTitle,
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                title="Favorite" 
                iconName={isFavorite ? 'ios-star' : 'ios-star-outline'}
                onPress={toggleFavorite}
            />
            </HeaderButtons>
        )
    }; 
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row', 
        padding: 15, 
        justifyContent: 'space-around'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    },
    title: {
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
        fontSize: 20

    }
});

export default MealDetailScreen; 