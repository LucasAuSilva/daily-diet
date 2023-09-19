import { View } from 'react-native'
import { useTheme } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'

import { StackNavigation } from './stack.routes'

export const Routes = () => {
  const { colors } = useTheme()

  return (
      <View style={{ flex: 1, backgroundColor: colors.gray_7}}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </View>
  )
}
