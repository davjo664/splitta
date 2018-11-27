import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
  Dimensions
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem } from 'native-base';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class Scan extends Component {
  onSuccess(e) {
    let QR = e.data;
    let json = JSON.parse(QR);
    this.props.navigation.navigate('MenuContainer',
        {'QR': {restaurant: json.restaurant}}
    );
  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        // topContent={
        //     <Container style={{marginLeft:0}}>
        //         <Button transparent onPress={() => {
        //             this.props.navigation.navigate('Home')
        //         }}>
        //             <Icon name='md-arrow-round-back' />
        //             </Button>
        //     </Container>
        // }
        cameraStyle={styles.cameraContainer}
        topViewStyle= {styles.zeroContainer}
        bottomViewStyle= {styles.zeroContainer}
        markerStyle={{borderColor:'rgba(255, 255, 255, 0.3)', borderRadius: 20, backgroundColor: 'rgba(255, 255, 255, 0.1)'}}
        showMarker={true}
      />
    );
  }
}

const styles = StyleSheet.create({
    zeroContainer: {
        height: 0,
      },
      topContainer: {
        height: '10%',
        backgroundColor:'rgba(52, 52, 52, 0.8)'
      },
    
      cameraContainer: {
        height: Dimensions.get('window').height,
      },
  });