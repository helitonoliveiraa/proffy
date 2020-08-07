import { StyleSheet } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40,
  },

  banner: {
    width: '100%',
    resizeMode: 'contain',
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#fff',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    height: 150,
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
  },

  buttonPrimary: {
    backgroundColor: '#9878f5',
  },

  buttonSecondary: {
    backgroundColor: '#04d362',
  },

  buttonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
  },

  totalConnections: {
    color: '#D4C2FF',
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 134,
    marginTop: 40,
  },
});

export default styles;
