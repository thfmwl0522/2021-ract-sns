import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const profile = () => {
	return (
		<AppLayout>
			<Head>
				<title>NodeBird</title>
			</Head>
			<div>solzi 프로필</div>
		</AppLayout>
	);
};

export default profile;