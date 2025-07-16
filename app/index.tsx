import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen(): React.JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.headerSection}>
          <Image source={require('../assets/images/myphoto.png')} style={styles.profileImage} />
          <View style={styles.headerText}>
            <Text style={styles.title}>Clara Saiid</Text>
            <Text style={styles.subtitle}>Biomedical Informatics Student</Text>
            <Text style={styles.tagline}>Passionate about AI & Healthcare</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Welcome</Text>
          <Text style={styles.body}>
            Hello! I&apos;m Clara, a dedicated Biomedical Informatics student with a passion 
            for leveraging artificial intelligence to transform healthcare. I specialize 
            in developing innovative solutions that bridge the gap between medical 
            science and technology.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What I Do</Text>
          <View style={styles.highlightsGrid}>
            <View style={styles.highlightCard}>
              <Text style={styles.highlightTitle}>AI in Healthcare</Text>
              <Text style={styles.highlightDescription}>
                Develop machine learning models for medical diagnosis and treatment planning
              </Text>
            </View>
            <View style={styles.highlightCard}>
              <Text style={styles.highlightTitle}>Data Analysis</Text>
              <Text style={styles.highlightDescription}>
                Analyze clinical data to identify patterns and improve patient outcomes
              </Text>
            </View>
            <View style={styles.highlightCard}>
              <Text style={styles.highlightTitle}>Healthcare Systems</Text>
              <Text style={styles.highlightDescription}>
                Build secure and efficient healthcare information management systems
              </Text>
            </View>

          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Current Focus</Text>
          <Text style={styles.body}>
            I'm currently focused on developing AI-powered diagnostic tools and 
            healthcare data management systems. My goal is to create technology 
            solutions that make healthcare more accessible, efficient, and effective 
            for both patients and healthcare providers.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fae8e8',
  },
  content: {
    padding: 20,
    paddingTop: 40,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    alignSelf: 'center',
  },
  
  headerText: {
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    fontFamily: 'Sunborn-SansOne',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: '#ff6b9d',
    fontWeight: '600',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#ff6b9d',
    fontFamily: 'Sunborn-SansOne',
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
  highlightsGrid: {
    gap: 15,
  },
  highlightCard: {
    backgroundColor: '#faf6f5',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  highlightTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  highlightDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555',
  },
  highlightsList: {
    backgroundColor: '#faf6f5',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  highlightItem: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginBottom: 8,
  },
});
