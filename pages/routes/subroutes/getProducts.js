import withAuth from '../../Auth/withAuth';

const getProducts = () => {

    const deleteData = () => {
        // delete the data
        console.log("deleted");
      };
      
    return ( <> 
        <h1>This is getProducts Page</h1>
    </> );
}
 
export default withAuth(getProducts);