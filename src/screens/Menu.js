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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Home extends Component<Props> {
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
    }

    let url = `swish://payment?data=${encodeURIComponent(JSON.stringify(payload))}`
    Linking.openURL(url);
  };
  render() {
    return (
      <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>PIZZERIA HAWAII {this.props.navigation.getParam('QR').id}</Title>
            </Body>
            <Right>
            <Button transparent>
              <Icon name='camera' />
            </Button>
          </Right>
          </Header>

        <Content>
          <Card>
            <CardItem cardBody>
            <Image source={{
    uri: 'https://facebook.github.io/react/logo-og.png',
    cache: 'only-if-cached',
  }} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
              <Text>Hawaii</Text>
                  <Text note>85:-</Text>
              </Left>
              {/* <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right> */}
            </CardItem>
          </Card>
        </Content>
          <Footer>
            <FooterTab>
            <Button full success onPress={()=>{this.openSwish();}}>
            <Text style={styles.text}>BETALA</Text>
          </Button>
            </FooterTab>
          </Footer>
      </Container>
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
