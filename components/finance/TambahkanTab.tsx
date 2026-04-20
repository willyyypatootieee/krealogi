import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface TambahkanTabProps {
  onSave: () => void;
}

export default function TambahkanTab({ onSave }: TambahkanTabProps) {
  const [kegiatan, setKegiatan] = useState('');
  const [kategori, setKategori] = useState<'Pemasukan' | 'Pengeluaran'>('Pengeluaran');
  const [nominal, setNominal] = useState('');
  const [tanggal, setTanggal] = useState('');

  return (
    <View style={styles.tabContent}>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.textInput}
          placeholder="Nama Kegiatan"
          value={kegiatan}
          onChangeText={setKegiatan}
        />
      </View>

      <Text style={styles.label}>Kategori</Text>
      <View style={styles.radioGroup}>
        <TouchableOpacity 
          style={styles.radioButton}
          onPress={() => setKategori('Pemasukan')}
        >
          <Text style={[styles.radioText, kategori === 'Pemasukan' && styles.radioTextActive]}>
            Pemasukan
          </Text>
          <View style={styles.radioCircle}>
            {kategori === 'Pemasukan' && <View style={styles.radioInnerCircle} />}
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.radioButton}
          onPress={() => setKategori('Pengeluaran')}
        >
          <Text style={[styles.radioText, kategori === 'Pengeluaran' && styles.radioTextActive]}>
            Pengeluaran
          </Text>
          <View style={styles.radioCircle}>
            {kategori === 'Pengeluaran' && <View style={styles.radioInnerCircle} />}
          </View>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Nominal</Text>
      <View style={styles.inputGroup}>
        <TextInput
          style={styles.textInput}
          placeholder="Rp."
          keyboardType="numeric"
          value={nominal}
          onChangeText={setNominal}
        />
      </View>

      <Text style={styles.label}>Tanggal</Text>
      <View style={styles.inputGroup}>
        <View style={styles.datePickerInput}>
          <Ionicons name="calendar-outline" size={20} color="#A2335B" style={{marginRight: 10}} />
          <TextInput
            style={{ flex: 1 }}
            placeholder="Pilih tanggal"
            value={tanggal}
            onChangeText={setTanggal}
          />
          <Ionicons name="chevron-down-outline" size={20} color="#999" />
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={onSave}>
        <Text style={styles.saveButtonText}>Simpan Catatan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    marginTop: 10,
  },
  inputGroup: {
    marginBottom: 16,
  },
  textInput: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 14,
  },
  radioGroup: {
    marginBottom: 10,
    marginTop: 5,
  },
  radioButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  radioText: {
    fontSize: 14,
    color: '#666',
  },
  radioTextActive: {
    color: '#A2335B',
    fontWeight: '600',
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#dcdcdc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInnerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#A2335B',
  },
  datePickerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  saveButton: {
    backgroundColor: '#A2335B',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 30,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
