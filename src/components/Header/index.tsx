
import { BackButton, BackIcon, HeaderContainer, HeaderTypeStyleProps, Title } from './styles'

type Props = {
  title: string
  type?: HeaderTypeStyleProps
  isHighlight?: boolean
  onBackPress: () => void
}

export const Header = ({ title, onBackPress, type = 'Primary', isHighlight = false }: Props) => {
  return (
    <HeaderContainer
      type={type}
      isHighlight={isHighlight}
    >
      <BackButton
        onPress={onBackPress}
      >
        <BackIcon
          size={24}
        />
      </BackButton>
      {isHighlight
        ? null
        : <Title>{ title }</Title>}
    </HeaderContainer>
  )
}

