import React from 'react';
import './App.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
// import Lottie from 'lottie-react-web';
// import animation from './key_animation.json';

// 起動時ローディングアニメーション

const App = () => {
  const routing = useRoutes(routes);
  return (
    <ThemeProvider theme={theme}>
      {/* <div id="load" className="loadingAnim">
        <Lottie
          options={{
            animationData: animation
          }}
        />
      </div> */}
      <GlobalStyles />
      {routing}
    </ThemeProvider>
  );
};

export default App;
