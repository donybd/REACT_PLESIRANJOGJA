import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import mainImage from "..//assets/img/RENTAL/depan.png";
import { Link } from "react-router-dom";

const PersonalData = () => {
	return (
		<div className="personal-data">
			<div className="data-header">
				<span className="number">2.</span>
				<h2>Personal Data</h2>
			</div>
			<div className="data-body">
				<form>
					<label for="name">Full Name :</label>
					<input type="text" id="name" name="name" required />

					<label for="email">Email Address :</label>
					<input type="email" id="email" name="email" required />

					<label for="phone">Phone Number :</label>
					<input type="tel" id="phone" name="phone" required />

					<Link className="next-button" type="submit" to={`/rent-booking-4`}>Next</Link>
				</form>
			</div>
		</div>
	);
}

const Accordian = () => {
	return (
		<>
			<div className="accordion">
				<div className="accordion-item">
					<button className="accordion-header">
						<span className="number">1.</span>
						<span className="title">Detail Reservation</span>
						{/* <i className="fas fa-caret-down"></i> */}
					</button>
				</div>
			</div>
			<PersonalData/>
			<div className="accordion">
				<div className="accordion-item">
					<button className="accordion-header">
						<span className="number">3.</span>
						<span className="title">Payment</span>
						{/* <i className="fas fa-caret-down"></i> */}
					</button>
				</div>
			</div>
		</>
	);
}
const DetailPaymentRent3 = () => {
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

export default DetailPaymentRent3;