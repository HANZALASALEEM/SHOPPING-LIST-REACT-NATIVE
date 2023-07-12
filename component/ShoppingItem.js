import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const ShoppingItem = (props) => {
	return (
		<View style={styles.container}>
			<Pressable>
				<AntDesign name="checkcircleo" size={24} color="black" />
			</Pressable>
			<Text style={styles.title}>{props.title}</Text>

			<Pressable>
				<MaterialIcons name="delete" size={24} color="black" />
			</Pressable>
		</View>
	);
};

export default ShoppingItem;

const styles = StyleSheet.create({
	container: {
		padding: 20,
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "lightgray",
		margin: 10,
		borderRadius: 10,
	},
	title: {
		flex: 1,
		marginLeft: 10,
		fontWeight: "500",
		fontSize: 18,
		fontFamily: "serif",
	},
});
