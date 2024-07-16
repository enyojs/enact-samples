// Videos List
const videos = [
	{
		title: 'Sintel',
		poster: 'http://media.w3.org/2010/05/sintel/poster.png',
		source: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
		desc: 'The film follows a girl named Sintel who is searching for a baby dragon she calls Scales. A flashback reveals that Sintel found Scales with its wing injured and helped care for it, forming a close bond with it.'
	},
	{
		title: 'Big Buck Bunny',
		poster: 'http://media.w3.org/2010/05/bunny/poster.png',
		source: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4',
		desc: '\'Big\' Buck wakes up in his rabbit hole, only to be pestered by three critters, Gimera, Frank and Rinky. When Gimera kills a butterfly, Buck decides on a payback Predator-style.'
	},
	{
		title: 'VideoTest',
		poster: 'http://media.w3.org/2010/05/video/poster.png',
		source: 'http://media.w3.org/2010/05/video/movie_300.mp4',
		desc: 'A test video with unusual proportions'
	},
	{
		title: 'Bad Video Source',
		poster: 'http://media.w3.org/2010/05/video/poster.png',
		// Intentionally invalid video to demonstrate source error state
		source: 'https://github.com/mderrick/react-html5video',
		desc: 'Intentionally invalid video to demonstrate source error state'
	}
];

export default videos;
