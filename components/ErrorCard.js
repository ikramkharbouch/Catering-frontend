const ErrorCard = ({error}) => {
    return ( <>
        <div className="error-card mb-10">
            <p className="font-medium p-2.5">{error}</p>
        </div>
    </> );
}
 
export default ErrorCard;