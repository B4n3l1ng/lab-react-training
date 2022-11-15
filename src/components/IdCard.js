function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  const birthString = birth.toString();
  const heightMeters =
    height.toString().substring(0, 1) +
    '.' +
    height.toString().substring(1, height.length);
  return (
    <div className="idCard">
      <div className="idPicture">
        <img src={picture} alt="" />
      </div>
      <div className="idText">
        <p>
          <b>First name:</b> {firstName}
        </p>
        <p>
          <b>Last name:</b> {lastName}
        </p>
        <p>
          <b>Gender:</b> {gender}
        </p>
        <p>
          <b>Height:</b> {heightMeters}m
        </p>
        <p>
          <b>Birth:</b> {birthString.slice(0, 15)}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
