/**
 * Contains the config options for the probe map screens
 */
export default {
	defaultLocation: 4,
	minutes: 5,
	animationSpeed: 1,
	apiUrl: 'http://v01dtre01/ProbeDataService/probedata/traversals',
	groups: [
		{
			group_name: 'Rotate locations',
			ids: [0, 2, 4, 5, 6]
		}
	],
	locations: [
		{
			id: 0,
			name: 'adelaide',
			centre: [138.6028507672121, -34.91544537032989],
			zoomLevel: 14
		},
		{
			id: 1,
			name: 'auckland',
			centre: [174.763973, -36.851035],
			zoomLevel: 13
		},
		{
			id: 2,
			name: 'brisbane',
			centre: [153.02890472750832, -27.46897144474641],
			zoomLevel: 15
		},
		{
			id: 3,
			name: 'canberra',
			centre: [149.128980, -35.294319],
			zoomLevel: 13
		},
		{
			id: 4,
			name: 'melbourne',
			centre: [144.9618112777403, -37.81491375677936],
			zoomLevel: 15
		},
		{
			id: 5,
			name: 'perth',
			centre: [115.86255742062369, -31.951766375840215],
			zoomLevel: 15
		},
		{
			id: 6,
			name: 'sydney',
			centre: [151.21033708731073, -33.86867060934595],
			zoomLevel: 15
		},
		{
			id: 7,
			name: 'wollongong',
			centre: [150.8931, -34.4278],
			zoomLevel: 12

		},
		{
			id: 8,
			name: 'central_coast',
			centre: [151.3417, -33.4267],
			zoomLevel: 12
		},
		{
			id: 9,
			name: 'geelong',
			centre: [144.3617, -38.1499],
			zoomLevel: 12,
		},
		{
			id: 10,
			name: 'bendigo',
			centre: [144.2794, -36.7570],
			zoomLevel: 12,
		},
		{
			id: 11,
			name: 'ballarat',
			centre: [143.8503, -37.5622],
			zoomLevel: 12,
		},
		{
			id: 12,
			name: 'hobart',
			centre: [147.3272, -42.8821],
			zoomLevel: 12,
		},
		{
			id: 13,
			name: 'darwin',
			centre: [130.8456, -12.4634],
			zoomLevel: 12,
		},
		{
			id: 14,
			name: 'wellington',
			centre: [174.7762, -41.2865],
			zoomLevel: 12,
		},
		{
			id: 15,
			name: 'christchurch',
			centre: [172.6362, -43.5321],
			zoomLevel: 12,
		},
		{
			id: 16,
			name: 'tauranga',
			centre: [176.1651, -37.6878],
			zoomLevel: 12,
		},
		{
			id: 17,
			name: 'hamilton',
			centre: [175.2793, -37.7870],
			zoomLevel: 12,
		},
		{
			id: 18,
			name: 'newcastle',
			centre: [151.7817, -32.9283],
			zoomLevel: 12,
		}
	]
}
