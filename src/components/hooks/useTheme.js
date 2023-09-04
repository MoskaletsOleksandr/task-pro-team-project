import { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectTheme } from 'redux/auth/authSelectors';

export const useTheme = () => {
  const initialTheme = useSelector(selectTheme);
  const [theme, setTheme] = useState(initialTheme || 'dark');

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return { theme, setTheme };
};
