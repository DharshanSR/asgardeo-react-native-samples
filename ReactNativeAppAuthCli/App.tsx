import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserContext } from './src/contexts/UserContext';
import { DashboardScreen } from './src/views/DashboardScreen';
import { HomeScreen } from './src/views/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Add logging for state changes
  React.useEffect(() => {
    console.log('🔐 Auth State Changed:', isLoggedIn);
  }, [isLoggedIn]);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: true }}>
          {isLoggedIn ? (
            // Dashboard screen when logged in
            <Stack.Screen 
              name="Dashboard" 
              component={DashboardScreen}
              options={{
                headerLeft: () => null,
                gestureEnabled: false,
              }}
            />
          ) : (
            // Home screen when logged out
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false,
                gestureEnabled: false,
              }}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
}

export default App;
