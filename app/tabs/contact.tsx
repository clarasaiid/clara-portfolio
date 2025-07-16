import React from 'react';
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

export default function ContactScreen(): React.JSX.Element {
  const { width } = useWindowDimensions();
  const isMobile = width < 700;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Text style={styles.title}>CONTACT</Text>
      <View style={styles.introSection}>
        <Text style={styles.sectionTitle}>Get in touch</Text>
        <Text style={styles.body}>
          I'm always looking for new opportunities to apply my skills and knowledge. 
          Feel free to reach out if you have any projects or opportunities to discuss! :)
        </Text>
      </View>
      <View style={[styles.row, isMobile && styles.column]}>
        {/* Left: Contact Info */}
        <View style={[styles.leftBox, isMobile && styles.fullWidthBox]}>
          <View style={styles.contactCard}>
            <Text style={styles.cardTitle}>Contact Information</Text>
            <View style={styles.contactItemRow}>
              <View style={styles.contactItemLabelCol}>
                <Text style={styles.contactLabel}>Email:</Text>
                <Text style={styles.contactLabel}>Location:</Text>
                <Text style={styles.contactLabel}>Response Time:</Text>
              </View>
              <View style={styles.contactItemValueCol}>
                <Text style={styles.contactText}>clara.fahim@hotmail.com</Text>
                <Text style={styles.contactText}>Cairo, Egypt</Text>
                <Text style={styles.contactText}>Within 24 hours</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Right: LinkedIn and GitHub */}
        <View style={[styles.rightBox, isMobile && styles.fullWidthBox]}>
          <View style={styles.profileCard}>
            <Text style={styles.profileTitle}>LinkedIn</Text>
            <Text style={styles.profileSubtitle}>Professional Network</Text>
            <Text style={styles.profileDescription}>
              Connect with me on LinkedIn to stay updated on my professional journey.
            </Text>
          </View>
          <View style={styles.profileCard}>
            <Text style={styles.profileTitle}>GitHub</Text>
            <Text style={styles.profileSubtitle}>Code Repository</Text>
            <Text style={styles.profileDescription}>
              Explore my open-source projects, contributions, and code samples.
            </Text>
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
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  introSection: {
    alignItems: 'center',
    marginBottom: 32,
    maxWidth: 700,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    gap: 32,
    width: '100%',
    maxWidth: 1100,
  },
  column: {
    flexDirection: 'column',
    gap: 24,
  },
  leftBox: {
    flex: 1,
    backgroundColor: '#fbeaec',
    borderRadius: 18,
    padding: 32,
    minWidth: 320,
    maxWidth: 500,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  rightBox: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 24,
    alignSelf: 'stretch',
  },
  fullWidthBox: {
    width: '100%',
    maxWidth: '100%',
    marginBottom: 24,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 32,
    marginTop: 16,
    color: '#333',
    fontFamily: 'Sunborn-SansOne',
    letterSpacing: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 22,
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
  contactCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    marginBottom: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 18,
    fontFamily: 'Sunborn-SansOne',
  },
  contactItemRow: {
    flexDirection: 'row',
    gap: 16,
  },
  contactItemLabelCol: {
    flex: 1,
    gap: 12,
  },
  contactItemValueCol: {
    flex: 2,
    gap: 12,
    alignItems: 'flex-end',
  },
  contactLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 0,
    fontFamily: 'Sunborn-SansOne',
  },
  contactText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 0,
  },
  contactLink: {
    fontSize: 16,
    color: '#ff6b9d',
    textDecorationLine: 'underline',
    marginBottom: 0,
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 1,
  },
  profileTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    fontFamily: 'Sunborn-SansOne',
  },
  profileSubtitle: {
    fontSize: 14,
    color: '#ff6b9d',
    fontWeight: '600',
    marginBottom: 10,
  },
  profileDescription: {
    fontSize: 14,
    lineHeight: 20,
    color: '#555',
  },
}); 