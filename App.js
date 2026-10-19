import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { DiaryListScreen } from './src/screens/DiaryListScreen';
import { COLORS, SPACE, TYPO, RADIUS } from './src/styles/tokens';

const DUMMY_DATA = [
  {
    id: '1',
    title: 'Pagi yang Tenang',
    date: '2026-10-06',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk dan menyegarkan pikiran...',
    moodUri: 'https://picsum.photos/seed/morning/128',
  },
  {
    id: '2',
    title: 'Produktif di Kampus',
    date: '2026-10-05',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru tentang React Native!',
    moodUri: 'https://picsum.photos/seed/study/128',
  },
  {
    id: '3',
    title: 'Senja di Taman',
    date: '2026-10-04',
    preview: 'Menikmati senja sambil membaca buku favorit. Warna langit keemasan sangat indah untuk difoto...',
    moodUri: 'https://picsum.photos/seed/sunset/128',
  },
  {
    id: '4',
    title: 'Belajar React Native',
    date: '2026-10-03',
    preview: 'Hari ini berhasil membuat layout menggunakan Flexbox dan FlatList adaptif. Ternyata seru dan menantang!',
    moodUri: 'https://picsum.photos/seed/code/128',
  },
  {
    id: '5',
    title: 'Makan Malam Bersama',
    date: '2026-10-02',
    preview: 'Menemukan tempat makan baru yang enak bersama sahabat. Suasananya nyaman dan menyenangkan.',
    moodUri: 'https://picsum.photos/seed/dinner/128',
  },
];

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right', 'bottom']}>
        <StatusBar style="dark" />
        <DiaryListScreen
          data={DUMMY_DATA}
          onSelectEntry={(item) => setSelected(item)}
        />

        {/* Modal Detail Entry */}
        <Modal
          visible={!!selected}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setSelected(null)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              {selected?.moodUri && (
                <Image
                  source={{ uri: selected.moodUri }}
                  style={styles.modalImage}
                  resizeMode="cover"
                />
              )}
              <Text style={TYPO.title}>{selected?.title}</Text>
              <Text style={TYPO.caption}>{selected?.date}</Text>
              <Text style={[TYPO.body, { marginVertical: SPACE.m }]}>
                {selected?.preview}
              </Text>
              <View style={styles.buttonContainer}>
                <Button title="Tutup" color={COLORS.accent} onPress={() => setSelected(null)} />
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: SPACE.l,
  },
  modalContent: {
    backgroundColor: COLORS.surface,
    padding: SPACE.l,
    borderRadius: RADIUS.card,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalImage: {
    width: 64,
    height: 64,
    borderRadius: RADIUS.avatar,
    marginBottom: SPACE.m,
  },
  buttonContainer: {
    marginTop: SPACE.s,
    alignSelf: 'flex-end',
  },
});