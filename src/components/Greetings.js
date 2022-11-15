function Greetings({ lang, children }) {
  return (
    <div className="box">
      {lang === 'en' && <p>Hello {children}</p>}
      {lang === 'de' && <p>Hallo {children}</p>}
      {lang === 'fr' && <p>Bonjour {children}</p>}
      {lang === 'es' && <p>Holla {children}</p>}
    </div>
  );
}

export default Greetings;
