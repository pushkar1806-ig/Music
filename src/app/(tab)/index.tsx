// app/(tabs)/index.tsx
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerTitle}>Good evening</Text>
        {/* Placeholder for Recent Playlists, Recommendations, etc. */}
        <View style={styles.sectionPlaceholder}>
          <Text style={styles.placeholderText}>Featured Playlists & Tracks will go here</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollContent: {
    padding: 16,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionPlaceholder: {
    height: 200,
    backgroundColor: '#181818',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  placeholderText: {
    color: '#888888',
    fontSize: 14,
  },
});