import * as React from 'react';
import {NavigationContainerRef, StackActions} from '@react-navigation/core';
import {Screens} from './screens';

export interface NavigationParams {
  [key: string]: any;
}

class NavigationC {
  navigationRef = React.createRef<NavigationContainerRef>();

  navigate = (routeName: Screens, params?: NavigationParams) => {
    setTimeout(
      () => this.navigationRef.current?.navigate(routeName, params),
      0,
    );
  };

  replace = (routeName: Screens, params?: NavigationParams) => {
    setTimeout(
      () =>
        this.navigationRef.current?.dispatch(
          StackActions.replace(routeName, params),
        ),
      0,
    );
  };

  reset = (
    index: number,
    routes: {name: Screens; params?: NavigationParams}[],
  ) => {
    this.navigationRef.current?.reset({
      index: index,
      routes: routes,
    });
  };

  pop = () => {
    this.navigationRef.current?.goBack();
  };

  pop2 = () => {
    this.pop();
    this.pop();
  };

  getCurrentRoute = () => {
    return this.navigationRef.current?.getCurrentRoute();
  };
}

const Navigation = new NavigationC();
export default Navigation;
