import React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import executiveSuite from "../assets/img/HOTEL/executive suite.jpg";
import premierRoom from "../assets/img/HOTEL/premier room.jpg";
import deluxeRoom from "../assets/img/HOTEL/deluxe room.jpg";
import facility1 from "../assets/img/HOTEL/facility1.jpg";
import facility2 from "../assets/img/HOTEL/facility2.jpg";
import facility3 from "../assets/img/HOTEL/facility3.jpg";
import facility4 from "../assets/img/HOTEL/facility4.jpg";
import facility5 from "../assets/img/HOTEL/facility5.jpg";
import facility6 from "../assets/img/HOTEL/facility6.jpg";
import userLogo from "../assets/img/HOTEL/logo user.png";

import "../styles/detail-hotel.css";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="hero">
    <div className="hero-text">
      <div className="star-rating">★★★★★</div>
      <h3>LUXURY HOTEL AND RESORT</h3>
      <h1>THE BEST LUXURY HOTEL IN YOGYAKARTA</h1>
      <div className="booking-form">
        <div className="form-group">
          <label htmlFor="check-in">Check-in</label>
          <input type="date" id="check-in" placeholder="dd/mm/yy" />
        </div>
        <div className="form-group">
          <label htmlFor="check-out">Check-out</label>
          <input type="date" id="check-out" placeholder="dd/mm/yy" />
        </div>
        <div className="form-group">
          <label htmlFor="rooms">Rooms</label>
          <select id="rooms">
            <option>1 Rooms</option>
            <option>2 Rooms</option>
            <option>3 Rooms</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="guests">Guests</label>
          <select id="guests">
            <option>1 Adult, 0 Child</option>
            <option>1 Adult, 1 Child</option>
            <option>2 Adults, 1 Child</option>
            <option>2 Adults, 2 Children</option>
            <option>3 Adults, 1 Child</option>
          </select>
        </div>
        <button className="book-now-btn">Book Now</button>
      </div>
    </div>
  </section>
);

const Rooms = () => (
  <section className="rooms">
    <h2>TENTREM'S ROOMS & SUITES</h2>
    <div className="room-cards">
      {[
        {
          image: executiveSuite,
          name: "Executive Suite",
          maxGuest: "2 adults & 2 child / 3 adults & 1 child",
          price: "5,782,000 IDR",
        },
        {
          image: premierRoom,
          name: "Premier Rooms",
          maxGuest: "2 adults & 2 child / 3 adults & 1 child",
          price: "2,432,000 IDR",
        },
        {
          image: deluxeRoom,
          name: "Deluxe Rooms",
          maxGuest: "2 adults & 2 child / 3 adults & 1 child",
          price: "1,982,000 IDR",
        },
      ].map((room, index) => (
        <div className="room-card" key={index}>
          <Link to={`/detail-room`}>
            <img src={room.image} alt={room.name} />
            <h3 className="clickable">{room.name}</h3>
            <p>
              <strong>Max. guest</strong>
            </p>
            <p>{room.maxGuest}</p>
            <p>
              <strong>AVAILABLE FROM {room.price}</strong>
            </p>
            <div className="star-rating">★★★★★</div>
          </Link>
        </div>
      ))}
    </div>
  </section>
);

const Facilities = () => (
  <section className="facilities mt-2">
    <h2>OUR FACILITIES</h2>
    <div className="facility-images">
      {[facility1, facility2, facility3, facility4, facility5, facility6].map((facility, index) => (
        <img src={facility} alt={`Facility ${index + 1}`} key={index} />
      ))}
    </div>
  </section>
);

const Location = () => (
  <section className="location">
    <h2>LOCATION HOTEL</h2>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.150983660013!2d110.36590257358016!3d-7.773809977115957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a58485d4d2de1%3A0x59986450d810f006!2sHotel%20Tentrem%20Yogyakarta!5e0!3m2!1sen!2sid!4v1730739001900!5m2!1sen!2sid"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </section>
);

const Reviews = () => (
  <div className="reviews">
    <h2>REVIEWS</h2>
    <div className="review-overview">
      <div className="score-details">
        <h3>5.00</h3>
        <p>3,422 Reviews</p>
      </div>
      <div className="stars">★★★★★</div>
    </div>
    <div className="review-list">
      {[
        {
          name: "Voyage47858908110",
          date: "October 2024",
          text: "Truly a 5 Star Experience in Yogya! Spacious clean room, tasty food, and friendly smiles!",
        },
        {
          name: "Dipta N",
          date: "September 2024",
          text: "Perfect! Best moment with kayumanis all perfect and best service with niken and dewi all good.",
        },
        {
          name: "Quest39477093230",
          date: "September 2024",
          text: "Nice Fragrant Hotel, Excellent Service, Good Restaurant. Plenty of food variants, Worth it values.",
        },
      ].map((review, index) => (
        <div className="review-item" key={index}>
          <div className="review-details">
            <div className="reviewer">
              <img src={userLogo} alt="Reviewer" />
              <div>
                <h4>{review.name}</h4>
                <p className="review-date">{review.date}</p>
              </div>
            </div>
            <span className="stars">★★★★★</span>
          </div>
          <p className="review-text">{review.text}</p>
          <div className="helpful">Helpful? Yes</div>
        </div>
      ))}
    </div>
  </div>
);

const DetailHotel = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Rooms />
      <Facilities />
      <Location />
      <Reviews />
      <Footer />
    </>
  );
};

export default DetailHotel;
