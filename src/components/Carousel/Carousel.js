import React, {useRef, useState} from 'react';
import {Animated, Dimensions, Image, View as V} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {Row, Text, View} from '../../elements'
import {CarouselStyle} from './Carousel.style'
import useInterval from './UseInterval'

const {width} = Dimensions.get('screen');

function Carousel(props) {
  const {Delay, Images} = props;
  const animation = useRef(new Animated.Value(0));

  const [currentImage, setCurrentImage] = useState(0);

  useInterval(() => handlePress('auto'), Delay); // auto rotation and delay time (3s)

  const handlePress = (direction: string) => {
    let newCurrentImage;
    if (direction === 'Left') {
      newCurrentImage = currentImage - 1;
    } else {
      newCurrentImage = currentImage + 1;
    }

    if (newCurrentImage === -1 && direction === 'Left') {
      newCurrentImage = 4;
    } else {
      if (newCurrentImage >= Images.length) {
        newCurrentImage = 0;
      }
    }
    Animated.spring(animation.current, {
      toValue: -(width * newCurrentImage),
      useNativeDriver: true,
    }).start();
    setCurrentImage(newCurrentImage);
  };

  return (
    <View style={{height: 350, margin: 20}}>
      <Row preset="transparent" style={{justifyContent: 'center'}}>
        <GestureRecognizer
          style={{transform: [{translateX: 1}]}}
          onSwipeLeft={() => handlePress('Right')}
          onSwipeRight={() => handlePress('Left')}
        >
          <Animated.View
            style={[
              CarouselStyle.CONTAINER,
              {
                transform: [{translateX: animation.current}],
              },
            ]}>
            {Images.map((Images) => (
              <View preset="transparent" key={Images.id}>
                <Image source={Images.image} style={CarouselStyle.IMAGE_CONTAINER}/>
              </View>
            ))}
          </Animated.View>
        </GestureRecognizer>
      </Row>
      <View preset={"transparent"} style={CarouselStyle.INDICATOR_CONTAINER}>
        {Images.map((Images, index) => (
          <V
            key={`${Images.image}_${index}`}
            style={[
              CarouselStyle.INACTIVE_INCIDATOR,
              index === currentImage ? CarouselStyle.ACTIVE_INDICATOR : undefined,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
