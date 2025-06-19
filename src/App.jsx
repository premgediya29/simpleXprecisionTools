import { Route, Routes } from "react-router-dom";
import HomePage from "./Component/Pages/HomePage";
import AboutUsPage from "./Component/Pages/AboutUsPage";
import ContactUsPage from "./Component/Pages/ContactUsPage";
import ProductPage from "./Component/Pages/ProductPage";
import NotFoundPage from "./Component/Pages/NotFoundPage";
import ProductDescriptionPage from "./Component/Pages/ProductDescriptionPage";
import GalleryPageComponent from "./Component/Pages/GalleryPageComponent";


function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/Products" element={<ProductPage />} />
        <Route path="/Product/:SKU" element={<ProductDescriptionPage />} />
        <Route path="/Gallery" element={<GalleryPageComponent />} />
      </Routes>
    </>
  );
}

export default App;
