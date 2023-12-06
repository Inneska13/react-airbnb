import "./index.css";

export default function Contact({
  name,
  image,
  response_rate,
  response_time,
  info,
  phone,
}) {
  return (
    <div className="title">
      <h5 className="title__text">
        <img
          src={"https://picsum.photos/80/80"}
          alt="Wi-fi"
          className="imgContact"
        />
        Господар - {name}
      </h5>
      <div className="title__sub-block">
        <span className="title__sub-value">{phone}</span>
        <span className="title__sub-value">{response_time}Протягом години</span>
        <span className="title__sub-value">
          {response_rate}% відсотків швидкості відгуку
        </span>
      </div>
      <p className="description__text">{info}</p>
    </div>
  );
}
