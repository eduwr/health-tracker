import type {RouteProp, NavigationProp} from '@react-navigation/native';

export type TabParamList = {
  WeightSummary: undefined;
  Profile: undefined;
  WeightNew: undefined;
};

export type RootStackParamList = {
  Main: undefined;
};

export type TabRouteProps<RouteName extends keyof TabParamList> = RouteProp<
  TabParamList,
  RouteName
>;

export type TabNavigationProps<RouteName extends keyof TabParamList> =
  NavigationProp<TabParamList, RouteName>;

export type RootStackRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

export type RootStackNavigationProps<
  RouteName extends keyof RootStackParamList,
> = NavigationProp<RootStackParamList, RouteName>;
