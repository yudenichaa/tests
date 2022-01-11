import { useTheme } from 'hooks';

export default function HelloWorld() {
  const { theme } = useTheme();

  return (
    <div>
      <h1
        sx={{
          color: 'primary',
          fontFamily: 'monospace',
        }}
      >
        Hello world
      </h1>
      <div sx={{ size: (t) => t.space?.[3], bg: 'primary' }} />
      <div sx={{ size: theme.space[3] + theme.space[5], bg: 'secondary' }}>
        Hello world
      </div>
    </div>
  );
}
