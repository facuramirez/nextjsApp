import Navbar from "./navbar";

export default function Layout({children}){
    return(
        <div>
            <Navbar />
            <main>
                {children}
            </main>
            <style jsx>
                {`
                    div {
                        min-height: 100vh;
                        border: 3px solid green;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }
                    main {
                        flex-grow: 1;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                 
                `}
            </style>

            <style jsx global>
                {`
                    html,
                    body {
                        padding: 0;
                        margin: 0;
                    }
                    * {
                        box-sizing: border-box;
                    }
                `}
            </style>
        </div>
    )
}