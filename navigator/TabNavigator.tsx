import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	AccountScreen,
	AppsScreen,
	HomeScreen,
	InvestScreen,
	SavingsScreen,
} from "../screens";
import { useNavigation } from "@react-navigation/native";
import { Icon } from '@rneui/themed';

export type TabStackParamList = {
	Home: undefined;
	Savings: undefined;
	Invest: undefined;
	Apps: undefined;
	Account: undefined;
};

const TabStack = createBottomTabNavigator();

const TabNavigator = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	});

	return (
		<TabStack.Navigator>
			<TabStack.Screen name="Home" component={HomeScreen} />
			<TabStack.Screen name="Savings" component={SavingsScreen} />
			<TabStack.Screen name="Invest" component={InvestScreen} />
			<TabStack.Screen name="Apps" component={AppsScreen} />
			<TabStack.Screen name="Account" component={AccountScreen} />
		</TabStack.Navigator>
	);
};

export default TabNavigator;
