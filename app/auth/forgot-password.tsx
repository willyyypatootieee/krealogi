import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackIcon from '../../components/ui/backIcon';
import CustomInput from '../../components/ui/customInput';
import PrimaryButton from '../../components/ui/primaryButton';
import SuccessModal from '../../components/ui/successModal';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleResetPassword = () => {
    // MOCK API CALL
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      router.push('/auth/verify-otp');
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <BackIcon width={28} height={28} />
          </TouchableOpacity>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Lupa Password</Text>
          <Text style={styles.subtitle}>
            Masukkan Email Mu Untuk Mengubah{'\n'}Passwordmu
          </Text>
        </View>

        <View style={styles.formContainer}>
          <CustomInput
            label=""
            placeholder="example@gmail.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.bottomContainer}>
          <PrimaryButton title="Buat Ulang Sandi" onPress={handleResetPassword} />
        </View>
      </KeyboardAvoidingView>

      <SuccessModal 
        visible={showModal} 
        title="Cek Emailmu" 
        subtitle="Kami Telah Mengirimkan Kode Pemulihan Kata Sandi Di Email Anda" 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
  },
  backButton: {
    padding: 10,
    marginLeft: -10,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    lineHeight: 22,
  },
  formContainer: {
    marginBottom: 20,
  },
  bottomContainer: {
    paddingBottom: 30,
  },
});
