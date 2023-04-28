import { useRef } from "react";
import { Pressable, TextInput, View } from "react-native";

import { Send } from "../../../../components/icons/outlined/Send";
import { COLORS } from "../../../../utils/styles";

import { styles } from "./styles";

interface Props {
  onSubmit: (message: string) => void;
}

export function MessageComposer({ onSubmit }: Props) {
  const messageRef = useRef("");
  const inputRef = useRef<TextInput>(null);

  const handleSubmit = () => {
    onSubmit(messageRef.current);
    inputRef.current.clear();
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.composer}>
        <TextInput
          multiline
          placeholder="Your message was here"
          placeholderTextColor={COLORS.neutral[500]}
          ref={inputRef}
          style={styles.input}
          onChangeText={(text) => (messageRef.current = text)}
        />
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Send width={20} height={20} stroke={COLORS.neutral[500]} />
        </Pressable>
      </View>
    </View>
  );
}
