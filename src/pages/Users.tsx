import * as React from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const columns: GridColDef[] = [
	{ field: 'id', headerName: 'ID', width: 50 },
	{ field: 'firstName', headerName: 'First name', width: 130 },
	{ field: 'lastName', headerName: 'Last name', width: 130 },
	{
		field: 'age',
		headerName: 'Age',
		type: 'number',
		width: 90,
	},
	{
		field: 'fullName',
		headerName: 'Full name',
		description: 'This column has a value getter and is not sortable.',
		sortable: false,
		width: 150,
		valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
	},
]

const users = [
	{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
	{ id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
	{ id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
	{ id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
	{ id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
	{ id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
	{ id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
	{ id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
	{ id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
]
interface IUser {
	id: number
	lastName: string
	firstName: string | null
	age: number | null
}

export default function UsersPage() {
	const [rows] = useState<IUser[]>(users)
	const navigate = useNavigate()
	return (
		<div style={{ width: '100%' }}>
			<h2 style={{ paddingTop: 0 }}>Users</h2>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 5 },
					},
				}}
				pageSizeOptions={[5, 10]}
			/>
		</div>
	)
}
