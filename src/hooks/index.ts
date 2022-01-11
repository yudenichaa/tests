import { ThemeUIContextValue, useThemeUI } from 'theme-ui';
import { ThemeType } from '../theme';

interface ThemeContext extends Omit<ThemeUIContextValue, 'theme'> {
  theme: ThemeType;
}

export const useTheme = useThemeUI as unknown as () => ThemeContext;
