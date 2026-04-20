import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Modular Components
import StatusTab from '../../components/finance/StatusTab';
import TambahkanTab from '../../components/finance/TambahkanTab';
import SuccessModal from '../../components/ui/successModal';

export default function FinanceScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'Status' | 'Tambahkan'>('Status');
  const [showModal, setShowModal] = useState(false);

  const handleSave = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      setActiveTab('Status');
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Keuangan</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {/* Top Filters / Date */}
        {activeTab === 'Status' && (
          <View style={styles.filterContainer}>
            <TextInput style={styles.filterInput} placeholder="Pilih Tanggal" />
            <TouchableOpacity style={styles.filterAction}>
              <Ionicons name="options-outline" size={20} color="#666" />
            </TouchableOpacity>
          </View>
        )}

        {/* Tab Toggle */}
        <View style={styles.toggleContainer}>
          <TouchableOpacity
            style={[styles.toggleButton, activeTab === 'Status' && styles.toggleButtonActive]}
            onPress={() => setActiveTab('Status')}
          >
            <Text style={[styles.toggleText, activeTab === 'Status' && styles.toggleTextActive]}>
              Status
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.toggleButton, activeTab === 'Tambahkan' && styles.toggleButtonActive]}
            onPress={() => setActiveTab('Tambahkan')}
          >
            <Text style={[styles.toggleText, activeTab === 'Tambahkan' && styles.toggleTextActive]}>
              Tambahkan
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        {activeTab === 'Status' ? <StatusTab /> : <TambahkanTab onSave={handleSave} />}
      </ScrollView>

      {/* Success Modal */}
      <SuccessModal 
        visible={showModal} 
        title="Catatan Keuangan Disimpan" 
        subtitle="Silahkan Tunggu Hingga Proses Selesai" 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
  },
  backButton: {
    padding: 5,
    marginLeft: -10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#eee',
  },
  filterInput: {
    flex: 1,
    fontSize: 14,
  },
  filterAction: {
    padding: 4,
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 4,
    borderWidth: 1,
    borderColor: '#ECECEC',
    marginBottom: 24,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 26,
    alignItems: 'center',
  },
  toggleButtonActive: {
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  toggleText: {
    fontSize: 14,
    color: '#999',
    fontWeight: '600',
  },
  toggleTextActive: {
    color: '#A2335B',
  },
});
