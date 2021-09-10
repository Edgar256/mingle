import React, { useRef } from "react";
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
import { Modalize } from "react-native-modalize";
import { Ionicons } from "@expo/vector-icons";
import Modal from "modal-enhanced-react-native-web";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { icons, images } from "../constants";

const UserTile = (props) => {
	const modalRef = useRef(null);

	const onOpen = () => {
		const modal = modalRef.current;

		if (modal) {
			modal.open();
		}
	};

	return (
		<View
			style={{
				width: "50%",
				paddingHorizontal: 2,
				paddingVertical: 2,
			}}
		>
			<ImageBackground
				source={props.image}
				style={{
					height: 200,
					position: "relative",
					borderRadius: 20,
					overflow: "hidden",
					borderWidth: 0,
					marginBottom: 0,
				}}
			>
				<LinearGradient
					colors={["#00000000", "#00000000", "#000000b8"]}
					start={[0.0, 0.0]}
					end={[0.0, 1.0]}
					style={styles.body}
				>
					<View
						style={{
							position: "relative",
							height: "100%",
							width: "100%",
						}}
					>
						<View
							style={{
								padding: 10,
								bottom: 0,
								left: 0,
								marginRight: 10,
								position: "absolute",
								width: "100%",
							}}
						>
							<View style={{ flexDirection: "row" }}>
								<TouchableOpacity
									style={{
										flexDirection: "column",
										flex: 1,
									}}
									onPress={() => props.navigation.navigate("UserProfileSummary")}
								>
									<Text
										style={{
											color: COLORS.white,
											fontSize: SIZES.h3,
											paddingRight: 10,
										}}
									>
										{props.name} {props.age}
									</Text>
									<Text
										style={{
											color: COLORS.white,
											fontSize: SIZES.h4,
											paddingRight: 10,
										}}
									>
										{props.hours} h
									</Text>
								</TouchableOpacity>
								<TouchableOpacity>
									<Ionicons
										name="md-heart-outline"
										size={35}
										color={COLORS.white}
									/>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</LinearGradient>
			</ImageBackground>
		</View>
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
	modalView: {
		height: "100%",
		width: "100%",
		top: 350,
		backgroundColor: "#f2f2f2",
		borderRadius: 30,
		padding: 0,
		margin: 0,
	},
	textContainer: {
		flexDirection: "row",
		paddingHorizontal: 10,
		paddingVertical: 5,
	},
	btn: {
		color: COLORS.white,
		paddingHorizontal: 8,
		paddingVertical: 5,
		marginRight: 4,
		borderRadius: 20,
		marginVertical: 2,
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
	preference: {
		flexDirection: "row",
		borderTopColor: COLORS.grey,
		borderTopWidth: 1,
		padding: 20,
	},
	icons: {
		width: 20,
		height: 20,
		marginTop: 10,
	},
});

export default UserTile;
