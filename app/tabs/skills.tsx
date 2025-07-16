import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function SkillsScreen(): React.JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>SKILLS</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Programming Languages</Text>
          <View style={styles.toolsGrid}>
            <View style={styles.toolChip}>Python</View>
            <View style={styles.toolChip}>C#</View>
            <View style={styles.toolChip}>C++</View>
            <View style={styles.toolChip}>React</View>
            <View style={styles.toolChip}>React Native</View>
            <View style={styles.toolChip}>Java</View>
            <View style={styles.toolChip}>MongoDB</View>
            <View style={styles.toolChip}>SQL</View>
            <View style={styles.toolChip}>JavaScript</View>
            <View style={styles.toolChip}>.NET</View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Machine Learning & AI</Text>

          <View style={styles.toolsGrid}>
            <View style={styles.toolChip}>Tensorflow</View>
            <View style={styles.toolChip}>Pytorch</View>
            <View style={styles.toolChip}>NLP</View>
            <View style={styles.toolChip}>Computer Vision</View>
            <View style={styles.toolChip}>LLMs</View>
            <View style={styles.toolChip}>R</View>
          </View>
          <View style={styles.toolsGrid}>
            <View style={styles.toolChip}>Python</View>
            <View style={styles.toolChip}>C#</View>
            <View style={styles.toolChip}>C++</View>
            <View style={styles.toolChip}>React</View>
            <View style={styles.toolChip}>React Native</View>
            <View style={styles.toolChip}>Java</View>
            <View style={styles.toolChip}>MongoDB</View>
            <View style={styles.toolChip}>SQL</View>
            <View style={styles.toolChip}>JavaScript</View>
            <View style={styles.toolChip}>.NET</View>
          </View>
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
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ff6b9d',
    fontFamily: 'Sunborn-SansOne',
  },
  skillsGrid: {
    marginBottom: 10,
  },
  skillItem: {
    marginBottom: 15,
  },
  skillName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
    fontFamily: 'Sunborn-SansOne',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#ff6b9d',
    borderRadius: 4,
  },
  toolsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  toolChip: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ff6b9d',
    marginBottom: 8,
  },
}); 