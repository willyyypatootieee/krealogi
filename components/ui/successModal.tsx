import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';

interface SuccessModalProps {
  visible: boolean;
  title: string;
  subtitle: string;
}

export default function SuccessModal({ visible, title, subtitle }: SuccessModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalIconContainer}>
            <Ionicons name="mail-open-outline" size={30} color="#fff" />
          </View>
          <Text style={styles.modalTitle}>{title}</Text>
          <Text style={styles.modalSubtitle}>{subtitle}</Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
  },
  modalIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#A2335B',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalSubtitle: {
    fontSize: 12,
    color: '#A2335B',
    textAlign: 'center',
  },
});
