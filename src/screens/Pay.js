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
import OrderedArticle from '../components/OrderedArticle';

import { Consumer } from '../context';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class PayScreen extends Component<Props> {
  openSwish = () => {
    let payload = {
      version : 1,
      payee : {
      value : "0707713338"
      },
      amount : {
      value : 200
      },
      message : {
      value : "Hälsningar Bo \"the King\" Ek",
      editable : true
      }
    };

    let encodedPayload = encodeURIComponent(JSON.stringify(payload));
    let url = 'swish://payment?data='+encodedPayload;
    Linking.openURL(url);
  };
  renderArticles = (orders) => {
    let favorites = orders.map(order => (
      <OrderedArticle key={order.name} name={order.name} price={order.cost} ></OrderedArticle>
    ));
    return favorites;
  };
  
  render() {
    return (
      <Consumer>
      {(value) => {
        return (<Container style={{backgroundColor:'#163140'}}>
            <Header style={{backgroundColor:'#163140'}}>
              <Left>
                <Button transparent onPress={() => {
                  this.props.navigation.navigate('MenuContainer')
                }}>
                  <Icon style={{color:'#fcf49b'}} name='md-arrow-round-back' />
                </Button>
              </Left>
              <Body>
                <Title> DIN BESTÄLLNING </Title>
              </Body>
            </Header>

          <Content>
            <Card>
            {this.renderArticles(value.orders)}
              <CardItem>
                <Title style={{color: '#163140', fontSize:24}}>Totalt: {value.total} :-</Title>
              </CardItem>
            </Card>
          </Content>
            <Footer>
              <FooterTab>
              <Button full style={{backgroundColor:'#fcf49b'}} onPress={()=>{this.openSwish();}}>
              <Text style={styles.text}>BETALA </Text>
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
    color: '#163140',
    fontSize: 14
  },
});
