import React from 'react';
import { Pressable, View, Text, Image, StyleSheet } from 'react-native';
import { COLORS, SPACE, RADIUS, TYPO } from '../styles/tokens';

export const DiaryCard = ({ title, date, preview, moodUri, imageSource, onPress, variant }) => {
  const isGrid = variant === 'grid';
  const resolvedImageSource = imageSource || (typeof moodUri === 'string' ? { uri: moodUri } : moodUri);

  return (
    <Pressable
      onPress={onPress}
      android_ripple={{ color: COLORS.border }}
      accessible={true}
      accessibilityLabel={`Entri ${title} tanggal ${date}`}
      style={({ pressed }) => [
        styles.card,
        isGrid ? styles.cardGrid : styles.cardList,
        { opacity: pressed ? 0.85 : 1 },
      ]}
    >
      {resolvedImageSource && (
        <Image source={resolvedImageSource} style={styles.image} resizeMode="cover" />
      )}
      <View style={styles.content}>
        <Text style={TYPO.title} numberOfLines={1}>{title}</Text>
        <Text style={TYPO.caption}>{date}</Text>
        <Text style={TYPO.body} numberOfLines={2}>{preview}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.card,
    padding: SPACE.m,
    margin: SPACE.s,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  cardList: {
    flexDirection: 'row',
    gap: SPACE.m,
  },
  cardGrid: {
    flexDirection: 'column',
    flex: 1,
    gap: SPACE.s,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: RADIUS.avatar,
    backgroundColor: COLORS.border,
  },
  content: {
    flex: 1,
  },
});

export default DiaryCard;