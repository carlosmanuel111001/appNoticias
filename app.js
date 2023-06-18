import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NewList from './src/NewList';
import NewsDetails from './src/NewsDetails';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="NewList"
          component={NewList}
          options={{title: 'ultimas noticias'}}
        />
        <Stack.Screen
          name="NewsDetailst"
          component={NewsDetails}
          options={{title: 'Detalees de noticias'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
