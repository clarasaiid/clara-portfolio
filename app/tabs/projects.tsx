import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ProjectsScreen(): React.JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>PROJECTS</Text>
        
        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>AI-Powered Oncology Center System</Text>
          <Text style={styles.projectSubtitle}>Machine Learning • React Native • FastAPI • PostgreSQL</Text>
          <Text style={styles.projectDescription}>
            Developed an intelligent system that helps oncology centers manage their patients and their data. Followed by, 
            integrating this system with a pharmacy interface and a radiology interface to enable interoperability and automation of the worklow.
          </Text>
          <View style={styles.techStack}>
            <Text style={styles.techLabel}>Technologies:</Text>
            <Text style={styles.techList}>Python, React Native, FastAPI</Text>
          </View>
        </View>

        <View style={styles.projectCard}>
          <Text style={styles.projectTitle}>Memoria Social Web & Mobile Application</Text>
          <Text style={styles.projectSubtitle}>React Native • ASP.NET • MYSQL</Text>
          <Text style={styles.projectDescription}>
            Built a social media platform for people with that love nostalgia and want to share their memories with 
            others using manually set time capsules.
          </Text>
          <View style={styles.techStack}>
            <Text style={styles.techLabel}>Technologies:</Text>
            <Text style={styles.techList}>React Native, ASP.NET , MYSQL</Text>
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
  projectCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    fontFamily: 'Sunborn-SansOne',
  },
  projectSubtitle: {
    fontSize: 14,
    color: '#ff6b9d',
    fontWeight: '600',
    marginBottom: 12,
  },
  projectDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555',
    marginBottom: 15,
  },
  techStack: {
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 12,
  },
  techLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 4,
  },
  techList: {
    fontSize: 12,
    color: '#888',
    fontStyle: 'italic',
  },
}); 