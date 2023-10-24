import type GenerateQuery from '@/apps/generate/data/models/generateQuery';



export default class VegaRoutingUtils{

	public static encodeQuery(query: GenerateQuery){
		return {
			path: '/base/generate/query',
			query: {
				genre: query.genre,
				era: query.era,
				mood: query.mood,
				instruments: query.instruments?.join(','),
				lyricsType: query.lyricsType?.join(',')
			}
		};
	}

}