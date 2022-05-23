import { StyleSheet } from 'react-native';
import { COLORS } from 'globals';

const STYLES = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  imageWrapper: {
    width: '100%',
    height: 160,
    flex: 1,
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'relative',
    resizeMode: 'cover',
  },
  imageLabel: {
    backgroundColor: COLORS.orange,
    borderBottomLeftRadius: 8,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 16,
    paddingVertical: 10,
  },
  imageLabelText: {
    backgroundColor: COLORS.orange,
    color: COLORS.black,
    fontSize: 12,
    fontWeight: '400',
  },
  place: {
    color: COLORS.black,
    marginTop: 16,
  },
  location: {
    marginTop: 6,
    color: COLORS.grey,
    fontSize: 12,
    fontWeight: '400',
  },
});

export default STYLES;
