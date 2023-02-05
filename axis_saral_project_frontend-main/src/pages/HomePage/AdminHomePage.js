
import ImageSlider from "./ImageSlider";
import AdminLogin from "../LoginPages/AdminLogin";

const AdminHomePage = () => {
  const slides = [
    { url: "https://i.ytimg.com/vi/Q86txrxs1nU/maxresdefault.jpg" },
    { url: "https://pbs.twimg.com/media/FIWN_zJVUAEuiOr.jpg" },
    { url: "https://i.ytimg.com/vi/Tf76e0HaKfw/maxresdefault.jpg" },
    {
      url: "https://www.axisbank.com/images/default-source/default-album/5-deciding-factors.jpg",
    },
  ];

  const adminContainerStyles = {
    width: "1000px",
    height: "500px",
    marginTop: "5rem",
    align: "centre",
  };

  const AdminPageContainer={
    position: "relative",
    display: "grid",
    gridTemplateColumns: "3fr 1fr",
    gridAutoRows: "60px",
    gridGap: "20px"
  }

  return (
    <div style={AdminPageContainer}>
      <div style={adminContainerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <AdminLogin />
    </div>
  );
};

export default AdminHomePage;
