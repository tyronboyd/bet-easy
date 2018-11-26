import React, { PropTypes } from 'react';
import styles from './styles.scss';

function App({ children }) {
	return (
		<div className={styles.containerApp}>
			{children}
		</div>
	);
}

App.propTypes = { children: PropTypes.object };

export default App;
