import { Image, StyleSheet, Platform, Text} from 'react-native';
import 'nativewind';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
   <SafeAreaView>
    <Text className='text-yellow-400'>
      Hey guys
    </Text>
   </SafeAreaView>
  );
}


