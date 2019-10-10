import React,{ Component } from 'react';
import { Platform, StatusBar, StyleSheet, View, ScrollView, Text,Image } from 'react-native';
import { Card, CardItem, Thumbnail, Body,Button, Left, Right, Icon, Center } from 'native-base';

import { Ionicons } from '@expo/vector-icons';

import { Video } from 'expo-av';
import Videos from 'react-native-video';
import Videoplayer from 'react-native-video-controls';

export default function App() {

  return (
    <View style={{ flex: 1 }}>
          <Card>
            <CardItem>
              <Button transparent style={{ flex: 1 }}>
                <Ionicons name="md-camera" style={{ fontSize: 25, top: 10 }} />
              </Button>
              <View
                style={{
                  right: 70,
                  top: 10,
                }}>
                <Image
                  source={{
                    uri:
                      'http://www.multiplicalia.com/wp-content/uploads/2016/01/Instagram-logo-4.jpg',
                  }}
                  style={{ height: 50, width: 150 }}
                />
              </View>
              <Button transparent style={{ top: 10 }}>
                <Image
                  source={{
                    uri: 'https://static.thenounproject.com/png/230502-200.png',
                  }}
                  style={{ height: 30, width: 30 }}
                />
              </Button>
            </CardItem>
          </Card>
          <ScrollView>
            <ScrollView horizontal={true}>
              <Card>
                <CardItem cardBody>
                  <Left style={{ height: 80, width: null, flex: 1 }}>
                    <View style={styles.imagecontainer}>
                      <Image
                        source={{
                          uri:
                            'https://media.metrolatam.com/2019/08/08/arianagrande-7fea337ddd7a8edaab1d1439804cde6a-900x600.jpg',
                        }}
                        style={styles.imagehisto}
                      />
                    </View>
                    <View style={styles.imagecontainer}>
                      <Image
                        source={{
                          uri:
                            'http://www.wallpaperk.com/wallpapers/resoluciones/17/lionel-messi-hd_1280x800_7829.jpg',
                        }}
                        style={styles.imagehisto}
                      />
                    </View>
                    <View style={styles.imagecontainer}>
                      <Image
                        source={{
                          uri:
                            'https://www.tuexperto.com/wp-content/uploads/2017/06/fondos_de_pantalla_HD_gratis_para_movil_galeria_famosos_03.jpg',
                        }}
                        style={styles.imagehisto}
                      />
                    </View>
                    <View style={styles.imagecontainer}>
                      <Image
                        source={{
                          uri:
                            'https://i.ytimg.com/vi/wOLOAKoTNzs/hqdefault.jpg',
                        }}
                        style={styles.imagehisto}
                      />
                    </View>
                    <View style={styles.imagecontainer}>
                      <Image
                        source={{
                          uri:
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAA5ELkgJ1FnS9xM10nus0PVqhruYwbRdQgaFr3S6fQaTVzhrFbQ',
                        }}
                        style={styles.imagehisto}
                      />
                    </View>
                    <View style={styles.imagecontainer}>
                      <Image
                        source={{
                          uri:
                            'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12130118/Golden-Retriever-Standing1.jpg',
                        }}
                        style={styles.imagehisto}
                      />
                    </View>
                  </Left>
                </CardItem>
              </Card>
            </ScrollView>
            <Card>
              <CardItem>
                <View style={{ height: 40, width: 50, borderRadius: 64 }}>
                  <Image
                    source={{
                      uri:
                        'https://media.metrolatam.com/2019/08/08/arianagrande-7fea337ddd7a8edaab1d1439804cde6a-900x600.jpg',
                    }}
                    style={styles.imageperfil}
                  />
                </View>
                <Text>ArianaGrande</Text>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{
                    uri:
                      'https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2019/04/11/ariana_grande_lanzara_linea_de_maquillaje.jpg?itok=lPi5hlYk&c=4ebd31acd10680d863281f7912d6554c0',
                  }}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem style={{ height: 45 }}>
                <Left>
                  <Button transparent>
                    <Ionicons
                      name={'ios-heart-empty'}
                      style={{ fontSize: 30 }}
                    />
                  </Button>
                  <Button transparent>
                    <Image
                      source={{
                        uri:
                          'https://s3.amazonaws.com/tinycards/image/caadbe7dac1178208ffb047515554a3b',
                      }}
                      style={{ height: 30, width: 30 }}
                    />
                  </Button>
                  <Button transparent>
                    <Image
                      source={{
                        uri:
                          'https://static.thenounproject.com/png/230502-200.png',
                      }}
                      style={{ height: 30, width: 30 }}
                    />
                  </Button>
                </Left>
              </CardItem>
              <CardItem style={{ height: 35 }}>
                <Text>14.590 Likes </Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    <Text style={{ fontWeight: '900' }}>varunb </Text>
                    Ea do Lorem occaecat laborum do. Minim ullamco ipsum minim
                    eiusmod dolore cupidatat magna exercitation amet proident
                    qui. Est do irure magna dolor adipisicing do quis labore
                    excepteur. Commodo veniam dolore cupidatat nulla consectetur
                    do nostrud ea cupidatat ullamco labore. Consequat ullamco
                    nulla ullamco minim.
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <View style={{ height: 40, width: 50, borderRadius: 64 }}>
                  <Image
                    source={{
                      uri:
                        'https://as01.epimg.net/meristation/imagenes/2019/07/19/betech/1563487755_255447_1563487880_noticia_normal_recorte1.jpg',
                    }}


                    
                    style={styles.imageperfil}
                  />
                </View>
                <Text>Video</Text>
              </CardItem>
              <CardItem cardBody>
                <Video
                source={{uri:'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
                rate={1.0}
                volume={8.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem style={{ height: 45 }}>
                <Left>
                  <Button transparent>
                    <Ionicons
                      name={'ios-heart-empty'}
                      style={{ fontSize: 30 }}
                    />
                  </Button>
                  <Button transparent>
                    <Image
                      source={{
                        uri:
                          'https://s3.amazonaws.com/tinycards/image/caadbe7dac1178208ffb047515554a3b',
                      }}
                      style={{ height: 30, width: 30 }}
                    />
                  </Button>
                  <Button transparent>
                    <Image
                      source={{
                        uri:
                          'https://static.thenounproject.com/png/230502-200.png',
                      }}
                      style={{ height: 30, width: 30 }}
                    />
                  </Button>
                </Left>
              </CardItem>
              <CardItem style={{ height: 35 }}>
                <Text>14.590 Likes </Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    <Text style={{ fontWeight: '900' }}>varunb </Text>
                    Ea do Lorem occaecat laborum do. Minim ullamco ipsum minim
                    eiusmod dolore cupidatat magna exercitation amet proident
                    qui. Est do irure magna dolor adipisicing do quis labore
                    excepteur. Commodo veniam dolore cupidatat nulla consectetur
                    do nostrud ea cupidatat ullamco labore. Consequat ullamco
                    nulla ullamco minim.
                  </Text>
                </Body>
              </CardItem>
            </Card>
            <Card>
              <CardItem>
                <View style={{ height: 40, width: 50, borderRadius: 64 }}>
                  <Image
                    source={{
                      uri:
                        'https://k60.kn3.net/taringa/F/8/C/6/C/5/Beriku/135.jpg',
                    }}
                    style={styles.imageperfil}
                  />
                </View>
                <Text>Paisajes</Text>
              </CardItem>
              <CardItem cardBody>
                <Image
                  source={{
                    uri:
                      'https://k60.kn3.net/taringa/F/8/C/6/C/5/Beriku/135.jpg',
                  }}
                  style={{ height: 200, width: null, flex: 1 }}
                />
              </CardItem>
              <CardItem style={{ height: 45 }}>
                <Left>
                  <Button transparent>
                    <Image
                    source={{uri:'https://images.emojiterra.com/twitter/v12/512px/2764.png'}}
                    style={{ height: 30, width: 30 }}
                    />
                  </Button>
                  <Button transparent>
                    <Image
                      source={{
                        uri:
                          'https://s3.amazonaws.com/tinycards/image/caadbe7dac1178208ffb047515554a3b',
                      }}
                      style={{ height: 30, width: 30 }}
                    />
                  </Button>
                  <Button transparent>
                    <Image
                      source={{
                        uri:
                          'https://static.thenounproject.com/png/230502-200.png',
                      }}
                      style={{ height: 30, width: 30 }}
                    />
                  </Button>
                </Left>
              </CardItem>
              <CardItem style={{ height: 35 }}>
                <Text>14.590 Likes </Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    <Text style={{ fontWeight: '900' }}>varunb </Text>
                    Ea do Lorem occaecat laborum do. Minim ullamco ipsum minim
                    eiusmod dolore cupidatat magna exercitation amet proident
                    qui. Est do irure magna dolor adipisicing do quis labore
                    excepteur. Commodo veniam dolore cupidatat nulla consectetur
                    do nostrud ea cupidatat ullamco labore. Consequat ullamco
                    nulla ullamco minim.
                  </Text>
                </Body>
              </CardItem>
            </Card>
          </ScrollView>
          <Card>
            <CardItem style={{ height: 50 }}>
              <Left>
                <Button transparent style={{ width: 75 }}>
                  <Ionicons name={'md-home'} style={{ fontSize: 30 }} />
                </Button>
                <Button transparent style={{ width: 100 }}>
                  <Image
                    source={{
                      uri:
                        'https://st2.depositphotos.com/4060975/8056/v/450/depositphotos_80565476-stock-illustration-magnifier-vector-icon.jpg',
                    }}
                    style={{ height: 40, width: 40 }}
                  />
                </Button>
                <Button transparent style={{ width: 88 }}>
                  <Ionicons
                    name={'ios-add-circle-outline'}
                    style={{ fontSize: 30 }}
                  />
                </Button>
                <Button transparent style={{ width: 68 }}>
                  <Ionicons name={'ios-heart-empty'} style={{ fontSize: 30 }} />
                </Button>
                <Button transparent>
                  <Image
                    source={{
                      uri:
                        'https://media.metrolatam.com/2019/08/08/arianagrande-7fea337ddd7a8edaab1d1439804cde6a-900x600.jpg',
                    }}
                    style={styles.imageperfil}
                  />
                </Button>
              </Left>
            </CardItem>
          </Card>

        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagecontainer: {
    height: 60,
    width: 80,
    borderRadius: 64,
  },
  imagehisto: {
    height: 60,
    width: 60,
    borderRadius: 64,
    borderWidth: 3,
    borderColor: '#FF00A2',
  },
  imageperfil: {
    height: 40,
    width: 40,
    borderRadius: 64,
    borderWidth: 2,
    borderColor: '#FF00A2',
  },
});
