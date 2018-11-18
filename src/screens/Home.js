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
      <Container style={styles.container}>
        <Title style={{color:'#b3cccc', marginBottom: 10}}> Skanna QR-koden på bordet </Title>
          <Footer >
            <FooterTab>
            <Button success onPress={()=>{
                this.props.navigation.navigate('Menu',
                    {'QR': {id: 1}}
                );
            }}>
            <Icon style={{color: 'white'}} name='camera' />
            <Text style={styles.text}>SKANNA</Text>
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
    backgroundColor: '#f0f5f5',
  },
  text: {
    color: '#FFF',
    fontSize: 12
  },
});
