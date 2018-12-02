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
  render() {
    return (
      <Container style={styles.container}>
        <Image resizeMode='contain' source={require('../assets/logo_text.png')} style={{width: 200}}></Image>
        <Body>
        <Image resizeMode='contain' source={require('../assets/logo_no_text.png')} style={{width: 300, height:300}}></Image>
          <Title style={{color:'white', marginBottom: 10}}> Skanna QR-koden på bordet </Title>
          <Button block style={{backgroundColor:'#fcf49b'}} onPress={()=>{
                this.props.navigation.navigate('MenuContainer');
            }}>
            <Icon style={{color: '#163140'}} name='camera' />
          </Button>
        </Body>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#163140',
  },
  text: {
    color: '#FFF',
    fontSize: 12
  },
});
