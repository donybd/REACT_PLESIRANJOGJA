import styles from './Rental.module.css';

const Rental = ({updateRental, onAddRentalClick}) => {
  const handleUpdate = () => {
    updateRental();
  };

  return (
    <>
      <div className={styles.content}>
        <div className={styles.tableContainer}>
          <h2>All Rental</h2>
          <a
            href="#"
            className={styles.addNewBtn}
            onClick={(e) => {
              e.preventDefault(); // Mencegah reload halaman
              onAddRentalClick(); // Panggil fungsi untuk mengubah konten
            }}>
            <i className="fas fa-plus"> </i> Add New
          </a>
          <table>
            <thead>
              <tr>
                <th>Vehicle images</th>
                <th>vehicle Name</th>
                <th>Price</th>
                <th>Type Vehicle</th>
                <th>View</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img alt="Porsche GT4-RS" height="50" src="aset\image porsye.jpeg" width="50" />
                </td>
                <td>Porsche GT4-RS</td>
                <td>120.000 IDR/days</td>
                <td>car</td>
                <td className={styles.actions}>
                  <i className="fas fa-eye"> </i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-edit" onClick={handleUpdate}></i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-trash"> </i>
                </td>
              </tr>
              <tr>
                <td>
                  <img alt="Kawasaki ZX-10r" height="50" src="aset\kawasaki.jpeg" width="50" />
                </td>
                <td>Kawasaki ZX-10r</td>
                <td>120.000 IDR/days</td>
                <td>Motorcycle</td>
                <td className={styles.actions}>
                  <i className="fas fa-eye"> </i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-edit" onClick={handleUpdate}></i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-trash"> </i>
                </td>
              </tr>
              <tr>
                <td>
                  <img alt="R1m" height="50" src="aset\rim.jpeg" width="50" />
                </td>
                <td>R1m</td>
                <td>120.000 IDR/days</td>
                <td>Motorcycle</td>
                <td className={styles.actions}>
                  <i className="fas fa-eye"> </i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-edit" onClick={handleUpdate}></i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-trash"> </i>
                </td>
              </tr>
              <tr>
                <td>
                  <img alt="Toyota Innova" height="50" src="aset\toyota.jpeg" width="50" />
                </td>
                <td>Toyota Innova</td>
                <td>120.000 IDR/days</td>
                <td>car</td>
                <td className={styles.actions}>
                  <i className="fas fa-eye"> </i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-edit" onClick={handleUpdate}></i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-trash"> </i>
                </td>
              </tr>
              <tr>
                <td>
                  <img alt="Toyota Gr-Corolla" height="50" src="aset\toyota gr.jpeg" width="50" />
                </td>
                <td>Toyota Gr-Corolla</td>
                <td>120.000 IDR/days</td>
                <td>car</td>
                <td className={styles.actions}>
                  <i className="fas fa-eye"> </i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-edit" onClick={handleUpdate}></i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-trash"> </i>
                </td>
              </tr>
              <tr>
                <td>
                  <img alt="M3 Touring" height="50" src="aset\touring.jpeg" width="50" />
                </td>
                <td>M3 Touring</td>
                <td>120.000 IDR/days</td>
                <td>car</td>
                <td className={styles.actions}>
                  <i className="fas fa-eye"> </i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-edit" onClick={handleUpdate}></i>
                </td>
                <td className={styles.actions}>
                  <i className="fas fa-trash"> </i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Rental;
