export const getTypesDetails = (type: string) => {
	switch (type.toLowerCase()) {
		case 'electric':
			return { borderColor: 'border-[#FFD700]', emoji: '⚡️' }
		case 'water':
			return { borderColor: 'border-[#6493EA]', emoji: '💧' }
		case 'fire':
			return { borderColor: 'border-[#FF5733]', emoji: '🔥' }
		case 'grass':
			return { borderColor: 'border-[#66CC66]', emoji: '🌿' }
		default:
			return { borderColor: 'border-[#A0A0A0]', emoji: '❓' }
	}
}
