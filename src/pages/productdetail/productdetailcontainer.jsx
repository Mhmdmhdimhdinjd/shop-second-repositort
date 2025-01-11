import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/reducers/CartReducer';
import Productdetailcomponents from '../../components/productdetails/podectdetailcomponent';

const ProductDetailscontainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the data!', error);
            });
    }, [id]);

    const addToCart = (product) => {

        dispatch(addItem(product))
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (

        <>

            <Paper elevation={3} style={{ borderRadius: '30px' }}>
                <Box p={4} color="gray">
                    <Typography>{product.category}</Typography>
                </Box>

                <Productdetailcomponents addToCart={addToCart} product={product}/>

            </Paper>


        </>

    )
}

export default ProductDetailscontainer