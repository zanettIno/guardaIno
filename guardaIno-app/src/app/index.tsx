import { View, Text } from "react-native";
import { router } from "expo-router";
 
export default function Index(){

    function telaInicial(){
        router.navigate("/inicial")
    }

    return(
        <View>
            <Text onPress={telaInicial}>
                Teste di NativeWind!!
            </Text>
        </View>
    ) 
}
