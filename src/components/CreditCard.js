function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  let cardImg = '';
  if (type === 'Visa') {
    cardImg =
      'https://res.cloudinary.com/dtiihknqe/image/upload/v1668513955/visa_akrvcn.png';
  } else if (type === 'Master Card') {
    cardImg =
      'https://res.cloudinary.com/dtiihknqe/image/upload/v1668514081/master-card_e0cwem.svg';
  }
  const hash = '************';
  const protectedNumber = hash + number.slice(-4);
  const cardStyle = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
    display: 'flex',
    flexDirection: 'column',
    width: '28vw',
    height: '15vh',
    padding: '5px',
    margin: '5px',
    borderRadius: '6px',
  };
  const year = expirationYear.toString();
  const expYear = year.slice(-2);
  const expirationDate = `0${expirationMonth}/${expYear}`;
  return (
    <div style={cardStyle}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <img
          src={cardImg}
          alt="cardBrand"
          style={{ width: '50px', height: '25px', padding: '5px' }}
        />
      </div>
      <h3 className="cardNumber">{protectedNumber}</h3>
      <div className="cardText">
        <p style={{ marginRight: '5vw' }}>Expires {expirationDate}</p>
        <p>{bank}</p>
      </div>
      <div className="owner">{owner}</div>
    </div>
  );
}

export default CreditCard;
