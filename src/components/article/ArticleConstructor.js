function ArticleConstructor({
  chapterID,
  title,
  subtitile,
  text,
  hasIllustration = false,
  IllustrationComponent,
}) {
  return (
    <div id={chapterID}>
      <div className={`container mx-auto p-4`}>
        <h2 className="text-4xl mb-4">{title}</h2>
        {subtitile ? <h3 className="text-2xl mb-4">{subtitile}</h3> : null}
        {text.map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
      {hasIllustration && IllustrationComponent()}
    </div>
  );
}

export default ArticleConstructor;
