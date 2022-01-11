import { ThemeProvider } from 'theme-ui';
import { theme } from './theme';
import { HelloWorld } from 'components';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <HelloWorld />
    </ThemeProvider>
  );
}
