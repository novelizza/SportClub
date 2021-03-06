import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Style from '../stylessheets';
import axios from 'axios';

const {ProfileStyle} = Style;

function ProfilePages() {
  const [data, setData] = React.useState('');

  React.useEffect(() => {
    async function fetchData() {
      await axios
        .get('https://api.github.com/users/Adzraftkha')
        .then(res => setData(res.data))
        .catch(e => Alert.alert('Gagal!', e));
    }
    fetchData();
  }, []);

  return (
    <View style={ProfileStyle.container}>
      <View style={ProfileStyle.headerContainer}>
        <Image
          source={{
            uri: data.avatar_url,
          }}
          style={ProfileStyle.headerImage}
        />
        <Text style={ProfileStyle.headerTXT}>{data.name}</Text>
        <Text style={ProfileStyle.headerTXT}>{data.location}</Text>
        <Text style={[ProfileStyle.headerTXT, {textAlign: 'center'}]}>
          {data.bio}
        </Text>
        <View style={ProfileStyle.followerContainer}>
          <Text style={ProfileStyle.headerTXTDesc}>
            {data.public_repos + ' Repository'}
          </Text>
          <Text style={ProfileStyle.headerTXTDesc}> | </Text>
          <Text style={ProfileStyle.headerTXTDesc}>
            {data.followers + ' Followers'}
          </Text>
          <Text style={ProfileStyle.headerTXTDesc}> | </Text>
          <Text style={ProfileStyle.headerTXTDesc}>
            {data.following + ' Following'}
          </Text>
        </View>
        <TouchableOpacity
          style={ProfileStyle.touchableContainer}
          onPress={() =>
            Linking.openURL('https://api.github.com/users/afifahumaira')
          }>
          <Text style={ProfileStyle.touchableTXT}>Lihat Saya di Github</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProfilePages;
