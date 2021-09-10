import React from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Image,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { icons, images } from "../constants";

const Home = ({ navigation }) => {
	return (
		<SafeAreaView
			style={{ width: "100%", height: "100%", flexDirection: "row" }}
		>
			<LinearGradient
				colors={[COLORS.primary, COLORS.secondary, COLORS.secondary]}
				start={[0.0, 0.0]}
				end={[1.0, 1.0]}
				style={styles.body}
			>
				<View style={styles.container}>
					<Image
						source={icons.logoWhite}
						resizeMode="contain"
						style={styles.image}
					/>
					<TouchableOpacity
						onPress={() => navigation.navigate("Slider")}
					>
						<Text style={styles.text}>Continue</Text>
					</TouchableOpacity>
				</View>
			</LinearGradient>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	body: {
		width: "100%",
		height: "100%",
		flex: 1,
		flexDirection: "row",
	},
	container: {
		flex: 1,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		width: 250,
		height: 150,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: COLORS.white,
		textAlign: "center",
	},
});

export default Home;
