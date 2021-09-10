import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, images } from "../constants";

export default function MainBottomNavigation(props) {
	return (
		<View
			style={{
				padding: 2,
				flexDirection: "row",
				width: "100%",
				backgroundColor: COLORS.white,
				position: "fixed",
				bottom: 0,
				zIndex: 45,
				zIndex: 0,
			}}
		>
			<TouchableOpacity
				style={styles.bottomIcon}
				onPress={() => props.navigation.navigate("NewsFeed")}
			>
				<Ionicons name="md-compass-outline" size={40} color={COLORS.black} />
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.bottomIcon}
				onPress={() => props.navigation.navigate("Chats")}
			>
				<Ionicons name="md-heart-outline" size={40} color={COLORS.black} />
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.bottomIcon}
				onPress={() => props.navigation.navigate("Notifications")}
			>
				<Ionicons
					name="md-chatbubbles-outline"
					size={40}
					color={COLORS.black}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.bottomIcon}
				onPress={() => props.navigation.navigate("Groups")}
			>
				<Ionicons name="md-person-outline" size={40} color={COLORS.black} />
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	bottomIcon: {
		flex: 1,
		paddingHorizontal: 15,
		paddingVertical: 10,
		width: "auto",
		justifyContent: "center",
		alignItems: "center",
	},
});
