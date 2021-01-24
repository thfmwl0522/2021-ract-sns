import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const signup = () => {
	return (
		<AppLayout>
			<Head>
				<title>NodeBird</title>
			</Head>
			<div>회원가입 페이지</div>
		</AppLayout>
	);
};

export default signup;