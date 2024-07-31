function Footer(){

    return(
        <footer>
            <p>
                &copy;
                {new Date().getFullYear()} {/*This Line Gives Year From In Built JavaScript Functions*/}
                Krishna-React-Web
            </p>
        </footer>
    );
}

export default Footer