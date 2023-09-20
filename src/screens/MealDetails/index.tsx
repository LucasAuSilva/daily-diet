import { useNavigation, useRoute } from '@react-navigation/native'

import { Meal } from '@/models/meal'
import { Tag } from '@/components/Tag'
import { Header } from '@/components/Header'

import {
    ActionContainer,
  Description,
  InfoContainer,
  MealDetailsContainer,
  MealDetailsMainContainer,
  MealHighlightContainer,
  Title
} from './styles'
import { Button } from '@/components/Button'

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
    const day = meal.dateTime
      .getDate()
      .toString()
      .padStart(2, '0')
    const month = (meal.dateTime
      .getMonth() + 1)
      .toString()
      .padStart(2, '0')
    const year = meal.dateTime.getFullYear()
    const hour = meal.dateTime
      .getHours()
      .toString()
      .padStart(2, '0')
    const minutes = meal.dateTime
      .getMinutes()
      .toString()
      .padStart(2, '0')
    return `${day}/${month}/${year} às ${hour}:${minutes}`
  }
  
  return ( 
    <MealDetailsContainer>
      <Header
        title='Refeição'
        onBackPress={handleHeaderBackButton}
        type={meal.fromDiet ? 'Primary' : 'Secondary'}
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
          {meal.fromDiet 
            ? <Tag label='dentro da dieta'/>
            : <Tag label='fora da dieta' type='No'/>}
        </InfoContainer>
        <ActionContainer>
          <Button
            label='Editar Refeição'
            icon={{ name: 'PencilSimpleLine' }}
          />
          <Button
            label='Excluir Refeição'
            icon={{ name: 'Trash'}}
            type='Outline'
          />
        </ActionContainer>
      </MealDetailsMainContainer>
    </MealDetailsContainer>
  )
}
