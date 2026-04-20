import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Logo } from '../../components/logo';

export default function SplashScreen() {
  const router = useRouter();
  const progress = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      // MOCK LOGIC: Replace this with your actual authentication and first-time user checks
      const isFirstTimeUser = true; // e.g., check AsyncStorage for 'hasSeenOnboarding'
      const isLoggedIn = false;      // e.g., check if a valid user token exists

      if (isFirstTimeUser) {
        router.replace('/onboarding');
      } else if (!isLoggedIn) {
        router.replace('/auth/login');
      } else {
        router.replace('/home');
      }
    });
  }, []);

  const width = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.centerBox}>
        <Logo size={80} />
        <Text style={styles.title}>Kreatica</Text>
      </View>
      <View style={styles.progressBarContainer}>
        <Animated.View style={[styles.progressBar, { width }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A54165',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerBox: {
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
  },
  progressBarContainer: {
    position: 'absolute',
    bottom: 50,
    width: '60%',
    height: 6,
    backgroundColor: '#rgba(255,255,255,0.3)',
    borderRadius: 3,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 3,
  },
});
