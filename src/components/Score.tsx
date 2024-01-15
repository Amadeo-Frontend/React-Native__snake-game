import { Text, StyleSheet } from "react-native";
import { Colors } from "../styles/colors";

interface ScoreProps {
  score: number;
}

export default function Score({ score }: ScoreProps): JSX.Element {
  return <Text style={styles.text}>🍓 {score}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.primary,
  },
});