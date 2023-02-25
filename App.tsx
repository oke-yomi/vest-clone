import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootNavigator from "./navigator/RootNavigator";

export default function App() {
	return (
		<>
			<StatusBar style="auto" />
			<NavigationContainer>
				<RootNavigator />
			</NavigationContainer>
		</>
	);
}
