import { Text } from 'react-native'

import { Meal } from '@/models/meal'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Header } from '@/components/Header'

import { Description, InfoContainer, MealDetailsContainer, MealDetailsMainContainer, MealHighlightContainer, Title } from './styles'

type RouteParams = {
  meal: Meal
}

export const MealDetails = () => {
  const route = useRoute()
  const { meal } = route.params as RouteParams

  const navigator = useNavigation()

  const handleHeaderBackButton = () => {
    navigator.navigate('home')
  }
  
  return ( 
    <MealDetailsContainer>
      <Header
        title='Refeição'
        onBackPress={handleHeaderBackButton}
      />
      <MealDetailsMainContainer>
        <InfoContainer>
          <MealHighlightContainer>
            <Title textType={'Main'}>{meal.name}</Title>
            <Description>{meal.description}</Description>
          </MealHighlightContainer>
          <MealHighlightContainer>
            <Title textType={'Default'}>Data e Hora</Title>
            <Description>{meal.dateTime.toString()}</Description>
          </MealHighlightContainer>
        </InfoContainer>
      </MealDetailsMainContainer>
    </MealDetailsContainer>
  )
}
