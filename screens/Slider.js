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

const Slider = ({ navigation }) => {
	return (
		<SafeAreaView
			style={{ width: "100%", height: "100%", flexDirection: "row" }}
		>
			<View style={styles.body}>
				<View style={styles.container}>
					<ScrollView
						style={{
							position: "relative",
							width: "100%",
							zIndex: 44,
							paddingTop: 40,
							paddingBottom: 20,
							overflow: "scroll",
							flexDirection: "column",
							paddingHorizontal: 20,
						}}
					>
						<ImageBackground
							source={images.model001}
							style={{
								height: 400,
								position: "relative",
								borderRadius: 20,
								overflow: "hidden",
								borderWidth: 0,
								marginBottom: 10,
							}}
						>
							<LinearGradient
								colors={["#00000000", "#00000000", "#000000b8"]}
								start={[0.0, 0.0]}
								end={[0.0, 1.0]}
								style={styles.body}
							>
								<TouchableOpacity
									style={{
										position: "relative",
										height: "100%",
										width: "100%",
									}}
									onPress={() => navigation.navigate("UserProfile")}
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
										<View
											style={{ flexDirection: "row", justifyContent: "center" }}
										>
											<Text
												style={{
													color: COLORS.white,
													fontSize: SIZES.h3,
													textAlign: "center",
													paddingRight: 10,
												}}
											>
												(Anne 24)
											</Text>
											<Ionicons
												name="logo-instagram"
												size={20}
												color={COLORS.white}
											/>
										</View>
										<View
											style={{ flexDirection: "row", justifyContent: "center" }}
										>
											<Ionicons
												name="md-school"
												size={18}
												color={COLORS.white}
											/>
											<Text
												style={{
													color: COLORS.white,
													textAlign: "center",
													paddingLeft: 5,
												}}
											>
												(University of Minnesota)
											</Text>
										</View>
										<View
											style={{ flexDirection: "row", justifyContent: "center" }}
										>
											<Ionicons
												name="md-navigate"
												size={18}
												color={COLORS.white}
											/>
											<Text
												style={{
													color: COLORS.white,
													textAlign: "center",
													paddingLeft: 5,
												}}
											>
												(3 miles away)
											</Text>
										</View>
									</View>
								</TouchableOpacity>
							</LinearGradient>
						</ImageBackground>
						<View
							style={{ flexDirection: "row", justifyContent: "space-around" }}
						>
							<TouchableOpacity
								style={{
									backgroundColor: COLORS.white,
									paddingVertical: 10,
									paddingHorizontal: 12,
									borderRadius: 40,
									marginVertical: 10,
									shadowOffset: { width: 0, height: 5 },
									shadowRadius: 15,
									shadowOpacity: 0.1,
								}}
							>
								<Ionicons name="md-close" size={35} color={COLORS.black} />
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									backgroundColor: COLORS.white,
									borderRadius: 40,
								}}
							>
								<LinearGradient
									colors={[COLORS.primary, COLORS.secondary]}
									start={[0.0, 0.0]}
									end={[1.0, 1.0]}
									style={{
										paddingVertical: 10,
										paddingHorizontal: 10,
										borderRadius: 20,
										shadowOffset: { width: 0, height: 5 },
										shadowRadius: 15,
										shadowOpacity: 0.1,
									}}
								>
									<Ionicons name="md-heart" size={50} color={COLORS.white} />
								</LinearGradient>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									backgroundColor: COLORS.white,
									paddingVertical: 10,
									paddingHorizontal: 12,
									borderRadius: 40,
									marginVertical: 10,
									shadowOffset: { width: 0, height: 5 },
									shadowRadius: 15,
									shadowOpacity: 0.1,
								}}
							>
								<Ionicons name="md-refresh" size={35} color={COLORS.black} />
							</TouchableOpacity>
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

export default Slider;
