import { useNavigate } from 'react-router-dom';
import Restaurant from '../asset/Restaurant.jpg';
import BookingForm from '../component/BookingForm';
import './Booking.css';

const Booking = () => {
  const navigate = useNavigate();

  return (
    <main className="booking">
      <h1>Booking</h1>
      <section>
        <img
          src={Restaurant}
          alt="Our outdoor ambience"
          style={{ borderRadius: '8px', width: '65%' }}
        />
      </section>
      <section>
        <BookingForm navigate={navigate} />
      </section>
    </main>
  );
};

export default Booking;
