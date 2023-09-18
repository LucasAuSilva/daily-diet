import { ArrowUpRight } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

export type OverallDietCardTypeStyleProps = 'POSITIVE' | 'NEGATIVE'

type Props = {
  type: OverallDietCardTypeStyleProps
}

export const OverallDietCardContainer = styled.TouchableOpacity<Props>`
  width: 100%;

  padding: 20px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme, type }) => type === 'POSITIVE'
    ? theme.colors.green_light
    : theme.colors.red_light};

  border-radius: 6px;
  gap: 2px;

  position: relative;
`

export const Title = styled.Text`
${({ theme }) => css`
    font-size: ${theme.fontSize['2xl']};
    font-family: ${theme.fontFamily.bold};
    color: ${theme.colors.gray_1}
  `}
`

export const Description = styled.Text`
${({ theme }) => css`
    font-size: ${theme.fontSize.sm};
    font-family: ${theme.fontFamily.regular};
    color: ${theme.colors.gray_2}
  `}
`

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  color: type === 'POSITIVE'
    ? theme.colors.green_dark
    : theme.colors.red_dark,
  size: 24
}))`
  position: absolute;
  right: 8px;
  top: 8px;
`
