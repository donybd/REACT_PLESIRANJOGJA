

const BannerHotel = () => {
	return (
		<section className="hero-hotel-payment">
      <div className="hero-text">
        <h1>HOTEL TENTREM YOGYAKARTA</h1>
        <p><i className="fas fa-info-circle"></i> Payment Information</p>
        <div className="booking-info">
          <div className="date">
            <i className="fas fa-calendar-alt"></i>
            November 10 - November 11
            <i className="fas fa-caret-down"></i>
          </div>
          <div className="rooms m-0">
            <i className="fas fa-user"></i>
            <select className="room-selector">
              <option>1 Room, 1 Adult</option>
              <option>1 Room, 2 Adults</option>
              <option>2 Rooms, 2 Adults</option>
              <option>2 Rooms, 3 Adults</option>
              <option>2 Rooms, 4 Adults</option>
              <option>3 Rooms, 5 Adults</option>
            </select>
            <i className="fas fa-caret-down"></i>
          </div>
        </div>
      </div>
    </section>
	);
}

export default BannerHotel;