interface stayDataProps {
  title: string;
  location: string;
  dates: string;
  image: { uri: string };
  details: {
    title: string;
    items: {
      itemLabel: string;
      itemDetail: string;
    }[];
  }[];
}

const STAY_MOCK_DATA: stayDataProps = {
  title: '408 St. Jacques | Room #208',
  location: 'Old Montreal, Montreal',
  dates: 'Oct.29, 2021 - Oct.31, 2021',
  image: {
    uri: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=800',
  },
  details: [
    {
      title: 'Access codes',
      items: [
        {
          itemLabel: 'building',
          itemDetail: '7853',
        },
        {
          itemLabel: 'apartment',
          itemDetail: '7863',
        },
      ],
    },
    {
      title: 'Wifi',
      items: [
        {
          itemLabel: 'Name',
          itemDetail: '408Jacques',
        },
        {
          itemLabel: 'Password',
          itemDetail: 'places2stay',
        },
      ],
    },
  ],
};

export type { stayDataProps };
export default STAY_MOCK_DATA;
