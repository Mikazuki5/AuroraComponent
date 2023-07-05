import {Dimensions} from 'react-native';

export const ImageAssets = {
  game_controller: require('./Image/game-controller.png'),
  earrings: require('./Image/earrings.png'),
  flamingo: require('./Image/flamingo.png'),
  hair_spray: require('./Image/hair-spray.png'),
  google_logo: require('./Image/google_logo.png'),
};

export const AnimationsAssets = {
  smartphone_animation: require('./Animations/smartphone-animation.json'),
  accountant_animation: require('./Animations/accountant-animation.json'),
  game_animation: require('./Animations/game-animation.json'),
  hotels_animation: require('./Animations/hotels-animation.json'),
  login_animation: require('./Animations/login_animated.json'),
};

export const {width, height} = Dimensions.get('screen');
