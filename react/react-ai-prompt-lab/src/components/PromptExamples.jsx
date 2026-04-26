        const prompts = [
          'Help me rewrite this paragraph to sound more professional.',
          'Create a 5-step checklist for planning a class presentation.',
          'Explain JavaScript functions to a high schooler using simple language and include a visual example.'
        ]

        export default function PromptExamples() {
          return (
            <section className="card">
              <h2>Prompt Examples</h2>
              <ul>
                {prompts.map((prompt, index) => (
                  <li key={index}>{prompt}</li>
                ))}
              </ul>
            </section>
          )
        }
        