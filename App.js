import { Text, SafeAreaView, StyleSheet, FlatList, Image, Dimensions, View, ImageBackground} from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground source={require('./assets/fundao.jpg')}>
    <Text style = {styles.title1}>
    Armas de Mo dao Zu Shi
    </Text>
    
      <FlatList
      data={arrayArmas}
      renderItem={({item}) =>
      <View style={styles.containerFlat}>
      <View style={styles.cont}>
      <Image source={item.image} style={styles.img} resizeMode="cover"/>
      <Text style={styles.title}>{item.nome}
      {'\n'}{item.nome2}{'\n'}{item.nome3}
      </Text>
       </View>
      </View>
      }
      />
      </ImageBackground>
    </SafeAreaView>
  );
}

const largura = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
  },
  containerFlat: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    marginTop: 45,
  },
   title1:{
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    flexWrap: 'wrap',
    left: -8,
    marginTop:150
  },
  title:{
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    flexWrap: 'wrap',
    left: 10,
    marginTop: 12
  },
  cont:{
    marginTop: 2,
    width: 'auto',
    height: 180,
    backgroundColor: '#3A5FCD',
    borderRadius: 25,
    textAlign: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 5},
    shadowOpacity: 0.7,
    elevation: 12,
    borderWidth:4,
    borderColor:'#ADD8E6'
  },
  bigTitle:{
    fontSize: 42,
    textAlign: 'center',
    color: '#ffff',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    },
  img:{
    width: 170,
    height: 130,
    borderRadius: 15,
    borderWidth: 4,
    borderColor:'#ADD8E6'

    },
  back:{
    height: 310,
    justifyContent: 'flex-end',
    },
});

const arrayArmas = [
  {
    nome: "BICHEN",
    nome2: "Usuário: Lan Wangji",
    image: require('./assets/bichen.webp'),
  },
  {
    nome: "SUIBIAN",
    nome2: "Usuário: Wei Wuxian",
    image: require('./assets/Suibian.webp'),
  },
  {   
    nome: "SANDU",
    nome2: "Usuário: Jiang Cheng",
    image: require('./assets/Sandu.webp'),
  },
  {
    nome: "SUIHUA",
    nome2: "Usuários:Jin Ling",
    image: require('./assets/Suihua.webp'),
  },
  {
    nome: "Jiangzai",
    nome2: "Usuário: Xue Yang",
    image: require('./assets/jiangzai.jpg'),
  },
  {
    nome: "SHUANGHUA",
    nome2: "Usuário:  Xingchen",
    image: require('./assets/shuanghua.jpg'),
  },
  {
    nome: "SHUOYUE",
    nome2: "Usuário: Lan Xichen",
    image: require('./assets/Shuoyue.webp'),
  },
  {
    nome: "FUXUE",
    nome2: "Usuário: Song Lan",
    image: require('./assets/Fuxue.webp'),
  },
  {
    nome: "HENSHENG",
    nome2: "Usuário: Guangyao",
    image: require('./assets/Hensheng.webp'),
  },
  {
    nome: "BAXIA",
    nome2: " Usuário: Nie Mingjue",
    image: require('./assets/Baxia.webp'),
  },

];