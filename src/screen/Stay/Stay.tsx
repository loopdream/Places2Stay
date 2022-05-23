import React, { FC, useEffect, useState } from 'react';
import { ScrollView, Image, SafeAreaView } from 'react-native';

import {
  Text as TitleText,
  Text as LocationText,
  Text as DatesText,
} from 'components/base/Text';
import StayDetail from './component/StayDetail';
import STAY_MOCK_DATA, { stayDataProps } from './stayMockData';
import STYLES from './Stay.styles';

const Stay: FC = () => {
  const [data, setData] = useState({} as stayDataProps);

  useEffect(() => {
    setData(STAY_MOCK_DATA);
  }, []);

  return (
    <SafeAreaView style={STYLES.container}>
      <ScrollView>
        <Image style={STYLES.image} source={data.image} />
        <TitleText style={[STYLES.margins, STYLES.titleText]}>
          {data.title}
        </TitleText>
        <LocationText style={[STYLES.margins, STYLES.subTitleText]}>
          {data.location}
        </LocationText>
        <DatesText style={[STYLES.margins, STYLES.subTitleText]}>
          {data.dates}
        </DatesText>
        {data.details?.map(detail => (
          <StayDetail key={detail.title} {...detail} style={STYLES.margins} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Stay;
