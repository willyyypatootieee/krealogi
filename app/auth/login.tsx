import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackIcon from '../../components/ui/backIcon';
import CustomInput from '../../components/ui/customInput';
import PrimaryButton from '../../components/ui/primaryButton';
import SocialButton from '../../components/ui/socialButton';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    // MOCK LOGIN
    router.replace('/(tabs)');
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
          <Text style={styles.title}>Halo UMKM</Text>
          <Text style={styles.subtitle}>
            Masukkan Informasi Mu Untuk{'\n'}Melanjutkan Ke Aplikasi
          </Text>
        </View>

        <View style={styles.formContainer}>
          <CustomInput
            label="Email Address"
            placeholder="example@gmail.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <CustomInput
            label="Password"
            placeholder="********"
            value={password}
            onChangeText={setPassword}
            isPassword
          />

          <TouchableOpacity style={styles.forgotPassword} onPress={() => router.push('/auth/forgot-password')}>
            <Text style={styles.forgotPasswordText}>Lupa Sandi</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.spacer} />

        <View style={styles.bottomContainer}>
          <PrimaryButton title="Masuk" onPress={handleLogin} />
          <SocialButton title="Masuk Dengan Google" />

          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Pengguna baru? </Text>
            <TouchableOpacity onPress={() => router.push('/auth/register')}>
              <Text style={styles.registerLink}>Buat akun</Text>
            </TouchableOpacity>
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
    marginBottom: 20,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: -10,
  },
  forgotPasswordText: {
    color: '#999',
    fontSize: 12,
  },
  spacer: {
    flex: 1,
  },
  bottomContainer: {
    paddingBottom: 30,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  registerText: {
    fontSize: 14,
    color: '#999',
  },
  registerLink: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
});
