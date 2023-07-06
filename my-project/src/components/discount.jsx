import PropTypes from "prop-types";
import Button from "./buttons";

const discount = ({ percentOff, image, imageDesc, product, oldPrice, newPrice }) => {
  return (
    <div className="relative kflex2 flex-col">
      <div className="absolute">
        <div className="w-24 h-24">
          <svg
            viewBox="0 0 94 95"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_1236)">
              <path
                d="M46.9765 93.4955C72.3145 93.4955 92.8549 72.9551 92.8549 47.6172C92.8549 22.2792 72.3145 1.73877 46.9765 1.73877C21.6386 1.73877 1.09814 22.2792 1.09814 47.6172C1.09814 72.9551 21.6386 93.4955 46.9765 93.4955Z"
                fill="#070707"
                stroke="url(#paint0_linear_1_1236)"
                strokeWidth="2.13388"
              />
              <text
                x="50%"
                y="35%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="30"
                fill="url(#paint0_linear_1_1236)"
                className="font-semibold font-spaceGrotesk"
              >
                {percentOff}
              </text>
              <text
                x="50%"
                y="65%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="30"
                fill="url(#paint0_linear_1_1236)"
                className="font-semibold font-spaceGrotesk"
              >
                OFF
              </text>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1_1236"
                x1="7.20757"
                y1="0.671844"
                x2="112.871"
                y2="77.7437"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#EB48F7" />
                <stop offset="0.583333" stopColor="#F8D481" />
                <stop offset="0.942708" stopColor="#CCFF02" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1_1236"
                x1="23.853"
                y1="23.1665"
                x2="84.1975"
                y2="69.6277"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#EB48F7" />
                <stop offset="0.583333" stopColor="#F8D481" />
                <stop offset="0.942708" stopColor="#CCFF02" />
              </linearGradient>
              <clipPath id="clip0_1_1236">
                <rect
                  width="93.8906"
                  height="93.8906"
                  fill="white"
                  transform="translate(0.03125 0.671875)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div>
        <img src={image} alt={imageDesc} />
      </div>

      <h3>{product} </h3>

      <div>
        <span>{oldPrice} </span>
        <span>{newPrice} </span>
      </div>

      <Button text="SHOP NOW" />
    </div>
  );
};

discount.propTypes = {
  percentOff: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired,
  oldPrice: PropTypes.string.isRequired,
  newPrice: PropTypes.string.isRequired,
};

export default discount;
