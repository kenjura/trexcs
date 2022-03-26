import './Modal.scss';


export default function Modal({ children, isShown, onClose, title }) {
    const onClickModal = () => {
        onClose();
    }

    return <div class="modal" is-shown={isShown.toString()}>
        <div class="modal-background" onClick={onClickModal}></div>
        <div class="modal-foreground">
            <div class="modal-title">{title}</div>
            {children}
        </div>
    </div>
}