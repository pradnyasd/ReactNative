import React, { Component } from 'react';
import { View, Text, ScrollView, Title, FlatList, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { LEADERS } from '../shared/leaders';
import {ListItem} from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const mapStateToProps = state => {
    return {
      leaders: state.leaders
    }
  }

function History() {
  return(
    <Card title='Our History'>
    <Text>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</Text>
    <Text>The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the worlds best cuisines in a pan.</Text>
    </Card>
  )
}

class About extends Component {

  static navigationOptions = {
    title: 'About Us'
  };

  render() {
    const renderleader = ({item, index}) => {

        return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}                  />
        );
    };

    const { navigate } = this.props.navigation;

    return (
      <ScrollView>
        <History />
        <Card title="Corporate Leadership">
        <FlatList
                data={this.props.leaders.leaders}
                renderItem={renderLeader}
                keyExtractor={item => item.id.toString()}
                />
        </Card>
        </ScrollView>
    );

  }


}
export default connect(mapStateToProps)(About);
