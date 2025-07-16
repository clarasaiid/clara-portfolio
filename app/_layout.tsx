import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import HomeScreen from './index';
import AboutMeScreen from './tabs/aboutme';
import ContactScreen from './tabs/contact';
import ExperienceScreen from './tabs/experience';
import ProjectsScreen from './tabs/projects';
import SkillsScreen from './tabs/skills';

const Tab = createMaterialTopTabNavigator();

export default function RootLayout(): React.JSX.Element | null {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/Sunborn-SansOne.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: colorScheme === 'dark' ? '#1a1a1a' : '#ffffff',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 1,
            borderBottomColor: colorScheme === 'dark' ? '#333' : '#e0e0e0',
          },
          tabBarActiveTintColor: '#ff6b9d',
          tabBarInactiveTintColor: colorScheme === 'dark' ? '#888' : '#666',
          tabBarIndicatorStyle: {
            backgroundColor: '#ff6b9d',
          },
          tabBarLabelStyle: {
            fontWeight: '600',
            fontSize: 14,
            textTransform: 'none',
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ 
            tabBarLabel: 'Home'
          }} 
        />
        <Tab.Screen 
          name="AboutMe" 
          component={AboutMeScreen}
          options={{ 
            tabBarLabel: 'About Me'
          }} 
        />
        <Tab.Screen 
          name="Experience" 
          component={ExperienceScreen}
          options={{ 
            tabBarLabel: 'Experience'
          }} 
        />
        <Tab.Screen 
          name="Projects" 
          component={ProjectsScreen}
          options={{ 
            tabBarLabel: 'Projects'
          }} 
        />
        <Tab.Screen 
          name="Skills" 
          component={SkillsScreen}
          options={{ 
            tabBarLabel: 'Skills'
          }} 
        />
        <Tab.Screen 
          name="Contact" 
          component={ContactScreen}
          options={{ 
            tabBarLabel: 'Contact'
          }} 
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
