export const Comments = ({ comments, setModal }) => {
    return (
        <div className='modal-conteiner'>
            <button id="myBtn">Open Modal</button>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={()=>setModal(false)}>&times;</span>
                    {comments.length? comments.map(c => {
                        const { owner, message, publishDate } = c;
                        const { firstName, lastName, email } = owner;
                        return (
                            <div>
                                <h3>Comment by {firstName + ' ' + lastName}</h3>
                                <h4>written on {publishDate}</h4>
                                <p style={{color: 'blue'}}>{message}</p>
                                <h5>{email}</h5>
                                <hr></hr>
                            </div>
                        )
                    }): <h2>There is no any comment</h2>}
                    
                </div>
            </div>
        </div>
    )
}