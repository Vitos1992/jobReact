//import { motion } from 'framer-motion';

export default function WayToTech({ img, title, description }) {
  return (
    <li className='list_box'>
      <img className="img_tech" src={img} alt={title} loading="lazy" />
      <h3 className='title_tech'>{title}</h3>
      <p className='text'>{description}</p>
    </li>
  );
}

{/* <motion.div
      className="list_box"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.07 }}
    >
      <div className="list_box_img">
        <img
          className="img_tech"
          src={img}
          alt={title}
          loading="lazy"
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>

      <h3 className="title_tech">{title}</h3>
      <p className="text">{description}</p>
    </motion.div> */}