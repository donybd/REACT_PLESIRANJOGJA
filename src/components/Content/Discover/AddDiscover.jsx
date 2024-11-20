import styles from '../Hotel/AddHotel.module.css';

const AddDiscover = ({backToDiscover, props}) => {
  const handleCancel = () => {
    // Kembali ke halaman Users saat tombol Cancel diklik
    backToDiscover();
  };

  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.formSection}>
          <h3>Add {props}</h3>
          <label htmlFor="room-category">Name {props}</label>
          <input id="room-category" type="text" />
          <label htmlFor="room-description"> Description {props}</label>
          <textarea name="room_description" id="room_description"></textarea>
          <div className="editor">
            <div className="editor-toolbar">
              <button>
                <i className="fas fa-bold"> </i>
              </button>
              <button>
                <i className="fas fa-italic"> </i>
              </button>
              <button>
                <i className="fas fa-underline"> </i>
              </button>
              <button>
                <i className="fas fa-list-ul"> </i>
              </button>
              <button>
                <i className="fas fa-list-ol"> </i>
              </button>
              <button>
                <i className="fas fa-align-left"> </i>
              </button>
              <button>
                <i className="fas fa-align-center"> </i>
              </button>
              <button>
                <i className="fas fa-align-right"> </i>
              </button>
              <button>
                <i className="fas fa-align-justify"> </i>
              </button>
            </div>
          </div>
          <label htmlFor="room-image"> Upload Room Image Here </label>
          <div className={styles.uploadBox}>
            <i className="fas fa-cloud-upload-alt"> </i>
            <p>Choose a file or drag it here</p>
          </div>
          <div className={styles.formActions}>
            <button className={styles.submitBtn}>Submit</button>
            <button className={styles.cancelBtn} onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDiscover;
