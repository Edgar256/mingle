import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, icons, images } from "../constants";

export default function MainTopNavigation(props) {
	return (
		<View
			style={{
				padding: 7,
				flexDirection: "row",
				width: "100%",
				backgroundColor: COLORS.white,
				position: "fixed",
				top: 0,
				zIndex: 10,
			}}
		>
			<TouchableOpacity
				style={styles.bottomIcon}
				onPress={() => props.navigation.navigate("NewsFeed")}
			>
				<Image
					source={icons.navigation}
					resizeMode="contain"
					style={{ width: 50, height: 50, padding: 5, marginLeft: 5 }}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.topIcon}
				onPress={() => props.navigation.navigate("NewsFeed")}
			>
				<Image
					source={icons.logoPink}
					resizeMode="contain"
					style={{ width: 150, height: 50 }}
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	topIcon: {
		flex: 1,
		paddingHorizontal: 0,
		paddingVertical: 0,
		justifyContent: "center",
		alignItems: "center",
	},
});
