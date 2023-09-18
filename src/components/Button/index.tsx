import { TouchableOpacityProps } from "react-native"

import { ButtonContainer, ButtonLabel, ButtonTypeStyleProps, IconPencilSimpleLine, IconPlus, IconTrash } from "./styles"

type ButtonIcons = 'Trash' | 'Plus' | 'PencilSimpleLine'

type Props = TouchableOpacityProps & {
  label: string
  icon?: {
    name: ButtonIcons 
  }
  type?: ButtonTypeStyleProps
}

export const Button = ({ label, icon, type = 'Filled', ...rest }: Props) => {
  
  const returnIcon = () => {
    switch (icon?.name) {
      case 'Trash':
        return (<IconTrash type={type} />)
      case 'Plus':
        return (<IconPlus type={type} />)
      case 'PencilSimpleLine':
        return (<IconPencilSimpleLine type={type} />)
    }
  }

  return (
    <ButtonContainer
      type={type}
      {...rest}
    >
      {icon != null
        ? returnIcon()
        : null}
      <ButtonLabel
        type={type}
      >
        {label}
      </ButtonLabel>
    </ButtonContainer>
  )
}
