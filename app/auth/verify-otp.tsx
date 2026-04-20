import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BackIcon from '../../components/ui/backIcon';
import PrimaryButton from '../../components/ui/primaryButton';

export default function VerifyOtpScreen() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef<Array<TextInput | null>>([]);
  const router = useRouter();

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-advance
    if (value !== '' && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = ({ nativeEvent }: any, index: number) => {
    if (nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleConfirm = () => {
    // MOCK OTP VERIFICATION
    router.replace('/auth/login');
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
          <Text style={styles.title}>Verifikasi OTP</Text>
          <Text style={styles.subtitle}>
            Cek Emailmu Untuk Mengisi Kode OTP
          </Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.label}>Kode OTP</Text>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                ref={(ref) => (inputs.current[index] = ref)}
                value={digit}
                onChangeText={(value) => handleOtpChange(value, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                keyboardType="number-pad"
                maxLength={1}
                textAlign="center"
              />
            ))}
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <PrimaryButton title="Konfirmasi" onPress={handleConfirm} />
          <View style={styles.resendContainer}>
            <TouchableOpacity>
              <Text style={styles.resendText}>Kirim ulang kode</Text>
            </TouchableOpacity>
            <Text style={styles.timerText}>00:30</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
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
    marginBottom: 40,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  otpInput: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#F9F9F9',
    fontSize: 24,
    color: '#A2335B',
    fontWeight: 'bold',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  bottomContainer: {
    paddingBottom: 30,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingHorizontal: 5,
  },
  resendText: {
    fontSize: 12,
    color: '#999',
  },
  timerText: {
    fontSize: 12,
    color: '#999',
  },
});
