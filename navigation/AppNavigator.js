import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import MainNavigation from './MainNavigation';

export default createSwitchNavigator({
  Main: MainNavigation,
});