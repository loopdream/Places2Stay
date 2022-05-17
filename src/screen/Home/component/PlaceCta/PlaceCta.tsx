import React, { FC } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { Text as Title } from '../../../../components/base/Text';
import { Text as Location } from '../../../../components/base/Text';

export type Props = {
  title: string;
  location: string;
  image: string;
};

const PlaceCta: FC<Props> = ({ image, title, location }) => {
  return (
    <View>
      <Image src={image} />
      <Title>{title}</Title>
      <Location>{location}</Location>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {},
  image: {},
  title: {},
  location: {},
});

export default PlaceCta;
