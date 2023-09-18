import { useState } from "react"
import { SectionList } from "react-native"

import { Logo } from "@/components/Logo"
import { Button } from "@/components/Button"
import { OverallDietCard } from "@/components/OverallDietCard"
import avatarPhoto from '@/assets/avatar-photo.jpg' 

import { Avatar, HeaderContainer, HomeContainer, SectionHeader, SectionItemSeparator, SectionSeparator, SectionTitle, Subtitle } from "./styles"
import { MealCard } from "@/components/MealCard"

type Meal = {
  name: string
  description: string
  dateTime: Date
  fromDiet: boolean
}

type Section = {
  title: string
  data: Meal[]
}

export const Home = () => {
  const [meals, setMeals] = useState<Meal[]>([
    {
      name: 'X-Tudo',
      description: 'Um podrão do carrinho',
      dateTime: new Date(2023, 8, 18, 15, 29),
      fromDiet: false
    },
    {
      name: 'Fruta',
      description: 'Maça',
      dateTime: new Date(2023, 8, 18, 15, 29),
      fromDiet: true
    },
    {
      name: 'Yogurte com Whey',
      description: 'Receita da nutricionista',
      dateTime: new Date(2023, 8, 19, 16, 6),
      fromDiet: true
    },
  ])

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
    const listDates = meals
      .map(meal => dateFormatMealCard(meal.dateTime))
      .filter((date, index, self) => self.indexOf(date) === index)
    listDates.forEach((date, index) => {
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
      />
      <SectionHeader>
        <Subtitle>Refeições</Subtitle>
        <Button
          label='Nova refeição'
          type='Filled'
          icon={{ name: 'Plus' }}
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

