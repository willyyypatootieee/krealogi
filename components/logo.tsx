import React from 'react';
import { StyleSheet, View } from 'react-native';

export function Logo({ size = 100 }: { size?: number }) {
  // A simplistic vector representation or just a styling structure for the Kreatica logo
  // For production this would likely be an SVG
  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <View style={styles.leftPillar} />
      <View style={styles.rightLeaves}>
        <View style={styles.topLeaf} />
        <View style={styles.bottomLeaf} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftPillar: {
    width: '40%',
    height: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 10,
  },
  rightLeaves: {
    width: '50%',
    height: '100%',
    justifyContent: 'space-between',
  },
  topLeaf: {
    width: '100%',
    height: '45%',
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 20,
  },
  bottomLeaf: {
    width: '100%',
    height: '45%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 20,
  },
});
