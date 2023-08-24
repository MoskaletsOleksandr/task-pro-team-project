import { useEffect, useState } from 'react';
import GlobalStyles from './GlobalStyles';
import { TestThemeBtn } from './TestThemeBtn/TestThemeBtn';

export const App = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.body.classList.add(theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);
  const handleThemeChange = color => {
    setTheme(color);
  };
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      Test
      <GlobalStyles />
      <TestThemeBtn
        onClick={() => {
          handleThemeChange('violet');
        }}
      >
        Тема violet
      </TestThemeBtn>
      <TestThemeBtn
        onClick={() => {
          handleThemeChange('dark');
        }}
      >
        Тема dark
      </TestThemeBtn>
    </div>
  );
};
