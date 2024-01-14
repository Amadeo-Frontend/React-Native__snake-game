import * as React from 'react'
import { SafeAreaView ,StyleSheet} from 'react-native'
import { Colors } from '../styles/colors'
import { PanGestureHandler } from 'react-native-gesture-handler'
import { Coordinate, Direction, GestureEventType } from '../types/Types'

const SNAKE_INITIAL_POSITION = [{ x: 5, y: 5}];
const FOOD_INITIAL_POSITION = { x: 5, y: 20};
const GAME_BOUNDS = { xMin: 0, xMax: 35, yMin: 0, yMax: 63};
const MOVE_INTERVAL = 50;
const SCORE_INCREMENT = 10;

export default function Game():JSX.Element {

    const [direction, setDirection] = React.useState<Direction>(Direction.Right);
    const [snake, setSnake] = React.useState<Coordinate[]>(SNAKE_INITIAL_POSITION);
    const [food, setFood] = React.useState<Coordinate>(FOOD_INITIAL_POSITION);
    const [isGameOver, setIsGameOver] = React.useState<boolean>(false);
    const [isPaused, setIsPaused] = React.useState<boolean>(false);


    const handleGesture = (event:GestureEventType) => {
        const {translationX, translationY} = event.nativeEvent;
        
        if(Math.abs(translationX) > Math.abs(translationY)){
            if(translationX > 0) {
            setDirection(Direction.Right)     
        } else {
            setDirection(Direction.Left)
        }
    } else {
        if(translationY > 0) {
        setDirection(Direction.Down)
        } else {
        setDirection(Direction.Up)
        }
    }
}

    return (
      <PanGestureHandler onGestureEvent={handleGesture}>
          <SafeAreaView style={styles.container}></SafeAreaView>
      </PanGestureHandler>
    )
}


 const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent:'center',
    alignItems:'center',
}
 })