import React, { useContext } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Linking,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { DarkModeContext } from '../App';

// TODO: Replace with your actual hosted Privacy Policy URL
export const PRIVACY_POLICY_URL = 'https://YOUR_WEBSITE.com/privacy-policy';

export default function PrivacyPolicyScreen({ navigation }: any) {
  const { darkMode } = useContext(DarkModeContext);

  const gradientColors = darkMode
    ? ['#0f0c29', '#302b63', '#24243e']
    : ['#f8fafc', '#e2e8f0'];
  const textColor = darkMode ? '#fff' : '#222';
  const subTextColor = darkMode ? 'rgba(255,255,255,0.8)' : '#444';
  const sectionBg = darkMode ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.05)';

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <LinearGradient colors={gradientColors} style={styles.container}>
        <Text style={[styles.title, { color: textColor }]}>🔒 Privacy Policy</Text>
        <Text style={[styles.lastUpdated, { color: subTextColor }]}>
          Last updated: May 2026
        </Text>

        <ScrollView
          style={{ flex: 1, width: '100%' }}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Section bg={sectionBg}>
            <SectionTitle color={textColor}>Introduction</SectionTitle>
            <Body color={subTextColor}>
              Welcome to Dice &amp; Coin ("we", "our", "us"). This Privacy Policy explains how we
              collect, use, and protect information when you use our mobile application.
            </Body>
          </Section>

          <Section bg={sectionBg}>
            <SectionTitle color={textColor}>Information We Collect</SectionTitle>
            <Body color={subTextColor}>
              We do not directly collect personal information. However, our advertising partner
              Google AdMob may collect the following data to serve ads:
            </Body>
            <BulletList color={subTextColor} items={[
              'Device identifiers (Advertising ID)',
              'IP address and approximate location',
              'Usage data and interaction with ads',
              'Device type, OS version, and language settings',
              'Cookies and similar tracking technologies',
            ]} />
          </Section>

          <Section bg={sectionBg}>
            <SectionTitle color={textColor}>How We Use Information</SectionTitle>
            <Body color={subTextColor}>
              Information collected via Google AdMob is used to:
            </Body>
            <BulletList color={subTextColor} items={[
              'Display personalized or non-personalized advertisements',
              'Measure ad performance and prevent fraud',
              'Comply with legal obligations',
            ]} />
          </Section>

          <Section bg={sectionBg}>
            <SectionTitle color={textColor}>Google AdMob & Advertising</SectionTitle>
            <Body color={subTextColor}>
              This app uses Google AdMob to display advertisements. Google may use your
              device&apos;s advertising ID to serve personalized ads based on your interests.
              You can opt out of personalized ads at any time through your device settings
              (Settings → Privacy → Ads on Android).
            </Body>
            <Body color={subTextColor}>
              For more information on how Google uses data, please visit:
            </Body>
            <TouchableOpacity onPress={() => Linking.openURL('https://policies.google.com/privacy')}>
              <Text style={[styles.link]}>Google Privacy Policy →</Text>
            </TouchableOpacity>
          </Section>

          <Section bg={sectionBg}>
            <SectionTitle color={textColor}>Your Consent (GDPR / EEA Users)</SectionTitle>
            <Body color={subTextColor}>
              If you are located in the European Economic Area (EEA) or the United Kingdom,
              we request your consent before showing personalized advertisements, in compliance
              with the General Data Protection Regulation (GDPR).
            </Body>
            <Body color={subTextColor}>
              You may withdraw or update your consent at any time via the &quot;Privacy
              Settings&quot; option in the app&apos;s Settings screen.
            </Body>
          </Section>

          <Section bg={sectionBg}>
            <SectionTitle color={textColor}>California Users (CCPA)</SectionTitle>
            <Body color={subTextColor}>
              If you are a California resident, you have the right to opt out of the sale of
              your personal information. We do not sell personal information. To limit data
              sharing for advertising purposes, you can opt out of personalized ads in your
              device settings.
            </Body>
          </Section>

          <Section bg={sectionBg}>
            <SectionTitle color={textColor}>Data Retention</SectionTitle>
            <Body color={subTextColor}>
              We do not store any personal data on our servers. App preferences (sound,
              vibration, dark mode) are stored locally on your device only and are deleted
              when you uninstall the app.
            </Body>
          </Section>

          <Section bg={sectionBg}>
            <SectionTitle color={textColor}>Children&apos;s Privacy</SectionTitle>
            <Body color={subTextColor}>
              This app is not directed to children under the age of 13. We do not knowingly
              collect personal information from children. If you believe a child has provided
              personal information, please contact us so we can remove it.
            </Body>
          </Section>

          <Section bg={sectionBg}>
            <SectionTitle color={textColor}>Your Rights</SectionTitle>
            <Body color={subTextColor}>
              Depending on your location, you may have the right to access, correct, or delete
              data associated with you. Since we do not store personal data directly, most
              requests should be directed to Google. You may also:
            </Body>
            <BulletList color={subTextColor} items={[
              'Opt out of personalized ads in device settings',
              'Reset your advertising ID',
              'Disable ad tracking entirely on your device',
            ]} />
          </Section>

          <Section bg={sectionBg}>
            <SectionTitle color={textColor}>Contact Us</SectionTitle>
            <Body color={subTextColor}>
              If you have questions about this Privacy Policy, please contact us at:
            </Body>
            {/* TODO: Replace with your actual contact email */}
            <TouchableOpacity onPress={() => Linking.openURL('mailto:YOUR_EMAIL@example.com')}>
              <Text style={styles.link}>YOUR_EMAIL@example.com</Text>
            </TouchableOpacity>
          </Section>

          <Section bg={sectionBg}>
            <SectionTitle color={textColor}>Changes to This Policy</SectionTitle>
            <Body color={subTextColor}>
              We may update this Privacy Policy from time to time. We will notify you of
              significant changes by updating the date at the top of this page.
            </Body>
          </Section>

          <TouchableOpacity
            style={styles.webButton}
            onPress={() => Linking.openURL(PRIVACY_POLICY_URL)}
          >
            <Text style={styles.webButtonText}>View Full Policy on Web →</Text>
          </TouchableOpacity>
        </ScrollView>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function Section({ children, bg }: { children: React.ReactNode; bg: string }) {
  return (
    <View style={[styles.section, { backgroundColor: bg }]}>{children}</View>
  );
}

function SectionTitle({ children, color }: { children: React.ReactNode; color: string }) {
  return <Text style={[styles.sectionTitle, { color }]}>{children}</Text>;
}

function Body({ children, color }: { children: React.ReactNode; color: string }) {
  return <Text style={[styles.body, { color }]}>{children}</Text>;
}

function BulletList({ items, color }: { items: string[]; color: string }) {
  return (
    <View style={{ marginTop: 4 }}>
      {items.map((item, i) => (
        <Text key={i} style={[styles.bullet, { color }]}>
          {'• '}{item}
        </Text>
      ))}
    </View>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 4,
  },
  lastUpdated: {
    fontSize: 13,
    marginBottom: 16,
  },
  scrollContent: {
    paddingBottom: 24,
    gap: 12,
  },
  section: {
    borderRadius: 12,
    padding: 14,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 6,
  },
  bullet: {
    fontSize: 14,
    lineHeight: 22,
    paddingLeft: 4,
  },
  link: {
    color: '#00c6ff',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginTop: 4,
  },
  webButton: {
    backgroundColor: 'rgba(0,198,255,0.15)',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00c6ff',
    marginTop: 8,
  },
  webButtonText: {
    color: '#00c6ff',
    fontSize: 14,
    fontWeight: '600',
  },
  backButton: {
    marginTop: 12,
    marginBottom: 8,
    backgroundColor: '#00c6ff',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 12,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
