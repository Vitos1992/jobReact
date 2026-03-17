import '../App.css'
import photo10 from '../assets/photo10.jpg'
import photo11 from '../assets/photo11.jpg'
import photo12 from '../assets/photo12.jpg'

export default function OurTeam() {
    return (
        <section className="container_our_team">
            <div>
                <h2 className="title_section">Our Team</h2>

                <ul className="list_team">
                    <li className="list foons_team">
                        <div className='flip_foons'>
                            <div className='flip_foons_inner'>
                                <div className='flip_foons_front'>
                                    <img src={photo11} alt={'Ivan Guerrero, Team Lead'} className='img_team' />
                                    <h3>Ivan Guerrero</h3>
                                    <p>Team lead</p>
                                </div>
                                <div className='flip_foons_black'>
                                    <div className='flip_foons_text'>
                                        <h3 className='flip_black_title'>Ivan</h3>
                                    </div>
                                    <h3 className='flip_black_title'>Team Lead</h3>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list foons_team">
                        <div className='flip_foons'>
                            <div className='flip_foons_inner'>
                                <div className='flip_foons_front'>
                                    <img src={photo10} alt={'Oksana KUZ, Frontend Developer'} className='img_team' />
                                    <h3>Oksana KUZ</h3>
                                    <p>Frontend Developer</p>
                                </div>
                                <div className='flip_foons_black'>
                                    <div className='flip_foons_text'>
                                        <h3 className='flip_black_title'>Ivan</h3>
                                    </div>
                                    <h3 className='flip_black_title'>Team Lead</h3>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="list foons_team">
                        <div className='flip_foons'>
                            <div className='flip_foons_inner'>
                                <div className='flip_foons_front'>
                                    <img src={photo12} alt={'Vitaly STOIKOV, Frontend Developer'} className='img_team' />
                                    <div className='flip_item_box'>
                                        <h3>Vitaly STOIKOV</h3>
                                        <p>Frontend Developer</p>
                                    </div>
                                </div>
                                <div className='flip_foons_black'>
                                    <div className='flip_foons_text'>
                                        <h3 className='flip_black_title'>Vitaly STOIKOV</h3>
                                    </div>
                                    <h3 className='flip_black_title'>Frontend Developer</h3>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}