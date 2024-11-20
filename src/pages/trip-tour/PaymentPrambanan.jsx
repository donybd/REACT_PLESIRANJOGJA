import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import '../../styles/payment/payment.css';

const Accordian = () => {
	return (
		<div className="accordion">
			<Link to={`/detail-payment-tour`} className="room-link">
				<div className="accordion-item">
					<button className="accordion-header">
						<span className="number">1.</span>
						<span className="title">Detail Reservation</span>
						{/* <i className="fas fa-caret-down"></i> */}
					</button>
				</div>
			</Link>
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

const PaymentPrambanan = () => {
	return (
		<>
			<Navbar/>
			<div className="hero-det-tour">
				<h1>Prambanan Temple</h1>
				<div className="hero-det-overlay"></div>
			</div>

			<Accordian/>
			<Footer/>
		</>
	);
}

export default PaymentPrambanan;