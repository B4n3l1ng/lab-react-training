function Rating({ children }) {
  const rating = Math.round(children);
  console.log(rating);
  return (
    <>
      {rating === 0 && <div>☆☆☆☆☆</div>}
      {rating === 1 && <div>★☆☆☆☆</div>}
      {rating === 2 && <div>★★☆☆☆</div>}
      {rating === 3 && <div>★★★☆☆</div>}
      {rating === 4 && <div>★★★★☆</div>}
      {rating === 5 && <div>★★★★★</div>}
    </>
  );
}

export default Rating;
