import "./Resource.sass";

export default function Resource() {
  return (
    <div className="resource">
      {/* Title */}
      <h1>Sierra de Madera</h1>

      {/* Description */}
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        similique consectetur provident quod non veritatis sit laboriosam!
        Voluptatum odio iusto aperiam natus nostrum esse, aliquam sequi quo
        magni dolorem dolorum.
      </p>

      {/*  Video */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/oIiosM2WyH8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
