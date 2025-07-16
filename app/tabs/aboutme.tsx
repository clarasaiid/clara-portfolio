import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function AboutMeScreen(): React.JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>ABOUT ME</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Background</Text>
          <Text style={styles.body}>
           Hello!! I'm Clara, I'm a Biomedical Informatics student with a strong interest in backend development 
           and machine learning. I enjoy building systems that are efficient, practical,
          and solve real world problems especially in healthcare and other fields where technology can have a real impact.
          I believe in using code to create tools that are not just functional, but meaningful by combining smart systems with 
          thoughtful design to make people's lives easier.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <Text style={styles.body}>
            Currently pursuing my degree in Biomedical Informatics, where I'm 
            learning to bridge the gap between medical science and computational 
            technology.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Interests</Text>
          <Text style={styles.body}>
            • Artificial Intelligence in Healthcare{'\n'}
            • Medical Data Analysis{'\n'}
            • Healthcare Information Systems{'\n'}
            • Machine Learning Applications{'\n'}
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
    fontFamily: 'Sunborn-SansOne',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ff6b9d',
    fontFamily: 'Sunborn-SansOne',
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
}); 