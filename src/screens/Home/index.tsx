import { useState } from "react"
import { SectionList } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { Meal } from "@/models/meal"
import { Logo } from "@/components/Logo"
import { Button } from "@/components/Button"
import { MealCard } from "@/components/MealCard"
import { OverallDietCard } from "@/components/OverallDietCard"
import avatarPhoto from '@/assets/avatar-photo.jpg' 


import {
  Avatar,
  HeaderContainer,
  HomeContainer,
  SectionHeader,
  SectionItemSeparator,
  SectionSeparator,
  SectionTitle,
  Subtitle
} from "./styles"

type Section = {
  title: string
  data: Meal[]
}

export const Home = () => {
  const [meals, setMeals] = useState<Meal[]>([
    {
      id: new Date().getMilliseconds().toString(),
      name: 'X-Tudo',
      description: 'Um podrão do carrinho',
      dateTime: new Date(2023, 8, 18, 15, 29),
      fromDiet: false
    },
    {
      id: new Date().getMilliseconds().toString(),
      name: 'Fruta',
      description: 'Maça',
      dateTime: new Date(2023, 8, 18, 15, 29),
      fromDiet: true
    },
    {
      id: new Date().getMilliseconds().toString(),
      name: 'Yogurte com Whey',
      description: 'Receita da nutricionista',
      dateTime: new Date(2023, 8, 19, 16, 6),
      fromDiet: true
    },
    {
      id: new Date().getMilliseconds().toString(),
      name: 'Fruta',
      description: 'Banana',
      dateTime: new Date(2023, 8, 19, 18, 6),
      fromDiet: true
    },
    {
      id: new Date().getMilliseconds().toString(),
      name: 'Wrap com Ovo',
      description: 'Ovo fedido',
      dateTime: new Date(2023, 8, 19, 21, 24),
      fromDiet: true
    },
  ])

  const navigation = useNavigation()

  const handleMealCardPress = (meal: Meal) => {
    navigation.navigate('meal_details', { meal })
  }

  const handleNewMealPress = () => {
    navigation.navigate('new_meal')
  }

  const handleOverallStatisticsCardPress = () => {
    navigation.navigate('statistics')
  }

  const calculatePercentageDiet = () => {
      
  }

  const dateFormatMealCard = (date: Date) => {
    const day = date.getDate().toString().padStart(2, '0')
    const month = date.getMonth().toString().padStart(2, '0')
    const year = date.getFullYear().toString().slice(2, 4)
    return `${day}.${month}.${year}`
  }

  const getMealsAsSections = (): Section[] => {
    const sections: Section[] = []
    meals
      .map(meal => dateFormatMealCard(meal.dateTime))
      .filter((date, index, self) => self.indexOf(date) === index)
      .forEach((date, index) => {
        sections[index] = {
          title: date,
          data: meals.filter(meal => dateFormatMealCard(meal.dateTime) === date)
        }
      })
    return sections
  }

  return (
    <HomeContainer>
      <HeaderContainer>
        <Logo/>
        <Avatar
          source={avatarPhoto}
        />
      </HeaderContainer>
      <OverallDietCard
        percentage={90.86}
        onPress={handleOverallStatisticsCardPress}
      />
      <SectionHeader>
        <Subtitle>Refeições</Subtitle>
        <Button
          label='Nova refeição'
          type='Filled'
          icon={{ name: 'Plus' }}
          onPress={handleNewMealPress}
        /> 
      </SectionHeader>
      <SectionList
        sections={getMealsAsSections()}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <MealCard
            title={item.name}
            time={item.dateTime}
            fromDiet={item.fromDiet}
            onPress={() => handleMealCardPress(item)}
          />
        )}
        renderSectionHeader={({ section: {title}}) => (
          <SectionTitle>{title}</SectionTitle>
        )}
        renderSectionFooter={() => <SectionSeparator />}
        ItemSeparatorComponent={() => <SectionItemSeparator />}
      />
    </HomeContainer>
  )
}

