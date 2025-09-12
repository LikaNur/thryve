export function Instructions() {
  return (
    <section
      aria-labelledby="instructions-heading"
      className="max-w-md text-sm text-left space-y-2"
    >
      <h2 id="instructions-heading" className="sr-only">
        Game Instructions
      </h2>
      <p>
        The 2-back game is a fun memory challenge that trains your focus and
        working memory. You’ll see a sequence of letters, one at a time.
      </p>
      <ul className="list-disc list-inside space-y-1">
        <li>
          If the current letter matches the one shown <b>2 steps back</b>, press
          the button.
        </li>
        <li>
          The game ends after <b>2 mistakes</b> or {" "}
          <b>when the sequence is complete</b>.
        </li>
        <li>Stay focused and aim for the best score!</li>
      </ul>
    </section>
  );
}
