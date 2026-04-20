import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';

const ONBOARDING_DATA = [
  {
    title: 'Selamat Datang di Kreatica',
    description: 'Kreatica Adalah Aplikasi Pencatatan Keuangan Pengrajin No.1 di Indonesia',
    icon: '👋',
  },
  {
    title: 'Temukan Solusi di Kreatica',
    description: 'Memberikan Solusi Keuangan Untuk Bisnis Kerajinan Anda',
    icon: '💡',
  },
  {
    title: 'Tetap Terhubung',
    description: 'Tetap Terhubung Dengan Pelanggan Dan Pengrajin Menggunakan Kreatica',
    icon: '🤝',
  },
];

export default function OnboardingScreen() {
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();
  const scrollRef = useRef<ScrollView>(null);
  const { width } = useWindowDimensions();

  const handleNext = () => {
    if (currentPage < ONBOARDING_DATA.length - 1) {
      scrollRef.current?.scrollTo({ x: (currentPage + 1) * width, animated: true });
      setCurrentPage(currentPage + 1);
    } else {
      router.replace('/login');
    }
  };

  const onScroll = (e: any) => {
    const x = e.nativeEvent.contentOffset.x;
    const pageIndex = Math.round(x / width);
    if (pageIndex !== currentPage) {
      setCurrentPage(pageIndex);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.pagerView}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={scrollRef}
        onMomentumScrollEnd={onScroll}
        scrollEventThrottle={16}
      >
        {ONBOARDING_DATA.map((page, index) => (
          <View key={index} style={[styles.page, { width }]}>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>{page.icon}</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{page.title}</Text>
              <Text style={styles.description}>{page.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.dotsContainer}>
          {ONBOARDING_DATA.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                currentPage === i && styles.activeDot,
              ]}
            />
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentPage === 0 ? 'Mulai' : 'Lanjutkan'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pagerView: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconContainer: {
    backgroundColor: '#e6e6e6', // Placeholder for illustration bg
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  icon: {
    fontSize: 80,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#A54165',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
  footer: {
    padding: 20,
    paddingBottom: 40,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  dot: {
    width: 24,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#A54165',
  },
  button: {
    backgroundColor: '#A54165',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
