        import Header from './components/Header'
        import PromptExamples from './components/PromptExamples'
        import Tips from './components/Tips'
        import Footer from './components/Footer'

        export default function App() {
          return (
            <div className="app-shell">
              <Header />
              <PromptExamples />
              <Tips />
              <section className="card">
                <h2>Roles AI can play</h2>
                <ul>
                  <li>Editor - helps you draft and polish professional writing</li>
                  <li>Coding partner - helps you create cleaner and more manageable code</li>
                  <li>Organizer - helps you manage large amounts of data and break it into smaller pieces</li>
                </ul>
              </section>
              <section className='card'>
                <h2>Warnings about AI Usage</h2>
                <ul>
                  <li>AI can 'hallucinate' and confidently give you wrong information.</li>
                  <li>AI should not do the work for you, but help refine your work.</li>
                  <li>Always double check and test the information AI provides you!</li>
                </ul>
              </section>
              <Footer />
            </div>
          )
        }
        