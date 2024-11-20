import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/hotel-payment-detail-last.css";

import bcaLogo from "../assets/img/HOTEL/bca logo.png";

const HotelLastPayment = () => {
	return (
		<>
			<Navbar />
			<div class="payment" style={{ marginTop: "130px" }}>
				<h2>Payment</h2>
				<div class="payment-method">
					<h2>Choose Payment Method</h2>
					<div class="va-box">
						<div class="va-details">
							<strong>Pay Before <span class="pay-before">10 November 2024, 9:41 WIB</span></strong>
							<p>Virtual Account Number</p>
							<div class="va-number">
								<strong>8077700812345678</strong>
								<img src={bcaLogo} alt="Logo Bank" />
							</div>
							<p>Total</p>
							<p class="total">Rp7.047.560</p>
							<a href="#" class="details-link">Lihat Detail</a>
						</div>
					</div>
				</div>

				<div class="total">
					<div class="total-item">
						<strong>Total</strong>
						<strong>5.782.000 IDR</strong>
					</div>
					<div class="total-item">
						<span>Not included: VAT / Consumption tax 12%</span>
						<span>687.360 IDR</span>
					</div>
					<div class="total-item">
						<span>Not included: Service Charge 10%</span>
						<span>578.200 IDR</span>
					</div>
					<div class="total-item">
						<strong>The total amount is:</strong>
						<strong>7.047.560 IDR</strong>
					</div>
				</div>

				<div class="instructions">
					<h2>How to Pay Virtual Account BCA</h2>
					<ol>
						<li>Choose m-transfer then BCA Virtual Account</li>
						<li>Enter the Virtual Account number 8077700812345678 and select Send.</li>
						<li>Check the information on the screen.</li>
						<li>Make sure the Merchant, Total bill is correct and your username. If correct, select YES.</li>
						<li>Enter your m-BCA PIN and select OK.</li>
						<li>If a notification appears “Transaction Failed. Amount exceeds daily limit”, please repeat the transaction using KlikBCA (iBanking) or ATM</li>
					</ol>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default HotelLastPayment;