const Card = ({ image, title, description }) => (
  <div class="w-full rounded shadow-lg">
    <img class="w-full" src={image} alt={title} />
    <div class="px-6 py-2">
      <div class="font-bold text-xl">{title}</div>
      <p class="text-gray-700 text-base">{description}</p>
    </div>
  </div>
);

export default Card;
