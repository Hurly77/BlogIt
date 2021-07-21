import styles from '@/styles/contact-form.module.css';
import { Notification } from '@/components/notification';
import { sendData, notify } from './contactHelpers';
import { useEffect, useState } from 'react';

export const ContactForm = () => {
	const initState = {
		details: {
			email: '',
			name: '',
			message: '',
		},
		status: '',
		error: null,
	};
	const [state, setState] = useState(initState);
	const [notification, setNotification] = useState(null);

	useEffect(() => {
		setNotification(notify(state.status));
		if (
			state.status === 'success' ||
			state.status === 'error'
		) {
			const timer = setTimeout(() => {
				setState(initState);
				setNotification(null);
			}, 2500);
			() => clearTimeout(timer);
		}
	}, [state.status]);

	const handleChange = (e) => {
		e.preventDefault();

		setState({
			...state,
			details: {
				...state.details,
				[e.target.id]: e.target.value,
			},
		});
	};

	const sendMessageHandler = async (e) => {
		e.preventDefault();
		setState({ ...state, status: 'pending' });

		try {
			let res = await sendData(state.details);
		} catch (err) {
			setState({
				...initState,
				status: 'error',
				error: err.message,
			});
			return;
		}

		setState({ ...initState, status: 'success' });
	};

	return (
		<section className={styles.contact}>
			<div className={styles.heading}>
				<h2>Lets Talk</h2>
			</div>
			<form
				className={styles.form}
				onSubmit={sendMessageHandler}>
				<div className={styles.controls}>
					<div className={styles.control}>
						<label htmlFor="email">Email</label>
						<input
							value={state.details.email}
							onChange={handleChange}
							type="email"
							id="email"
						/>
					</div>
					<div className={styles.control}>
						<label htmlFor="name">Your Name</label>
						<input
							value={state.details.name}
							onChange={handleChange}
							type="text"
							id="name"
							required
						/>
					</div>
					<div className={styles.control}>
						<label htmlFor="message">Your message</label>
						<textarea
							value={state.details.message}
							onChange={handleChange}
							required
							type="text"
							id="message"
							rows="5"
						/>
					</div>
					<div className={styles.actions}>
						<button type="submit">Send</button>
					</div>
				</div>
			</form>
			{notification && <Notification {...notification} />}
		</section>
	);
};

export default ContactForm;
