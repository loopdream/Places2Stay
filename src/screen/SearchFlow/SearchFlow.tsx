import React, { FC } from 'react';
import { View as SearchFlowView } from 'react-native';
import ToggleSwitch from 'components/ToggleSwitch';
import { Text, Text as SearchFlowHeading } from 'components/base/Text';

import STYLES from './SearchFlow.styles';

type SearchFlowProps = {};

const SearchFlow: FC<SearchFlowProps> = ({ route, navigation }) => {
  const { city } = route.params;
  console.log({ city });

  return (
    <SearchFlowView style={STYLES.container}>
      <SearchFlowHeading style={STYLES.heading}>
        What are you looking for?
      </SearchFlowHeading>
      <Text style={STYLES.panel}>{city.name}</Text>
      <ToggleSwitch
        items={[
          { label: 'Calendar', action: () => {} },
          { label: "I'm Flexible", action: () => {} },
        ]}
      />
    </SearchFlowView>
  );
};

export type { SearchFlowProps };
export default SearchFlow;
