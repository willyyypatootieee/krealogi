import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface SocialButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function SocialButton({ title, style, ...props }: SocialButtonProps) {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      <GoogleLogo width={20} height={20} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F7F7F7',
    borderRadius: 12,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  text: {
    color: '#333',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 10,
  },
});
