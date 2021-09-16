import { useState } from "react"
import ApiConnect from "./ApiConnect"
import UserAuth from "./UserAuth"

function ReplyCard(props){
    const [favs, setFavs] = useState(props.reply.likes)
    const [faved, setFaved] = useState(false)

    function clicked(){
        // TODO：Likeが動かない場合は表示切り替えだけのハリボテにする
        // var path = 'predict/like/';
        // var data = {
        //     like: faved,
        //     predic_id: props.predict.prediction_id,
        //     user_id: UserAuth.get('user_id'),
        // }
        // ApiConnect(path, data)
        // .then(
        //     res => {
        //         alert('正常にリクエストが送信されました')
        //         console.log(res)
        //     }
        // ).catch(
        //     err => {
        //         alert('エラーが発生しました')
        //     }
        // )

        if (faved){
            setFavs(favs-1)
            setFaved(!faved)
        } else {
            setFavs(favs+1)
            setFaved(!faved)
        }
    }

    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.reply.user_name}</h5>
                <p className="card-text">{props.reply.content}</p>

                {faved ?
                <button className="btn btn-crimson" type="button" onClick={()=>{clicked()}}><i className="bi bi-hand-thumbs-up"></i>&nbsp;{favs}</button>
                :
                <button className="btn btn-outline-crimson" type="button" onClick={()=>{clicked()}}><i className="bi bi-hand-thumbs-up"></i>&nbsp;{favs}</button>
                }
            </div>
        </div>
    )
}

export default ReplyCard;