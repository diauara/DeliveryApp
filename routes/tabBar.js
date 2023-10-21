import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "@rneui/base";

import Categories from "../screens/categories";
import CheckoutScreen from "../screens/CheckoutScreen";
import ProfileScreen from "../screens/profileScreen";

const TabBar = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Categories"
      activeColor="#2D0C57"
      barStyle={{ backgroundColor: "#ddd" }}
    >
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon type="ionicon" name="grid" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{
          tabBarLabel: "Checkout",
          tabBarIcon: ({ color }) => (
            <Icon type="ionicon" name="cart-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Icon type="ionicon" name="person" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;
