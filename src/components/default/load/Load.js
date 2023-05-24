import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import styles from './Styles';

function Load(props) {

  const [control, setControl] = useState(true)

  useEffect(() => {
    setControl(props.control)
  }, [props])


  if(control){

    return (
      <View style={styles.container}>
        <ActivityIndicator 
          size={'large'} 
          color={'#FF5D8F'}
          testID='activity-indicator'
        />
        <Text style={styles.label}>
          Carregando localização...
        </Text>
      </View>
    )

  }else{

    return null

  }
}

export default Load;