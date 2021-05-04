import React from 'react'
import './App.scss'
import { Card } from './components/Card'
import { Header } from './components/Header'
import { MainContainer } from './components/MainContainer'

export function App() {

	return (
		<>
			<Header />
			<MainContainer>
				<Card title="Últimas postagens">
					<h1>Listagem</h1>
				</Card>
			</MainContainer>
		</>
	)
}