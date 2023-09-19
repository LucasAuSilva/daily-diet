import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type StatusLightStyleProp = boolean 

type Props = {
  isOk: StatusLightStyleProp
}

export const MealCardContainer = styled(TouchableOpacity)`
  width: 100%;

  padding: 14px 16px 14px 12px;

  flex-direction: row;
  gap: 12px;
  align-items: center;

  border: 0.3px solid;
  border-radius: 6px;
  border-color: ${({ theme }) => theme.colors.gray_5};
`

export const Time = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.xs};
  `}
`

export const Title = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md};
  `}
`

export const StatusLight = styled.View<Props>`
  height: 14px;
  width: 14px;

  border-radius: 100px;
  background-color: ${({ theme, isOk }) =>
    isOk
      ? theme.colors.green_light
      : theme.colors.red_light};
`
