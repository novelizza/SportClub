import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Style from '../stylessheets';
import axios from 'axios';
import {faFutbol} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const {HomeStyle} = Style;

function HomePages() {
  const [data, setData] = React.useState([]);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  React.useEffect(() => {
    async function fetchData() {
      await axios
        .get('https://odds.p.rapidapi.com/v1/sports', {
          headers: {
            'x-rapidapi-host': 'odds.p.rapidapi.com',
            'x-rapidapi-key':
              '3a64e43cbbmsh3bb7347d31f0653p1abf3bjsn04469ed3e7e6',
          },
        })
        .then(res => {
          console.log(res.data);
          setData(res.data.data);
        })
        .catch(e => Alert.alert('Gagal!', e));
    }
    fetchData();
  }, []);

  const ListItemNamaCity = dataPassing => {
    return (
      <TouchableOpacity
        style={
          dataPassing.index % 2 === 1
            ? HomeStyle.itemListContainerGanjil
            : HomeStyle.itemListContainerGenap
        }
        onPress={() => {
          dispatch({
            type: 'FILL_DATA',
            inputValue: dataPassing.data,
          });
          navigation.navigate('HomeDetailPage');
        }}>
        <View>
          <FontAwesomeIcon icon={faFutbol} size={20} color="#fff" />
        </View>
        <Text style={HomeStyle.itemListTXT}>{dataPassing.data.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={HomeStyle.container}>
      <View style={HomeStyle.headerContainer}>
        <Image
          source={{
            uri: 'https://bit.ly/39BPh9p',
          }}
          style={HomeStyle.headerImage}
        />
        <Text style={HomeStyle.headerTXT}>Adzra Fatikha - 21120119120032</Text>
        <Text
          style={[HomeStyle.judulTXT, {alignSelf: 'center', color: '#fff'}]}>
          Data NFL, NBA, MLB, EPL, AFL
        </Text>
      </View>
      <ScrollView>
        {data.map((item, i) => {
          return <ListItemNamaCity key={i} data={item} index={i} />;
        })}
      </ScrollView>
    </View>
  );
}

export default HomePages;
