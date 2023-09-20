import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { Input } from '@/components/Input'
import { Header } from '@/components/Header'
import { Select } from '@/components/Select'

import {
  FormContainer,
  NewMealContainer,
  NewMealMainContainer,
  SideInputsContainer
} from './styles'
import { DateInput } from '@/components/DateInput'


export const NewMeal = () => {
  const [isDiet, setIsDiet] = useState<boolean>(false)

  const navigator = useNavigation()

  const handleBackHeaderButton = () => {
    navigator.navigate('home')
  }

  return (
    <NewMealContainer>
      <Header
        title='Nova Refeição'
        type='Default'
        onBackPress={handleBackHeaderButton}
      />
      <NewMealMainContainer>
        <FormContainer>
          <Input
            label='Nome'
          />
          <Input
            label='Descrição'
          />
          <SideInputsContainer>
            <DateInput
              label='Data'
              type='date'
            />
            <DateInput
              label='Hora'
              type='time'
            />
          </SideInputsContainer>
          <SideInputsContainer>
            <Select
              type='Yes'
              isSelected={isDiet}
              onPress={() => setIsDiet(true)}
            />
            <Select
              type='No'
              isSelected={!isDiet}
              onPress={() => setIsDiet(false)}
            />
          </SideInputsContainer>
        </FormContainer>
      </NewMealMainContainer>
    </NewMealContainer>
  )
}
