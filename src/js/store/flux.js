const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agenda: [],
			idToUpload: "",
			nombreDeAgenda: "",
			currentContact: []

		},
		actions: {
			getAgenda: async () => {
				try {
					const { nombreDeAgenda } = getStore()
					const result = await fetch(`https://assets.breatheco.de/apis/fake/contact/agenda/${nombreDeAgenda}`)
					if (!result.ok) {
						throw new Error('Error request')
					}
					const data = await result.json()
					console.log('Datos cargados:', data)
					const store = getStore()
					setStore({ ...store, agenda: data }) //traemos propiedades de store al objeto nuevo
				} catch (error) {
					console.log('Error al cargar agenda', Error)
				}
			},
			changeGlobalAgendaName: (value) => {
				const store = getStore()
				setStore({ ...store, nombreDeAgenda: value })
			},
			newContact: async (object) => {
				console.log(object)
				try {
					const result = await fetch(`https://assets.breatheco.de/apis/fake/contact/`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(object)
					})
					if (!result.ok) {
						throw new Error('Error request')
					}
					const data = await result.json()
					console.log('Contacto creado:', data)
					const { getAgenda } = getActions()
					getAgenda()
				} catch (error) {
					console.log('Creating contact error:', error)
				}

			},
			deleteContact: async (id) => {
				try {
					const result = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json',
						},
					})
					if (!result.ok) {
						throw new Error('Deleting error')
					}
					const data = await result.json()
					console.log('Contacto creado:', data)
					const { getAgenda } = getActions()
					getAgenda()
				} catch (error) {
					console.log('Deleting error', error)
				}

			},
			updateContact: async (object) => {
				console.log(object)
				try {
					const result = await fetch(`https://assets.breatheco.de/apis/fake/contact/${object.id}`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(object)
					})
					if (!result.ok) {
						throw new Error('Error request')
					}
					const data = await result.json()
					console.log('Contacto editado:', data)
					const { getAgenda } = getActions()
					getAgenda()
				} catch (error) {
					console.log('Editing contact error:', error)
				}
			},
			setCurrentContact: (contact) => {
				const store = getStore()
				setStore({...store, currentContact: contact})
			},
			deleteAllContacts: async (agenda_slug) => {
				try {
					const result = await fetch(`https://assets.breatheco.de/apis/fake/contact/agenda/${agenda_slug}`, {
						method: 'DELETE',
						headers: {
							'Content-Type': 'application/json',
						},
					})
					if (!result.ok) {
						throw new Error('Deleting all error')
					}
					const data = await result.json()
					console.log('Deleting all ok:', data)
					const { getAgenda } = getActions()
					getAgenda()
				} catch (error) {
					console.log('Deleting all error', error)
				}

			}
		}
	};
};

export default getState;
