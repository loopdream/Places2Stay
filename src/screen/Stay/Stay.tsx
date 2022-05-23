import React, { FC, useEffect, useState } from 'react';
import { ScrollView, Image, SafeAreaView, StyleSheet } from 'react-native';

import {
  Text as Title,
  Text as Location,
  Text as Dates,
} from 'components/base/Text';
import StayDetail from './component/StayDetail/StayDetail';
import STAY_MOCK_DATA, { stayDataProps } from './stayMockData';

const Stay: FC = () => {
  const [data, setData] = useState({} as stayDataProps);

  useEffect(() => {
    setData(STAY_MOCK_DATA);
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Image style={styles.image} source={data.image} />
        <Title
        //styles={styles.place}>
        >
          {data.title}
        </Title>
        <Location
        //styles={styles.place}
        >
          {data.location}
        </Location>
        <Dates
        //styles={styles.place}
        >
          {data.dates}
        </Dates>

        {data.details?.map((detail, i) => (
          <StayDetail key={i} {...detail} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 220,
    width: '100%',
    borderBottomRightRadius: 20,
  },
});

export default Stay;
