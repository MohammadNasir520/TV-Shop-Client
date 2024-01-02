export const uploadImage = async image => {
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imageBB_key}`

    const formData = new FormData()
    formData.append('image', image)

    console.log('fromdata', formData)
    const response = await fetch(url, {
        method: 'POST',
        body: formData
    })
    const data = await response.json()
    return data.data.url;
}