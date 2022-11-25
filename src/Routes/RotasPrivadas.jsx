import { Home } from "../screens/Home"
import Detalhes from "../screens/Detalhes"
import { Sobre } from "../screens/Sobre";
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return(
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{  headerShown:false, }} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
    </Stack.Navigator>
)}


export const RotasPrivadas = () => {
    return (
            <tab.Navigator   screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  if (route.name === 'Home') {
                    return (
                      <Ionicons
                        name={
                          focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline'
                        }
                        size={size}
                        color={color}
                      />
                    );
                  } else if (route.name === 'Settings') {
                    return (
                      <Ionicons
                        name={focused ? 'ios-list-box' : 'ios-list'}
                        size={size}
                        color={color}
                      />
                    );
                  }
                },
                tabBarInactiveTintColor: 'gray',
                tabBarActiveTintColor: 'tomato',
              })}
            >
                
                <tab.Screen name="Home"   component={HomeStack} options={{unmountOnBlur:true,  headerShown:false }}/>
                <tab.Screen name="Grupo" component={Sobre} options={{ tabBarBadge: 3 }}/>
            </tab.Navigator>
    );
};