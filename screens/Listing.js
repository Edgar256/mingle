import React from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	Image,
	TouchableOpacity,
	ImageBackground,
	ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { icons, images } from "../constants";
import { MainBottomNavigation } from "../navigations";
import { UserTile } from "../components";
import MainTopNavigation from "../navigations/MainTopNavigation";

const Listing = ({ navigation }) => {
	return (
		<SafeAreaView
			style={{ width: "100%", height: "100%", flexDirection: "row" }}
		>
			<MainTopNavigation />
			<View style={styles.body}>
				<View style={styles.container}>
					<ScrollView
						style={{
							position: "relative",
							width: "100%",
							zIndex: 44,
							paddingTop: 70,
							paddingBottom: 10,
							overflow: "scroll",
							flexDirection: "column",
							paddingHorizontal: 10,
						}}
					>
						<View style={{ flexWrap: "wrap", flexDirection: "row" }}>
							<UserTile
								name="Anne"
								hours="7"
								age="25"
								image={images.model001}
								navigation={navigation}
							/>
							<UserTile
								name="Sherina"
								hours="2"
								age="19"
								image={images.model002}
								navigation={navigation}
							/>
							<UserTile
								name="Viola"
								hours="12"
								age="29"
								image={images.model003}
								navigation={navigation}
							/>
							<UserTile
								name="Veanne"
								hours="4"
								age="20"
								image={images.model004}
								navigation={navigation}
							/>
							<UserTile
								name="Shamira"
								hours="48"
								age="27"
								image={images.model005}
								navigation={navigation}
							/>
							<UserTile
								name="Liz"
								hours="10"
								age="23"
								image={images.model006}
								navigation={navigation}
							/>
							<UserTile
								name="Shamira"
								hours="48"
								age="27"
								image={images.model010}
								navigation={navigation}
							/>
							<UserTile
								name="Liz"
								hours="11"
								age="23"
								image={images.model007}
								navigation={navigation}
							/>
							<UserTile
								name="Shamira"
								hours="48"
								age="27"
								image={images.model008}
								navigation={navigation}
							/>
							<UserTile
								name="Liz"
								hours="19"
								age="23"
								image={images.model009}
								navigation={navigation}
							/>
						</View>
					</ScrollView>
				</View>
			</View>
			<MainBottomNavigation />
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

export default Listing;
