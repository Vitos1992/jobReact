export default function WayToTech({ title, description }) {
  console.log(title);
  return (
    <li className='list_box'>
      <h3 className='title_tech'>{title}</h3>
      <p className='text'>{description}</p>
    </li>
  );
}