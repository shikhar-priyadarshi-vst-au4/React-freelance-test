export const Modal = ({ children, buttonText = "Save Changes", submitHandler = () => { } }) => {
    return <>
        <div class="modal fade modal-xl" id={"myModal"} tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        {children}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={submitHandler}>{buttonText}</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}