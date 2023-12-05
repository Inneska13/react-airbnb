import "./index.css";

export default function Heading({ children, border }) {
  return (
    <spam className={`heading ${border ? "heading--border" : ""}`}>
      {children}
    </spam>
  );
}
