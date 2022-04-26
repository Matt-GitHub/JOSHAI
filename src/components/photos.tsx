interface IPhotoProps {
  imgSource: string;
  earthDate: string;
}

export function SinglePhotos({ imgSource, earthDate }: IPhotoProps) {
  return (
    <div>
      <img style={{ width: "200px" }} src={imgSource} alt={earthDate} />;
    </div>
  );
}
