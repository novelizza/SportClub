import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Style from '../stylessheets';
import {useSelector} from 'react-redux';

const {CostStyle} = Style;

function CostDetailPages() {
  const BMIReducer = useSelector(state => state.BMIReducer);
  return (
    <View
      style={
        BMIReducer.data.health === 'Normal'
          ? CostStyle.containerNormal
          : CostStyle.containerNotNormal
      }>
      <ScrollView>
        <Text style={[CostStyle.judulTXT, {alignSelf: 'center'}]}>
          Your Data
        </Text>
        <Text style={CostStyle.judulTXT}>
          Score BMI : {BMIReducer.data.bmi}
        </Text>
        <Text style={CostStyle.judulTXT}>
          Status : {BMIReducer.data.health}
        </Text>
        <Text style={CostStyle.judulTXT}>
          Range Healty from BMI : {BMIReducer.data.healthy_bmi_range}
        </Text>
      </ScrollView>
    </View>
  );
}

export default CostDetailPages;
