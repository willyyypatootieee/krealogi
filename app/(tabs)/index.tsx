import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BerandaScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Beranda</Text>
          <TouchableOpacity>
            <View style={styles.avatar}>
              <Ionicons name="person" size={20} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Statistik Pengiriman */}
        <View style={styles.statsCard}>
          <Text style={styles.statsCardTitle}>Statistik Pengiriman</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>32</Text>
              <Text style={styles.statLabel}>Proses</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>16</Text>
              <Text style={styles.statLabel}>Selesai</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>48</Text>
              <Text style={styles.statLabel}>Total</Text>
            </View>
          </View>
        </View>

        {/* Krealogi Banner */}
        <View style={styles.banner}>
          <View style={styles.bannerContent}>
            <Text style={styles.bannerTitle}>Krealogi</Text>
            <Text style={styles.bannerSubtitle}>
              Memberikan Solusi{'\n'}Management untuk bisnis anda
            </Text>
            <TouchableOpacity style={styles.bannerButton}>
              <Text style={styles.bannerButtonText}>Gunakan Fitur</Text>
            </TouchableOpacity>
          </View>
          {/* Placeholder for banner image */}
          <View style={styles.bannerImagePlaceholder}>
            <Ionicons name="cube-outline" size={60} color="#E0E0E0" />
          </View>
        </View>

        {/* Catat dan lihat kinerja */}
        <Text style={styles.sectionTitle}>Catat dan lihat kinerja</Text>
        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIconContainer}>
              <Ionicons name="wallet-outline" size={28} color="#A2335B" />
            </View>
            <Text style={styles.actionText}>Keuangan</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIconContainer}>
              <Ionicons name="receipt-outline" size={28} color="#A2335B" />
            </View>
            <Text style={styles.actionText}>Hutang</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIconContainer}>
              <Ionicons name="bar-chart-outline" size={28} color="#A2335B" />
            </View>
            <Text style={styles.actionText}>Kinerja</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actionRow}>
          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIconContainer}>
              <Ionicons name="cube-outline" size={28} color="#A2335B" />
            </View>
            <Text style={styles.actionText}>Pesanan</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <View style={styles.actionIconContainer}>
              <Ionicons name="people-outline" size={28} color="#A2335B" />
            </View>
            <Text style={styles.actionText}>Komunitas</Text>
          </TouchableOpacity>

          <View style={[styles.actionButton, { opacity: 0 }]} />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#A2335B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsCard: {
    backgroundColor: '#A2335B',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  statsCardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    color: '#FFD1DC',
    fontSize: 12,
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: '#rgba(255,255,255,0.3)',
  },
  banner: {
    backgroundColor: '#F5F6FA',
    borderRadius: 16,
    flexDirection: 'row',
    padding: 20,
    marginBottom: 24,
    position: 'relative',
    overflow: 'hidden',
  },
  bannerContent: {
    flex: 1,
    zIndex: 2,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#A2335B',
    marginBottom: 8,
  },
  bannerSubtitle: {
    fontSize: 12,
    color: '#666',
    marginBottom: 16,
    lineHeight: 16,
  },
  bannerButton: {
    backgroundColor: '#A2335B',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  bannerButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  bannerImagePlaceholder: {
    position: 'absolute',
    right: -20,
    bottom: -10,
    opacity: 0.3,
    transform: [{ rotate: '15deg' }],
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  actionButton: {
    alignItems: 'center',
    width: '30%',
  },
  actionIconContainer: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF0F5',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
  },
});
