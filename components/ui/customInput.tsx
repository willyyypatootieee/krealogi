import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import EyeIcon from './eyeIcon';

interface CustomInputProps extends TextInputProps {
  label: string;
  isPassword?: boolean;
}

export default function CustomInput({ label, isPassword = false, ...props }: CustomInputProps) {
  const [isSecure, setIsSecure] = useState(isPassword);

  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <View style={isPassword ? styles.passwordContainer : undefined}>
        <TextInput
          style={[styles.input, isPassword && styles.passwordInput]}
          placeholderTextColor="#999"
          secureTextEntry={isSecure}
          {...props}
        />
        {isPassword && (
          <TouchableOpacity style={styles.eyeIconContainer} onPress={() => setIsSecure(!isSecure)}>
            <EyeIcon width={20} height={20} crossed={!isSecure} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F7F7F7',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 14,
    color: '#333',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: 12,
  },
  passwordInput: {
    flex: 1,
    paddingRight: 40,
    backgroundColor: 'transparent',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 16,
    height: '100%',
    justifyContent: 'center',
  },
});
