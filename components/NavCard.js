import Button from './Button'
import Link from 'next/link'

const NavCard = ({ title, subtitle, image, btn, id, link }) => {
    return (
      <>
        <div className="card shadow-sm border border-green-600 rounded-md relative" key={id}>
        <img src={image} width="100px" height="100px" className="mx-auto mt-5"/>
        <div className="absolute inset-x-0 bottom-4 p-5">
            <h1 className="text-xl font-bold mx-4">{title}</h1>
            <p className="text-sm mt-2 mx-4">{subtitle}</p>
            <Link href={`/${link}`}><a><Button name={btn} classnames="mt-8 text-white"/></a></Link>
        </div>
    </div>
      </>
    );
  };
  
  export default NavCard;