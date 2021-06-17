const Button = ({name, classnames}) => {
    return ( 
        <button className={`rounded-md pt-1 pr-5 pl-5 pb-1 ${classnames}`}>{name}</button>
     );
}
 
export default Button;