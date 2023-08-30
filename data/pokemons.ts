import { ImageSourcePropType } from "react-native"

export interface Pokemon {
	name: string
	image: ImageSourcePropType
	type: string
	hp: number
	moves: string[]
	weaknesses: string[]
}

export const pokemons: Pokemon[] = [
	{
		name: 'Charmander',
		image: require('../assets/pokemons/charmander.png'),
		type: 'Fire',
		hp: 39,
		moves: ['Scratch', 'Ember', 'Growl', 'Leer'],
		weaknesses: ['Water', 'Rock']
	},
	{
		name: 'Squirtle',
		image: require('../assets/pokemons/squirtle.png'),
		type: 'Water',
		hp: 44,
		moves: ['Tackle', 'Water Gun', 'Tail Whip', 'Withdraw'],
		weaknesses: ['Electric', 'Grass']
	},
	{
		name: 'Bulbasaur',
		image: require('../assets/pokemons/bulbasaur.png'),
		type: 'Grass',
		hp: 45,
		moves: ['Tackle', 'Vine Whip', 'Growl', 'Leech Seed'],
		weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic']
	},
	{
		name: 'Pikachu',
		image: require('../assets/pokemons/pikachu.png'),
		type: 'Electric',
		hp: 35,
		moves: ['Quick Attack', 'Thunderbolt', 'Tail Whip', 'Growl'],
		weaknesses: ['Ground']
	}
]
