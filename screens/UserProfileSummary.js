import React, { useRef, useState } from "react";
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
import { MainBottomNavigation } from "../navigations";

const UserProfileSummary = ({ navigation }) => {
	const modalRef = useRef(null);
	const [modalVisible, setModalVisible] = useState(false);

	const onOpen = () => {
		const modal = modalRef.current;

		if (modal) {
			modal.open();
		}
	};

	return (
		<SafeAreaView
			style={{
				width: "100%",
				height: "100%",
				flexDirection: "row",
				padding: 0,
			}}
		>
			<View style={styles.body}>
				<View style={styles.container}>
					<ScrollView
						style={{
							position: "relative",
							width: "100%",
							zIndex: 44,
							paddingBottom: 20,
							overflow: "scroll",
							flexDirection: "column",
						}}
					>
						<ImageBackground
							source={images.model001}
							style={{
								height: 400,
								position: "relative",
								overflow: "hidden",
								borderWidth: 0,
								marginBottom: 10,
							}}
						></ImageBackground>
						<View
							style={{
								padding: 10,
								left: 0,
								width: "100%",
								position: "absolute",
								top: 350,
								backgroundColor: COLORS.white,
								borderRadius: 20,
							}}
						>
							<View style={styles.textContainer}>
								<Text
									style={{
										color: COLORS.black,
										fontSize: SIZES.h2,
										textAlign: "center",
										paddingRight: 10,
										zIndex: 10,
									}}
								>
									(Anne 24)
								</Text>
								<Ionicons
									name="logo-instagram"
									size={30}
									color={COLORS.black}
								/>
							</View>
							<View style={styles.textContainer}>
								<Ionicons name="md-person" size={18} color={COLORS.black} />
								<Text
									style={{
										color: COLORS.black,
										textAlign: "center",
										paddingLeft: 5,
									}}
								>
									(Straight Woman, Single)
								</Text>
							</View>
							<View style={styles.textContainer}>
								<Ionicons name="md-school" size={18} color={COLORS.black} />
								<Text
									style={{
										color: COLORS.black,
										textAlign: "center",
										paddingLeft: 5,
									}}
								>
									(University of Minnesota)
								</Text>
							</View>
							<View style={styles.textContainer}>
								<Ionicons name="md-navigate" size={18} color={COLORS.black} />
								<Text
									style={{
										color: COLORS.black,
										textAlign: "center",
										paddingLeft: 5,
									}}
								>
									(3 miles away)
								</Text>
							</View>
							<View style={{ justifyContent: "center", padding: 5 }}>
								<LinearGradient
									colors={[COLORS.primary, COLORS.secondary]}
									start={[0.0, 0.0]}
									end={[1.0, 1.0]}
									style={{
										paddingVertical: 15,
										paddingHorizontal: 15,
										borderRadius: 40,
										shadowOffset: { width: 0, height: 5 },
										shadowRadius: 15,
										shadowOpacity: 0.1,
									}}
								>
									<Text
										style={{
											color: COLORS.white,
											textAlign: "center",
										}}
									>
										90% Match
									</Text>
								</LinearGradient>
							</View>
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
									onPress={() => setModalVisible(!modalVisible)}
								>
									<Ionicons
										name="md-person-outline"
										size={35}
										color={COLORS.black}
									/>
								</TouchableOpacity>
							</View>
						</View>
					</ScrollView>
				</View>
			</View>

			<Modal
				// ref={modalRef}
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				style={{
					backgroundColor: COLORS.white,
					padding: 20,
					margin: 0,
					position: "relative",
					elevation: 5,
					width: "100%",
					overflow: "scroll",
				}}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setEditProfileImageModalVisible(!editProfileImageModalVisible);
				}}
			>
				<ScrollView
					style={{
						padding: 0,
						left: 0,
						width: "100%",
						position: "relative",
						top: 0,
						margin: 0,
					}}
				>
					<View style={styles.textContainer}>
						<Text
							style={{
								color: COLORS.black,
								fontSize: SIZES.body1,
								textAlign: "center",
								paddingRight: 10,
								zIndex: 10,
							}}
						>
							(Anne 24)
						</Text>
						<Ionicons name="logo-instagram" size={30} color={COLORS.black} />
					</View>
					<View style={styles.textContainer}>
						<Ionicons name="md-person" size={18} color={COLORS.black} />
						<Text
							style={{
								color: COLORS.black,
								textAlign: "center",
								paddingLeft: 5,
							}}
						>
							(Straight Woman, Single)
						</Text>
					</View>
					<View style={styles.textContainer}>
						<Ionicons name="md-school" size={18} color={COLORS.black} />
						<Text
							style={{
								color: COLORS.black,
								textAlign: "center",
								paddingLeft: 5,
							}}
						>
							(University of Minnesota)
						</Text>
					</View>
					<View style={styles.textContainer}>
						<Ionicons name="md-navigate" size={18} color={COLORS.black} />
						<Text
							style={{
								color: COLORS.black,
								textAlign: "center",
								paddingLeft: 5,
							}}
						>
							(3 miles away)
						</Text>
					</View>
					<Text style={{ fontSize: SIZES.body2 }}>Interests</Text>
					<View
						style={{
							display: "flex",
							padding: 10,
							flexDirection: "row",
							flexWrap: "wrap",
						}}
					>
						<View style={[styles.btn, { backgroundColor: COLORS.orange }]}>
							<Text
								style={{
									color: COLORS.white,
								}}
							>
								Music
							</Text>
						</View>
						<View style={[styles.btn, { backgroundColor: COLORS.teal }]}>
							<Text
								style={{
									color: COLORS.white,
								}}
							>
								Road Trip
							</Text>
						</View>
						<View style={[styles.btn, { backgroundColor: COLORS.secondary }]}>
							<Text
								style={{
									color: COLORS.white,
								}}
							>
								Nature
							</Text>
						</View>
						<View style={[styles.btn, { backgroundColor: COLORS.primary }]}>
							<Text
								style={{
									color: COLORS.white,
								}}
							>
								Shopping
							</Text>
						</View>
						<View style={[styles.btn, { backgroundColor: COLORS.grey }]}>
							<Text
								style={{
									color: COLORS.white,
								}}
							>
								Cars
							</Text>
						</View>
						<View style={[styles.btn, { backgroundColor: COLORS.grey }]}>
							<Text
								style={{
									color: COLORS.white,
								}}
							>
								Travel
							</Text>
						</View>
						<View style={[styles.btn, { backgroundColor: COLORS.grey }]}>
							<Text
								style={{
									color: COLORS.white,
								}}
							>
								Soccer
							</Text>
						</View>
						<View style={[styles.btn, { backgroundColor: COLORS.grey }]}>
							<Text
								style={{
									color: COLORS.white,
								}}
							>
								Tennis
							</Text>
						</View>
						<View style={[styles.btn, { backgroundColor: COLORS.grey }]}>
							<Text
								style={{
									color: COLORS.white,
								}}
							>
								Basketball
							</Text>
						</View>
						<View style={[styles.btn, { backgroundColor: COLORS.grey }]}>
							<Text
								style={{
									color: COLORS.white,
								}}
							>
								Coffee
							</Text>
						</View>
						<View style={[styles.btn, { backgroundColor: COLORS.grey }]}>
							<Text
								style={{
									color: COLORS.white,
								}}
							>
								Dancing
							</Text>
						</View>
					</View>
					<View style={{ justifyContent: "center", padding: 5 }}>
						<LinearGradient
							colors={[COLORS.primary, COLORS.secondary]}
							start={[0.0, 0.0]}
							end={[1.0, 1.0]}
							style={{
								paddingVertical: 15,
								paddingHorizontal: 15,
								borderRadius: 40,
								shadowOffset: { width: 0, height: 5 },
								shadowRadius: 15,
								shadowOpacity: 0.1,
							}}
						>
							<Text
								style={{
									color: COLORS.white,
									textAlign: "center",
								}}
							>
								90% Match
							</Text>
						</LinearGradient>
					</View>
					<View
						style={{
							padding: 10,
							backgroundColor: COLORS.white,
							borderRadius: 20,
							shadowOffset: { width: 0, height: 5 },
							shadowRadius: 15,
							shadowOpacity: 0.1,
							marginTop: 40,
						}}
					>
						<Text style={{ fontSize: SIZES.body2 }}>(Annes's) Gallery</Text>
						<View
							style={{
								flexWrap: "wrap",
								flexDirection: "row",
								display: "flex",
							}}
						>
							<View style={{ width: "50%", padding: 1 }}>
								<ImageBackground
									source={images.model001}
									style={{
										height: 150,
										position: "relative",
										overflow: "hidden",
										borderWidth: 0,
										marginBottom: 0,
									}}
								></ImageBackground>
							</View>
							<View style={{ width: "50%", padding: 1 }}>
								<ImageBackground
									source={images.model002}
									style={{
										height: 150,
										position: "relative",
										overflow: "hidden",
										borderWidth: 0,
										marginBottom: 0,
									}}
								></ImageBackground>
							</View>
							<View style={{ width: "50%", padding: 1 }}>
								<ImageBackground
									source={images.model003}
									style={{
										height: 150,
										position: "relative",
										overflow: "hidden",
										borderWidth: 0,
										marginBottom: 0,
									}}
								></ImageBackground>
							</View>
							<View style={{ width: "50%", padding: 1 }}>
								<ImageBackground
									source={images.model004}
									style={{
										height: 150,
										position: "relative",
										overflow: "hidden",
										borderWidth: 0,
										marginBottom: 0,
									}}
								></ImageBackground>
							</View>
						</View>
					</View>
					<View
						style={{
							padding: 20,
							backgroundColor: COLORS.white,
							borderRadius: 20,
							shadowOffset: { width: 0, height: 5 },
							shadowRadius: 15,
							shadowOpacity: 0.1,
							marginTop: 40,
						}}
					>
						<Text style={{ fontSize: SIZES.body2 }}>(Annes's) Summary</Text>
						<Text
							style={{
								fontSize: SIZES.body4,
								paddingVertical: 5,
							}}
						>
							Very fond of simple things in life which reconnects me to happy
							memories
						</Text>
						<Text
							style={{
								fontSize: SIZES.body4,
								paddingVertical: 5,
							}}
						>
							Easy going person living my own life fullest.
						</Text>
					</View>
					<View
						style={{
							backgroundColor: COLORS.white,
							borderRadius: 20,
							shadowOffset: { width: 0, height: 5 },
							shadowRadius: 15,
							shadowOpacity: 0.1,
							marginVertical: 30,
						}}
					>
						<Text
							style={{
								fontSize: SIZES.body2,
								padding: 20,
							}}
						>
							Preferences
						</Text>
						<View style={styles.preference}>
							<View style={{ flex: 1 }}>
								<Text>Looking for</Text>
								<Text style={{ color: COLORS.grey }}>Men, Age 24-50</Text>
							</View>
							<View>
								<Image
									source={icons.greyTick}
									resizeMode="contain"
									style={styles.icons}
								/>
							</View>
						</View>
						<View style={styles.preference}>
							<View style={{ flex: 1 }}>
								<Text>Height</Text>
								<Text style={{ color: COLORS.grey }}>5'5'' - 5'11''</Text>
							</View>
							<View>
								<Image
									source={icons.greyTick}
									resizeMode="contain"
									style={styles.icons}
								/>
							</View>
						</View>
						<View style={styles.preference}>
							<View style={{ flex: 1 }}>
								<Text>Looks</Text>
								<Text style={{ color: COLORS.grey }}>Average build, Fit</Text>
							</View>
							<View>
								<Image
									source={icons.tealTick}
									resizeMode="contain"
									style={styles.icons}
								/>
							</View>
						</View>
						<View style={styles.preference}>
							<View style={{ flex: 1 }}>
								<Text>Connections</Text>
								<Text style={{ color: COLORS.grey }}>Long term dating</Text>
							</View>
							<View>
								<Image
									source={icons.tealTick}
									resizeMode="contain"
									style={styles.icons}
								/>
							</View>
						</View>
						<View style={styles.preference}>
							<View style={{ flex: 1 }}>
								<Text>Orientation</Text>
								<Text style={{ color: COLORS.grey }}>Straight</Text>
							</View>
							<View>
								<Image
									source={icons.tealTick}
									resizeMode="contain"
									style={styles.icons}
								/>
							</View>
						</View>
						<View style={styles.preference}>
							<View style={{ flex: 1 }}>
								<Text>Language</Text>
								<Text style={{ color: COLORS.grey }}>French, English</Text>
							</View>
							<View>
								<Image
									source={icons.tealTick}
									resizeMode="contain"
									style={styles.icons}
								/>
							</View>
						</View>
						<View style={styles.preference}>
							<View style={{ flex: 1 }}>
								<Text>Religion</Text>
								<Text style={{ color: COLORS.grey }}>Open to Any</Text>
							</View>
							<View>
								<Image
									source={icons.tealTick}
									resizeMode="contain"
									style={styles.icons}
								/>
							</View>
						</View>
						<View style={styles.preference}>
							<View style={{ flex: 1 }}>
								<Text>Pets</Text>
								<Text style={{ color: COLORS.grey }}>Cats</Text>
							</View>
							<View>
								<Image
									source={icons.tealTick}
									resizeMode="contain"
									style={styles.icons}
								/>
							</View>
						</View>
					</View>
					<View style={{ justifyContent: "center", padding: 5 }}>
						<TouchableOpacity
							style={{
								paddingVertical: 15,
								paddingHorizontal: 15,
								borderRadius: 40,
								backgroundColor: COLORS.grey,
								shadowOffset: { width: 0, height: 5 },
								shadowRadius: 15,
								shadowOpacity: 0.1,
							}}
							onPress={() => setModalVisible(!modalVisible)}
						>
							<Text
								style={{
									color: COLORS.white,
									textAlign: "center",
								}}
							>
								DISMISS
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</Modal>
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

export default UserProfileSummary;
