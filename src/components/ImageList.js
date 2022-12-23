import { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "helpers/axios";

const ImagesList = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/v2/list?", {
        params: { page, limit: "10" },
      })
      .then((data) => {
        setImages((prevImages) => [...prevImages, ...data]);
        setLoading(false);
      });
  }, [page]);

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div className="list">
        {images.map(({ id, download_url: downloadUrl }) => (
          <div className="list__img" key={id}>
            <img src={downloadUrl} alt="picsum" />
          </div>
        ))}
      </div>
      {isLoading ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Button variant="primary" onClick={handleClick} className="list_btn">
          show more
        </Button>
      )}
    </>
  );
};

export default ImagesList;