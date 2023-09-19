import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import styled, { css } from 'styled-components/native';

export const HomeContainer = styled(SafeAreaView)`
  flex: 1;

  gap: 32px;
  padding: 32px 24px;

  background-color: ${({ theme }) => theme.colors.gray_7};

  position: relative;
`

export const HeaderContainer = styled.View`
  min-height: 40px;
  max-height: 40px;
  width: 100%;

  justify-content: space-between;
  align-items: center;

  flex-direction: row;
`

export const SectionHeader = styled.View`
  gap: 8px;
`

export const Avatar = styled.Image`
  border-radius: 100px;
  border: 2px solid ${({ theme }) => theme.colors.gray_2};

  height: 40px;
  width: 40px;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.md};
    font-family: ${theme.fontFamily.regular};
    color: ${theme.colors.gray_1};
  `}
`

export const SectionTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.lg};
    font-family: ${theme.fontFamily.bold};
    color: ${theme.colors.gray_1};
  `}
  margin-bottom: 8px;
`

export const SectionSeparator = styled.View`
  width: 100%;
  height: 16px;
`

export const SectionItemSeparator = styled.View`
  width: 100%;
  height: 8px;
`

