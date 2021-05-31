const Button = ({name, classnames}) => {
    return ( 
        <button className={`${classnames} mr-10 bg-green-600 rounded-md pt-1 pr-5 pl-5 pb-1`}>{name}</button>
     );
}
 
export default Button;