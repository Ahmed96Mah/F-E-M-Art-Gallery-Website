const Image = ({ id, src, alt }: { id: string; src: string; alt: string }) => {
  return <img id={id} src={src} alt={alt} />;
};

export default Image;
