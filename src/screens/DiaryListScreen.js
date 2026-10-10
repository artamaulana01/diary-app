import React from 'react';
import { Text, StyleSheet, ScrollView, View, Image } from 'react-native'; // Tambahkan View & Image untuk Header
import DiaryCard from '../components/DiaryCard';

// 1. Import gambar lokal dari folder assets
import imgHappy from '../../assets/moods/happy.jpg';
import imgAvatar from '../../assets/moods/avatar.jpg'; // Gambar untuk profil

const diaryEntries = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    imageSource: { uri: 'https://picsum.photos/seed/happy/80' }, // Menggunakan link remote
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    imageSource: { uri: 'https://picsum.photos/seed/focus/80' },
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    imageSource: imgHappy, // Menggunakan gambar lokal
  },
  {
    id: 4,
    title: 'Belajar React Native',
    date: '2025-10-03',
    preview: 'Hari ini berhasil membuat layout menggunakan Flexbox. Ternyata seru juga!',
    imageSource: { uri: 'https://picsum.photos/seed/code/80' },
  },
  {
    id: 5,
    title: 'Makan Malam Bersama',
    date: '2025-10-02',
    preview: 'Menemukan tempat makan baru yang enak. Suasananya sangat nyaman untuk ngobrol.',
    imageSource: { uri: 'https://picsum.photos/seed/food/80' },
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      
      {/* 2. Tambahkan Header dengan Avatar */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Buku Harian</Text>
        <Image source={imgAvatar} style={styles.avatar} />
      </View>

      {/* 3. Render Kartu (Total 5 entri) */}
      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          imageSource={entry.imageSource}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  content: { padding: 16 },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: { fontSize: 24, fontWeight: '700' },
  avatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#e5e7eb' },
});