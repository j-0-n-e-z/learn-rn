import { Image, ImageSourcePropType, Text, View } from 'react-native'
import { styles } from './PokemonCardStyles'
import { getTypesDetails } from './getTypesDetails'
import { FC } from 'react'

interface PokremonCardProps {
	name: string
	image: ImageSourcePropType
	type: string
	hp: number
	moves: string[]
	weaknesses: string[]
}

const PokemonCard: FC<PokremonCardProps> = ({
	name,
	image,
	type,
	hp,
	moves,
	weaknesses
}) => {
	const { borderColor, emoji } = getTypesDetails(type)

	return (
		<View style={styles.card}>
			<View style={styles.nameContainer}>
				<Text style={styles.name}>{name}</Text>
				<Text style={styles.hp}>❤️{hp}</Text>
			</View>

			<Image
				source={image}
				style={styles.image}
				aria-label={`${name} pokemon`}
				resizeMode='contain'
			/>

			<View style={styles.typeContainer}>
				<View style={[styles.badge, { borderColor }]}>
					<Text style={styles.typeEmoji}>{emoji}</Text>
					<Text style={styles.typeText}>{type}</Text>
				</View>
			</View>

			<View style={styles.movesContainer}>
				<Text style={styles.movesTitle}>Moves:</Text>
				<Text style={styles.movesText}>{moves.join(', ')}</Text>
			</View>

			<View style={styles.weaknessContainer}>
				<Text style={styles.weaknessTitle}>Weaknesses:</Text>
				<Text style={styles.weaknessText}>{weaknesses.join(', ')}</Text>
			</View>
		</View>
	)
}

export default PokemonCard