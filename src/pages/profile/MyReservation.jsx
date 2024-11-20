import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import React from 'react';
import hotelImage from '../../assets/img/HOTEL/hotel-tentrem-yogyakarta.jpg';
import "../../styles/reservation.css";

const MyReservation = () => {
	return (
		<>
		<Navbar/>
		<section className="reservation" style={{ marginTop: "150px" }}>
      <div className="container my-5">
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3">
            <div className="sidebar" style={{ width: "300px" }}>
              <div className="list-group">
                <div className="list-group-item bg-secondary text-white">My Booking</div>
                <a href="#" className="nav-link">
                  <i className="fas fa-suitcase me-2"></i> Trip
                </a>
                <a href="#" className="nav-link active">
                  <i className="fas fa-hotel me-2"></i> Hotel
                </a>
                <a href="#" className="nav-link">
                  <i className="fas fa-car me-2"></i> Rent
                </a>
                <a href="#" className="nav-link">
                  <i className="fas fa-undo me-2"></i> Refunds
                </a>
                <a href="#" className="nav-link">
                  <i className="fas fa-bell me-2"></i> Notification
                </a>
              </div>
            </div>
          </div>

          {/* Hotel Cards */}
          <div className="col-md-9">
            {/* Booked Hotel */}
            <div className="hotel-card position-relative">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={hotelImage}
                    alt="Hotel Tentrem"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-8">
                  <div className="text-end mt-2">
                    <span className="status-badge status-booked">Booked</span>
                  </div>
                  <div className="detail">
                    <h5 className="namahotel mb-1">Hotel Tentrem Yogyakarta</h5>
                    <p className="alamat hotel mb-1">
                      <i className="fas fa-map-marker-alt"></i> Jl. P. Mangkubumi
                      72A, Yogyakarta 55233 Indonesia
                    </p>
                    <p className="cekin hotel mb-1">Check-In : 10 November 2024</p>
                    <p className="cekout hotel">Check-Out : 11 November 2024</p>
                  </div>
                  <div className="text-end">
                    <button className="btn btn-cancel" style={{ borderRadius: "0px" }}>Cancel</button>&nbsp;
                    <button className="btn btn-details" style={{ borderRadius: "0px" }}>Detail</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Completed Hotel */}
            <div className="hotel-card position-relative">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src={hotelImage}
                    alt="Hotel Tentrem"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-8">
                  <div className="text-end mt-2">
                    <span className="status-badge status-completed">
                      Completed
                    </span>
                  </div>
                  <h5 className="namahotel mb-1">Hotel Tentrem Yogyakarta</h5>
                  <p className="alamat hotel mb-1">
                    <i className="fas fa-map-marker-alt"></i> Jl. P. Mangkubumi
                    72A, Yogyakarta 55233 Indonesia
                  </p>
                  <p className="cekin hotel mb-1">Check-In : 10 November 2024</p>
                  <p className="cekout hotel">Check-Out : 11 November 2024</p>
                  <div className="text-end mt-2">
                    <button className="btn btn-review" style={{ borderRadius: "0px" }}>Add Review</button>&nbsp;
                    <button className="btn btn-details" style={{ borderRadius: "0px" }}>Detail</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
		<Footer/>
		</>
	);
}

export default MyReservation;