import { useOutletContext } from "react-router-dom"
import Loading from '../components/Loading'
import Product from "../components/Product"
import Api from '../components/Api'
const ShopPage = () => {

  const {url} = useOutletContext()
  const  {data, loading, error} = Api(url)
  data && console.log(data)
  loading && console.log('Loading...')
  error && console.log('Error message: ', error)
  
    return (
      <div className="pageContainer">
        <div className="loading-error">
          {loading && (
            <>
              <Loading />
            </>
          )}
          {error && <h1>{error}</h1>}
        </div>
        <div className="productsContainer">
          {data && data.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
        
      </div>
    )
  }
  
  export default ShopPage