import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import AppointmentCreated from '../pages/AppointmentCreated';
import CreateAppointment from '../pages/CreateAppointment';

const App = createStackNavigator();

const AppRotes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#312e38' },
    }}
    // initialRouteName="SignUp" /*setando uma tela inicial*/
  >
    <App.Screen name="Dashboard" component={Dashboard} />
    <App.Screen name="CreatedAppointment" component={CreateAppointment} />
    <App.Screen name="AppointmentCreated" component={AppointmentCreated} />

    <App.Screen name="Profile" component={Profile} />
  </App.Navigator>
);

export default AppRotes;
