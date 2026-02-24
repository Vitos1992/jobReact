import './App.css'

export default function OurTeam() {
    return (
        <section className="container_our_team">
            <div>

                <h2 className="title_section">Our Team</h2>

                <ul className="list_team">
                    <li className="list">
                        <img src='photo11.jpg' alt={'фото'} />
                        <h3>Ivan Guerrero</h3>
                        <p>Team lead</p>
                    </li>
                    <li className="list">
                        <img src="" alt={'фото'} />
                        <h3>Oksana KUZ</h3>
                        <p>Frontend Developer</p>
                    </li>
                    <li className="list">
                        <img src="" alt={'фото'} />
                        <h3>Vitaly STOIKOV</h3>
                        <p>Frontend Developer</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}