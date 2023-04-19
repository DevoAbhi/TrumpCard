import modalContext from "./modalContext"

const modalState = (props) => {
    return (
        <modalState.provider>
            {props.children}
        </modalState.provider>
    )
}

export default modalState;