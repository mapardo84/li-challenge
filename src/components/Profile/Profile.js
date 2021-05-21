import './Profile.css'

export const Profile = ({ owner, setModal }) => {
    const { title, firstName, lastName, picture, email, id } = owner;

    return (
        <div className='modal-conteiner'>
            <button id="myBtn">Open Modal</button>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={()=>setModal(false)}>&times;</span>
                    <h3>{title} {firstName} {lastName}</h3>
                    <img id='picture-profile' src={`${picture}`} alt='' height='20%' width='40%'/>
                    <h4>{email}</h4>
                </div>
            </div>
        </div>
    )
}