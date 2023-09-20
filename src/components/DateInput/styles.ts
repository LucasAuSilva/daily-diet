import { TextInput, TouchableOpacity, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker';

import styled, { css } from 'styled-components/native'

export const DateInputContainer = styled(View)`
  flex: 1;

  min-height: 80px;
  max-height: 80px;

  width: 100%;

  gap: 4px;
  padding: 0;
`

export const DateLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSize.sm};
    color: ${theme.colors.gray_2};
  `}
`

export const DateEntry = styled(TextInput).attrs(({ theme }) => ({
  cursorColor: theme.colors.gray_1
}))`
  border-radius: 6px;

  padding: 14px 14px;

  ${({ theme }) => css`
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSize.md};
    color: ${theme.colors.gray_1};
    border: 1px solid ${theme.colors.gray_5};
  `}
`

export const CustomDatePicker = styled(DateTimePicker)`
  width: 320px;
  height: 260px;
  display: absolute;
  justify-content: center;
`

