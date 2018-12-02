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
          <Button transparent onPress={()=>{
            value.dispatchArticle({type:'REMOVE',payload:{name:this.props.name}});
            this.setState(previousState => (
              { count: previousState.count-1 }
            ))
          }}>
            <Icon name="md-remove" style={{color: '#163140', fontSize: 40}} />
          </Button>
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
                <CardItem >
                <Body>
                <Text>{this.props.name}</Text>
                <Text note>{this.props.ingredients}</Text>
                <Text>{this.props.price}:-</Text>
                </Body>
                <Right style={{flexDirection: 'row', flex:1, justifyContent:'flex-end'}}>
                  {this.renderRemoveButton(value)}
                  <Text style={{color:'grey', fontSize:34, marginLeft:10, marginRight:10}}> {this.state.count}</Text>
                  <Button transparent onPress={()=>{
                    value.dispatchArticle({type:'ADD',payload:{name:this.props.name, cost: this.props.price, ingredients: this.props.ingredients}});
                    this.setState(previousState => (
                      { count: previousState.count+1 }
                    ))
                  }}>
                  <Icon name="md-add" style={{color: '#163140', fontSize: 40}} />
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