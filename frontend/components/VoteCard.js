import ApiConnect from "./ApiConnect"

function VoteCard(props){
    function VoteCheck() {
        if(confirm(props.predict.user_name + " さんに投票しますか？")) {
            var path = "predict/vote/";
            var data = {
                product_id : props.predict.product_id,
                predict_id : props.predict.prediction_id,
                user_id : props.predict.user_id
            } 
            ApiConnect.post(path, data)
            .then(res => {
                alert("投票が完了しました")
                window.location.href = "/"+props.predict.product_id
                } //製品ページへ
            ).catch(err => {
                alert("送信失敗")
                console.log(err)
                }
            )
        }
        else {
            // キャンセルならアラートボックスを表示
            alert("キャンセルしました");
        }
    }

    return(
        <div className="card">
            <div className="card-body">
                 <p className="card-name">{props.predict.user_name}</p>
                <p className="card-text">{props.predict.content}</p>
                <button className="btn btn-outline-crimson" type="button" onClick={()=>VoteCheck()}>
                <img src="../images/vote.png" height='30'/>
                    　投票する
                </button>
            </div>
        </div>
    )
}

export default VoteCard;