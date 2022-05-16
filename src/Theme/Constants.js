import { View, Text, Dimensions } from 'react-native';

const domain = 'https://song-equities-tradi-30156.botics.co/api/v1';
const Constants = {
  ApiPrefix: `${domain}`,
  StoragePawtaiProfile: `${domain}/pawtai-backend-laravel/storage/app/public/pawtaiProfile`,
  windowWidth: Dimensions.get('window').width,
  windowHeight: Dimensions.get('window').height,
};

export default Constants;
