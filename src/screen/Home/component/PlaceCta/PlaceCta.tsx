import React, { FC } from 'react';
import {
  View,
  View as ImageWrapper,
  View as ImageLabel,
  Image,
  StyleSheet,
  ImageProps,
  ViewStyle,
} from 'react-native';

import {
  Text as PlaceText,
  Text as LocationText,
  Text as ImageLabelText,
} from 'components/base/Text';

import { COLORS } from 'globals';

export interface PlaceCtaProps {
  place: string;
  location?: string;
  image: ImageProps['source'];
  imageLabel?: string;
  style?: ViewStyle | ViewStyle[];
}

const PlaceCta: FC<PlaceCtaProps> = ({
  imageLabel,
  image,
  place,
  location,
  style,
}) => (
  <View style={[STYLES.container, style]}>
    <ImageWrapper style={STYLES.imageWrapper}>
      <Image style={STYLES.image} source={image} />
      {imageLabel && (
        <ImageLabel style={STYLES.imageLabel}>
          <ImageLabelText style={STYLES.imageLabelText}>
            {imageLabel}
          </ImageLabelText>
        </ImageLabel>
      )}
    </ImageWrapper>
    <PlaceText style={STYLES.place}>{place}</PlaceText>
    {location && (
      <LocationText style={STYLES.location}>{location}</LocationText>
    )}
  </View>
);

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

export default PlaceCta;
