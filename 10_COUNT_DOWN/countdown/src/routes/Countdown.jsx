import { useContext } from "react";

import Title from "../components/Title.jsx";
import Counter from "../components/Counter";
import { Navigate } from "react-router-dom";

import { CountdownContext } from "../context/CountdownContext.jsx";

import useCountdown from "../hooks/useCountdown.jsx";

const Countdown = () => {
  const { event } = useContext(CountdownContext);

  if (!event) return <Navigate to="/" />;

  const eventTitle = event.title;

  const eventColor = event.color;

  const [day, hour, minute, second] = useCountdown(event.date);

  return (
    <>
      <Title title={eventTitle} eventColor={eventColor} />
      <div className="countdown-container">
        <Counter title="Dias" number={day} eventColor={eventColor} />
        <Counter title="Horas" number={hour} eventColor={eventColor} />
        <Counter title="Minutos" number={minute} eventColor={eventColor} />
        <Counter title="Segun dos" number={second} eventColor={eventColor} />
      </div>
    </>
  );
};

export default Countdown;
