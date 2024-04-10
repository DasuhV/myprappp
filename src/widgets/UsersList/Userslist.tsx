import { ThemeProvider, createTheme, styled } from '@mui/material'
import React from 'react';
const Userslist = () => {
	return (
		<div>
			
		</div>
	);
};

export default Userslist
const customTheme = createTheme({
	palette: {
		primary: {
			main: '#278e1f',
			contrastText: 'white',
		},
	},
})

const MyThemeComponent = styled('div')(({ theme }) => ({
	color: theme.palette.primary.contrastText,
	backgroundColor: theme.palette.primary.main,
	padding: theme.spacing(1),
	borderRadius: theme.shape.borderRadius,
}))

export function ThemeUsage() {
	return (
		<ThemeProvider theme={customTheme}>
			<MyThemeComponent>Styled div with theme</MyThemeComponent>
		</ThemeProvider>
	)
}