
// save user

export const saveUer = async (user) => {
    const response = await fetch(`${process.env.REACT_APP_Base_url}/users/${user?.email}`, {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)

    })
    const data = await response.json()
    return data
}


export const getRoleByEmail = async (email) => {
    const response = await fetch(`${process.env.REACT_APP_Base_url}/user/${email}`)
    const data = await response.json()
    return data.role;
}





// deleteUser by id

export const deleteUserById = async id => {
    const response = await fetch(`${process.env.REACT_APP_Base_url}/user/${id}`, {
        method: 'DELETE',
    })
    const data = response.json()
    return data;
}



// getAll buyers 
export const getAllBuyers = async () => {
    const response = await fetch(`${process.env.REACT_APP_Base_url}/users/Buyer`)
    const data = await response.json()
    return data;
}