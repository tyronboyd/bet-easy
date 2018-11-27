
import * as React from 'react';
import BetEasyConfig from '../../../assets/js/bet-easy.config.js';
import styles from './styles.scss';

export default class Home extends React.Component {

	constructor() {
		super();
		this.state = { raceData: [] };
	}
	/**
	 * Component did mount called when the app first loads.
	 * An interval is set to update from the API
	 *
	 * @returns void
	 */
	componentDidMount() {
		this.initData();
		setInterval(() => {
			this.initData();
		}, 5000);
	}

    /**
     * Initialises race data
     *
     * @returns {Promise} The race data
     */
	initData() {
		this.getRaceData()
			.then(raceData => {
				this.setState({
					raceData: raceData.result
				});
			});
	}

	/**
	 * fetch Bet Easy race data
	 *
	 * @returns {Promise} The Bet Easy data
	 */
	getRaceData() {
		const betEasyUrl = BetEasyConfig.apiUrl;
		return new Promise(resolve =>
			fetch(betEasyUrl)
				.then(response => response.json())
				.then(data => {
					resolve(data);
				})
		);
	}

    /**
     * get icons for races
     *
     * @returns img url for races
     */
	getIconFromRaceType(raceType) {
		const baseUrl = '../../../assets/img/';
		const raceTypeMapper = {
			Trots: { img: `${baseUrl}horse.png` },
			Greyhounds: { img: `${baseUrl}dog.png` },
			Thoroughbred: { img: `${baseUrl}unknown.png` }
		};
		return raceTypeMapper[raceType].img;
	}

    /**
     * gets time left to race start
     *
     * @returns time string
     */
	getTimeUntilRace(date) {
		const calculateTimeUntilRace = new Date(date) - new Date();
		const diffDays = Math.floor(calculateTimeUntilRace / 86400000); // days
		const diffHrs = Math.floor((calculateTimeUntilRace % 86400000) / 3600000); // hours
		const diffMins = Math.round(((calculateTimeUntilRace % 86400000) % 3600000) / 60000); // minutes
		return `${diffDays}d ${diffHrs}h ${diffMins}m`;
	}

	render() {
		const listItems = this.state.raceData.map((data) =>
			<tr key={data.EventID}>
				<td><img role="presentation" src={this.getIconFromRaceType(data.EventTypeDesc)} /></td>
				<td>{data.EventName}</td>
				<td>{data.Venue.Venue}, {data.Venue.StateCode}<br />{data.Venue.Slug}</td>
				<td>{this.getTimeUntilRace(data.AdvertisedStartTime)}</td>
			</tr>
		);
		return (
			<div className={styles.container}>
				<img role="presentation" src="../../../assets/img/logo.png" />
				<div className={styles['div-container']}>
					<h3 className={styles.heading}>Next to Jump</h3>
				</div>
				<table className="table">
					<tbody>
						{listItems}
					</tbody>
				</table>
			</div>
		);
	}
}
