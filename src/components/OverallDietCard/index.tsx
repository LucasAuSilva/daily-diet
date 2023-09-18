import { TouchableOpacityProps } from 'react-native'
import {
  Description,
  Icon,
  OverallDietCardContainer,
  OverallDietCardTypeStyleProps,
  Title
} from './styles'

type Props = TouchableOpacityProps & {
  percentage: number
  type?: OverallDietCardTypeStyleProps
}

export const OverallDietCard = ({ percentage, type = 'POSITIVE', ...rest }: Props) => {
  return (
    <OverallDietCardContainer
      type={type}
      {...rest}
    >
      <Title>{percentage}%</Title>
      <Description>
        das refeições dentro da dieta
      </Description>
      <Icon
        type={type}
      />
    </OverallDietCardContainer>
  )
}
