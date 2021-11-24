import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#f1c40f',
    borderBottomLeftRadius: 60,
    alignItems: 'center',
    paddingBottom: 10,
  },
  headerImage: {
    height: 120,
    width: 100,
  },
  headerTXT: {
    color: '#fff',
    fontWeight: 'bold',
  },
  touchableContainer: {
    backgroundColor: '#f1c40f',
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  touchableTXT: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 5,
  },
  judulTXT: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 10,
  },
  textInput: {
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 5,
  },
  itemListContainerGanjil: {
    backgroundColor: '#1aa',
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  itemListContainerGenap: {
    backgroundColor: '#1a0',
    marginVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  itemListTXT: {
    color: '#ecf0f1',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 17,
  },
});
