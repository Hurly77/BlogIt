export const sendData = async (message) => {
	const res = await fetch('/api/contact', {
		method: 'POST',
		body: JSON.stringify(message),
		headers: { 'Content-Type': 'application/json' },
	});
	const data = await res.json();

	if (!res.ok) {
		throw new Error(data.message);
	}
	return res;
};

export const notify = (status) => {
	let notification;
	if (status === 'pending') {
		return (notification = {
			title: 'PENDING..',
			message: 'Message is Pending',
			status: 'pending',
		});
	}
	if (status === 'success') {
		return (notification = {
			title: 'SUCCESS',
			message: 'Message was Sent Successfully',
			status: 'success',
		});
	}

	if (status === 'error') {
		return (notification = {
			title: 'ERROR',
			message: 'error',
			status: 'error',
		});
	}

	return null;
};

export default notify;
