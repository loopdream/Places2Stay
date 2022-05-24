interface searchMockDataCityProps {
  key: number;
  name: string;
}
interface searchMockDataProps {
  cities: searchMockDataCityProps[];
}

const SEARCH_MOCK_DATA: searchMockDataProps = {
  cities: [
    { key: 1, name: 'Toronto' },
    { key: 2, name: 'Boston' },
    { key: 3, name: 'Montreal' },
    { key: 4, name: 'Vancouver' },
    { key: 5, name: 'Calgary' },
    { key: 6, name: 'Quebec' },
  ],
};

export type { searchMockDataProps, searchMockDataCityProps };
export default SEARCH_MOCK_DATA;
