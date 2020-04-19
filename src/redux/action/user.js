import Axios from 'axios';
import qs from 'qs';

const HOST = "/api/v1/"
export const login = (body, history) => {
    return {
        type: 'POST_LOGIN',
        payload: Axios.post(HOST + "user/login", qs.stringify(body))
            .then(result => {
                if (result.status === 200) {
                    alert("Sukses login")
                    try {
                        localStorage.setItem("KEY_TOKEN", result.data.result.token)
                        localStorage.setItem("id", result.data.result.id_user)
                        localStorage.setItem("fullname", result.data.result.fullname)

                        console.log('id', result.data.result.id_user);
                        console.log('emailku', result.data.result.email);
                        console.log('namaku', result.data.result.fullname);


                        history.push('/home')
                    } catch (error) {
                        console.log('something wrong')
                    }
                }
            }).catch(error => {
                alert("Your Email or Password is Wrong")
            })
    }
}

export const register = (data, history) => {
    return {
        type: 'POST_REGISTER',
        payload: Axios.post(HOST + "user/register", qs.stringify(data))
            .then(result => {
                if (result.status === 200) {
                    alert("Register Success")
                    try {
                        history.push('/login')
                    } catch (error) {
                        console.log('Something Wrong')
                    }
                }
            }).catch(error => {
                console.log(error)
            })
    }
}