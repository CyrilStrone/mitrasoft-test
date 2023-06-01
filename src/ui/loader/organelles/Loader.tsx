import { Spinner } from "react-bootstrap";

export const Loader = () => (
  <Spinner animation="border" role="status">
    <span className="visually-hidden">Loading...</span>
  </Spinner>
);