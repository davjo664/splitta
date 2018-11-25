import React from "react";
import { AppRegistry, Image, StatusBar } from "react-native";
import { Container, Content, Text, List, ListItem } from "native-base";
import { Consumer } from '../context';
import { DrawerActions } from 'react-navigation';

const routes = ["Pizza", "Sallad", "Pasta"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Consumer>
      {(value) => {
        return (
          <Container>
            <Content>
              {/* <Image
                source={{
                  uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
                }}
                style={{
                  height: 120,
                  alignSelf: "stretch",
                  justifyContent: "center",
                  alignItems: "center"
                }}>
                <Image
                  square
                  style={{ height: 80, width: 70 }}
                  source={{
                    uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png"
                  }}
                />
              </Image> */}
              <List
                dataArray={routes}
                renderRow={data => {
                  return (
                    <ListItem
                      button
                      onPress={() => {
                        this.props.navigation.dispatch(DrawerActions.toggleDrawer());
                        value.dispatch({type: 'SWITCH', payload: {name: data}})
                      }}>
                      <Text>{data}</Text>
                    </ListItem>
                  );
                }}
              />
            </Content>
          </Container>
        )
      }}
      </Consumer>
    );
  }
}