import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
import Home from '../Screens/Home';
import About from '../Screens/About';
import Profile from '../Screens/Profile';

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
}

export default StackNavigator;