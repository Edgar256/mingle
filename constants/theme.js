import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const COLORS = {
	// base colors
	primary: "#E52058",
	secondary: "#5C5CA9",
	success: "#A8DD1F",
	danger: "#ED1C24",

	// colors
	black: "#1E1E1E",
	lightGrey: "#E5E5E5",
	white: "#FFFFFF",
	grey: "#B3B8C8",
	teal: "#1EC3F3",
	orange: "#F58749",
	green: "#46BC97",
};

export const SIZES = {
	// global styles
	base: 8,
	font: 14,
	radius: 12,
	padding: 24,

	// font sizes
	h1: 30,
	h2: 22,
	h3: 16,
	h4: 14,
	body1: 30,
	body2: 22,
	body3: 16,
	body4: 14,
	small: 10,

	// app dimensions
	windowWidth,
	windowHeight,
};

export const FONTS = {
	// font styling
	h1: { fontSize: SIZES.h1, lineHeight: 30 },
	h2: { fontSize: SIZES.h2, lineHeight: 22 },
	h3: { fontSize: SIZES.h3, lineHeight: 16 },
	h4: { fontSize: SIZES.h4, lineHeight: 14 },
	body1: {
		fontSize: SIZES.body1,
		lineHeight: 30,
	},
	body2: {
		fontSize: SIZES.body2,
		lineHeight: 22,
	},
	body3: {
		fontSize: SIZES.body3,
		lineHeight: 16,
	},
	body4: {
		fontSize: SIZES.body4,
		lineHeight: 14,
	},
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
