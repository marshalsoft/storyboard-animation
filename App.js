// @flow
import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Stories, Stories2 } from './components';

const stories = [
  {
    id: '2',
    source: require('./assets/stories/girl1.jpg'),
    user: 'derek.russel',
    avatar: require('./assets/avatars/face.png'),
  },
  {
    id: '4',
    source: require('./assets/stories/girl2.png'),
    user: 'jmitch',
    avatar: require('./assets/avatars/face.png'),
  },
  {
    id: '5',
    source: require('./assets/stories/girl3.png'),
    user: 'monicaa',
    avatar: require('./assets/avatars/face.png'),
  },
  {
    id: '3',
    source: require('./assets/stories/girl4.jpeg'),
    user: 'alexandergarcia',
    avatar: require('./assets/avatars/face.png'),
  },
  {
    id: '1',
    source: require('./assets/stories/girl1.jpg'),
    user: 'andrea.schmidt',
    avatar: require('./assets/avatars/face.png'),
  },
];


export default class App extends React.Component{
  state = {
    ready: false,
  };

  async componentDidMount() {
    await Promise.all(stories.map(story => Promise.all([
      Asset.loadAsync(story.source),
      Asset.loadAsync(story.avatar),
    ])));
    this.setState({ ready: true });
  }

  render() {
    const { ready } = this.state;
  
    return (
      <View style={{ flex: 1 }}>
        <Stories2 {...{ stories }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222',
  },
});
