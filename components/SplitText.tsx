// Deli naslov na reči (za efekat podizanja iz maske). Razmaci ostaju pravi tekst.
export default function SplitText({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <>
      {words.map((w, i) => (
        <span key={i}>
          <span className="w">
            <span className="wi" style={{ ["--i" as string]: i }}>{w}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
}
