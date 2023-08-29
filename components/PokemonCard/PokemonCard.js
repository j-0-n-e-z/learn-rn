import { PropTypes as p } from 'prop-types'
import { Image, Text, View } from 'react-native'
import { styles } from './PokemonCardStyles'

const getTypesDetails = type => {
	switch (type.toLowerCase()) {
		case 'electric':
			return { borderColor: '#FFD700', emoji: '⚡️' }
		case 'water':
			return { borderColor: '#6493EA', emoji: '💧' }
		case 'fire':
			return { borderColor: '#FF5733', emoji: '🔥' }
		case 'grass':
			return { borderColor: '#66CC66', emoji: '🌿' }
		default:
			return { borderColor: '#A0A0A0', emoji: '❓' }
	}
}

export default function PokemonCard({
	name,
	image,
	type,
	hp,
	moves,
	weaknesses
}) {
	const { borderColor, emoji } = getTypesDetails(type)
	return (
		<View style={styles.card}>
			<View style={styles.nameContainer}>
				<Text style={styles.name}>{name}</Text>
				<Text style={styles.hp}>{hp}</Text>
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

PokemonCard.propTypes = {
	name: p.string,
	image: p.oneOfType([p.string, p.number]),
	type: p.string,
	hp: p.number,
	moves: p.arrayOf(p.string),
	weaknesses: p.arrayOf(p.string)
}
