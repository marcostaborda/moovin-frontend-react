import React, { useCallback, useEffect, useState } from 'react'
import './App.scss'
import { Card } from './components/Card'
import { Header } from './components/Header'
import { MainContainer } from './components/MainContainer'
import { TablePost } from './components/TablePost'
import { PostsData } from './contracts/IPostsData'

export function App() {
	const [resultData, setResultData] = useState<PostsData | undefined>();
	const [page, setPage] = useState(1);

	useEffect(() => {
		fetch(`https://gorest.co.in/public-api/posts?_format=json&page=${page}`)
			.then(res => res.json())
			.then(response => setResultData(response))
	}, [page]);

	const handleChangePage = useCallback((pageNumber: number) => {
		setPage(pageNumber);
	}, []);

	return (
		<>
			<Header />
			<MainContainer>
				<Card title="Últimas postagens">
					<TablePost
						posts={resultData}
						perPage={3}
						handleChangePage={handleChangePage}
					/>
				</Card>
			</MainContainer>
		</>
	)
}