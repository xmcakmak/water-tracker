import { StyleSheet } from "react-native"

import { COLOR } from "@configs/Enums"
export const styles = StyleSheet.create({
	text: { 
        fontWeight: "bold", 
        width: 250, 
        color: "#FFFFFF",
        marginLeft: 15
    },
	statusBar: {
		backgroundColor: COLOR.BACKGROUND_COLOR,
		//width: "100%",
        flex:8,
		borderRadius: 10,
		overflow: "hidden",
        marginVertical: 15
	},
	activeStatusBar: {
		backgroundColor: COLOR.TINT,
		borderRadius: 0,
		paddingVertical: 15,
	},
    infoButton: {
        position: "absolute",
        right: 12,
        top:8,
        borderWidth: 1,
        borderColor: COLOR.WHITE,
        borderRadius: 7,
        padding: 5,
        flexDirection: "row"
    }
})
