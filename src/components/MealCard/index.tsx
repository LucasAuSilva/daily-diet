import { MealCardContainer, StatusLight, Time, Title } from "./styles"

type Props = {
  title: string
  time: Date
  fromDiet: boolean
}

export const MealCard = ({ title, time, fromDiet }: Props) => {
  return (
    <MealCardContainer>
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
