import "./styles.css";

export const Loader = ({ isOpen }) => {
  return isOpen ? (
    <div className="loader-overlay">
      <div className="loader"></div>
    </div>
  ) : null;
};
