import Title from "../components/Title.jsx";
import Counter from "../components/Counter";

import useCountdown from "../hooks/useCountdown.jsx";

const Countdown = () => {
  const [day, hour, minute, second] = useCountdown("Jan 1, 2025 00:00:00");

  return (
    <>
      <Title title="Contagem regressiva para 2025" />
      <div className="countdown-container">
        <Counter title="Dias" number={day} />
        <Counter title="Horas" number={hour} />
        <Counter title="Minutos" number={minute} />
        <Counter title="Segun dos" number={second} />
      </div>
    </>
  );
};

export default Countdown;
