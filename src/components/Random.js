function Random({ min, max }) {
  const random = Math.floor(Math.random() * (max - min) + min);
  return (
    <p className="box">
      Random value between {min} and {max} {'=>'} {random}
    </p>
  );
}

export default Random;
