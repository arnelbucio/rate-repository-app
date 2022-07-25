import { Picker } from '@react-native-picker/picker'

const RepositorySorter = ({ order, setOrder }) => {

  return (
    <Picker
      selectedValue={order}
      onValueChange={(itemValue) => {
        setOrder(itemValue)
      }}
    >
      <Picker.Item label='Latest repositories' value='latest' />
      <Picker.Item label='Highest rated repositories' value='highest_rated' />
      <Picker.Item label='Lowest rated repositories' value='lowest_rated' />
    </Picker>
  )
}

export default RepositorySorter