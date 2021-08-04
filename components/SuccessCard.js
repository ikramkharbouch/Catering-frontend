const SuccessCard = ({message}) => {
    return ( <>
        <div className="success-card mb-10 mx-auto mt-10">
            <p className="font-medium p-2.5">{message}</p>
        </div>
    </> );
}
 
export default SuccessCard;