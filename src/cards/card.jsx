import { Card } from "flowbite-react";
import imageExample from "../assets/esteban.jpeg"
import PropTypes from 'prop-types';


function CardDonation({ text, title, team, price}) {
  return (
    <div>
      <Card className="max-w-sm bg-gray-900 border-gray-800">
        <a href="">
          <img src={imageExample} alt="imagenExample" className="rounded-lg" />
        </a>

        <a href="#">
          <span className="mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
            {team}
          </span>
          <h5 className="text-2xl font-bold tracking-tight text-white dark:text-white py-3">
            {title}
          </h5>
          <h5 className="text-base font-normal tracking-tight text-gray-300 dark:text-white py-2">
            {text}
          </h5>
        </a>
        <span className="text-3xl font-bold text-white dark:text-white">
          {price}
        </span>
        <a href="#">
          <span className=" mr-2 rounded bg-green-100 px-2.5 text-xs font-semibold text-gray-700 dark:bg-cyan-200 dark:text-gray-700 py-1">
            Total recaudado
          </span>
        </a>
      </Card>
    </div>
  );
}

CardDonation.propTypes = {
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  };
  

export { CardDonation };