import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Dishdetail from './DishdetailComponent';
import About from './AboutUs';
import ContactUs from './ContactUsComponent';
import { View, Platform } from 'react-native';
import { createStackNavigator,createDrawerNavigator } from 'react-navigation';

const MenuNavigator = createStackNavigator({
        Menu: { screen: Menu },
        Dishdetail: { screen: Dishdetail }
    },
    {
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        }
    }
);

// const ContactNavigator = createStackNavigator({
//         Menu: { screen: ContactUs }
//       },{
//           navigationOptions: {
//             headerStyle: {
//                 backgroundColor: "#512DA8"
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//                 color: "#fff"
//             }
//         }
//     }
// );

const ContactNavigator = createStackNavigator({
    ContactUs: { screen: ContactUs }
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"
      },
      headerTintColor: "#fff"
    })
});

const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"
      },
      headerTintColor: "#fff"
    })
});

const AboutNavigator = createStackNavigator({
    About: { screen: About }
  }, {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
          backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
          color: "#fff"
      },
      headerTintColor: "#fff"
    })
});

const MainNavigator = createDrawerNavigator({
    Home:
      { screen: HomeNavigator,
        navigationOptions: {
          title: 'Home',
          drawerLabel: 'Home'
        }
      },

    About:
        { screen: AboutNavigator,
          navigationOptions: {
            title: 'About Information',
            drawerLabel: 'About Us'
          },
        },


    Menu:
      { screen: MenuNavigator,
        navigationOptions: {
          title: 'Menu',
          drawerLabel: 'Menu'
        },
      },
    ContactUs:
        { screen: ContactNavigator,
          navigationOptions: {
            title: 'Contact Information',
            drawerLabel: 'Contact Us'
          },
        }
          },

 {
  drawerBackgroundColor: '#D1C4E9'
});

class Main extends Component {
  render() {
    return (
        <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
            <MainNavigator />
        </View>
    );
  }
}

export default Main;
