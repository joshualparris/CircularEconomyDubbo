export function MarkdownLite({ text }) {
  const lines=String(text||"").split("\n");
  return <article className="markdown-lite">
    {lines.map((raw,i)=>{
      const line=raw.trimEnd();
      if(!line.trim()) return <div className="md-space" key={i}/>;
      if(line.startsWith("### ")) return <h3 key={i}>{line.slice(4)}</h3>;
      if(line.startsWith("## ")) return <h2 key={i}>{line.slice(3)}</h2>;
      if(line.startsWith("# ")) return <h1 key={i}>{line.slice(2)}</h1>;
      if(line.startsWith("> ")) return <blockquote key={i}>{line.slice(2)}</blockquote>;
      if(line.startsWith("- ")) return <div className="md-bullet" key={i}>• <span>{line.slice(2)}</span></div>;
      if(/^\d+\.\s/.test(line)) return <div className="md-bullet" key={i}>{line.match(/^\d+\./)[0]} <span>{line.replace(/^\d+\.\s/,"")}</span></div>;
      if(line==="---") return <hr key={i}/>;
      return <p key={i}>{line}</p>;
    })}
  </article>;
}
