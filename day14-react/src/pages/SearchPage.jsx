
const cards = [
    {
        title:"Invitation",
        text:"you are invited",
    },
    {
        title:"Notice",
        text:"Please read this notice",
    }
]

const Card = ({title, text}) => {
    return (
        <div>
            <h3>{title}</h3>
            <label>{text}</label>
        </div>
    )
}

const SearchPage = () => {
    return (
        <div>
            <header>Logo</header>
            <main>
                <h2>Search Here</h2>
                <div>
                    {cards.map(e => (
                        <Card
                          key={e.title}
                          title = {e.title}
                          text = {e.text}
                        />
                    ))}
                </div>
                <input type="text" />
                <button>Enter</button>
            </main>
            <footer>&copy; CopyRight @Logo</footer>
        </div>
    )
}

export default SearchPage;