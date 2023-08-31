import { FC } from 'react'
import { Image, Text, View } from 'react-native'
import { Pokemon } from '../../data/pokemons'
import { getTypesDetails } from './getTypesDetails'

const PokemonCard: FC<Pokemon> = ({
	name,
	image,
	type,
	hp,
	moves,
	weaknesses
}) => {
	const { borderColor, emoji } = getTypesDetails(type)

	return (
		<View className='bg-white rounded-xl border-2 p-4 m-4 shadow-xl shadow-gray-800'>
			<View className='flex-row justify-between items-center w-full mb-8'>
				<Text className='text-[30px] font-bold'>{name}</Text>
				<Text className='text-[22px]'>❤️ {hp}</Text>
			</View>

			<Image
				source={image}
				className='w-full h-[200] mb-4'
				aria-label={`${name} pokemon`}
				resizeMode='contain'
			/>

			<View className='flex-row justify-center mb-4'>
				<View
					className={`flex-row items-center py-2 px-4 rounded-full border-4 ${borderColor}`}
				>
					<Text className='text-[22px]'>
						{emoji} {type}
					</Text>
				</View>
			</View>

			<View className='flex-row items-center flex-wrap mb-2'>
				<Text className='text-[22px] font-[500]'>
					Moves:{' '}
					<Text className='text-[18px] font-[500] text-[#4164ff]'>
						{moves.join(', ')}
					</Text>
				</Text>
			</View>

			<View className='flex-row items-center flex-wrap gap-x-2 mb-2'>
				<Text className='text-[22px] font-[500]'>
					Weaknesses:{' '}
					<Text className='text-[18px] font-[500] text-[#ff1e00]'>
						{weaknesses.join(', ')}
					</Text>
				</Text>
			</View>
		</View>
	)
}

export default PokemonCard
