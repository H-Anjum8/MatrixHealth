// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
//   Image,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// // Avatar options
// const options = {
//   bodyTypes: ['Slim', 'Average', 'Curvy', 'Athletic', 'Muscular'],
//   skinTones: ['#f5e1d3', '#d2a679', '#b87b50', '#8d5524', '#5c3317'],
//   hairStyles: ['Style1', 'Style2', 'Style3', 'Style4', 'Style5'],
//   hairColors: ['#000000', '#a0522d', '#ffdbac', '#fff5e1', '#d4af37'],
// };

// const AvatarCustomization = ({ navigation }) => {
//   const [selectedBody, setSelectedBody] = useState('Slim');
//   const [selectedSkin, setSelectedSkin] = useState('#f5e1d3');
//   const [selectedHairStyle, setSelectedHairStyle] = useState('Style1');
//   const [selectedHairColor, setSelectedHairColor] = useState('#000000');

//   // Get layered image paths
//   const getBodyImage = () => {
//     switch (selectedBody) {
//       case 'Slim':
//         return require('./assets/avatar_parts/body_slim.png');
//       case 'Average':
//         return require('./assets/avatar_parts/body_average.png');
//       case 'Curvy':
//         return require('./assets/avatar_parts/body_curvy.png');
//       case 'Athletic':
//         return require('./assets/avatar_parts/body_athletic.png');
//       case 'Muscular':
//         return require('./assets/avatar_parts/body_muscular.png');
//       default:
//         return require('./assets/avatar_parts/body_slim.png');
//     }
//   };

//   const getSkinOverlay = () => {
//     if (selectedSkin === '#f5e1d3') return require('./assets/avatar_parts/skin_light.png');
//     if (selectedSkin === '#d2a679') return require('./assets/avatar_parts/skin_fair.png');
//     if (selectedSkin === '#b87b50') return require('./assets/avatar_parts/skin_tan.png');
//     if (selectedSkin === '#8d5524') return require('./assets/avatar_parts/skin_brown.png');
//     if (selectedSkin === '#5c3317') return require('./assets/avatar_parts/skin_dark.png');
//     return null;
//   };

//   const getHairStyleImage = () => {
//     switch (selectedHairStyle) {
//       case 'Style1':
//         return require('./assets/avatar_parts/hair_style1.png');
//       case 'Style2':
//         return require('./assets/avatar_parts/hair_style2.png');
//       case 'Style3':
//         return require('./assets/avatar_parts/hair_style3.png');
//       case 'Style4':
//         return require('./assets/avatar_parts/hair_style4.png');
//       case 'Style5':
//         return require('./assets/avatar_parts/hair_style5.png');
//       default:
//         return require('./assets/avatar_parts/hair_style1.png');
//     }
//   };

//   return (
//     <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
//       {/* Back */}
//       <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
//         <Icon name="chevron-back" size={26} color="#000" />
//       </TouchableOpacity>

//       <Text style={styles.title}>Create Your Wellness Avatar</Text>
//       <Text style={styles.subtitle}>
//         Choose the look that best represents you. You can always update it later!
//       </Text>

//       {/* Avatar Layered Preview */}
//       <View style={styles.avatarWrapper}>
//         <Image source={getBodyImage()} style={styles.avatarLayer} resizeMode="contain" />
//         <Image source={getSkinOverlay()} style={[styles.avatarLayer, { opacity: 0.8 }]} />
//         <Image source={getHairStyleImage()} style={styles.avatarLayer} />
//         <View
//           style={[
//             styles.avatarLayer,
//             {
//               backgroundColor: selectedHairColor,
//               opacity: 0.25,
//               borderRadius: 100,
//             },
//           ]}
//         />
//       </View>

//       {/* Body Type */}
//       <Text style={styles.sectionTitle}>Choose Body Type</Text>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.optionRow}>
//         {options.bodyTypes.map((type) => (
//           <TouchableOpacity
//             key={type}
//             style={[
//               styles.optionItem,
//               selectedBody === type && styles.optionSelected,
//             ]}
//             onPress={() => setSelectedBody(type)}
//           >
//             <Image source={getBodyImage()} style={styles.optionImage} />
//             <Text
//               style={[
//                 styles.optionLabel,
//                 selectedBody === type && styles.optionLabelSelected,
//               ]}
//             >
//               {type}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       {/* Skin Tone */}
//       <Text style={styles.sectionTitle}>Select Skin Tone</Text>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.optionRow}>
//         {options.skinTones.map((tone) => (
//           <TouchableOpacity
//             key={tone}
//             onPress={() => setSelectedSkin(tone)}
//             style={[
//               styles.skinToneCircle,
//               { backgroundColor: tone },
//               selectedSkin === tone && styles.selectedCircleBorder,
//             ]}
//           />
//         ))}
//       </ScrollView>

//       {/* Hairstyle */}
//       <Text style={styles.sectionTitle}>Pick a Hairstyle</Text>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.optionRow}>
//         {options.hairStyles.map((style) => (
//           <TouchableOpacity
//             key={style}
//             style={[
//               styles.optionItem,
//               selectedHairStyle === style && styles.optionSelected,
//             ]}
//             onPress={() => setSelectedHairStyle(style)}
//           >
//             <Image source={getHairStyleImage()} style={styles.optionImage} />
//             <Text
//               style={[
//                 styles.optionLabel,
//                 selectedHairStyle === style && styles.optionLabelSelected,
//               ]}
//             >
//               {style}
//             </Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       {/* Hair Color */}
//       <Text style={styles.sectionTitle}>Choose Hair Color</Text>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.optionRow}>
//         {options.hairColors.map((color) => (
//           <TouchableOpacity
//             key={color}
//             onPress={() => setSelectedHairColor(color)}
//             style={[
//               styles.skinToneCircle,
//               { backgroundColor: color },
//               selectedHairColor === color && styles.selectedCircleBorder,
//             ]}
//           />
//         ))}
//       </ScrollView>
//     </ScrollView>
//   );
// };

// export default AvatarCustomization;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 16,
//   },
//   backBtn: {
//     marginBottom: 12,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: '700',
//   },
//   subtitle: {
//     color: '#555',
//     fontSize: 14,
//     marginBottom: 20,
//   },
//   avatarWrapper: {
//     width: 200,
//     height: 200,
//     alignSelf: 'center',
//     position: 'relative',
//     marginBottom: 20,
//   },
//   avatarLayer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//   },
//   sectionTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginTop: 10,
//     marginBottom: 8,
//   },
//   optionRow: {
//     flexDirection: 'row',
//     marginBottom: 16,
//   },
//   optionItem: {
//     alignItems: 'center',
//     marginRight: 16,
//     padding: 6,
//     borderRadius: 10,
//   },
//   optionSelected: {
//     backgroundColor: '#f1e7ff',
//     borderWidth: 2,
//     borderColor: '#6a0dad',
//   },
//   optionImage: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     marginBottom: 4,
//   },
//   optionLabel: {
//     fontSize: 12,
//     color: '#444',
//   },
//   optionLabelSelected: {
//     fontWeight: '700',
//     color: '#6a0dad',
//   },
//   skinToneCircle: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 12,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   selectedCircleBorder: {
//     borderWidth: 3,
//     borderColor: '#6a0dad',
//   },
// });
