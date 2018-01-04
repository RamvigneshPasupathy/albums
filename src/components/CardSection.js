import React from 'react';
import { View } from 'react-native';

const styles = {
  containerStyle: {
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: '#FFFFFF',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor:  '#DDDDDD',
      position: 'relative'
  }
};

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

export default CardSection;
