import { Platform } from 'react-native';

const Fonts = {
  LeagueSpartan: Platform.OS === 'ios' ? 'League Spartan' : 'league-spartan.bold',
  OpenSans: 'Open Sans',
  OpenSansBold: 'OpenSans-Bold',
};
export const sizes = {
  base: 14,
  h1: 28,
  h2: 24,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 12,
  h7: 10,
};

export const lineHeights = {
  h1: Platform.isPad ? 44 : 34,
  h2: Platform.isPad ? 40 : 29,
  h3: Platform.isPad ? 30 : 22,
  h4: Platform.isPad ? 28 : 19,
  h5: Platform.isPad ? 24 : 24,
  h6: Platform.isPad ? 20 : 18,
  h7: Platform.isPad ? 23 : 16,
};
export default { Fonts, sizes, lineHeights };
