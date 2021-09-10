import "react-native-gesture-handler";
// import * as React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Home, Slider, UserProfileSummary, Listing, MyProfileSummary } from "./screens";

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		border: "transparent",
	},
};

const Stack = createStackNavigator();

export default function App() {
	return (
		<NavigationContainer theme={theme}>
			<Stack.Navigator initialRouteName={"MyProfileSummary"}>
				{/* Screens */}
				<Stack.Screen
					name="Home"
					options={{
						headerShown: false,
					}}
					component={Home}
				/>
				<Stack.Screen
					name="Slider"
					options={{
						headerShown: false,
					}}
					component={Slider}
				/>
				<Stack.Screen
					name="UserProfileSummary"
					options={{
						headerShown: false,
					}}
					component={UserProfileSummary}
				/>
				<Stack.Screen
					name="MyProfileSummary"
					options={{
						headerShown: false,
					}}
					component={MyProfileSummary}
				/>
				<Stack.Screen
					name="Listing"
					options={{
						headerShown: false,
					}}
					component={Listing}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
