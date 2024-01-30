import { toast } from "react-toastify";
import "./index.css";
function SingleColor({ index, color }) {
  const { hex, weight } = color;
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color saved to clipboard");
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      toast.error("Clipboard access disabled");
    }
  };
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className='color-value'>{weight}%</p>
      <p className='percent-value'>#{hex}</p>
    </article>
  );
}

export default SingleColor;
