import React,{Component} from 'react';
import { Text, View, TouchableOpacity, StatusBar, StyleSheet, Image } from 'react-native';
import Login from '../account/Login';
import Home from '../../containers/Home';
import Drawer from '../navigator/Drawer';
import { Container, Header, Body, Content, Icon } from 'native-base';
import { createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator, DrawerItems, SafeAreaView,  } from "react-navigation";

class AppContainerNavigator extends Component{


    render(){
        
        return(
            <SwitchNavigator/>
        )
    }
}

const CustomDrawerContentComponent = (props) => {
    logout = () => {
        // db.transaction(
        //   tx => {
        //     tx.executeSql('delete from StorageUser');
        //   },
    
        // )
        // AsyncStorage.removeItem(ACCESS_TOKEN);
        props.navigation.navigate('Login');
      }
     
    return (
      <Container style={{ backgroundColor: '#102e5a', flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <SafeAreaView style={{ flex: 1 }}>
            <Header style={{ height: 220, backgroundColor: "#102e5a" }}>
              <Body>
                <Image
                    style={{alignSelf: 'center'}}
                  source={require('../../../assets/logo03.png')}
                />
              </Body>
            </Header>
  
            <StatusBar
              hidden={false}
              backgroundColor="#133669"
              translucent={true}
              networkActivityIndicatorVisible={true}
            />
  
            <Content>
              <View style={{ backgroundColor: '#fff' }}>
                <DrawerItems {...props} />
  
  
              </View>
            </Content>
          </SafeAreaView>
        </View>
        <View style={styles.item}>
          <View style={styles.iconContainer}>
          </View>
          <TouchableOpacity onPress={() => logout()}>
            <Text style={styles.label}>Sair</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }


const SideBar = createDrawerNavigator({
    Dashboard: Home
},
{
    initialRouteName: 'Dashboard',
    contentComponent: CustomDrawerContentComponent,
    //contentComponent: props => (<Drawer navigation={props.navigation} drawerProps={{...props}} />),
    drawerOpenRoute: 'DrawerOpen',
    drawerClouseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  }
)


const AppNavigator = createStackNavigator({
    Login: Login,
  });

const AppStack = createStackNavigator({
    Home: {
        screen: SideBar,
        navigationOptions: ({ navigation }) => ({
            headerLeft: <Drawer navigation={navigation}/>,
            headerStyle: {
              backgroundColor: '#2c3e50',
              elevation: 0,
              shadowOpacity: 0,
            },
            // headerTitle: <Image style={styles.logo} source={require('../../img/atra.png')} />,
            headerTitleStyle: { flex: 1}
          })
    },

})

const SwitchNavigator = createSwitchNavigator(
    {
    //   AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AppNavigator,
    },
    {
      initialRouteName: 'Auth',
    }
  );


  const styles = StyleSheet.create({
    drawer: {
      backgroundColor: "#133669",
      padding: 15,
      flexDirection: 'row',
    },
    logo: {
      width: 155,
      height: 35,
      marginLeft: 60,
      marginBottom: 1
    },
    container: {
      flex: 1,
      padding: 10
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: "#102e5a"
    },
    drawerImage: {
      height: 150,
      width: 150,
      borderRadius: 75
    },
    logoutButton: {
      flex: 1,
      flexDirection: 'column',
    },
    label: {
      margin: 16,
      fontWeight: 'bold',
      color: '#FFF',
      // color: 'rgba(0, 0, 0, .87)',
  
    },
  });

  export default createAppContainer(SwitchNavigator);