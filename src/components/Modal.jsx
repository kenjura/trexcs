import './Modal.scss';


export default function Modal({ children, isShown, onClose, title }) {
    const onClickModal = () => {
        onClose();
    }

    return <div className="modal" is-shown={isShown.toString()}>
        <div className="modal-background" onClick={onClickModal}></div>
        <div className="modal-foreground">
            <div className="modal-title">{title}</div>
            {children}
        </div>
    </div>
}