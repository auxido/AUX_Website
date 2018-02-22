/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Tone from 'Tone/core/Tone'
import Detector from 'three/examples/js/Detector'

export const unitsPerSecond = 7
export const circleHeight = 0
export const radius = 1.1
export const sceneColor = '#faa'
export const tubeColor = '#ffffff'
export const title = 'Ruin EP'
export const trackRadius = 2
export const useVoiceOver = false
export const supported = true; //Detector.webgl && Tone.supported
export const trackConfig = [
	{
		artist : 'End of Line',
		track : '',
		folder : 'end_of_line',
		segments : 5,
		duration : 160,
		// duration : 5,
		trackNames : ['glass_and_metal', 'choir',  'warped_drums', 'noises', 'pad', 'snare', 'piano'],
		names : ['Glass and Metal', 'Choir', 'Warped Drums', 'Noise', 'Pad', 'Snare', 'Piano'],
		soundRings: {
			startColor: '#f7002d',
			endColor: '#00edaa',
			shape: 'triangle',
			size: 8
		},
		floor: {
			color: '#253934'
		}
	},
	{
		artist : 'Eyelet',
		track : '',
		folder : 'eyelet',
		segments : 8,
		duration : 254,
		// duration : 5,
		trackNames : ['bass', 'brass_woodwinds',  'drums', 'guitars', 'leads', 'sfx', 'strings'],
		names : ['Bass', 'Brass and Woodwinds', 'Drums', 'Guitars', 'Leads', 'SFX', 'Strings'],
		soundRings: {
			startColor: '#f7002d',
			endColor: '#00edaa',
			shape: 'triangle',
			size: 8
		},
		floor: {
			color: '#253934'
		}
	},
	{
		artist : 'Endless Ennui',
		track : '',
		folder : 'endless_ennui',
		segments : 7,
		duration : 217,
		// duration : 5,
		trackNames : ['breath', 'saw_sub',  'rain', 'stereo_strat_01', 'tape_warp', 'whistles', 'stereo_strat_02'],
		names : ['Breath', 'Sub', 'Rain', 'Guitar 1', 'Tape Warp', 'Whistles', 'Guitar 2'],
		soundRings: {
			startColor: '#f7002d',
			endColor: '#00edaa',
			shape: 'triangle',
			size: 8
		},
		floor: {
			color: '#253934'
		}
	},
]


export function getTrackData(artist){
	const index = trackConfig.findIndex(t => t.artist === artist)
	return trackConfig[index]
}
