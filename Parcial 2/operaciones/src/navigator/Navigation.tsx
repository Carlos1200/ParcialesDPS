import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Suma} from '../screens/Suma';
import {Resta} from '../screens/Resta';
import {Multiplicar} from '../screens/Multiplicar';
import {Division} from '../screens/Division';
import {Factorial} from '../screens/Factorial';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      sceneContainerStyle={{backgroundColor: '#345B63'}}>
      <Tab.Screen
        name="Suma"
        component={Suma}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon size={size} color={color} name="plus" />
          ),
        }}
      />
      <Tab.Screen
        name="Resta"
        component={Resta}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon size={size} color={color} name="minus" />
          ),
        }}
      />
      <Tab.Screen
        name="Multiplicar"
        component={Multiplicar}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon size={size} color={color} name="times" />
          ),
        }}
      />
      <Tab.Screen
        name="Division"
        component={Division}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              size={size}
              color={color}
              name="minus"
              style={{transform: [{rotate: '-45deg'}]}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Factorial"
        component={Factorial}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon size={size} color={color} name="exclamation" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
