import { useNavigation, useRoute } from '@react-navigation/native'

import { Meal } from '@/models/meal'
import { Tag } from '@/components/Tag'
import { Header } from '@/components/Header'

import {
  Description,
  InfoContainer,
  MealDetailsContainer,
  MealDetailsMainContainer,
  MealHighlightContainer,
  Title
} from './styles'

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
  
  const formatDateToString = () => {
    const day = meal.dateTime.getDate()
    const month = meal.dateTime.getMonth()
    const year = meal.dateTime.getFullYear()
    const hour = meal.dateTime.getHours()
    const minutes = meal.dateTime.getMinutes()
    return `${day}/${month}/${year} às ${hour}:${minutes}`
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
            <Description>{formatDateToString()}</Description>
          </MealHighlightContainer>
          <Tag
            label='dentro da dieta'
          />
        </InfoContainer>
      </MealDetailsMainContainer>
    </MealDetailsContainer>
  )
}
