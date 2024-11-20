import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";
import BannerHotel from "./sections/hotel/BannerHotel";
import "../styles/hotel-payment-detail-2.css";
import { Link } from "react-router-dom";

const ReservationDetail = () => {
	return (
		<div className="reservation-detail">
			<div className="detail-header">
				<span className="number">1.</span>
				<h2>Detail Reservation</h2>
				<span className="price">5.782.000 IDR</span>
			</div>
			<div className="detail-body">
				<h3>Executive Suite - 2 Adults</h3>
				<p>Date Reservation: 10 November 2024 to 11 November 2024</p>
				<p>Check-in from: 3:00 PM</p>
				<p>Check-in before: 12:00 PM</p>

				<h4>Room Detail</h4>
				<p>Executive Suite King</p>
				<p>Bedding Options: King</p>
				<p>Breakfast included: Tentrem Breakfast</p>
			</div>
			<Link className="next-button" to={`/detail-hotel-payment-3`}>Next</Link>
		</div>
	);
}

const Accordian = () => {
	return (
		<div className="accordion">
			<div className="accordion-item">
				<button className="accordion-header">
					<span className="number">2.</span>
					<span className="title">Personal Data</span>
					{/* <i className="fas fa-caret-down"></i> */}
				</button>
			</div>
			<div className="accordion-item">
				<button className="accordion-header">
					<span className="number">3.</span>
					<span className="title">Payment</span>
					{/* <i className="fas fa-caret-down"></i> */}
				</button>
			</div>
		</div>
	);
}

const DetailPaymentHotel2 = () => {
	return (
		<>
			<Navbar />
			<BannerHotel />
			<ProgressBar />
			<ReservationDetail/>
			<Accordian />
			<Footer />
		</>
	);
}

export default DetailPaymentHotel2;