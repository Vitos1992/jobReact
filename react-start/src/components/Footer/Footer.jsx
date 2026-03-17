import "../Footer/Footer.css";

export default function Footer() {
    return (
        <footer className="footer_box">
            <div className="box_item">
                <div className="box_logo">
                    <a href="#" className="title_logo_footer">
                        WEB
                        <span className="title_studio_footer">STUDIO</span>
                    </a>
                    <p className="footer_text">
                        Increase the flow of customers and sales for your business with
                        digital marketing & growth solutions.
                    </p>
                </div>
                <div className="box_media">
                    <h3 className="title_media">Media</h3>

                    <ul className="list">
                        <li className="list_media">
                            <a href="">
                                <svg>
                                    <use></use>
                                </svg>
                            </a>
                        </li>
                        <li className="list_media">
                            <a href="">
                                <svg>
                                    <use></use>
                                </svg>
                            </a>
                        </li>
                        <li className="list_media">
                            <a href="">
                                <svg>
                                    <use></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
