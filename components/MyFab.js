// import * as React from 'react';
// import { FAB } from 'react-native-paper';

// const MyFab = ({ navigation }) => {
//   const Add = () => {
//     navigation.navigate('Add');
//   };

//   const [state, setState] = React.useState({ open: false });

//   const onStateChange = ({ open }) => setState({ open });

//   const { open } = state;

//   return (
//     <FAB.Group
//       open={open}
//       visible
//       icon={open ? 'calendar-today' : 'plus'}
//       actions={[
//         { icon: 'plus', onPress: () => console.log('Pressed add') },
//         {
//           icon: 'star',
//           label: 'Star',
//           onPress: () => console.log('Pressed star'),
//         },
//         {
//           icon: 'email',
//           label: 'Email',
//           onPress: () => console.log('Pressed email'),
//         },
//         {
//           icon: 'bell',
//           label: 'Remind',
//           onPress: () => Add(),
//         },
//       ]}
//       onStateChange={onStateChange}
//       onPress={() => {
//         if (open) {
//           // Lakukan sesuatu jika FAB terbuka
//         }
//       }}
//     />
//   );
// };

// export default MyFab;
