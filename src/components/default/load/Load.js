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
        color={'white'}
      />
      <Text style={styles.label}>
        Enviando mensagens...
      </Text>
    </View>
  )

  }else{

    return null

  }
}

export default Load;