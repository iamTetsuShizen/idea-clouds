import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="sky">

        </div>
        <div className="form-container">
            <form>
                <input type="text"></input>
                <button>Become a Cloud</button>
            </form>
        </div>
      </main>

      <footer>
        <small>All rights reserved. Adrian Peso Serrano</small>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .sky {
          width: 100vw;
          height: calc(100vh - 75px);
          background-color: #90e0ef;
        }

        .form-container {
          height: 50px;
        }

        form {
          height: 100%;
          width: 100vw;
          display: flex;
          justify-content: center;
        }

        input {
          width: 95vw;
        }

        button {
          background-color: 
        }

        footer {
          width: 100%;
          height: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
