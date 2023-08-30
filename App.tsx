/// <reference types="nativewind/types" />
import { Platform, SafeAreaView, ScrollView } from 'react-native'
import PokemonCard from './components/PokemonCard/PokemonCard'
import { pokemons } from './data/pokemons'

export default function App() {
	return (
		<SafeAreaView
			className={`flex-1 bg-[#f5f5f5] ${
				Platform.OS === 'android' ? 'pt-7' : ''
			}`}
		>
			<ScrollView>
				{pokemons
					.sort(() => Math.random() - 0.5)
					.map(pokemon => (
						<PokemonCard key={pokemon.name} {...pokemon} />
					))}
			</ScrollView>
		</SafeAreaView>
	)
}
