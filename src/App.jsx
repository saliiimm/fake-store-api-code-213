import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from './components/AppBar/AppBar';
import DrawerHeader from './components/DrawerHeader/DrawerHeader';
import axios from 'axios';
import Main from './components/Main/Main';
import SideBarMenu from './components/SideBarMenu/SideBarMenu';
import Store from './components/Store/Store';
import { IoStorefrontOutline } from 'react-icons/io5';
function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState('https://fakestoreapi.com/products');

  const fetchCategories = async () => {
    const response = await axios.get(
      'https://fakestoreapi.com/products/categories'
    );
    console.log('categories', response);
    setCategories(response.data);
  };

  const setCategory = (category) => {
    if (category !== 'All the products') {
      setUrl(`https://fakestoreapi.com/products/category/${category}`);
    } else {
      setUrl('https://fakestoreapi.com/products');
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(url);
        console.log(response);
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
    fetchProducts();
  }, [url]);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar style={{ gap: '15px', alignItems: 'center', display: 'flex' }}>
          <IoStorefrontOutline size={30} />

          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{ fontFamily: 'Signika Negative' }}
          >
            Code213 Store
          </Typography>
        </Toolbar>
      </AppBar>
      <SideBarMenu categories={categories} setCategory={setCategory} />
      <Main open={open}>
        <DrawerHeader />
        <Store products={products} />
      </Main>
    </Box>
  );
}

export default App;
