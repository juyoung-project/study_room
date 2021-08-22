import "../assets/css/Animate.css";

export default function PageLoading() {
  return (
    <div id="container">
      <div id="dot"></div>
      <div className="step" id="s1"></div>
      <div className="step" id="s2"></div>
      <div className="step" id="s3"></div>
    </div>
  );
}
