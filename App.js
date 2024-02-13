import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import CreateScreen from './screens/CreateScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from './context/BlogContext';
import ShowScreen from './screens/ShowScreen';
import { AntDesign } from '@expo/vector-icons';
import EditScreen from './screens/EditScreen';
import { MaterialIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: 'Blog Uygulaması' }}>
          <Stack.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <AntDesign name="plus" size={24} color="black" />
              </TouchableOpacity>
            )
          })} />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Show" component={ShowScreen} options={({ navigation, route }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: route.params.id })}>
                <MaterialIcons name="edit" size={24} color="black" />
              </TouchableOpacity>
            )
          })} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
