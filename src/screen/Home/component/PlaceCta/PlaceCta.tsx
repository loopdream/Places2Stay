import React, { FC } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import {
  Text as Title,
  Text as Location,
  Text as ImageLabel,
} from 'components/base/Text';

export type Props = {
  title: string;
  location: string;
  imageSrc: string;
  imageLabel?: string;
};

const PlaceCta: FC<Props> = ({ imageLabel, imageSrc, title, location }) => (
  <View style={styles.view}>
    <Image style={styles.image} source={imageSrc} />
    <Title styles={styles.title}>{title}</Title>
    <Location styles={styles.title}>{location}</Location>
    <View style={styles.imageLabelView}>
      <ImageLabel styles={styles.title}>{imageLabel}</ImageLabel>
    </View>
  </View>
);

const styles = StyleSheet.create({
  view: {},
  image: {},
  imageLabel: {},
  imageLabelView: {},
  title: {},
  location: {},
});

export default PlaceCta;
