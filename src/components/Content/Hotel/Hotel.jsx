import styles from './Hotel.module.css';

const Hotel = ({onAddHotelClick, updateHotel}) => {
  const handleUpdateHotel = () => {
    // Navigasi ke halaman UpdateHotel
    updateHotel();
  };

  return (
    <>
      <div className={styles.tableContainer}>
        <h2>All Hotel</h2>
        <a
          href="#"
          className={styles.addNewBtn}
          onClick={(e) => {
            e.preventDefault(); // Mencegah reload halaman
            onAddHotelClick(); // Panggil fungsi untuk mengubah konten
          }}>
          <i className="fas fa-plus"> </i> Add New
        </a>
        <table>
          <thead>
            <tr>
              <th>Hotel Images</th>
              <th>Hotel Name</th>
              <th>Address</th>
              <th>Ratings</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img alt="Hotel Tentrem Yogyakarta" height="50" src="/src/assets/img/Hotel Tentrem Yogyakarta.jpeg" width="50" />
              </td>
              <td>Hotel Tentrem Yogyakarta</td>
              <td>Jl. P. Mangkubumi 72A, Yogyakarta 55233 Indonesia</td>
              <td>*****</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Artotel Suites Bianti Yogyakarta" height="50" src="/src/assets/img/Artotel Suites Bianti Yogyakarta.jpeg" width="50" />
              </td>
              <td>Artotel Suites Bianti Yogyakarta</td>
              <td>Jl. Urip Sumoharjo 37, Yogyakarta 55222 Indonesia</td>
              <td>***</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Plaosan Temple Tour" height="50" src="/src/assets/img/L Hotel Yogyakarta Malioboro.jpeg" width="50" />
              </td>
              <td>Hotel Yogyakarta Malioboro</td>
              <td>Jl. Dagen No 06, Yogyakarta 55271 Indonesia</td>
              <td>****</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="1o1 Style Yogyakarta Malioboro" height="50" src="/src/assets/img/1o1 Style Yogyakarta Malioboro.jpeg" width="50" />
              </td>
              <td>1o1 Style Yogyakarta Malioboro</td>
              <td>Jl. Gajah Mada No. 30, Yogyakarta 55166 Indonesia</td>
              <td>*</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="GAIA Cosmo Hotel" height="50" src="/src/assets/img/GAIA Cosmo Hotel.jpeg" width="50" />
              </td>
              <td>GAIA Cosmo Hotel</td>
              <td>Jl. Ipda Tut Harsono No. 16, Yogyakarta 55165 Indonesia</td>
              <td>*****</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Aveta Hotel Malioboro" height="50" src="/src/assets/img/Artotel Suites Bianti Yogyakarta.jpeg" width="50" />
              </td>
              <td>Aveta Hotel Malioboro</td>
              <td>Jalan Malioboro No. 42, Yogyakarta 55213 Indonesia</td>
              <td>**</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Hotel Neo Malioboro" height="50" src="/src/assets/img/Hotel Neo Malioboro.jpeg" width="50" />
              </td>
              <td>Hotel Neo Malioboro</td>
              <td>Jl. Pasar Kembang No. 21, Yogyakarta 55271 Indonesia</td>
              <td>*****</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Ibis Styles Yogyakarta" height="50" src="/src/assets/img/Ibis Styles Yogyakarta.jpeg" width="50" />
              </td>
              <td>Ibis Styles Yogyakarta</td>
              <td>Jl. Dagen no. 109, Yogyakarta 55271 Indonesia</td>
              <td>*****</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Favehotel Malioboro Yogyakarta" height="50" src="/src/assets/img/Favehotel Malioboro Yogyakarta.jpeg" width="50" />
              </td>
              <td>Favehotel Malioboro Yogyakarta</td>
              <td>Jl. I Dewa Nyoman Oka no. 30, Yogyakarta 55224 Indonesia</td>
              <td>***</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Zest Hotel Yogyakarta" height="50" src="/src/assets/img/Zest Hotel Yogyakarta.jpeg" width="50" />
              </td>
              <td>Zest Hotel Yogyakarta</td>
              <td>Jl. Gajah Mada No.28, Yogyakarta 55112 Indonesia</td>
              <td>***</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Kotta Go Yogyakarta" height="50" src="/src/assets/img/Kotta Go Yogyakarta.jpeg" width="50" />
              </td>
              <td>Kotta Go Yogyakarta</td>
              <td>Jl. Pangeran Diponegoro No. 87, Yogyakarta 55231 Indonesia</td>
              <td>**</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
            <tr>
              <td>
                <img alt="Kotta Go Yogyakarta" height="50" src="/src/assets/img/Royal Malioboro Yogyakarta.jpeg" width="50" />
              </td>
              <td>Kotta Go Yogyakarta</td>
              <td>Jl. Pangeran Diponegoro No. 87, Yogyakarta 55231 Indonesia</td>
              <td>**</td>
              <td className={styles.actions}>
                <i className="fas fa-eye"> </i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-edit" onClick={handleUpdateHotel}></i>
              </td>
              <td className={styles.actions}>
                <i className="fas fa-trash"> </i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Hotel;
