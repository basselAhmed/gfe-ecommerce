import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './challenges/navbar/NavBar'
import ProductDetailsSection from './challenges/product-details-section/ProductDetailsSection'
import ProductReviews from './challenges/product-reviews/ProductReviews'
import ProductSpecificationsSection from './challenges/product-specifications-section/ProductSpecificationsSection'
import ProductGridSection from './challenges/product-grid-section/ProductGridSection'
import Footer from './challenges/footer/Footer'
import ProductDetailsPage from './challenges/product-details-page/ProductDetailsPage'
import CollectionsGridSection from './challenges/collections-grid-section/CollectionsGridSection'
import ProductListingSection from './challenges/product-listing-section/ProductListingSection'
import StorefrontPage from './challenges/storefront-page/StorefrontPage'
import ShoppingCartSection from './challenges/shopping-cart-section/ShoppingCartSection'
import CheckoutSection from './challenges/checkout-section/CheckoutSection'
import OrderSuccessSection from './challenges/order-success-section/OrderSuccessSection'
import EcommerceWebsite from './challenges/ecommerce-website/EcommerceWebsite'
import FooterCredits from './components/FooterCredits'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-linear-to-b from-gray-50 to-[#d2d6db]">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/navbar" element={<NavBar />} />
            <Route
              path="/product-details-section"
              element={<ProductDetailsSection />}
            />
            <Route path="/product-reviews" element={<ProductReviews />} />
            <Route
              path="/product-specifications-section"
              element={<ProductSpecificationsSection />}
            />
            <Route
              path="/product-grid-section"
              element={<ProductGridSection />}
            />
            <Route path="/footer" element={<Footer />} />
            <Route
              path="/product-details-page"
              element={<ProductDetailsPage />}
            />
            <Route
              path="/collections-grid-section"
              element={<CollectionsGridSection />}
            />
            <Route
              path="/product-listing-section"
              element={<ProductListingSection />}
            />
            <Route path="/storefront-page" element={<StorefrontPage />} />
            <Route
              path="/shopping-cart-section"
              element={<ShoppingCartSection />}
            />
            <Route path="/checkout-section" element={<CheckoutSection />} />
            <Route
              path="/order-success-section"
              element={<OrderSuccessSection />}
            />
            <Route path="/ecommerce-website" element={<EcommerceWebsite />} />
          </Routes>
        </div>
        <FooterCredits />
      </div>
    </BrowserRouter>
  )
}

export default App
