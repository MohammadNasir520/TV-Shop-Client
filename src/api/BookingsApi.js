export const deleteBookingById = async id => {
    const url = `${process.env.REACT_APP_Base_url}/booking/${id}`;
    const response = await fetch(url, {
        method: 'DELETE',

    })
    const data = await response.json();
    return data;
}