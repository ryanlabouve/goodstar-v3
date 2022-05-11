interface Props {
  title: string;
  description: string;
  backgroundImage: string;
  images: string[];
}
export default function Section({
  title,
  description,
  backgroundImage,
  images,
}: Props) {
  return (
    <div
      style={{
        backgroundImage: `url(/images/${backgroundImage})`,
      }}
    >
      {title}
      {description}
      {images.map((i) => {
        return (
          <div>
            <img src={i} />
          </div>
        );
      })}
    </div>
  );
}
