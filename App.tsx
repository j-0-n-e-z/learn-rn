import { Platform, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import PokemonCard from './components/PokemonCard/PokemonCard'
import { pokemons } from './data/pokemons'

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				{pokemons.map(pokemon => (
					<PokemonCard key={pokemon.name} {...pokemon} />
				))}
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		paddingTop: Platform.OS === 'android' ? 25 : 0
	}
})
