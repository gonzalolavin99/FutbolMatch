import { TextStyle } from 'react-native';

const tintColorLight = '#4CAF50';
const tintColorDark = '#81C784';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#FFFFFF',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    cardBackground: '#F5F5F5',
    primary: '#4CAF50',
    secondary: '#2196F3',
    accent: '#FFC107',
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    cardBackground: '#1E1E1E',
    primary: '#81C784',
    secondary: '#64B5F6',
    accent: '#FFD54F',
  },
};

export const Typography: { [key: string]: TextStyle } = {
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  body: {
    fontSize: 16,
    fontWeight: 'normal',
  },
  caption: {
    fontSize: 14,
    fontWeight: 'normal',
  },
};

export const Layout = {
  padding: 16,
  borderRadius: 8,
};