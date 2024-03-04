export class Modal extends React.Component{
    render(){
        if(this.props.show == true){
            return(
                <>
                    <div id="fade"></div>
                    <div id="modal">
                        <div className="modalHeader">
                            <button id="close-modal"></button>
                        </div>
                    <div className="modal-body"></div>
                    </div>
                </>
            )
        }
    }   
}