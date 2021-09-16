import ApiConnect from './ApiConnect';
class UserAuth {

    set = (key, value) => localStorage.setItem(key, value);
    get = key => this.getLocalStorage(key);

    getLocalStorage = key => {
        const ret = localStorage.getItem(key);
        if (ret) {
        return ret;
        }
        return null;
    };

    isLoggedIn = () => this.get('isLoggedIn') == true;

    Signin = (username, password) => {
        var path = 'login/'
        var data = {
            'username' : username,
            'password' : password
        }
        var config = {
            'headers' : {
                'Content-Type': 'application/json'
            }
        }
        ApiConnect.post(path, data, config)
        .then(res => {
            path = 'myinfo/'
            config = {
                'headers' : {
                    'Content-Type': 'application/json',
                    'Authorization': 'JWT '+String(res.data.token)
                }
            }
            console.log(config)
            
            ApiConnect.get(path, config)
            .then(res2 => {
                console.log("id:" + res2.data.user_id + " username:" + res2.data.username);
                alert('ログインしました');
                this.set('isLoggedIn', true);
                this.set('user_id', res2.data.user_id);
                this.set('username', res2.data.username);
                this.set('token', res.data.token);
                window.location.href = "/"
            })
            .catch(err => {
                alert(err)
            })
            
        })
        .catch(err => {
            alert(err)
        })
        
    }


    Signup = (username, password) => {
        var path = 'signup/'
        const data = {
            'username' : username,
            'password' : password
        }
        const config = {
            'headers' : {
                'Content-Type': 'application/json'
            }
        }
        ApiConnect.post(path, data, config)
        .then(res => {
            alert('登録しました');
            window.location.href = "/"
        })
        .catch(err => {
            alert(err)
        })
    }


    Signout = () => {
        localStorage.clear();
        alert('サインアウトしました');
        window.location.href = "/"
    }

}

export default new UserAuth();