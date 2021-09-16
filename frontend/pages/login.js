import { useEffect, useState } from 'react'
import Axios from 'axios'
import UserAuth from '../components/UserAuth';

export default function Home() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (e) => {
        setUsername(() => e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(() => e.target.value)
    }

    function Signin(username, password) {
        UserAuth.Signin(username, password);
        
    }

    return (
        <div className="container h-100">
            <div className="row">
                <h1 className="h3 font-weight-normal">ログイン</h1>
                <form>
                    <label for="username" class="sr-only"></label>
                    <input className="form-control" id="username" type="text" name="username" placeholder="username" value={username} onChange={handleUsername}/>
                    <label for="password" className="sr-only"></label>
                    <input className="form-control" id="password" type="password" name="password" placeholder="password" value={password} onChange={handlePassword}/>
                    <input className="btn btn-outline-primary my-1" type="button" value="Sign In" onClick={()=>Signin(username, password)}/>
                </form>
            </div>
            <div>
                <p>新規登録は<a href="./newentry">こちら</a></p>
            </div>
        </div>
    )
}
