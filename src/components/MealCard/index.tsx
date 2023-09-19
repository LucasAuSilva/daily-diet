import { TouchableOpacityProps } from "react-native"

import { MealCardContainer, StatusLight, Time, Title } from "./styles"

type Props = TouchableOpacityProps & {
  title: string
  time: Date
  fromDiet: boolean
}

export const MealCard = ({ title, time, fromDiet, ...rest }: Props) => {
  return (
    <MealCardContainer {...rest}>
      <Time>
        {time.toLocaleString([], { hour: '2-digit', minute: '2-digit' })}
      </Time>
      <Title>
        {title}
      </Title>
      <StatusLight
        isOk={fromDiet}
      />
    </MealCardContainer>
  )
}
