// React Native
import { Text, View, TouchableOpacity } from "react-native"
import { Icon } from "@rneui/themed"

// Style
import { styles } from "./StatusBar.styles"
import { COLOR } from "@configs/Enums"

export default function StatusBar({ completed, amount, goal, infoOnPress }) {
	return (
		<View style={styles.statusBar}>
			<View style={[styles.activeStatusBar, { width: completed + "%" }, completed > 100 && {backgroundColor: COLOR.RED}]}>
				<Text style={styles.text}>Consumed: {`${amount}ml`} ~ %{completed} </Text>
			</View>
			
            <TouchableOpacity
				style={styles.infoButton}
                onPress={infoOnPress}
			>
				<Icon
					name="info"
					type="material"
					size={18}
					color={COLOR.WHITE}
				/>
				<Text style={{ color: COLOR.WHITE, marginLeft: 5 }}>
					{goal}ml
				</Text>
			</TouchableOpacity>
		</View>
	)
}
