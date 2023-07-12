import { StatusBar } from "expo-status-bar";
import {
	ScrollView,
	StyleSheet,
	Text,
	View,
	Pressable,
	TextInput,
	FlatList,
	ActivityIndicator,
} from "react-native";
import ShoppingItem from "./component/ShoppingItem";
import { MaterialIcons } from "@expo/vector-icons";
import react, { useEffect, useState } from "react";
import {
	app,
	db,
	getFirestore,
	collection,
	addDoc,
	getDocs,
} from "./firebase/index";

export default function App() {
	const [title, setTitle] = useState(null);
	const [shoppingList, setShoppingList] = useState([]);
	const addShoppingItem = async () => {
		try {
			const docRef = await addDoc(collection(db, "Shopping item"), {
				title: title,
				isChecked: false,
			});

			console.log("Document written with ID:", docRef.id);
			setTitle("");
		} catch (e) {
			console.error("Error adding document:");
		}
	};

	const readShoppingItem = async () => {
		const querySnapshot = await getDocs(collection(db, "Shopping item"));
		querySnapshot.forEach((doc) => {
			console.log(doc.id, doc.data());
			setShoppingList({
				...doc.data(),
				id: doc.id,
			});
			//console.log(shoppingList);
		});
	};

	useEffect(() => {
		readShoppingItem();
	}, []);
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.heading}>Shopping List</Text>
				<Text style={styles.noOfItems}>0</Text>
				<Pressable>
					<MaterialIcons name="delete" size={32} color="black" />
				</Pressable>
			</View>

			<FlatList
				data={shoppingList}
				renderItem={({ item }) => /*<ShoppingItem title={item.title} />*/ {
					return (
						<View>
							<Text>{item.title}</Text>
							<Text>flatlist is worked</Text>
						</View>
					);
				}}
				keyExtractor={(item) => item.id}
			/>

			<TextInput
				style={styles.input}
				placeholder="Enter Shopping Item"
				value={title}
				onChangeText={(text) => setTitle(text)}
				onSubmitEditing={addShoppingItem}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		marginTop: 40,
	},
	header: {
		flexDirection: "row",
		width: "90%",
		alignSelf: "center",
		justifyContent: "space-between",
		alignItems: "center",
	},
	heading: {
		flex: 1,
		fontSize: 28,
		fontWeight: "600",
	},
	noOfItems: {
		fontSize: 28,
		fontWeight: "600",
		marginRight: 10,
	},
	input: {
		backgroundColor: "lightgray",
		width: "90%",
		height: 60,
		alignSelf: "center",
		borderRadius: 10,
		marginVertical: 15,
		padding: 10,
	},
});
