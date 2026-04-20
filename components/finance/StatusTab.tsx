import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

export default function StatusTab() {
  return (
    <View style={styles.tabContent}>
      {/* Metrics Row */}
      <View style={styles.metricsRow}>
        <View style={styles.metricBox}>
          <Text style={styles.metricLabel}>Pemasukan</Text>
          <Text style={styles.metricValue}>Rp10.000.000</Text>
        </View>
        <View style={styles.metricBox}>
          <Text style={styles.metricLabel}>Pengeluaran</Text>
          <Text style={[styles.metricValue, { color: '#D81B60' }]}>Rp1.000.000</Text>
        </View>
        <View style={styles.metricBox}>
          <Text style={styles.metricLabel}>Laba</Text>
          <Text style={styles.metricValue}>Rp9.000.000</Text>
        </View>
      </View>

      {/* Detail Keuangan header */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Detail Keuangan</Text>
        <TouchableOpacity>
          <Text style={styles.seeDetailText}>Detail &gt;</Text>
        </TouchableOpacity>
      </View>

      {/* Debit Card */}
      <View style={styles.cardContainer}>
        <Text style={styles.cardBankLabel}>Master Card</Text>
        <Text style={styles.cardTitle}>Total Rekening</Text>
        <Text style={styles.cardBalance}>RP50.000.000</Text>
        <Text style={styles.cardNumber}>1234 5678 91 3783</Text>
        <Text style={styles.cardValidity}>05/25</Text>
      </View>

      {/* Chart Section using SVG */}
      <View style={styles.chartContainer}>
        <Svg width="100%" height="200" viewBox="0 0 300 200">
          {/* Base axes */}
          <Path d="M 20 180 L 280 180 M 20 180 L 20 20" stroke="#f0f0f0" strokeWidth="2" />
          
          {/* Mock Bar Chart matching the design directly (or Line Chart based on preference) */}
          {[...Array(6)].map((_, i) => (
             <React.Fragment key={i}>
                <Rect x={35 + i * 40} y="80" width="15" height="100" rx="7" fill="#FFE5EB" />
                <Circle cx={42.5 + i * 40} cy={75 - Math.random() * 40} r="5" fill="#A2335B" />
             </React.Fragment>
          ))}
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
  },
  metricsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  metricBox: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 12,
    padding: 10,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  metricLabel: {
    fontSize: 10,
    color: '#666',
    marginBottom: 4,
  },
  metricValue: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  seeDetailText: {
    fontSize: 12,
    color: '#A2335B',
    fontWeight: '600',
  },
  cardContainer: {
    backgroundColor: '#D11D53',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  cardBankLabel: {
    position: 'absolute',
    top: 20,
    right: 20,
    color: '#fff',
    opacity: 0.8,
    fontSize: 12,
    fontWeight: 'bold',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 12,
    marginBottom: 4,
  },
  cardBalance: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardNumber: {
    color: '#fff',
    fontSize: 14,
    letterSpacing: 2,
    marginBottom: 4,
  },
  cardValidity: {
    color: '#fff',
    fontSize: 10,
  },
  chartContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 20,
  },
});
