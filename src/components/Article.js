import React, {Component} from 'react';
import {Platform, StyleSheet, Alert, Linking, Image} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';
import { Consumer } from '../context';

export default class Article extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  renderRemoveButton(value) {
    if (this.state.count) {
      return (
        <Content>
          <Button transparent onPress={()=>{
            value.dispatch({type:'REMOVE',payload:{name:this.props.name}});
            this.setState(previousState => (
              { count: previousState.count-1 }
            ))
          }}>
            <Icon name="md-remove-circle" style={{color: 'red', fontSize: 40}} />
          </Button>
        </Content>
      ) 
    } else {
      return null
    }
  }

    render() {
      return (
        <Consumer>
        {(value) => {
          return (
            <Content>
                <CardItem bordered>
                <Body>
                <Text>{this.props.name}</Text>
                <Text note>{this.props.ingredients}</Text>
                <Text>{this.props.price}:-</Text>
                </Body>
                <Right style={{flexDirection: 'row', justifyContent:'flex-end'}}>
                {this.renderRemoveButton(value)}
                <Title style={{color:'grey', fontSize:30, flex:1, justifyContent:'center', alignItems:'center'}}> {this.state.count}</Title>
                <Button transparent onPress={()=>{
                  value.dispatch({type:'ADD',payload:{name:this.props.name, cost: this.props.price, ingredients: this.props.ingredients}});
                  this.setState(previousState => (
                    { count: previousState.count+1 }
                  ))
                }}>
                <Icon name="md-add-circle" style={{color: 'green', fontSize: 40}} />
                </Button>
                </Right>
                </CardItem>
            </Content>
          )
        }}
        </Consumer>
      );
    }
  }