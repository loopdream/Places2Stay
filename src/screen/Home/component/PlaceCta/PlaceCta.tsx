import React, { FC } from 'react';
import {
  Image,
  ImageProps,
  View,
  View as ImageWrapper,
  View as ImageLabel,
  ViewStyle,
} from 'react-native';

import {
  Text as PlaceText,
  Text as LocationText,
  Text as ImageLabelText,
} from 'components/base/Text';

import STYLES from './PlaceCta.styles';

interface PlaceCtaProps {
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

export type { PlaceCtaProps };
export default PlaceCta;
