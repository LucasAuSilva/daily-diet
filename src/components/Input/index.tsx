import { useState } from 'react'
import { TextInputProps } from 'react-native'

import { Entry, InputContainer, InputLabel } from './styles'

type Props = TextInputProps & {
  label: string
}

export const Input = ({ label, ...rest }: Props) => {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <InputContainer>
      <InputLabel>
        {label}
      </InputLabel>
      <Entry
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        isFocus={isFocus}
        {...rest}
      />
    </InputContainer>
  )
}
