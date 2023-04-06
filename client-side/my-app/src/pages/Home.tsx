import Slider from "../components/slider/Slider";
import Layout from "../components/Layout";
import CategoryTab from "../components/tab/Tab";
import Arrival from "../sections/arrival/Arrival";
import { person_tabs, product_tabs } from "../data/Constants";
import { useSelector } from "react-redux";
import ReviewCard from "../sections/reviewCard/ReviewCard";
import ImageSlider from "../components/imageSlider/ImageSlider";
import CategorySlider from "../components/categoryTab/CategoryTab";
import ImageListt from "../sections/ImageListComponent/ImageList";
import { RootState } from "../store/store";
import { productLists } from "../data/ProductsContant";

// mui imports
import { Box, Button, Typography } from "@mui/material";
import GuestGuard from "../routes/GuestGuard";
import { assets } from "../assets";
import Advertise from "../sections/advertise/advertise";
import ImageGrid from "../sections/imageGrid/ImageGrid";
import CategoryGrid from "../sections/categorygrid/CategoryGrid";

function Home() {
  const { Products } = useSelector((state: RootState) => state.product);

  return (
    <GuestGuard>
      <Box>
        <Box
          sx={{
            backgroundImage: `url(${assets.images.background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            opacity: 0.85,
            height: {
              xl: "750px",
              lg: "620px",
              md: "500px",
              sm: "410px",
              xs: "235px",
            },
          }}
        >
          <Layout>
            <Box maxWidth="1600px" sx={{ mx: "auto" }}>
              <Box sx={{ mt: { xl: 7, zIndex: -1 } }}>
                <Typography
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      xl: "39px",
                      lg: "35px",
                      md: "32px",
                      sm: "30px",
                    },
                    fontWeight: 400,
                    color: "#424242",
                  }}
                >
                  With an outstanding style, only for you
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Jost",
                    fontSize: {
                      xl: "95px",
                      lg: "80px",
                      md: "65px",
                      sm: "50px",
                      xs: "22px",
                    },
                    fontWeight: 700,
                    color: "#212121",
                  }}
                >
                  {" "}
                  Exclusively designed for you
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  maxWidth: "90%",
                  mx: "auto",
                  mt: { xl: 7, xs: 4 },
                }}
              >
                <Box
                  sx={{
                    backgroundImage: `url(${assets.images.ForHer})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "100%",
                    // backgroundPosition: "center center",
                    height: {
                      xl: "700px",
                      lg: "650px",
                      md: "460px",
                      sm: "345px",
                      xs: "160px",
                    },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    sx={{
                      background: "#FFFFFF",
                      width: {
                        xl: "256px",
                        lg: "256px",
                        md: "256px",
                        sm: "185px",
                        xs: "64px",
                      },

                      fontFamily: "Josefin Sans",
                      fontSize: { xl: 20, lg: 20, md: 20, sm: 15, xs: 8 },
                      color: "#424242",
                      fontWeight: 700,
                    }}
                  >
                    For Her
                  </Button>
                </Box>
                <Box
                  sx={{
                    backgroundImage: `url(${assets.images.ForHim})`,
                    backgroundSize: "cover",
                    // backgroundPosition: "center center",
                    width: "100%",
                    height: {
                      xl: "700px",
                      lg: "650px",
                      md: "460px",
                      sm: "345px",
                      xs: "160px",
                    },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    sx={{
                      background: "#FFFFFF",
                      width: {
                        xl: "256px",
                        lg: "256px",
                        md: "256px",
                        sm: "185px",
                        xs: "64px",
                      },

                      fontFamily: "Josefin Sans",
                      fontSize: { xl: 20, lg: 20, md: 20, sm: 15, xs: 8 },
                      color: "#424242",
                      fontWeight: 700,
                    }}
                  >
                    For Him
                  </Button>
                </Box>
              </Box>

              <Box
                sx={{
                  mt: 12,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ fontFamily: "Jost", fontSize: "39px", fontWeight: 700 }}
                >
                  Best Deals
                </Typography>
                <Slider bestDeals={productLists} />
              </Box>

              <Advertise
                title="Exclusive collection 2021"
                subtitle="Be exclusive"
                message="The best everyday option in a Super Saver range within a reasonable price. It is our responsibility to keep you
                100 percent stylish. Be smart & trendy with us."
                buttontitle="Explore"
                image={assets.images.womenStanding}
              />
              <Box>
                <CategoryGrid />
              </Box>
              <Box>
                <Arrival />
              </Box>
              <Box sx={{ mt: 12, mb: 9 }}>
                <Typography
                  variant="h3"
                  sx={{ fontFamily: "Jost", fontSize: "39px", fontWeight: 700 }}
                >
                  Shop By Category
                </Typography>

                <Box sx={{ mt: 7, mb: 7 }}>
                  <CategoryTab tabs={person_tabs} />
                </Box>
                <Box>
                  <CategoryTab tabs={product_tabs} />
                </Box>
                <Box>
                  <CategorySlider bestDeals={Products} />
                </Box>
              </Box>
              <Box>
                <ImageGrid />
              </Box>
              <Box sx={{ mt: 12 }}>
                <Box>
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: "Jost",
                      fontSize: "39px",
                      fontWeight: 700,
                    }}
                  >
                    Best Sellers
                  </Typography>
                </Box>
                <Slider bestDeals={productLists} />
              </Box>
              <Box
                sx={{
                  maxWidth: "90%",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                  mx: "auto",
                }}
              >
                <ImageListt />
              </Box>

              <Advertise
                subtitle="Gentle Formal Looks "
                message="We provide the top formal apparel package to make your job look confident
                and comfortable. Stay connect."
                buttontitle="Explore Collection"
                image={assets.images.formal}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  maxWidth: "90%",
                  mx: "auto",
                }}
              >
                <ReviewCard />
              </Box>
              <Box>
                <ImageSlider />
              </Box>
              {/* enter code above */}
            </Box>
          </Layout>
        </Box>
      </Box>
    </GuestGuard>
  );
}

export default Home;
