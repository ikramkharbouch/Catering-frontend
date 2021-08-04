const ErrorCard = ({message}) => {
    return ( <>
        <div className="success-card mb-10">
            <p className="font-medium p-2.5">{message}</p>
        </div>
    </> );
}
 
export default ErrorCard;