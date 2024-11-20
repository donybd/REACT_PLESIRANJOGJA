import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Regitser'
import Homepage from './pages/Homepage'
import Discover from './pages/Discover'
import DetailTourPrambanan from './pages/trip-tour/DetailTourPrambanan'
import PaymentPrambanan from './pages/trip-tour/PaymentPrambanan'
import ActivityPackage from './pages/trip-tour/ActivityPackage'
import TourDate from './pages/trip-tour/TourDate'
import AboutUs from './pages/AboutUs'
import Culture from './pages/Culture'
import ListBudaya from './pages/discover/ListBudaya'
import DetailBudaya from './pages/discover/DetailBudaya'
import TripTour from './pages/trip-tour/TripTour'
import Culinary from './pages/discover/Culinary'
import Hotels from './pages/Hotels'
import DetailHotel from './pages/DetailHotel'
import DetailRoom from './pages/DetailRoom'
import DetailPaymentHotel from './pages/DetailPaymentHotel'
import DetailPaymentHotel2 from './pages/DetailPaymentHotel2'
import DetailPaymentHotel3 from './pages/DetailPaymentHotel3'
import DetailPaymentHotel4 from './pages/DetailPaymentHotel4'
import HotelLastPayment from './pages/HotelLastPayment'
import Rent from './pages/Rent'
import RentDetail from './pages/RentDetail'
import Profile from './pages/profile/Profile'
import MyReservation from './pages/profile/MyReservation'
import ContactUs from './pages/ContactUs/ContactUs'
import DetailPaymentTour from './pages/DetailPaymentTour'
import DetailPaymentTour2 from './pages/DetailPaymentTour2'
import DetailPaymentTour3 from './pages/DetailPaymentTour3'
import DetailPaymentRent from './pages/DetailPaymentRent'
import DetailPaymentRent2 from './pages/DetailPaymentRent2'
import DetailPaymentRent3 from './pages/DetailPaymentRent3'
import DetailPaymentRent4 from './pages/DetailPaymentRent4'
import DetailTempat from './pages/DetailTempat'
import DetailMakanan from './pages/DetailMakanan'
import Admin from './pages/Admin/Admin'
import DestinationDetail from './pages/DestinationDetail'

function App() {
	return (
		<Routes>
			{/* auth */}
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />

			{/* homepage */}
			<Route path="/homepage" element={<Homepage />} />

			{/* discover */}
			<Route path="/discover" element={<Discover />} />
			<Route path="/discover/culture" element={<Culture />} />
			<Route path="/discover/list-budaya" element={<ListBudaya />} />
			<Route path="/discover/detail-budaya" element={<DetailBudaya />} />
			<Route path="/discover/culinary" element={<Culinary />} />
			<Route path="/discover/culinary-place" element={<DetailTempat />} />
			<Route path="/discover/culinary-food" element={<DetailMakanan />} />

			<Route path="/discover/detail-destination" element={<DestinationDetail />} />

			{/* trip-tour */}
			<Route path="/trip-tour" element={<TripTour />} />
			<Route path="/trip-tour/prambanan-temple" element={<DetailTourPrambanan />} />
			<Route path="/trip-tour/payment-prambanan-temple" element={<PaymentPrambanan />} />
			<Route path="/trip-tour/activity-package" element={<ActivityPackage />} />
			<Route path="/trip-tour/tour-date" element={<TourDate />} />

			<Route path="/detail-payment-tour" element={<DetailPaymentTour />} />
			<Route path="/detail-payment-tour-2" element={<DetailPaymentTour2 />} />
			<Route path="/detail-payment-tour-3" element={<DetailPaymentTour3 />} />


			{/* about us */}
			<Route path="/about-us" element={<AboutUs />} />

			{/* Hotel */}
			<Route path="/hotel" element={<Hotels />} />
			<Route path="/detail-hotel" element={<DetailHotel />} />
			<Route path="/detail-room" element={<DetailRoom />} />
			<Route path="/detail-hotel-payment" element={<DetailPaymentHotel />} />
			<Route path="/detail-hotel-payment-2" element={<DetailPaymentHotel2 />} />
			<Route path="/detail-hotel-payment-3" element={<DetailPaymentHotel3 />} />
			<Route path="/detail-hotel-payment-4" element={<DetailPaymentHotel4 />} />
			<Route path="/detail-hotel-payment-last" element={<HotelLastPayment />} />

			{/* rent */}
			<Route path="/rent" element={<Rent />} />
			<Route path="/rent-detail" element={<RentDetail />} />
			<Route path="/rent-booking" element={<DetailPaymentRent />} />
			<Route path="/rent-booking-2" element={<DetailPaymentRent2 />} />
			<Route path="/rent-booking-3" element={<DetailPaymentRent3 />} />
			<Route path="/rent-booking-4" element={<DetailPaymentRent4 />} />

			{/* Profile */}
			<Route path="/profile" element={<Profile />} />
			<Route path="/reservation" element={<MyReservation />} />

			{/* contact us */}
			<Route path="/contactus" element={<ContactUs />} />

			{/* admin */}
			<Route path="/admin" element={<Admin />} />

			
						
		</Routes>
	)
}

export default App
