import { useRef } from "react";
import { Pressable, TextInput, View } from "react-native";

import { Text } from "../../../../components/Text/Text";
import { COLORS } from "../../../../utils/styles";
import { styles } from "./styles";

interface Props {
  onSubmit: (message: string) => void;
}

export function MessageComposer({ onSubmit }: Props) {
  const messageRef = useRef("");

  return (
    <View style={styles.wrapper}>
      <View style={styles.composer}>
        <TextInput
          multiline
          placeholder="Your message was here"
          placeholderTextColor={COLORS.neutral[500]}
          style={styles.input}
          onChangeText={(text) => (messageRef.current = text)}
        />
        <Pressable onPress={() => onSubmit(messageRef.current)}>
          <Text>Send</Text>
        </Pressable>
      </View>
    </View>
  );
}
