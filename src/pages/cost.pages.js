import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Style from '../stylessheets';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const {CostStyle} = Style;

function CostPages() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [data, setData] = React.useState({
    age: '',
    weight: '',
    height: '',
  });

  async function fetchData() {
    if (data.age !== '' && data.weight !== '' && data.height !== '') {
      await axios
        .get('https://fitness-calculator.p.rapidapi.com/bmi', {
          params: {age: data.age, weight: data.weight, height: data.height},
          headers: {
            'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com',
            'x-rapidapi-key':
              '3a64e43cbbmsh3bb7347d31f0653p1abf3bjsn04469ed3e7e6',
          },
        })
        .then(res => {
          console.log(res.data.data);
          dispatch({
            type: 'FILL_BMI',
            inputValue: res.data.data,
          });
          navigation.navigate('CostDetailPage');
        })
        .catch(e => Alert.alert('Gagal!', e));
    } else {
      Alert.alert('Warning!', 'Di isi dulu kolom diatas');
    }
  }

  return (
    <View style={CostStyle.container}>
      <View style={CostStyle.headerContainer}>
        <Image
          source={{
            uri: 'https://bit.ly/39BPh9p',
          }}
          style={CostStyle.headerImage}
        />
        <Text style={CostStyle.headerTXT}>Adzra Fatikha - 21120119120032</Text>
        <Text
          style={[CostStyle.judulTXT, {alignSelf: 'center', color: '#fff'}]}>
          Cek Seberapa Ideal Berat Badan Anda!
        </Text>
      </View>
      <Text style={CostStyle.judulTXT}>Age :</Text>
      <TextInput
        style={CostStyle.textInput}
        placeholder="Age"
        onChangeText={value =>
          setData({
            ...data,
            ['age']: value,
          })
        }
        keyboardType="numeric"
      />
      <Text style={CostStyle.judulTXT}>Weight :</Text>
      <TextInput
        style={CostStyle.textInput}
        placeholder="Weight"
        onChangeText={value =>
          setData({
            ...data,
            ['weight']: value,
          })
        }
        keyboardType="numeric"
      />
      <Text style={CostStyle.judulTXT}>Height :</Text>
      <TextInput
        style={CostStyle.textInput}
        placeholder="Height"
        onChangeText={value =>
          setData({
            ...data,
            ['height']: value,
          })
        }
        keyboardType="numeric"
      />
      <TouchableOpacity
        onPress={() => {
          fetchData();
        }}
        style={CostStyle.touchableContainer}>
        <Text style={CostStyle.touchableTXT}>Check!</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CostPages;
