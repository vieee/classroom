import React from 'react';
import { database } from '../firebase/firebase';
import { history } from '../routes/AppRouter';

import '../styles/ShortPolls.css';

class ShortPolls extends React.Component {

	constructor() {
		super();

		this.state = {
			allAnnouncements: []
		};

		this.displayShortPolls = this.displayShortPolls.bind(this);
		this.linkToAnnouncements = this.linkToAnnouncements.bind(this);
	}

	componentDidMount() {
		let allAnnouncements = [];

		database.ref('users/' + this.props.dbUserKey + '/userSubjects').on('value', (subjects) => {
			let currentIndex = 0;
			subjects.forEach((subject) => {
				// eslint-disable-next-line
				if (currentIndex == this.props.subIndex) {
					database.ref('subjects/' + subject.val().dbSubjectKey + '/polls').on('value', (announcements) => {
						announcements.forEach((announcement) => {
							allAnnouncements.push({ ...announcement.val() });
						});
						allAnnouncements.reverse();
					});
					this.setState({ allAnnouncements });
					allAnnouncements = [];
				}
				currentIndex++;
			});
			currentIndex = 0;
		});
	}

	linkToAnnouncements() {
		history.push('/polls?subIndex=' + this.props.subIndex);
	}

	displayShortPolls() {
		return this.state.allAnnouncements.map((announcement, index) => {
			return (
				<div key={index} className="short-poll">{announcement.title}</div>
			)
		});
	}

	render() {
		return (
			<div className="short-polls">
				<div className="short-polls-title">Polls</div>
				{ this.displayShortPolls() }
				<button className="more-poll-button" onClick={this.linkToAnnouncements}>more...</button>
			</div>
		);
	}
}

export default ShortPolls;
