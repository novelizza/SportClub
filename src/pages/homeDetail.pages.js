import React from 'react';
import {View, Text} from 'react-native';
import Style from '../stylessheets';
import {useSelector} from 'react-redux';

const {HomeStyle} = Style;

function HomeDetailPages() {
  const FutballReducer = useSelector(state => state.FutballReducer);
  return (
    <View style={HomeStyle.container}>
      <View>
        <Text style={[HomeStyle.judulTXT, {alignSelf: 'center'}]}>
          Data Detail
        </Text>
        <Text style={HomeStyle.itemListTXT}>
          {'Judul : ' + FutballReducer.data.title}
        </Text>
        <Text style={HomeStyle.itemListTXT}>
          {'Group : ' + FutballReducer.data.group}
        </Text>
        <Text style={HomeStyle.itemListTXT}>
          {'Details : ' + FutballReducer.data.details}
        </Text>
        <View style={HomeStyle.blank} />
      </View>
    </View>
  );
}

export default HomeDetailPages;
