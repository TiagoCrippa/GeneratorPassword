import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';

import { styles } from './BatBottomStyle';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';

import * as Clipboard from 'expo-clipboard';

export function BatBottom() {
    const [pass, setPass] = useState('');

    function handleGenerateButton() {
        let generateToken = generatePass();
        setPass(generateToken);
    }

    function handleCopyButton() {
        Clipboard.setStringAsync(pass);
    }

  return (
    <>
        <BatTextInput pass={pass}/>

        <Pressable
        style={styles.button}
        onPress={handleGenerateButton}
        >
        <Text style={styles.text}>Generate</Text>
        </Pressable>

        <Pressable
        style={styles.button}
        onPress={handleCopyButton}
        >
        <Text style={styles.text}>💥 COPY</Text>
        </Pressable>
    </>
  );
}