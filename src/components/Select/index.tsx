import { TouchableOpacityProps } from 'react-native'
import { SelectContainer, SelectLabel, SelectStatusLight, SelectTypeStyleProps } from './styles'

type Props = TouchableOpacityProps & {
  isSelected?: boolean
  type: SelectTypeStyleProps
}

export const Select = ({ isSelected, type, ...rest }: Props) => {
  return (
    <SelectContainer
      isSelected={isSelected}
      type={type}
      {...rest}
    >
      <SelectStatusLight type={type}/>
      {type === 'Yes'
        ? <SelectLabel>Sim</SelectLabel>
        : <SelectLabel>Não</SelectLabel>
      }
    </SelectContainer>
  )
}
