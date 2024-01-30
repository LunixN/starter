import "./index.css";
function SingleColor({ index, color }) {
  const { hex, weight } = color;
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
    >
      <p className='color-value'>{weight}%</p>
      <p className='percent-value'>#{hex}</p>
    </article>
  );
}

export default SingleColor;
