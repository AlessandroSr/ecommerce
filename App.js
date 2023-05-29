import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductsList } from "./src/screens/ProductsList";
import { ProductDetails } from "./src/screens/ProductDetails";
import { Cart } from "./src/screens/Cart";
import { CartProvider } from "./src/services/Cart";
import { CartIcon } from "./src/components/CartIcon";

const Stack = createNativeStackNavigator();

function App(){
  return(
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Products" component={ProductsList} options={({navigation}) => ({title: 'Produtos', headerRight: () => <CartIcon navigation={navigation} />})} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} options={({navigation}) => ({title: 'Detalhes', headerRight: () => <CartIcon navigation={navigation} />})} />
          <Stack.Screen name="Cart" component={Cart} options={({navigation}) => ({title: 'Carinho', headerRight: () => <CartIcon navigation={navigation} />})} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  )
}

const styles = StyleSheet.create({
  Container: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default App;