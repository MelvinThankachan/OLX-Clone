type PlaceholderImageProps = {
  size: number;
  className: string;
};

const PlaceholderImage = ({ size, className }: PlaceholderImageProps) => {
  return (
    <img
      src={`https://via.placeholder.com/${size.toString()}`}
      alt="placeholder image"
      className={className}
    />
  );  
};

export default PlaceholderImage;
