import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ExperienceScreen(): React.JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>EXPERIENCE</Text>
        
        <View style={styles.timeline}>
          <View style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <View style={styles.timelineContent}>
              <Text style={styles.timelineDate}>September 2023</Text>
              <Text style={styles.timelineTitle}>Backend Developer Intern</Text>
              <Text style={styles.timelineSubtitle}>Hassan Allam Holding</Text>
              <Text style={styles.timelineDescription}>
              •	Built a solid foundation in backend development concepts and database management principles. 
              </Text>
            </View>
          </View>

          <View style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <View style={styles.timelineContent}>
              <Text style={styles.timelineDate}>September 2024</Text>
              <Text style={styles.timelineTitle}>Web Developer Intern</Text>
              <Text style={styles.timelineSubtitle}>Hassan Allam Holding</Text>
              <Text style={styles.timelineDescription}>
              Studied and implemented key practices for developing secure and scalable Web APIs in ASP.NET.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.timeline}>
          <View style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <View style={styles.timelineContent}>
              <Text style={styles.timelineDate}>July 2023</Text>
              <Text style={styles.timelineTitle}>Cybersecurity Intern</Text>
              <Text style={styles.timelineSubtitle}>Orascom Construction</Text>
              <Text style={styles.timelineDescription}>
              Analyzed and applied methods for optimizing network traffic, 
              including subnetting and segmentation techniques to improve network performance and security. 
              </Text>
            </View>
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
  timeline: {
    marginBottom: 30,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ff6b9d',
    marginTop: 8,
    marginRight: 15,
  },
  timelineContent: {
    flex: 1,
  },
  timelineDate: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ff6b9d',
    marginBottom: 5,
  },
  timelineTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 3,
    fontFamily: 'Sunborn-SansOne',
  },
  timelineSubtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  timelineDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555',
  },
  section: {
    marginTop: 20,
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
}); 