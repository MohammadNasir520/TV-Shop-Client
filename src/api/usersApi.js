
// save user

export const saveUerToDatabase = async (user) => {
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
    // const response = await fetch(`${process.env.REACT_APP_Base_url}/user/${email}`)
    console.log(email)
    const response = await fetch(`http://localhost:5000/user/${email}`)
    const data = await response.json()
    console.log("data", data)
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