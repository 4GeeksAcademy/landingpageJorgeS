export default function Card({ title, text, img }) {
  return (
    <div className="card">
      <img 
        src={img} 
        className="card-img-top" 
        alt="Placeholder"
      />

      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {text}
        </p>
        <a href="#" className="btn btn-primary">Find out more!</a>
      </div>
    </div>
  );
}