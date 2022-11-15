function BoxColor({ r, g, b }) {
  const color = `${r}, ${g}, ${b}`;
  const boxStyle = {
    backgroundColor: `rgb(${color})`,
    height: '50px',
    border: '1px solid black',
    textAlign: 'center',
    margin: '5px',
  };
  return (
    <div style={boxStyle}>
      rgb({r}, {g}, {b})
    </div>
  );
}

export default BoxColor;
