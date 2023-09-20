import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export type MealHighlightTypeStyleProp = 'Main' | 'Default'

type Props = {
  textType: MealHighlightTypeStyleProp
}

export const MealDetailsContainer = styled.View`
  flex: 1;
  width: 100%;
  position: relative;
`

export const MealDetailsMainContainer = styled(SafeAreaView)`
  padding: 0px 24px;
  position: absolute;

  background-color: ${({ theme }) => theme.colors.gray_7};

  border-radius: 20px 20px 0px 0px;
  box-shadow: 100px 100px 30px #000000;

  flex: 1;

  top: 104px;

  width: 100%;
  height: 88%;
`

export const InfoContainer = styled.View`
  gap: 32px;
`

export const MealHighlightContainer = styled.View`
  gap: 8px;
`

export const Title = styled.Text<Props>`
  ${({ theme, textType }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${textType === 'Main'
      ? `20px;`
      : theme.fontSize.sm};
    color: ${theme.colors.gray_1};
  `}
` 

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md};
    color: ${theme.colors.gray_2};
  `}
` 

export const ActionContainer = styled.View`
  margin-top: auto;
  margin-bottom: 34px;
  gap: 8px;
`

