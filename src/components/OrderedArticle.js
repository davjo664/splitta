import React, {Component} from 'react';
import {Platform, StyleSheet, Alert, Linking, Image} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem, ListItem } from 'native-base';
import { Consumer } from '../context';

export default class Article extends Component<Props> {
  constructor(props) {
    super(props);
  }

    render() {
      return (
        <Consumer>
        {(value) => {
          return (
            <Content>
                <ListItem bordered>
                <Left>
                <Text style={{color:'grey'}}>{this.props.order.count}x </Text>
                <Text>{this.props.order.name}</Text>
                </Left>
                <Body>
                <Text style={{fontWeight:'bold'}}>{this.props.order.count*this.props.order.cost}:-</Text>
                </Body>
                <Right style={{flexDirection: 'row', justifyContent:'flex-end'}}>
                <Button iconLeft transparent danger onPress={()=>{
                    value.dispatchArticle({type:'REMOVE',payload:{name:this.props.order.name}});
                }}>
                <Icon name="md-trash" style={{fontSize: 40, color: '#163140'}} />
                </Button>
                </Right>
                </ListItem>
            </Content>
          )
        }}
        </Consumer>
      );
    }
  }