import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import { DateEntry, DateInputContainer, DateLabel } from './styles'

type Props = {
  label: string
  type: 'date' | 'time'
}

export const DateInput = ({ label, type }: Props) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [show, setShow] = useState(false);

  const onChangeSelectedDate = (_: any, newDate?: Date) => {
    const currentDate = newDate;
    setShow(false)
    setDate(currentDate);
  };

  const showDateTimePicker = () => {
    setShow(true);
  };

  const formatDateToString = (date?: Date) => {
    if (!date)
      return ''
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  const formatTimeToString = (date?: Date) => {
    if (!date)
      return ''
    const hour = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    return `${hour}:${minutes}`
  }

  return (
    <DateInputContainer onPress={showDateTimePicker}>
      <DateLabel>{label}</DateLabel>
      <DateEntry
        editable={false}
        value={ type === 'date'
          ? formatDateToString(date)
          : formatTimeToString(date)}
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date ?? new Date()}
          mode={type}
          is24Hour={true}
          onChange={onChangeSelectedDate}
        />
      )}
    </DateInputContainer>
  )
}
