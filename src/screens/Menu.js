/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Alert, Linking, Image} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';
import Article from '../components/Article';

import { DrawerActions } from 'react-navigation';
import { Consumer } from '../context';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class MenuScreen extends Component<Props> {
  renderArticles = (articles) => {
    let favorites = articles.map(article => (
      <Article key={article.name} name={article.name} price={article.price} ingredients={article.ingredients}></Article>
    ));
    return favorites;
  };
  
  render() {
    return (
      <Consumer>
      {(value) => {
        return (<Container>
            <Header>
              <Left>
                <Button transparent onPress={() => {
                  this.props.navigation.dispatch(DrawerActions.toggleDrawer());
                }}>
                  <Icon name='menu' />
                </Button>
              </Left>
              <Body>
                <Title> {this.props.navigation.getParam('QR') ? this.props.navigation.getParam('QR').restaurant : ""}</Title>
              </Body>
              <Right>
              <Button transparent>
                <Icon name='exit' onPress={() => {this.props.navigation.navigate("Home")}} />
              </Button>
            </Right>
            </Header>

          <Content>
            <Card>
            <CardItem header bordered>
              <Text style={{color: 'grey', fontSize: 20}}>{value.articlesTitle}</Text>
            </CardItem>
            {this.renderArticles(value.articles)}
            </Card>
          </Content>
            <Footer>
              <FooterTab>
              <Button full success onPress={()=>{this.props.navigation.navigate('PayContainer')}}>
              <Text style={styles.text}>BETALA {value.total ? value.total : ""}</Text>
            </Button>
              </FooterTab>
            </Footer>
        </Container>)
      }}
      </Consumer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    color: '#FFF',
    fontSize: 12
  },
});
