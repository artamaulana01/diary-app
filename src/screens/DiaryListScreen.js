import React from 'react';
import { View, Text, FlatList, useWindowDimensions, StyleSheet } from 'react-native';
import { BREAKPOINTS, SPACE, COLORS } from '../styles/tokens';
import { DiaryCard } from '../components/DiaryCard';

export const DiaryListScreen = ({ data = [], onSelectEntry }) => {
  const { width } = useWindowDimensions();
  const twoCols = width >= BREAKPOINTS.tablet;

  return (
    <View style={styles.container}>
      <FlatList
        key={twoCols ? 'grid2' : 'list1'}
        data={data}
        numColumns={twoCols ? 2 : 1}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Buku Harian</Text>
          </View>
        }
        renderItem={({ item }) => (
          <DiaryCard
            title={item.title}
            date={item.date}
            preview={item.preview}
            moodUri={item.moodUri}
            imageSource={item.imageSource}
            variant={twoCols ? 'grid' : 'list'}
            onPress={() => onSelectEntry?.(item)}
          />
        )}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background || '#f9fafb',
    paddingHorizontal: SPACE.s,
  },
  header: {
    paddingHorizontal: SPACE.s,
    paddingTop: SPACE.m,
    paddingBottom: SPACE.s,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  listContent: {
    paddingBottom: SPACE.xl,
  },
});

export default DiaryListScreen;