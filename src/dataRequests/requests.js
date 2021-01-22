const API_KEY = '92631e94aad2457fdf40cf5d5273f33b';
export const baseURL_IMAGES = 'https://image.tmdb.org/t/p/original/';
const dataRequests = [
	{
		title: 'netflix original',
		url: `/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&include_adult=true`,
	},
	{
		title: 'trending now',
		url: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
	},
	{
		title: 'top rated',
		url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	},
	{
		title: 'action movies',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	},
	{
		title: 'comedy movies',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	},
	{
		title: 'horror movies',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	},
	// {
	// 	title: 'latest movies',
	// 	url: `/movie/latest?api_key=${API_KEY}&language=en-US`,
	// },
	{
		title: 'romance movies',
		url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	},
	{
		title: 'upcoming movies',
		url: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
	},
	{
		title: 'popular movies',
		url: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
	},
	{
		title: 'documentaries',
		url: `/discover/movie/?api_key=${API_KEY}&with_genres=99`,
	},
];

export default dataRequests;
