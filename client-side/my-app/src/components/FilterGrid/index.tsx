import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { productActions } from '../../store/product/product.slice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import { productProps } from '../../store/product/product.types';
import WarningModel from '../WarningModel';

// images and icons import
import { assets } from '../../assets';

// mui imports
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import { cartActions } from '../../store/cart/cart.slice';
import { useTheme } from '@mui/material';

interface data {
  id: number;
  value: string;
  slug: string;
}

interface filterGridProps {
  foundGender: data;
  foundBrand: data;
  foundCategory: data;
}

const FilterGrid: React.FC<filterGridProps> = ({ foundGender, foundBrand, foundCategory }) => {
  const theme = useTheme();
  const { filter } = useSelector((state: RootState) => state.product);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [totalPage, setTotalPage] = useState<number>();
  let postPerPage: number = 9;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentposts, setCurrentPosts] = useState<productProps[]>(filter);
  const [save, setSave] = useState<string>(localStorage.getItem('isAuth') || '');
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const page = Math.ceil(filter.length / postPerPage);
    setTotalPage(page);
  }, [filter, postPerPage]);

  useEffect(() => {
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    filter.length !== 0 && setCurrentPosts(filter.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage, filter]);

  return (
    <Box>
      <Box
        sx={{
          mt: { md: -12.9, sm: -11.8, xs: 5 },
          display: 'flex',
          justifyContent: { xs: 'start' },
          ml: { xs: 4 }
        }}>
        <Typography
          sx={{
            fontFamily: 'Jost',
            fontSize: {
              lg: '44px',
              md: '40px',
              sm: '34px',
              xs: '28px'
            },
            fontWeight: 700,
            color: theme.palette.primary.dark
          }}>
          {foundGender?.value} {foundCategory?.value} {foundBrand?.value}
          {foundBrand?.value ? 'Products' : ''}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'start' },
          ml: { xs: 4 }
        }}>
        <Typography
          sx={{
            fontFamily: 'Jost',
            fontWeight: '400',
            fontSize: '20px',
            pb: 1,
            color: theme.palette.warning.light
          }}>
          {filter.length} results
        </Typography>
      </Box>

      <Box
        sx={{
          flexGrow: 1,
          ml: 4,
          mr: 6.25
        }}>
        {open && <WarningModel open={open} setOpen={setOpen} />}
        <Grid
          container
          // spacing={currentposts.length === 1 ? 1 : 4}
          spacing={4}>
          {filter.length !== 0 ? (
            currentposts.map(arr => (
              <Grid
                key={arr.id}
                item
                xl={filter.length === 1 ? 'auto' : 4}
                lg={filter.length === 1 ? 'auto' : 4}
                md={4}
                sm={6}
                xs={12}>
                <Box
                  key={arr.id}
                  sx={{
                    position: 'relative',
                    border: 1,
                    borderColor: '#E5E7EB',
                    width: { sm: currentposts.length === 1 ? '300px' : '100%', xs: '100%' },
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    dispatch(productActions.selectedProduct(arr));
                    navigate(`/itemdetailview/${arr.slug}`);
                  }}>
                  <Box>
                    {arr?.productImages?.map((image, index: number) => {
                      if (index === 0) {
                        return (
                          <Box key={image.id}>
                            <img
                              className="product_image"
                              src={image.productImage}
                              alt={image.productImage}
                              width="100%"
                              height="300px"
                            />
                          </Box>
                        );
                      } else {
                        return;
                      }
                    })}
                  </Box>

                  <Box sx={{ position: 'absolute', top: 12, right: 15 }}>
                    <img src={assets.icons.Heart_Group} alt="heartgroup" width="40px" />
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      textAlign: 'left',

                      justifyContent: 'space-between'
                    }}>
                    <Typography
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontFamily: 'Inter',
                        fontSize: {
                          lg: '30px',
                          md: '26px',
                          sm: '24px',
                          xs: '22px'
                        },
                        fontWeight: 400,

                        height: { sm: 120 },
                        pb: 1,
                        pl: 2,
                        color: theme.palette.info.dark
                      }}>
                      {arr.productName}
                    </Typography>
                    <Box
                      sx={{
                        mr: 3,
                        my: 'auto',
                        display: 'flex',
                        mt: 6
                      }}
                      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                        e.stopPropagation();
                        if (save) {
                          dispatch(cartActions.addProductToCart(arr));
                        } else {
                          setOpen(true);
                        }
                      }}>
                      <img src={assets.icons.Shopping_Cart_Vector} alt="cart" />
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      textAlign: 'left',
                      fontFamily: 'Inter',
                      fontSize: {
                        lg: '34px',
                        md: '30px',
                        sm: '28px',
                        xs: '22px'
                      },
                      pl: 1,
                      fontWeight: 400,
                      ml: { lg: '16px' },
                      color: theme.palette.primary.light
                    }}>
                    $ {arr.productCurrentPrice}
                  </Typography>
                </Box>
              </Grid>
            ))
          ) : (
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: '30px',
                fontFamily: 'Jost',
                p: 5
              }}>
              No product Found
            </Typography>
          )}
        </Grid>
        {filter.length !== 0 && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 10 }}>
            <Pagination
              sx={{
                '.MuiPaginationItem-root': {
                  border: '1px solid #D1D5DB',
                  color: theme.palette.error.dark,
                  fontSize: '20px',
                  fontWeight: 700,
                  borderRadius: 0,
                  width: '38px',
                  height: '38px'
                }
              }}
              count={totalPage}
              variant="outlined"
              shape="rounded"
              onChange={(event: React.ChangeEvent<unknown>, page: number) => {
                setCurrentPage(page);
              }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default FilterGrid;
