        const tools = [
          { name: 'GitHub Copilot', purpose: 'Suggests code in real time and helps developers write software faster.' },
          { name: 'ChatGPT', purpose: 'Generates text, answers questions, and assists with research and communication tasks.' },
          { name: 'Notion AI', purpose: 'Automates note-taking, summarization, and document drafting within productivity workflows.' },
          { name: 'Grammarly', purpose: 'Improves grammar, tone, and clarity in writing.' },
          { name: 'Jasper AI', purpose: 'Generates marketing copy, blog posts, and ad content.' },
          { name: 'Perplexity AI', purpose: 'Provides fast, cited answers by combining search engine results with AI summaries.' },
        ]

        export default function ToolGrid() {
          return (
            <section className="card">
              <h2>AI Tools</h2>
              <div className="grid">
                {tools.map((tool, index) => (
                  <div className="card" key={index}>
                    <h3>{tool.name}</h3>
                    <p>{tool.purpose}</p>
                  </div>
                ))}
              </div>
            </section>
          )
        }
        