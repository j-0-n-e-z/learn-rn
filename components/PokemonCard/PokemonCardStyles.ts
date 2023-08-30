import { Platform, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	card: {
		backgroundColor: 'white',
		borderRadius: 16,
		borderWidth: 2,
		padding: 16,
		margin: 16,
		...Platform.select({
			ios: {
				shadowOffset: { width: 2, height: 2 },
				shadowColor: '#333',
				shadowOpacity: 0.3,
				shadowRadius: 4
			},
			android: {
				elevation: 5
			}
		})
	},
})
