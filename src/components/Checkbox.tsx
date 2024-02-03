import React from 'react';
import {Pressable} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface CheckboxProps {
  status: boolean;
  handlePress: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({status, handlePress}) => {
  // const [checked, setChecked] = useState(false);
  // const handlePress = () => {
  //   setChecked(!checked);
  // };
  return (
    <Pressable onPress={handlePress}>
      <MaterialCommunityIcons
        name={status ? 'checkbox-marked' : 'checkbox-blank-outline'}
        color={status ? '#555555' : '#000000'}
        size={30}
      />
    </Pressable>
  );
};

export default Checkbox;

// export default function Checkbox() {
//   const [checked, setChecked] = useState(false);
//   const handlePress = () => {
//     setChecked(!checked);
//   };
//   return (
//     <Pressable onPress={handlePress}>
//       <MaterialCommunityIcons
//         name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
//         color={checked ? '#555555' : '#000000'}
//         size={30}
//       />
//     </Pressable>
//   );
// }
