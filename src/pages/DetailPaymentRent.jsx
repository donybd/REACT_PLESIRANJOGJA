import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import mainImage from "..//assets/img/RENTAL/depan.png";
import { Link } from "react-router-dom";


const Accordian = () => {
	return (
		<div className="accordion">
			<Link to={`/rent-booking-2`} className="room-link">
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

const DetailPaymentRent = () => {
	return (
		<>
			<Navbar />
			<section className="rentinfo" style={{ marginTop: "150px" }}>
				<div className="container my-5">
					<div className="row">
						{/* Left Section (Images, Info, Pickup Location) */}
						<div className="col-md-12">
							{/* Car Images */}
							<div className="car-images mb-4">
								<img
									src={mainImage}
									className="img-fluid main-image h-auto"
									alt="Main Car Image"
								/>
							</div>
							<Accordian/>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default DetailPaymentRent;