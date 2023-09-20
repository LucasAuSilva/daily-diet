import { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { DateEntry, DateInputContainer, DateLabel } from './styles'
import { Platform, Pressable } from 'react-native';

type Props = {
  label: string
  type: 'date' | 'time'
}

export const DateInput = ({ label, type }: Props) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [show, setShow] = useState(false);

  const handleDatePickerConfirm = (newDate?: Date) => {
    setDate(newDate);
    setShow(false)
  };

  const handleDatePickerCancel = () => {
    setShow(false)
  }

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
    <DateInputContainer>
      <DateLabel>{label}</DateLabel>
        <DateTimePickerModal
          display={Platform.OS === 'ios' ? 'spinner' : 'calendar'}
          isVisible={show}
          mode={type}
          is24Hour={true}
          onConfirm={handleDatePickerConfirm}
          onCancel={handleDatePickerCancel}
        />
        <Pressable onPress={showDateTimePicker}>
          <DateEntry
            editable={false}
            onPressIn={showDateTimePicker}
            value={ type === 'date'
              ? formatDateToString(date)
              : formatTimeToString(date)}
          />
        </Pressable>
    </DateInputContainer>
  )
}
