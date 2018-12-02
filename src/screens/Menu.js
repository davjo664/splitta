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

  renderCheckoutButton = (value) => {
    if(value.total) {
      return (
        <Footer>
          <FooterTab>
            <Button full style={{backgroundColor:'#fcf49b'}} onPress={()=>{this.props.navigation.navigate('PayContainer')}}>
              <Text style={styles.text}>TILL KASSAN </Text>
              <Text style={{color:'grey', fontSize:16, marginTop:4}} >{value.total} :-</Text>
            </Button>
          </FooterTab>
        </Footer>
      )
    } else {
      return null;
    }
  };
  
  render() {
    return (
      <Consumer>
      {(value) => {
        return (<Container style={{backgroundColor:'#163140'}}>
            <Header style={{backgroundColor:'#163140'}}>
              <Left>
                <Button transparent onPress={() => {
                  this.props.navigation.dispatch(DrawerActions.toggleDrawer());
                }}>
                  <Icon style={{color: '#fcf49b'}} name='menu' />
                </Button>
              </Left>
              <Body>
                <Title style={{color: 'white'}}> {value.restaurant.name ? value.restaurant.name : "Pizzeria Unknown"}</Title>
              </Body>
              <Right>
              <Button transparent>
                <Icon style={{color: '#fcf49b'}} name='exit' onPress={() => {this.props.navigation.navigate("Home")}} />
              </Button>
            </Right>
            </Header>

          <Content>
            <Card>
            <CardItem header bordered>
              <Text style={{color: '#163140', fontSize: 20}}>{value.articlesTitle}</Text>
            </CardItem>
            {this.renderArticles(value.articles)}
            </Card>
          </Content>
          {this.renderCheckoutButton(value)}
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
    color: '#163140',
    fontSize: 14
  },
});
