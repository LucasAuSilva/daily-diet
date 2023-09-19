import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@/screens/Home'
import { Statistics } from '@/screens/Statistics'
import { NewMeal } from '@/screens/NewMeal'
import { MealDetails } from '@/screens/MealDetails'

const { Navigator, Screen } = createNativeStackNavigator()

export const StackNavigation = () => {
  return (
    <Navigator
      initialRouteName='home'
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}
    >
      <Screen
        name='home'
        component={Home}
      />
      <Screen
        name='statistics'
        component={Statistics}
      />
      <Screen
        name='new_meal'
        component={NewMeal}
      />
      <Screen
        name='meal_details'
        component={MealDetails}
      />
    </Navigator>
  )
}
